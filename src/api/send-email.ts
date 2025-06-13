
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  console.log('Attempting to send email with API key:', import.meta.env.VITE_RESEND_API_KEY ? 'Key present' : 'Key missing');
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Using Resend's test domain
      to: ['mateusolivac.work@email.com'],
      subject: `Portfolio Contact: ${formData.subject}`,
      react: EmailTemplate({
        firstName: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
