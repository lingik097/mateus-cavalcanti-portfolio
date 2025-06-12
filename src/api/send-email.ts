
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'contact.mateuscavalcanti.com', // Replace with your verified domain
      to: ['mateusolivac.work@email.com'],
      subject: `Portfolio Contact: ${formData.subject}`,
      react: EmailTemplate({ firstName: formData.name }),
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error('Failed to send email');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
