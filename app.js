const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const cors = require("cors");
const app = express();

require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID, // ClientID
  process.env.CLIENT_SECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
       type: "OAuth2",
       user: "jamieson.reinhard2@gmail.com", 
       clientId: process.env.CLIENT_ID,
       clientSecret: process.env.CLIENT_SECRET,
       refreshToken: process.env.REFRESH_TOKEN,
       accessToken: accessToken
  }
});



app.post("/send", (req, res, next) => {
  // var name = req.body.fullName
  // var email = req.body.email
  // var message = req.body.message
  const { fullName, email, message } = req.body;
  var content = `name: ${fullName} \n email: ${email} \n message: ${message} `;

  const mailOptions = {
    from: fullName,
    to: 'jamieson.reinhard2@gmail.com',
    subject: 'Message from JMR Portfolio Site',
    text: content,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
});

});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
