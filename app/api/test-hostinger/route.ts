import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {

  try {
    console.log('🧪 Testing Hostinger SMTP connection...');

    // Step 1: Check environment variables
    console.log('Step 1: Checking SMTP credentials...');
    
    if (!process.env.SMTP_HOST) {
      throw new Error('❌ SMTP_HOST is missing from .env.local');
    }
    if (!process.env.SMTP_USER) {
      throw new Error('❌ SMTP_USER is missing from .env.local');
    }
    if (!process.env.SMTP_PASSWORD) {
      throw new Error('❌ SMTP_PASSWORD is missing from .env.local');
    }
    
    console.log('✅ All SMTP credentials present');
    console.log('   Host:', process.env.SMTP_HOST);
    console.log('   User:', process.env.SMTP_USER);
    console.log('   Port:', process.env.SMTP_PORT || 465);

    // Step 2: Create transporter
    console.log('Step 2: Creating SMTP transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    console.log('✅ Transporter created');

    // Step 3: Verify connection
    console.log('Step 3: Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    // Step 4: Send test email
    console.log('Step 4: Sending test email...');
    const info = await transporter.sendMail({
      from: `"StudyVisum Test" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: '✅ Hostinger SMTP Test - StudyVisum',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .success {
              background: #d4f4dd;
              border-left: 4px solid #51cf66;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
            }
            .info {
              background: white;
              padding: 15px;
              margin: 10px 0;
              border-radius: 4px;
              border-left: 4px solid #667eea;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Hostinger SMTP Test Successful!</h1>
              <p>StudyVisum Email Service</p>
            </div>
            <div class="content">
              <div class="success">
                <strong>✅ Success!</strong>
                <p>If you're reading this email, your Hostinger SMTP is working perfectly!</p>
              </div>
              
              <h3>Test Details:</h3>
              <div class="info">
                <strong>📧 From:</strong> ${process.env.SMTP_FROM || process.env.SMTP_USER}<br>
                <strong>📨 To:</strong> ${process.env.SMTP_TO || process.env.SMTP_USER}<br>
                <strong>🏢 SMTP Host:</strong> ${process.env.SMTP_HOST}<br>
                <strong>🔌 Port:</strong> ${process.env.SMTP_PORT || 465}<br>
                <strong>⏰ Sent:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </div>
              
              <h3>Next Steps:</h3>
              <ol>
                <li>✅ Your Hostinger SMTP integration is working</li>
                <li>📝 Test your actual form submission</li>
                <li>✉️ Emails will come from: info@studyvisum.com</li>
                <li>🗑️ Delete the test route after confirming</li>
              </ol>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);

    return NextResponse.json({
      success: true,
      message: '🎉 Hostinger SMTP is working! Check your inbox.',
      details: {
        messageId: info.messageId,
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.SMTP_TO || process.env.SMTP_USER,
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 465,
        sentAt: new Date().toISOString(),
      },
      instructions: [
        '✅ Test email sent successfully!',
        '📧 Check your inbox: ' + (process.env.SMTP_TO || process.env.SMTP_USER),
        '📁 Check SPAM folder if not in inbox',
        '✉️ Emails will come from your domain: info@studyvisum.com',
        '🚀 Your form submissions will now send emails via Hostinger',
      ],
    });
  } catch (error: any) {
    console.error('❌ Hostinger SMTP test failed:', error);

    let errorMessage = error.message || 'Unknown error';
    let solution = '';

    if (errorMessage.includes('Invalid login') || errorMessage.includes('authentication')) {
      solution = '❌ AUTHENTICATION FAILED: Check your SMTP_USER and SMTP_PASSWORD in .env.local. Make sure you\'re using the correct email password from Hostinger.';
    } else if (errorMessage.includes('ECONNREFUSED') || errorMessage.includes('connection')) {
      solution = '❌ CONNECTION REFUSED: Check your SMTP_HOST and SMTP_PORT. For Hostinger, use smtp.hostinger.com and port 465.';
    } else if (errorMessage.includes('missing')) {
      solution = errorMessage;
    } else if (errorMessage.includes('SMTP_HOST')) {
      solution = '❌ SMTP_HOST is missing. Add SMTP_HOST=smtp.hostinger.com to .env.local';
    } else {
      solution = '❌ ERROR: ' + errorMessage;
    }

    return NextResponse.json({
      success: false,
      error: errorMessage,
      solution: solution,
      debugInfo: {
        hasSmtpHost: !!process.env.SMTP_HOST,
        hasSmtpUser: !!process.env.SMTP_USER,
        hasSmtpPassword: !!process.env.SMTP_PASSWORD,
        smtpHost: process.env.SMTP_HOST,
        smtpPort: process.env.SMTP_PORT || 465,
        smtpUser: process.env.SMTP_USER,

        hasSheetId: !!process.env.GOOGLE_SHEET_ID,
        hasEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
        sheetIdLength: process.env.GOOGLE_SHEET_ID?.length || 0,
        emailEndsCorrectly: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.includes('iam.gserviceaccount.com'),
        privateKeyStartsCorrectly: process.env.GOOGLE_PRIVATE_KEY?.startsWith('-----BEGIN'),
        // DON'T log actual values for security
      },
      nextSteps: [
        '1. Login to Hostinger hPanel',
        '2. Go to Emails → Email Accounts',
        '3. Find info@studyvisum.com',
        '4. Verify the password or reset it',
        '5. Update SMTP_PASSWORD in .env.local',
        '6. Restart dev server: npm run dev',
      ],
    }, { status: 500 });
  }
}

export async function POST() {
  return GET(); // Same test
}