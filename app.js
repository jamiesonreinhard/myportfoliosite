const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('jmr-portfolio/public'));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'jmr-portfolio', 'public', 'index.html'));
  });
}

var transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: 'jamieson.reinhard2@gmail.com',
        pass: 'R3!nhard1'
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
        
    } else {
        console.log('Server is ready to take messages');
        
    }
});

app.post('/send', (req, res, next) => {
    var name = req.body.fullName
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    var mail = {
      from: name,
      to: 'jamieson.reinhard2@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
