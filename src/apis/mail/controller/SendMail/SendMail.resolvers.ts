import { MailOptions } from 'nodemailer/lib/json-transport';
import sendMail from '../../../../utils/sendMail';

export default {
  Mutation: {
    SendMail: async (_, body) => {
      try {
        const mailOptions: MailOptions = {
          ...body,
        };
        const data = await sendMail(mailOptions);
        if (data) {
          return true;
        }
        return false;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
