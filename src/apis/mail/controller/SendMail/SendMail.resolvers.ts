import { MailOptions } from 'nodemailer/lib/json-transport';
import sendMail from '../../../../utils/sendMail';
import { SendMailPayloadProps } from '../../types/mail.d';

export default {
  Mutation: {
    SendMail: async (_, args): Promise<SendMailPayloadProps> => {
      try {
        const mailOptions: MailOptions = {
          ...args,
        };
        const data = await sendMail(mailOptions);
        if (!data) {
          throw Error('Not Found');
        }
        return {
          result: true,
          error: null,
        };
      } catch (error) {
        return {
          result: null,
          error,
        };
      }
    },
  },
};
