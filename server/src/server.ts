import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1c126bff47e6fe",
    pass: "a30fcb952e05ff"
  }
});

app.post('/feedbacks', async (req,res) => {
const { type, comment, screenshot } = req.body;

const feedback = await prisma.feedback.create({
    data: {
      type: type,
      comment: comment,
      screenshot: screenshot,
    }
  });

  await transport.sendMail({
    from: 'Team Feedback Widget <hello@feedget.com>',
    to: 'Xenia Alex <xeniaalex2@gmail.com>',
    subject: 'new feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px;">`,
      `<p>Type of feedback : ${type}</p>`,
      `<p>Comment :  ${comment}</p>`,
      `</div>`
    ].join('\n')

  });

return res.status(201).json({ data: feedback });
})

app.listen(3333, () => {
  console.log('http server running');
})