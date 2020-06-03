const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const publicPath = path.join(__dirname, "/client/build");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(publicPath));

app.get("*", function (req, res) {
  res.sendFile("index.html", { root: __dirname }, function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

var transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: process.env.EMAIL,
      clientId: "41654969559-gtjg75l12o96k13qg67ub8c3ejv662h1.apps.googleusercontent.com",
      clientSecret: "xzoKpw6MQYpdJ0bUV4Lo5_vH",
      refreshToken: "1//041cI2nAVr6raCgYIARAAGAQSNwF-L9IrVKQv-espailWlGs_VnsmX6ACDVfvwtVDXbQJkl0eVl4gZVeKL_Vlq7KCeJtlO81Fyvs",
      accessToken: 'ya29.a0AfH6SMAYT2TCMJbB8LzgcDbOIGjk7LCkW0wOOcAIzOEly3sIR84rFhv8m1pAXkNFNwCRqN8SGXhRgW2ObLadTENq0i94q0CvPJLjBERSh8Ugnx5EvzVozLn5cDjobN8OYHRVqbix8H8wYfprfddlzB1vHmFk8ajBB1o'  
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/send", (req, res, next) => {
  // var name = req.body.fullName
  // var email = req.body.email
  // var message = req.body.message
  const { fullName, email, message } = req.body;
  var content = `name: ${fullName} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: fullName,
    to: 'jamieson.reinhard2@gmail.com',
    subject: 'Message from JMR Portfolio Site',
    text: content,
    auth: {
        user: process.env.EMAIL,
        refreshToken: '1//04ntf9ZXulr1cCgYIARAAGAQSNwF-L9IrlM1YPMufE2yKJkStw_vxit7fpCjaW-Yf5jVsA0MPSss8HYxxN4jf7EWVglj_sZGwuEE',
        accessToken: 'ya29.a0AfH6SMAJt0BCVw4BDYPsbLzugXmFpNzbMYSLZvYXNOijPDayHy8Wndl3buS2C0TNCkJo7ANmnmhVgv3DebGWM72Mw9gJN1Cd8pfHr1nozFpdQdAp0bgYhJ1SBSDJr5T0_mlvHV4B04EH0nrVCfxmWl8a0m3muZZeOJM',
    }
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(500).json({
        msg: 'fail'
      })
    } else {
      
      res.json({
        msg: 'success'
      })
    }
  })

});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
