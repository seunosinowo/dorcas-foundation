import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, name, amount, reference } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const formattedAmount = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);

    const mailOptions = {
      from: `"Dorcas Scholars Fund" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for your Generous Donation!',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #8B4513; padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Thank You, ${name || 'for your Donation'}!</h1>
          </div>
          <div style="padding: 40px 30px; line-height: 1.6; color: #334155;">
            <p style="font-size: 18px; margin-bottom: 24px;">Dear ${name || 'Partner'},</p>
            <p style="margin-bottom: 24px;">We are deeply moved by your generous donation of <strong>${formattedAmount}</strong>. Your support is a beacon of hope for young Africans striving for a better future through education and skill acquisition.</p>
            <p style="margin-bottom: 24px;">Because of partners like you, the <strong>Dorcas Scholars Fund</strong> can continue to provide training materials, academic and trade scholarships, and startup kits to those who need them most. Your contribution is not just a gift; it's an investment in a life, a family, and a community.</p>
            
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 32px; border-left: 4px solid #8B4513;">
              <p style="margin: 0; font-weight: 600; color: #1e293b;">Donation Summary</p>
              <p style="margin: 8px 0 0; font-size: 14px; color: #64748b;">Reference: ${reference}</p>
              <p style="margin: 4px 0 0; font-size: 14px; color: #64748b;">Amount: ${formattedAmount}</p>
            </div>
            
            <p style="margin-bottom: 8px;">With profound gratitude,</p>
            <p style="margin: 0; font-weight: 700; color: #8B4513;">The Dorcas Scholars Fund Team</p>
          </div>
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Dorcas Scholars Fund. All rights reserved.</p>
            <p style="margin: 8px 0 0;">Lagos, Nigeria</p>
          </div>
        </div>
      `,
    };

    // Also send a notification to the foundation
    const notificationOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Donation Received: ${formattedAmount}`,
      text: `
        A new donation has been received!
        
        Name: ${name || 'N/A'}
        Email: ${email}
        Amount: ${formattedAmount}
        Reference: ${reference}
      `,
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(notificationOptions)
    ]);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Error in donation API:', error);
    return NextResponse.json({ error: 'Failed to process' }, { status: 500 });
  }
}
