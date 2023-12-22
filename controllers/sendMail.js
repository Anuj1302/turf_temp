const nodemailer = require("nodemailer");
const arr = require("./app.js");


const sendMail = async(req,res)=>{
    // res.send("I am sending mail")

    // if (!to || !subject || !message || !smtpDetails) return res.status(400).send('input cannot be empty')
    // let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "587",
    secure:false,
    auth: {
        user: 'apj752003@gmail.com',
        pass: 'lzwfmkgoeiquvroy'
    }
  });

   let info = await transporter.sendMail({
    from: "apj752003@gmail.com", // sender address
    to: "jgneha828@gmail.com", // list of receivers
    subject: "Turf Booking Website", // Subject line
    text: "Hi! This is Message.", // plain text body
    html: "<html><title>Ticket</title><body><h1>{arr[0].turfName}</h1></body></html>", // html body
  });

  console.log("Message sent is %s",info.messageId);
  res.json(info);

};

module.exports = sendMail;