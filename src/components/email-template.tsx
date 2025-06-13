
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  subject,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
      New Contact Form Submission
    </h1>
    <div style={{ margin: '20px 0' }}>
      <p><strong>Name:</strong> {firstName}</p>
      {email && <p><strong>Email:</strong> {email}</p>}
      {subject && <p><strong>Subject:</strong> {subject}</p>}
      {message && (
        <div>
          <p><strong>Message:</strong></p>
          <div style={{ 
            background: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '5px',
            whiteSpace: 'pre-wrap'
          }}>
            {message}
          </div>
        </div>
      )}
    </div>
    <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #eee' }} />
    <p style={{ color: '#666', fontSize: '14px' }}>
      This email was sent from your portfolio contact form.
    </p>
  </div>
);
