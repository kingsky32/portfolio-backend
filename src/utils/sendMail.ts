import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import { MailOptions } from 'nodemailer/lib/json-transport';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = () => {
  const options = {
    service: process.env.MAIL_SERVICE,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASS,
    },
  };
  return nodemailer.createTransport(smtpTransport(options));
};

const sendMail = (mailOptions: MailOptions): Promise<SMTPTransport.SentMessageInfo> => {
  return new Promise((resolve, reject) => {
    return transporter().sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      }
      resolve(info);
    });
  });
};

export default sendMail;
