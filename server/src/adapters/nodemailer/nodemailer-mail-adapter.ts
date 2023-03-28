import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1c126bff47e6fe",
    pass: "a30fcb952e05ff"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Team Feedback Widget <hello@feedget.com>',
      to: 'Xenia Alex <xeniaalex2@gmail.com>',
      subject,
      html: body,
  
    });
  }
}