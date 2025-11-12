// import { NextRequest, NextResponse } from 'next/server';
// import { google } from 'googleapis';
// import { Resend } from 'resend';

// // Initialize Resend
// const resend = new Resend(process.env.RESEND_API_KEY);

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   branch: string;
//   country: string;
//   time: string;
//   honeypot?: string;
// }

// // Google Sheets Client
// async function getGoogleSheetsClient() {
//   const auth = new google.auth.GoogleAuth({
//     credentials: {
//       client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//       private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//     },
//     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//   });

//   const sheets = google.sheets({ version: 'v4', auth });
//   return sheets;
// }

// // Save to Google Sheets
// async function saveToGoogleSheets(data: FormData) {
//   try {
//     const sheets = await getGoogleSheetsClient();
//     const spreadsheetId = process.env.GOOGLE_SHEET_ID;

//     const values = [
//       [
//         data.name,
//         data.phone,
//         data.email,
//         data.branch,
//         data.country,
//         data.time,
//         new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
//       ],
//     ];

//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range: 'Sheet1!A:G',
//       valueInputOption: 'USER_ENTERED',
//       requestBody: { values },
//     });

//     return { success: true };
//   } catch (error) {
//     console.error('Google Sheets Error:', error);
//     throw new Error('Failed to save to Google Sheets');
//   }
// }

// // Send Email with Resend
// async function sendEmailNotification(data: FormData) {
//   try {
//     await resend.emails.send({
//       from: 'StudyVisum <onboarding@resend.dev>', // Use your verified domain later
//       to: ['send3r333@gmail.com'], // Your email
//       subject: `New Consultation Request from ${data.name}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { 
//               font-family: Arial, sans-serif; 
//               line-height: 1.6; 
//               color: #333;
//               margin: 0;
//               padding: 0;
//             }
//             .container { 
//               max-width: 600px; 
//               margin: 0 auto; 
//               padding: 20px;
//             }
//             .header { 
//               background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
//               color: white; 
//               padding: 30px 20px; 
//               border-radius: 8px 8px 0 0;
//               text-align: center;
//             }
//             .header h2 {
//               margin: 0;
//               font-size: 24px;
//             }
//             .header p {
//               margin: 5px 0 0 0;
//               opacity: 0.9;
//             }
//             .content { 
//               background: #f9f9f9; 
//               padding: 30px 20px; 
//               border-radius: 0 0 8px 8px;
//             }
//             .field { 
//               margin-bottom: 20px; 
//               padding: 15px; 
//               background: white; 
//               border-radius: 8px;
//               border-left: 4px solid #667eea;
//             }
//             .label { 
//               font-weight: bold; 
//               color: #667eea;
//               font-size: 12px;
//               text-transform: uppercase;
//               letter-spacing: 0.5px;
//               margin-bottom: 5px;
//             }
//             .value { 
//               color: #333; 
//               font-size: 16px;
//               margin-top: 5px;
//             }
//             .footer { 
//               text-align: center; 
//               margin-top: 30px; 
//               color: #666; 
//               font-size: 12px;
//               padding-top: 20px;
//               border-top: 1px solid #ddd;
//             }
//             .emoji {
//               font-size: 20px;
//               margin-right: 8px;
//             }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h2>🎓 New Consultation Request</h2>
//               <p>StudyVisum - Free Consultation Form</p>
//             </div>
//             <div class="content">
//               <div class="field">
//                 <div class="label"><span class="emoji">👤</span>Full Name</div>
//                 <div class="value">${data.name}</div>
//               </div>
//               <div class="field">
//                 <div class="label"><span class="emoji">📱</span>Phone Number</div>
//                 <div class="value">${data.phone}</div>
//               </div>
//               <div class="field">
//                 <div class="label"><span class="emoji">📧</span>Email Address</div>
//                 <div class="value">${data.email}</div>
//               </div>
//               <div class="field">
//                 <div class="label"><span class="emoji">🏢</span>Branch</div>
//                 <div class="value">${data.branch}</div>
//               </div>
//               <div class="field">
//                 <div class="label"><span class="emoji">🌍</span>Country of Interest</div>
//                 <div class="value">${data.country}</div>
//               </div>
//               <div class="field">
//                 <div class="label"><span class="emoji">🕐</span>Preferred Time</div>
//                 <div class="value">${data.time}</div>
//               </div>
//               <div class="field">
//                 <div class="label"><span class="emoji">📅</span>Submission Date</div>
//                 <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
//               </div>
//             </div>
//             <div class="footer">
//               <p>This is an automated message from StudyVisum consultation form</p>
//               <p style="margin-top: 10px;">© 2025 StudyVisum. All rights reserved.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     return { success: true };
//   } catch (error) {
//     console.error('Resend Error:', error);
//     throw new Error('Failed to send email');
//   }
// }

// // Validation
// function validateFormData(data: any): { valid: boolean; errors: string[] } {
//   const errors: string[] = [];

//   if (!data.name || data.name.trim().length < 2) {
//     errors.push('Name must be at least 2 characters');
//   }

//   if (!data.phone || !/^\d{10}$/.test(data.phone)) {
//     errors.push('Phone must be a valid 10-digit number');
//   }

//   if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
//     errors.push('Email must be valid');
//   }

//   if (!data.branch) {
//     errors.push('Branch is required');
//   }

//   if (!data.country) {
//     errors.push('Country is required');
//   }

//   if (!data.time || data.time.trim().length < 3) {
//     errors.push('Preferred time is required');
//   }

//   return { valid: errors.length === 0, errors };
// }

// // Main API handler
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     // Honeypot check
//     if (body.honeypot && body.honeypot.length > 0) {
//       return NextResponse.json(
//         { success: false, message: 'Invalid submission' },
//         { status: 400 }
//       );
//     }

//     // Validate
//     const validation = validateFormData(body);
//     if (!validation.valid) {
//       return NextResponse.json(
//         { success: false, errors: validation.errors },
//         { status: 400 }
//       );
//     }

//     const formData: FormData = {
//       name: body.name.trim(),
//       phone: body.phone.trim(),
//       email: body.email.trim().toLowerCase(),
//       branch: body.branch,
//       country: body.country,
//       time: body.time.trim(),
//     };

//     // Process in parallel
//     const [sheetsResult, emailResult] = await Promise.allSettled([
//       saveToGoogleSheets(formData),
//       sendEmailNotification(formData),
//     ]);

//     // Check results
//     const sheetsFailed = sheetsResult.status === 'rejected';
//     const emailFailed = emailResult.status === 'rejected';

//     if (sheetsFailed && emailFailed) {
//       throw new Error('Both services failed');
//     }

//     return NextResponse.json({
//       success: true,
//       message: 'Form submitted successfully! Our team will contact you shortly.',
//       details: {
//         sheets: sheetsResult.status === 'fulfilled' ? 'saved' : 'failed',
//         email: emailResult.status === 'fulfilled' ? 'sent' : 'failed',
//       },
//     });
//   } catch (error) {
//     console.error('API Error:', error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Something went wrong. Please try again or contact us directly.',
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function OPTIONS(req: NextRequest) {
//   return NextResponse.json({}, { status: 200 });
// }


import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  phone: string;
  email: string;
  branch: string;
  country: string;
  time: string;
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

async function saveToGoogleSheets(data: FormData) {
  console.log('📊 [Google Sheets] Starting save process...');
  
  try {
    const sheets = await getGoogleSheetsClient();
    console.log('📊 [Google Sheets] Client created successfully');
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const values = [
      [
        data.name,
        data.phone,
        data.email,
        data.branch,
        data.country,
        data.time,
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

    console.log('✅ [Google Sheets] Data saved successfully!');
    return { success: true };
  } catch (error: any) {
    console.error('❌ [Google Sheets] Save failed:', error.message);
    throw new Error('Google Sheets Error: ' + error.message);
  }
}

async function sendEmailNotification(data: FormData) {
  console.log('📧 [Hostinger SMTP] Starting email send process...');
  
  try {
    // Create transporter using Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    console.log('📧 [Hostinger SMTP] Transporter created');

    const mailOptions = {
      from: `"StudyVisum" <${process.env.SMTP_FROM || 'info@studyvisum.com'}>`,
      to: process.env.SMTP_TO || 'info@studyvisum.com',
      subject: `New Consultation Request from ${data.name}`,
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
              <h2>🎓 New Consultation Request</h2>
              <p>StudyVisum - Free Consultation Form</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Full Name</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">📱 Phone Number</div>
                <div class="value">${data.phone}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email Address</div>
                <div class="value">${data.email}</div>
              </div>
              <div class="field">
                <div class="label">🏢 Branch</div>
                <div class="value">${data.branch}</div>
              </div>
              <div class="field">
                <div class="label">🌍 Country of Interest</div>
                <div class="value">${data.country}</div>
              </div>
              <div class="field">
                <div class="label">🕐 Preferred Time</div>
                <div class="value">${data.time}</div>
              </div>
              <div class="field">
                <div class="label">📅 Submission Date</div>
                <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated message from StudyVisum consultation form</p>
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

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!data.phone || !/^\d{10}$/.test(data.phone)) {
    errors.push('Phone must be a valid 10-digit number');
  }

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.push('Email must be valid');
  }

  if (!data.branch) {
    errors.push('Branch is required');
  }

  if (!data.country) {
    errors.push('Country is required');
  }

  if (!data.time || data.time.trim().length < 3) {
    errors.push('Preferred time is required');
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(req: NextRequest) {
  console.log('\n🚀 ===== NEW FORM SUBMISSION =====');
  console.log('⏰ Time:', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
  
  try {
    const body = await req.json();
    console.log('📝 Form data received');
    console.log('   Name:', body.name);
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
    console.log('🔍 Validating form data...');
    const validation = validateFormData(body);
    if (!validation.valid) {
      console.log('❌ Validation failed:', validation.errors);
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }
    console.log('✅ Validation passed');

    const formData: FormData = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email.trim().toLowerCase(),
      branch: body.branch,
      country: body.country,
      time: body.time.trim(),
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
          message: 'Failed to process form submission. Please try again or contact us directly.',
          errors: {
            sheets: sheetsError,
            email: emailError,
          },
        },
        { status: 500 }
      );
    }

    // If at least one succeeded, return success
    console.log('\n✅ ===== FORM SUBMISSION COMPLETED =====\n');
    
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully! Our team will contact you shortly.',
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