

const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nijhum0891@gmail.com',
        pass: '' //add your app password here
    }
})


const sendEmail = async (to, subject, text) => {
    try {
        const mailOptions = {
            from: 'nijhum0891@gmail.com',
            to,
            subject,
            text
        }
        const info = await transporter.sendMail(mailOptions)
        console.log('Email sent: ', info.response);
    }
    catch (err) {
        console.log("Error sendng Email ", err)
    };
}

sendEmail('dayofad642@lineacr.com', 'Hello, You have due books', '324253')
