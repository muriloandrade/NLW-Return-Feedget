import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cd166600b587eb",
    pass: "f5037832e8dc69",
  },
});

export class NodemailerMailAdapter implements MailAdapter {


  async sendMail({subject, body}: SendMailData) {

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Murilo Branquinho <muriloap.info@gmail.com>',
      subject,
      html: body,
    });
  };
}