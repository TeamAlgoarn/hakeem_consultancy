
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

interface MeetingData {
  userName: string;
  email?: string;
  phone?: string;
  message?: string;
  meetingDateTime: string;
  meetingLink: string;
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

async function saveToGoogleSheets(data: MeetingData) {
  console.log('📊 [Google Sheets] Starting save process for video meeting...');
  
  try {
    const sheets = await getGoogleSheetsClient();
    console.log('📊 [Google Sheets] Client created successfully');
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Format meeting date/time nicely
    const meetingDate = new Date(data.meetingDateTime);
    const formattedMeetingTime = meetingDate.toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const values = [
      [
        data.userName,
        data.phone || 'Not provided',
        data.email || 'Not provided',
        data.message || 'Not provided',
        'Video Meeting',
        `Scheduled for: ${formattedMeetingTime}`,
        new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ],
    ];

    console.log('📊 [Google Sheets] Attempting to append data...');
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    console.log('✅ [Google Sheets] Video meeting scheduled and saved!');
    return { success: true };
  } catch (error: any) {
    console.error('❌ [Google Sheets] Save failed:', error.message);
    throw new Error('Google Sheets Error: ' + error.message);
  }
}

async function sendAdminEmailNotification(data: MeetingData) {
  console.log('📧 [Admin Email] Starting email send for video meeting...');
  
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

    console.log('📧 [Admin Email] Transporter created');

    // Format meeting date/time
    const meetingDate = new Date(data.meetingDateTime);
    const formattedDate = meetingDate.toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Calculate time until meeting
    const now = new Date();
    const timeUntil = meetingDate.getTime() - now.getTime();
    const hoursUntil = Math.floor(timeUntil / (1000 * 60 * 60));
    const minutesUntil = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));

    const mailOptions = {
      from: `"StudyVisum" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `🎥 New Video Meeting Scheduled - ${data.userName}`,
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
            .urgent-box {
              background: #fff3cd;
              border: 2px solid #ffc107;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              text-align: center;
            }
            .meeting-link {
              background: #667eea;
              color: white;
              padding: 15px 30px;
              text-decoration: none;
              border-radius: 8px;
              display: inline-block;
              margin: 15px 0;
              font-weight: bold;
              font-size: 18px;
            }
            .meeting-link:hover {
              background: #5568d3;
            }
            .countdown {
              font-size: 24px;
              font-weight: bold;
              color: #667eea;
              margin: 10px 0;
            }
            .footer { 
              text-align: center; 
              margin-top: 30px; 
              color: #666; 
              font-size: 12px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
            }
            .instructions {
              background: #e3f2fd;
              padding: 15px;
              border-radius: 8px;
              margin: 20px 0;
            }
            .instructions h3 {
              margin-top: 0;
              color: #1976d2;
            }
            .instructions ul {
              margin: 10px 0;
              padding-left: 20px;
            }
            .instructions li {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎥 New Video Meeting Scheduled</h2>
              <p>StudyVisum - Video Consultation Request</p>
            </div>
            <div class="content">
              <div class="urgent-box">
                <h3 style="margin: 0; color: #856404;">⏰ Meeting in ${hoursUntil > 0 ? `${hoursUntil}h ${minutesUntil}m` : `${minutesUntil} minutes`}!</h3>
                <div class="countdown">${formattedDate}</div>
                <p style="margin: 10px 0 0 0;">Set a reminder so you don't miss it!</p>
              </div>

              <div class="field">
                <div class="label">👤 Participant Name</div>
                <div class="value">${data.userName}</div>
              </div>

              ${data.email ? `
              <div class="field">
                <div class="label">📧 Email Address</div>
                <div class="value">${data.email}</div>
              </div>
              ` : ''}

              ${data.phone ? `
              <div class="field">
                <div class="label">📱 Phone Number</div>
                <div class="value">${data.phone}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">📅 Scheduled Date & Time</div>
                <div class="value">${formattedDate}</div>
              </div>

              <div class="field">
                <div class="label">🔗 Meeting Link</div>
                <div class="value">
                  <a href="${data.meetingLink}" class="meeting-link" target="_blank">
                    Join Video Meeting
                  </a>
                </div>
                <p style="margin: 10px 0 0 0; font-size: 12px; color: #666;">
                  Click this link at the scheduled time to join
                </p>
              </div>

              <div class="instructions">
                <h3>📋 Instructions for You:</h3>
                <ul>
                  <li>Set a reminder for ${formattedDate}</li>
                  <li>Click the "Join Video Meeting" link at the scheduled time</li>
                  <li>The meeting room will be ready when you join</li>
                  <li>The participant will be waiting in the same room</li>
                  <li>Make sure you have a stable internet connection</li>
                  <li>Test your camera and microphone before joining</li>
                </ul>
              </div>

              <div class="field">
                <div class="label">📝 Request Received At</div>
                <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated notification from StudyVisum video meeting scheduler</p>
              <p>© 2025 StudyVisum. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log('📧 [Admin Email] Sending email...');
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ [Admin Email] Email sent successfully!');
    console.log('📧 [Admin Email] Message ID:', info.messageId);
    
    return { success: true };
  } catch (error: any) {
    console.error('❌ [Admin Email] Send failed:', error.message);
    throw new Error('Admin Email Error: ' + error.message);
  }
}

async function sendUserConfirmationEmail(data: MeetingData) {
  console.log('📧 [User Confirmation] Starting email send to user...');
  
  // Skip if no email provided
  if (!data.email) {
    console.log('⚠️ [User Confirmation] No email provided, skipping user notification');
    return { success: true, skipped: true };
  }

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

    console.log('📧 [User Confirmation] Transporter created');

    // Format meeting date/time
    const meetingDate = new Date(data.meetingDateTime);
    const formattedDate = meetingDate.toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const shortDate = meetingDate.toLocaleDateString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const time = meetingDate.toLocaleTimeString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit'
    });

    const mailOptions = {
      from: `"StudyVisum" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: data.email,
      subject: `✅ Your Video Meeting is Scheduled - ${shortDate} at ${time}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6; 
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container { 
              max-width: 600px; 
              margin: 40px auto; 
              background: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 40px 30px; 
              text-align: center;
            }
            .header h1 {
              margin: 0 0 10px 0;
              font-size: 28px;
              font-weight: 600;
            }
            .header p {
              margin: 0;
              opacity: 0.95;
              font-size: 16px;
            }
            .content { 
              padding: 40px 30px;
            }
            .greeting {
              font-size: 18px;
              margin-bottom: 20px;
              color: #333;
            }
            .highlight-box {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px;
              margin: 30px 0;
              text-align: center;
            }
            .highlight-box h2 {
              margin: 0 0 15px 0;
              font-size: 22px;
              font-weight: 600;
            }
            .highlight-box .date {
              font-size: 24px;
              font-weight: bold;
              margin: 10px 0;
            }
            .highlight-box .time {
              font-size: 20px;
              opacity: 0.95;
            }
            .meeting-link-box {
              background: #f8f9fa;
              padding: 25px;
              border-radius: 10px;
              margin: 25px 0;
              text-align: center;
              border: 2px dashed #667eea;
            }
            .meeting-link-button {
              display: inline-block;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 16px 40px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
              font-size: 18px;
              margin: 15px 0;
              transition: transform 0.2s;
            }
            .meeting-link-button:hover {
              transform: translateY(-2px);
            }
            .meeting-link-text {
              font-size: 12px;
              color: #666;
              margin-top: 10px;
              word-break: break-all;
            }
            .instructions {
              background: #e8f4f8;
              padding: 25px;
              border-radius: 10px;
              margin: 25px 0;
              border-left: 4px solid #667eea;
            }
            .instructions h3 {
              margin: 0 0 15px 0;
              color: #667eea;
              font-size: 18px;
            }
            .instructions ul {
              margin: 0;
              padding-left: 20px;
            }
            .instructions li {
              margin: 10px 0;
              color: #555;
            }
            .instructions li strong {
              color: #333;
            }
            .contact-info {
              background: #fff9e6;
              padding: 20px;
              border-radius: 10px;
              margin: 25px 0;
              border-left: 4px solid #ffc107;
            }
            .contact-info h3 {
              margin: 0 0 15px 0;
              color: #f57c00;
              font-size: 16px;
            }
            .contact-info p {
              margin: 5px 0;
              color: #555;
            }
            .contact-info a {
              color: #667eea;
              text-decoration: none;
            }
            .footer { 
              background: #f8f9fa;
              text-align: center; 
              padding: 30px;
              color: #666; 
              font-size: 13px;
              border-top: 1px solid #e9ecef;
            }
            .footer p {
              margin: 5px 0;
            }
            .footer .address {
              font-size: 12px;
              color: #999;
              margin-top: 15px;
            }
            .divider {
              height: 1px;
              background: linear-gradient(to right, transparent, #ddd, transparent);
              margin: 30px 0;
            }
            @media only screen and (max-width: 600px) {
              .container {
                margin: 20px;
              }
              .header, .content, .footer {
                padding: 25px 20px;
              }
              .highlight-box .date {
                font-size: 20px;
              }
              .meeting-link-button {
                padding: 14px 30px;
                font-size: 16px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Meeting Confirmed!</h1>
              <p>Your video consultation with StudyVisum is scheduled</p>
            </div>
            
            <div class="content">
              <div class="greeting">
                Hello <strong>${data.userName}</strong>,
              </div>
              
              <p>Thank you for scheduling a consultation with StudyVisum! We're excited to help you with your study abroad journey.</p>

              <div class="highlight-box">
                <h2>📅 Your Meeting Details</h2>
                <div class="date">${shortDate}</div>
                <div class="time">⏰ ${time} (IST)</div>
                ${data.phone ? `<div style="margin-top: 15px; opacity: 0.9;">📱 Contact: ${data.phone}</div>` : ''}
              </div>

              <div class="meeting-link-box">
                <div style="font-size: 16px; font-weight: 600; color: #333; margin-bottom: 15px;">
                  🔗 Your Meeting Link
                </div>
                <a href="${data.meetingLink}" class="meeting-link-button" target="_blank">
                  Join Video Meeting
                </a>
                <div class="meeting-link-text">
                  Or copy this link: <br>
                  <a href="${data.meetingLink}" style="color: #667eea;">${data.meetingLink}</a>
                </div>
              </div>

              <div class="instructions">
                <h3>📋 Important Instructions</h3>
                <ul>
                  <li><strong>Join on Time:</strong> Please join 5 minutes before the scheduled time</li>
                  <li><strong>Internet Connection:</strong> Ensure you have a stable internet connection</li>
                  <li><strong>Device Check:</strong> Test your camera and microphone before the meeting</li>
                  <li><strong>Browser:</strong> Use Chrome, Firefox, or Safari for the best experience</li>
                  <li><strong>Documents:</strong> Keep your relevant documents ready (if applicable)</li>
                  <li><strong>Quiet Space:</strong> Find a quiet place for the consultation</li>
                </ul>
              </div>

              <div class="divider"></div>

              <div class="contact-info">
                <h3>📞 Need to Reschedule or Have Questions?</h3>
                <p>Contact us at least 24 hours in advance:</p>
                <p>📧 Email: <a href="mailto:info@studyvisum.com">info@studyvisum.com</a></p>
                <p>📱 Phone: <a href="tel:+918374779361">+91 8374779361</a> / <a href="tel:+919704879361">+91 9704879361</a></p>
              </div>

              <p style="margin-top: 30px; color: #666;">
                We look forward to speaking with you and helping you achieve your study abroad goals!
              </p>
              
              <p style="margin-top: 20px;">
                Best regards,<br>
                <strong style="color: #667eea;">The StudyVisum Team</strong>
              </p>
            </div>
            
            <div class="footer">
              <p><strong>StudyVisum - Your Study Abroad Partner</strong></p>
              <p class="address">
                Flat No. 301 A Block Okaz Complex, Opposite to Pillar No.5<br>
                Mehdipatnam, Hyderabad, India-500028
              </p>
              <p style="margin-top: 15px;">© 2025 StudyVisum. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log('📧 [User Confirmation] Sending email to:', data.email);
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ [User Confirmation] Email sent successfully to user!');
    console.log('📧 [User Confirmation] Message ID:', info.messageId);
    
    return { success: true };
  } catch (error: any) {
    console.error('❌ [User Confirmation] Send failed:', error.message);
    throw new Error('User Confirmation Email Error: ' + error.message);
  }
}

function validateMeetingData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.userName || data.userName.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!data.meetingDateTime) {
    errors.push('Meeting date and time is required');
  } else {
    const meetingDate = new Date(data.meetingDateTime);
    const now = new Date();
    
    if (meetingDate <= now) {
      errors.push('Meeting must be scheduled for a future time');
    }

    // Check if meeting is more than 30 days in future
    const thirtyDaysFromNow = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000));
    if (meetingDate > thirtyDaysFromNow) {
      errors.push('Meeting cannot be scheduled more than 30 days in advance');
    }
  }

  if (!data.meetingLink || !data.meetingLink.startsWith('https://')) {
    errors.push('Valid meeting link is required');
  }

  // Optional: Validate email if provided
  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.push('Email must be valid');
  }

  // Optional: Validate phone if provided
  if (data.phone && !/^\d{10}$/.test(data.phone)) {
    errors.push('Phone must be a valid 10-digit number');
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(req: NextRequest) {
  console.log('\n🎥 ===== NEW VIDEO MEETING REQUEST =====');
  console.log('⏰ Time:', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
  
  try {
    const body = await req.json();
    console.log('📝 Meeting request received');
    console.log('   Participant:', body.userName);
    console.log('   Email:', body.email || 'Not provided');
    console.log('   Scheduled for:', body.meetingDateTime);

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
    console.log('🔍 Validating meeting data...');
    const validation = validateMeetingData(body);
    if (!validation.valid) {
      console.log('❌ Validation failed:', validation.errors);
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }
    console.log('✅ Validation passed');

    const meetingData: MeetingData = {
      userName: body.userName.trim(),
      email: body.email?.trim().toLowerCase(),
      phone: body.phone?.trim(),
      meetingDateTime: body.meetingDateTime,
      meetingLink: body.meetingLink,
    };

    console.log('\n📊 Processing integrations...');
    
    // Track success/failure
    let sheetsSuccess = false;
    let adminEmailSuccess = false;
    let userEmailSuccess = false;
    let sheetsError = null;
    let adminEmailError = null;
    let userEmailError = null;

    // Try Google Sheets
    try {
      await saveToGoogleSheets(meetingData);
      sheetsSuccess = true;
    } catch (error: any) {
      sheetsError = error.message;
      console.error('❌ Google Sheets integration failed');
    }

    // Try Admin Email
    try {
      await sendAdminEmailNotification(meetingData);
      adminEmailSuccess = true;
    } catch (error: any) {
      adminEmailError = error.message;
      console.error('❌ Admin email integration failed');
    }

    // Try User Confirmation Email
    try {
      const result = await sendUserConfirmationEmail(meetingData);
      userEmailSuccess = result.success;
      if (result.skipped) {
        console.log('⚠️ User email skipped (no email provided)');
      }
    } catch (error: any) {
      userEmailError = error.message;
      console.error('❌ User confirmation email failed');
    }

    console.log('\n📊 Integration Results:');
    console.log('   Google Sheets:', sheetsSuccess ? '✅ Success' : '❌ Failed');
    console.log('   Admin Email:', adminEmailSuccess ? '✅ Success' : '❌ Failed');
    console.log('   User Email:', userEmailSuccess ? '✅ Success' : (meetingData.email ? '❌ Failed' : '⚠️ Skipped'));

    // If both critical integrations (sheets and admin email) failed, return error
    if (!sheetsSuccess && !adminEmailSuccess) {
      console.log('\n💥 CRITICAL INTEGRATIONS FAILED');
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to schedule meeting. Please try again or contact us directly.',
          errors: {
            sheets: sheetsError,
            adminEmail: adminEmailError,
            userEmail: userEmailError,
          },
        },
        { status: 500 }
      );
    }

    // If at least one critical integration succeeded, return success
    console.log('\n✅ ===== VIDEO MEETING SCHEDULED =====\n');
    
    const responseMessage = userEmailSuccess 
      ? 'Video meeting scheduled successfully! Check your email for the meeting link and instructions.'
      : 'Video meeting scheduled successfully! Our team will contact you with the meeting details.';

    return NextResponse.json({
      success: true,
      message: responseMessage,
      details: {
        sheets: sheetsSuccess ? 'saved' : 'failed',
        adminEmail: adminEmailSuccess ? 'sent' : 'failed',
        userEmail: userEmailSuccess ? 'sent' : (meetingData.email ? 'failed' : 'skipped'),
        meetingLink: meetingData.meetingLink,
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