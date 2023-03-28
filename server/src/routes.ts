import express from 'express';
import nodemailer from 'nodemailer';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1c126bff47e6fe",
    pass: "a30fcb952e05ff"
  }
});


routes.post('/feedbacks', async (req,res) => {
  const { type, comment, screenshot } = req.body;
  
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  )

/*
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
  */
  return res.status(201).json({ data: feedback });
  })
  