const app = require('express')()
const nodemailer = require('nodemailer')
require('dotenv').config()
const port = 3000
const env = process.env

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: env.MAIL_USERNAME,
		pass: env.MAIL_PASSWORD,
		clientId: env.OAUTH_CLIENTID,
		clientSecret: env.OAUTH_CLIENT_SECRET,
		refreshToken: env.OAUTH_REFRESH_TOKEN
	}
})

// emailing myself
let mailOptions = {
	from: env.MAIL_USERNAME,
	to: env.MAIL_USERNAME,
	subject: 'Nodemailer Project',
	text: 'Hi from your nodemailer project'
  };
  
  transporter.sendMail(mailOptions, (err,data)=>{
	if(err){
		console.log(err)
	}
	if(data)  {
		console.log(data)
	}
  })

app.listen(port, ()=> {
	console.clear()
	console.log(`nodemailer is listenening at http://localhost:${port}`)
})
