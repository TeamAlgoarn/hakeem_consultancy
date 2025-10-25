import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  honeypot?: string;
}

async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

async function saveToGoogleSheets(data: ContactFormData) {
  console.log('📊 [Google Sheets] Starting save process for contact message...');
  
  try {
    const sheets = await getGoogleSheetsClient();
    console.log('📊 [Google Sheets] Client created successfully');
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const values = [
      [
        `${data.firstName} ${data.lastName}`,
        data.phone,
        data.email,
        'N/A', // Branch (not applicable for contact form)
        'N/A', // Country (not applicable for contact form)
        data.message, // Using message field instead of preferred time
        new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ],
    ];

    console.log('📊 [Google Sheets] Attempting to append data...');
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:G', // Same sheet, same format
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    console.log('✅ [Google Sheets] Contact message saved successfully!');
    return { success: true };
  } catch (error: any) {
    console.error('❌ [Google Sheets] Save failed:', error.message);
    throw new Error('Google Sheets Error: ' + error.message);
  }
}

async function sendEmailNotification(data: ContactFormData) {
  console.log('📧 [Hostinger SMTP] Starting email send for contact message...');
  
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    console.log('📧 [Hostinger SMTP] Transporter created');

    const mailOptions = {
      from: `"StudyVisum" <${process.env.SMTP_FROM || 'info@studyvisum.com'}>`,
      to: process.env.SMTP_TO || 'info@studyvisum.com',
      subject: `New Contact Message from ${data.firstName} ${data.lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333;
              margin: 0;
              padding: 0;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px;
            }
            .header { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 30px 20px; 
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .header h2 {
              margin: 0;
              font-size: 24px;
            }
            .header p {
              margin: 5px 0 0 0;
              opacity: 0.9;
            }
            .content { 
              background: #f9f9f9; 
              padding: 30px 20px; 
              border-radius: 0 0 8px 8px;
            }
            .field { 
              margin-bottom: 20px; 
              padding: 15px; 
              background: white; 
              border-radius: 8px;
              border-left: 4px solid #667eea;
            }
            .label { 
              font-weight: bold; 
              color: #667eea;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .value { 
              color: #333; 
              font-size: 16px;
              margin-top: 5px;
            }
            .message-box {
              background: #f0f4f8;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #667eea;
              margin: 20px 0;
            }
            .footer { 
              text-align: center; 
              margin-top: 30px; 
              color: #666; 
              font-size: 12px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>💬 New Contact Message</h2>
              <p>StudyVisum - Contact Form</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Full Name</div>
                <div class="value">${data.firstName} ${data.lastName}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email Address</div>
                <div class="value">${data.email}</div>
              </div>
              <div class="field">
                <div class="label">📱 Phone Number</div>
                <div class="value">${data.phone}</div>
              </div>
              <div class="message-box">
                <div class="label">📝 Message</div>
                <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${data.message}</div>
              </div>
              <div class="field">
                <div class="label">📅 Received At</div>
                <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated message from StudyVisum contact form</p>
              <p>© 2025 StudyVisum. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log('📧 [Hostinger SMTP] Sending email...');
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ [Hostinger SMTP] Email sent successfully!');
    console.log('📧 [Hostinger SMTP] Message ID:', info.messageId);
    
    return { success: true };
  } catch (error: any) {
    console.error('❌ [Hostinger SMTP] Send failed:', error.message);
    throw new Error('Email Error: ' + error.message);
  }
}

function validateFormData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.push('First name must be at least 2 characters');
  }

  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.push('Last name must be at least 2 characters');
  }

  if (!data.phone || !/^\d{10}$/.test(data.phone)) {
    errors.push('Phone must be a valid 10-digit number');
  }

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.push('Email must be valid');
  }


  return { valid: errors.length === 0, errors };
}

export async function POST(req: NextRequest) {
  console.log('\n🚀 ===== NEW CONTACT MESSAGE =====');
  console.log('⏰ Time:', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
  
  try {
    const body = await req.json();
    console.log('📝 Contact form data received');
    console.log('   Name:', body.firstName, body.lastName);
    console.log('   Email:', body.email);
    console.log('   Phone:', body.phone);

    // Honeypot check
    if (body.honeypot && body.honeypot.length > 0) {
      console.log('🚫 Spam detected via honeypot field');
      return NextResponse.json(
        { success: false, message: 'Invalid submission' },
        { status: 400 }
      );
    }
    console.log('✅ Honeypot check passed');

    // Validate
    console.log('🔍 Validating contact form data...');
    const validation = validateFormData(body);
    if (!validation.valid) {
      console.log('❌ Validation failed:', validation.errors);
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }
    console.log('✅ Validation passed');

    const formData: ContactFormData = {
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      phone: body.phone.trim(),
      email: body.email.trim().toLowerCase(),
      message: body.message.trim(),
    };

    console.log('\n📊 Processing integrations...');
    
    // Track success/failure
    let sheetsSuccess = false;
    let emailSuccess = false;
    let sheetsError = null;
    let emailError = null;

    // Try Google Sheets
    try {
      await saveToGoogleSheets(formData);
      sheetsSuccess = true;
    } catch (error: any) {
      sheetsError = error.message;
      console.error('❌ Google Sheets integration failed');
    }

    // Try Email
    try {
      await sendEmailNotification(formData);
      emailSuccess = true;
    } catch (error: any) {
      emailError = error.message;
      console.error('❌ Email integration failed');
    }

    console.log('\n📊 Integration Results:');
    console.log('   Google Sheets:', sheetsSuccess ? '✅ Success' : '❌ Failed');
    console.log('   Email:', emailSuccess ? '✅ Success' : '❌ Failed');

    // If both failed, return error
    if (!sheetsSuccess && !emailSuccess) {
      console.log('\n💥 BOTH INTEGRATIONS FAILED');
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send message. Please try again or contact us directly.',
          errors: {
            sheets: sheetsError,
            email: emailError,
          },
        },
        { status: 500 }
      );
    }

    // If at least one succeeded, return success
    console.log('\n✅ ===== CONTACT MESSAGE SENT =====\n');
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! Our team will get back to you soon.',
      details: {
        sheets: sheetsSuccess ? 'saved' : 'failed',
        email: emailSuccess ? 'sent' : 'failed',
      },
    });
  } catch (error: any) {
    console.error('\n💥 CRITICAL ERROR:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again or contact us directly.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { status: 200 });
}