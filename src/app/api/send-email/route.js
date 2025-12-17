import { Resend } from 'resend';

// Initialize Resend with your API key (use environment variable in production)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse the request body
    const { name, email, phone, subject, message, newsletter } = await request.json();
    
    // Build subject line based on form selection
    let subjectLine = 'NLMSF Contact Form: ';
    
    switch(subject) {
      case 'general':
        subjectLine += 'General Inquiry';
        break;
      case 'support':
        subjectLine += 'Patient Support Request';
        break;
      case 'research':
        subjectLine += 'Research Information Request';
        break;
      case 'donation':
        subjectLine += 'Donation Question';
        break;
      case 'volunteer':
        subjectLine += 'Volunteer Interest';
        break;
      default:
        subjectLine += 'Website Contact';
    }
    
    // Set up newsletter text if checked
    const newsletterText = newsletter 
      ? '<p><strong>Newsletter Signup:</strong> Yes, please add this contact to the newsletter list.</p>' 
      : '';
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'NLMSF Contact <noreply@nlmsf.org>',
      to: ['info@nlmsf.org'],
      subject: subjectLine,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #6a3ea1;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Subject:</strong> ${subjectLine}</p>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8fafc; border-left: 4px solid #6a3ea1;">
            <h3 style="margin-top: 0; color: #1e293b;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          ${newsletterText}
          
          <p style="font-size: 12px; color: #64748b; margin-top: 30px;">
            This message was sent from the NLMSF website contact form on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });
    
    if (error) {
      console.error('Resend API error:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    // Send auto-reply to the person who filled out the form
    await resend.emails.send({
      from: 'National Leiomyosarcoma Foundation <noreply@nlmsf.org>',
      to: [email],
      subject: 'Thank you for contacting NLMSF',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #6a3ea1;">Thank You for Contacting Us</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to the National Leiomyosarcoma Foundation. We've received your message and will respond as soon as possible.</p>
          
          <p>If you have an urgent need, please call our support line at (800) 555-1234.</p>
          
          <div style="margin: 30px 0 20px; padding: 15px; background-color: #f0f4ff; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #1e293b;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subjectLine}</p>
          </div>
          
          ${newsletter ? '<p>We\'ve also added you to our newsletter list. You\'ll receive updates about our latest research, events, and resources.</p>' : ''}
          
          <p>Warm regards,<br>The NLMSF Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="font-size: 12px; color: #64748b;">
              National Leiomyosarcoma Foundation<br>
              123 Foundation Way, Suite 400<br>
              (800) 555-1234<br>
              info@nlmsf.org
            </p>
          </div>
        </div>
      `,
    });
    
    return Response.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
