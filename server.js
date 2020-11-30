require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/opatile-kelobang'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/opatile-kelobang/index.html'));
});
app.listen(process.env.PORT || 8080);

const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: '',
    text: ''
};

transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('Unable to send');
    } else {
        console.log('Email sent');
    }
});

