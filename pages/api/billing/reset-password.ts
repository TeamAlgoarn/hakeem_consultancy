// // pages/api/billing/reset-password.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from '../../../lib/supabaseClient';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Only allow POST requests
//   if (req.method !== 'POST') {
//     console.log('❌ Invalid method:', req.method);
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { email } = req.body as { email?: string };

//   console.log('🔄 API /billing/reset-password called with:', email);

//   // Validate input
//   if (!email) {
//     console.log('❌ Missing email');
//     return res.status(400).json({ message: 'Email is required' });
//   }

//   // Validate email format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     console.log('❌ Invalid email format');
//     return res.status(400).json({ message: 'Invalid email format' });
//   }

//   // Check if Supabase is configured
//   if (!supabase) {
//     console.error('❌ Supabase not configured');
//     return res.status(500).json({ message: 'Supabase not configured' });
//   }

//   try {
//     // Get the origin from the request headers
//     const origin = req.headers.origin || `https://${req.headers.host}`;
//     const redirectTo = `https://www.studyvisum.com/billing/reset-password`;

//     console.log('🔄 Sending reset email to:', email);
//     console.log('📍 Redirect URL:', redirectTo);

//     // Send password reset email via Supabase
//     const { error } = await supabase.auth.resetPasswordForEmail(email, {
//       redirectTo,
//     });

//     if (error) {
//       console.error('❌ Supabase reset password error:', error.message);
//       return res.status(400).json({ 
//         message: error.message || 'Failed to send reset email',
//         error: error.message 
//       });
//     }

//     console.log('✅ Password reset email sent successfully');

//     // Return success response
//     return res.status(200).json({ 
//       message: 'Password reset email sent. Please check your inbox.',
//       success: true 
//     });

//   } catch (err: any) {
//     console.error('❌ Unexpected error in reset password API:', err);
//     return res.status(500).json({ 
//       message: 'An unexpected error occurred',
//       error: process.env.NODE_ENV === 'development' ? err.message : undefined
//     });
//   }
// }

// pages/api/billing/reset-password.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('❌ Invalid method:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body as { email?: string };

  console.log('🔄 API /billing/reset-password called');
  console.log('📧 Email:', email);

  // Validate input
  if (!email) {
    console.log('❌ Missing email');
    return res.status(400).json({ message: 'Email is required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('❌ Invalid email format');
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Check if Supabase is configured
  if (!supabase) {
    console.error('❌ Supabase not configured');
    return res.status(500).json({ 
      message: 'Server configuration error',
      error: 'Supabase client not initialized'
    });
  }

  try {
    // Get the origin from the request headers
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || 'www.studyvisum.com';
    const origin = `${protocol}://${host}`;
    const redirectTo = `${origin}/billing/reset-password`;

    console.log('🔄 Sending reset email to:', email);
    console.log('📍 Redirect URL:', redirectTo);
    console.log('🌐 Origin:', origin);

    // Send password reset email via Supabase
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });

    if (error) {
      console.error('❌ Supabase reset password error:', error.message);
      console.error('Error details:', error);
      return res.status(400).json({ 
        message: error.message || 'Failed to send reset email',
        error: error.message 
      });
    }

    console.log('✅ Password reset email sent successfully');

    // Return success response
    return res.status(200).json({ 
      message: 'Password reset email sent. Please check your inbox.',
      success: true 
    });

  } catch (err: any) {
    console.error('❌ Unexpected error in reset password API:', err);
    console.error('Error stack:', err.stack);
    return res.status(500).json({ 
      message: 'An unexpected error occurred',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }
}