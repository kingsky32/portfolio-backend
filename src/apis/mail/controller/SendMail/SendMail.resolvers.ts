import { MailOptions } from 'nodemailer/lib/json-transport';
import sendMail from '../../../../utils/sendMail';

export default {
  Mutation: {
    SendMail: async (_, args): Promise<boolean> => {
      try {
        const mailOptions: MailOptions = {
          ...args,
        };
        const data = await sendMail(mailOptions);
        if (!data) {
          throw Error('Not Found');
        }
        return true;
      } catch (error) {
        throw error;
      }
    },
  },
};
