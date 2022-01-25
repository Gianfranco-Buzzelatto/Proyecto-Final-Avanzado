const nodemailer = require('nodemailer');

const sendConfirmacion = async ({mail, asunto, cuerpo }) => {
    try {
        const transporter = nodemailer.createTransport({
            service : process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });
        const info = {
            to : mail,
            subject : asunto,
            html: cuerpo
        };
        const message = await transporter.sendMail(info);
        return message;
    }catch(e) {
        console.log(e);
    }
}



module.exports = {sendConfirmacion};