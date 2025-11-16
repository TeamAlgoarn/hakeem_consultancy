// import type { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from '../../../lib/supabaseClient';
// import cookie from 'cookie';
 
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }
 
//   const { email, password } = req.body as { email?: string; password?: string };
 
//   console.log('API /billing/login called with:', email);
 
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }
// if (!supabase) return res.status(500).json({ error: "Supabase not configured" });
//   // Supabase email/password sign in
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });
 
//   if (error || !data.session) {
//     console.error('Supabase login error:', error);
//     return res.status(401).json({ message: 'Invalid email or password' });
//   }
 
//   // Put access token in a simple cookie (for middleware billing protection)
//   const token = data.session.access_token;
 
//   res.setHeader(
//     'Set-Cookie',
//     cookie.serialize('billing_auth', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/',
//       maxAge: 60 * 60 * 8, // 8 hours
//     })
//   );
 
//   return res.status(200).json({ message: 'OK' });
// }

import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';
import cookie from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('❌ Invalid method:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body as { email?: string; password?: string };

  console.log('🔄 API /billing/login called with:', email);
  console.log('📍 Environment:', process.env.NODE_ENV);

  // Validate input
  if (!email || !password) {
    console.log('❌ Missing email or password');
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Check if Supabase is configured
  if (!supabase) {
    console.error('❌ Supabase not configured');
    return res.status(500).json({ message: 'Supabase not configured' });
  }

  try {
    // Authenticate with Supabase
    console.log('🔄 Attempting Supabase authentication...');
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // Handle authentication errors
    if (error) {
      console.error('❌ Supabase login error:', error.message);
      return res.status(401).json({ 
        message: 'Invalid email or password',
        error: error.message 
      });
    }

    // Check if session was created
    if (!data.session) {
      console.error('❌ No session returned from Supabase');
      return res.status(401).json({ message: 'Authentication failed - no session' });
    }

    console.log('✅ Supabase authentication successful');

    // Extract access token
    const token = data.session.access_token;

    if (!token) {
      console.error('❌ No access token in session');
      return res.status(500).json({ message: 'Authentication failed - no token' });
    }

    // Set secure HTTP-only cookie
    const isProduction = process.env.NODE_ENV === 'production';
    
    const cookieOptions = {
      httpOnly: true,
      secure: isProduction, // Only require HTTPS in production
      sameSite: 'lax' as const, // Changed to lax for better compatibility
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
    };

    console.log('🍪 Setting cookie with options:', {
      ...cookieOptions,
      tokenLength: token.length
    });

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('billing_auth', token, cookieOptions)
    );

    console.log('✅ Login successful for:', email);

    // Return success response
    return res.status(200).json({ 
      message: 'Login successful',
      success: true 
    });

  } catch (err: any) {
    console.error('❌ Unexpected error in login API:', err);
    return res.status(500).json({ 
      message: 'An unexpected error occurred',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
}