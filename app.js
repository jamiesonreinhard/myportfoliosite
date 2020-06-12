const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const cors = require("cors");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const oauth2Client = new OAuth2(
  "716876038413-2ardv48thf58javdjg6g3frhdeh3p3so.apps.googleusercontent.com", // ClientID
  "uz2ufJa3y2_XynGYdXtg4hWC", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: "1//04hzHyvM5rwdHCgYIARAAGAQSNwF-L9Ir6aQgxgRgCEcESlkfGQw9XNYR7-Ec63Yvi2IIHO1azU5rE7x-lvIn_ZbgKWSk5uYJxX8"
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
       type: "OAuth2",
       user: "jamieson.reinhard2@gmail.com", 
       clientId: "716876038413-2ardv48thf58javdjg6g3frhdeh3p3so.apps.googleusercontent.com",
       clientSecret: "uz2ufJa3y2_XynGYdXtg4hWC",
       refreshToken: "1//04hzHyvM5rwdHCgYIARAAGAQSNwF-L9Ir6aQgxgRgCEcESlkfGQw9XNYR7-Ec63Yvi2IIHO1azU5rE7x-lvIn_ZbgKWSk5uYJxX8",
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
