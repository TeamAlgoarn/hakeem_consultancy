// pages/api/billing/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';
import cookie from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Add CORS headers for production
  const origin = req.headers.origin;
  const allowedOrigins = [
    'https://studyvisium.com',
    'https://www.studyvisium.com',
    'http://localhost:3000'
  ];

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('❌ Invalid method:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body as { email?: string; password?: string };

  console.log('🔄 API /billing/login called');
  console.log('📧 Email:', email);
  console.log('📍 Environment:', process.env.NODE_ENV);
  console.log('🌐 Origin:', origin);
  console.log('🔧 Protocol:', req.headers['x-forwarded-proto'] || 'http');

  // Validate input
  if (!email || !password) {
    console.log('❌ Missing email or password');
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Check if Supabase is configured
  if (!supabase) {
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
    const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    console.error('❌ Supabase not configured');
    console.error('Environment check:', {
      hasUrl,
      hasKey,
      nodeEnv: process.env.NODE_ENV,
      urlValue: process.env.NEXT_PUBLIC_SUPABASE_URL ? 
        process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 30) + '...' : 'undefined',
      keyLength: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0
    });
    
    return res.status(500).json({ 
      message: 'Server configuration error',
      error: 'Supabase client not initialized',
      details: {
        missingUrl: !hasUrl,
        missingKey: !hasKey,
        environment: process.env.NODE_ENV,
        hint: 'Check environment variables in Vercel dashboard'
      }
    });
  }

  try {
    console.log('🔄 Attempting Supabase authentication...');
    console.log('🔗 Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30) + '...');
    
    // Authenticate with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // Handle authentication errors
    if (error) {
      console.error('❌ Supabase login error:', error.message);
      console.error('Error status:', error.status);
      console.error('Error name:', error.name);
      return res.status(401).json({ 
        message: 'Invalid email or password',
        error: error.message 
      });
    }

    // Check if session was created
    if (!data.session) {
      console.error('❌ No session returned from Supabase');
      return res.status(401).json({ 
        message: 'Authentication failed - no session created' 
      });
    }

    console.log('✅ Supabase authentication successful');
    console.log('👤 User:', data.user?.email);
    console.log('🆔 User ID:', data.user?.id);

    // Extract access token
    const token = data.session.access_token;

    if (!token) {
      console.error('❌ No access token in session');
      return res.status(500).json({ 
        message: 'Authentication failed - no token generated' 
      });
    }

    // Determine if we're on HTTPS
    const forwardedProto = req.headers['x-forwarded-proto'];
    const protocol = forwardedProto || 
                    ((req.connection as any)?.encrypted ? 'https' : 'http');
    const isSecure = protocol === 'https';
    
    console.log('🔒 Connection details:', {
      forwardedProto,
      protocol,
      isSecure,
      host: req.headers.host
    });
    
    // Set secure HTTP-only cookie with proper domain
    const cookieOptions = {
      httpOnly: true,
      secure: isSecure,
      sameSite: 'lax' as const,
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
      ...(process.env.NODE_ENV === 'production' && 
          req.headers.host?.includes('studyvisium.com') && {
        domain: '.studyvisium.com'
      })
    };

    console.log('🍪 Setting cookie with options:', {
      ...cookieOptions,
      tokenLength: token.length,
      isSecure,
      protocol,
      host: req.headers.host
    });

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('billing_auth', token, cookieOptions)
    );

    console.log('✅ Login successful for:', email);
    console.log('✅ Cookie set successfully');

    return res.status(200).json({ 
      message: 'Login successful',
      success: true,
      user: {
        email: data.user.email,
        id: data.user.id
      }
    });

  } catch (err: any) {
    console.error('❌ Unexpected error in login API:', err);
    console.error('Error name:', err.name);
    console.error('Error message:', err.message);
    console.error('Error stack:', err.stack);
    
    return res.status(500).json({ 
      message: 'An unexpected error occurred',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error',
      errorType: err.name
    });
  }
}












// // // import type { NextApiRequest, NextApiResponse } from 'next';
// // // import { supabase } from '../../../lib/supabaseClient';
// // // import cookie from 'cookie';
 
// // // export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// // //   if (req.method !== 'POST') {
// // //     return res.status(405).json({ message: 'Method not allowed' });
// // //   }
 
// // //   const { email, password } = req.body as { email?: string; password?: string };
 
// // //   console.log('API /billing/login called with:', email);
 
// // //   if (!email || !password) {
// // //     return res.status(400).json({ message: 'Email and password are required' });
// // //   }
// // // if (!supabase) return res.status(500).json({ error: "Supabase not configured" });
// // //   // Supabase email/password sign in
// // //   const { data, error } = await supabase.auth.signInWithPassword({
// // //     email,
// // //     password,
// // //   });
 
// // //   if (error || !data.session) {
// // //     console.error('Supabase login error:', error);
// // //     return res.status(401).json({ message: 'Invalid email or password' });
// // //   }
 
// // //   // Put access token in a simple cookie (for middleware billing protection)
// // //   const token = data.session.access_token;
 
// // //   res.setHeader(
// // //     'Set-Cookie',
// // //     cookie.serialize('billing_auth', token, {
// // //       httpOnly: true,
// // //       secure: process.env.NODE_ENV === 'production',
// // //       sameSite: 'lax',
// // //       path: '/',
// // //       maxAge: 60 * 60 * 8, // 8 hours
// // //     })
// // //   );
 
// // //   return res.status(200).json({ message: 'OK' });
// // // }

// // import type { NextApiRequest, NextApiResponse } from 'next';
// // import { supabase } from '../../../lib/supabaseClient';
// // import cookie from 'cookie';

// // export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// //   // Only allow POST requests
// //   if (req.method !== 'POST') {
// //     console.log('❌ Invalid method:', req.method);
// //     return res.status(405).json({ message: 'Method not allowed' });
// //   }

// //   const { email, password } = req.body as { email?: string; password?: string };

// //   console.log('🔄 API /billing/login called with:', email);
// //   console.log('📍 Environment:', process.env.NODE_ENV);

// //   // Validate input
// //   if (!email || !password) {
// //     console.log('❌ Missing email or password');
// //     return res.status(400).json({ message: 'Email and password are required' });
// //   }

// //   // Check if Supabase is configured
// //   if (!supabase) {
// //     console.error('❌ Supabase not configured');
// //     return res.status(500).json({ message: 'Supabase not configured' });
// //   }

// //   try {
// //     // Authenticate with Supabase
// //     console.log('🔄 Attempting Supabase authentication...');
// //     const { data, error } = await supabase.auth.signInWithPassword({
// //       email,
// //       password,
// //     });

// //     // Handle authentication errors
// //     if (error) {
// //       console.error('❌ Supabase login error:', error.message);
// //       return res.status(401).json({ 
// //         message: 'Invalid email or password',
// //         error: error.message 
// //       });
// //     }

// //     // Check if session was created
// //     if (!data.session) {
// //       console.error('❌ No session returned from Supabase');
// //       return res.status(401).json({ message: 'Authentication failed - no session' });
// //     }

// //     console.log('✅ Supabase authentication successful');

// //     // Extract access token
// //     const token = data.session.access_token;

// //     if (!token) {
// //       console.error('❌ No access token in session');
// //       return res.status(500).json({ message: 'Authentication failed - no token' });
// //     }

// //     // Set secure HTTP-only cookie
// //     const isProduction = process.env.NODE_ENV === 'production';
    
// //     const cookieOptions = {
// //       httpOnly: true,
// //       secure: isProduction, // Only require HTTPS in production
// //       sameSite: 'lax' as const, // Changed to lax for better compatibility
// //       path: '/',
// //       maxAge: 60 * 60 * 8, // 8 hours
// //     };

// //     console.log('🍪 Setting cookie with options:', {
// //       ...cookieOptions,
// //       tokenLength: token.length
// //     });

// //     res.setHeader(
// //       'Set-Cookie',
// //       cookie.serialize('billing_auth', token, cookieOptions)
// //     );

// //     console.log('✅ Login successful for:', email);

// //     // Return success response
// //     return res.status(200).json({ 
// //       message: 'Login successful',
// //       success: true 
// //     });

// //   } catch (err: any) {
// //     console.error('❌ Unexpected error in login API:', err);
// //     return res.status(500).json({ 
// //       message: 'An unexpected error occurred',
// //       error: process.env.NODE_ENV === 'development' ? err.message : undefined
// //     });
// //   }
// // }

// // pages/api/billing/login.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from '../../../lib/supabaseClient';
// import cookie from 'cookie';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Only allow POST requests
//   if (req.method !== 'POST') {
//     console.log('❌ Invalid method:', req.method);
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { email, password } = req.body as { email?: string; password?: string };

//   console.log('🔄 API /billing/login called');
//   console.log('📧 Email:', email);
//   console.log('📍 Environment:', process.env.NODE_ENV);

//   // Validate input
//   if (!email || !password) {
//     console.log('❌ Missing email or password');
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   // Check if Supabase is configured
//   if (!supabase) {
//     console.error('❌ Supabase not configured');
//     console.error('Environment check:', {
//       hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
//       hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//     });
//     return res.status(500).json({ 
//       message: 'Server configuration error',
//       error: 'Supabase client not initialized. Check environment variables.'
//     });
//   }

//   try {
//     console.log('🔄 Attempting Supabase authentication...');
    
//     // Authenticate with Supabase
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     // Handle authentication errors
//     if (error) {
//       console.error('❌ Supabase login error:', error.message);
//       console.error('Error details:', error);
//       return res.status(401).json({ 
//         message: 'Invalid email or password',
//         error: error.message 
//       });
//     }

//     // Check if session was created
//     if (!data.session) {
//       console.error('❌ No session returned from Supabase');
//       return res.status(401).json({ 
//         message: 'Authentication failed - no session created' 
//       });
//     }

//     console.log('✅ Supabase authentication successful');
//     console.log('👤 User:', data.user?.email);

//     // Extract access token
//     const token = data.session.access_token;

//     if (!token) {
//       console.error('❌ No access token in session');
//       return res.status(500).json({ 
//         message: 'Authentication failed - no token generated' 
//       });
//     }

//     // Set secure HTTP-only cookie
//     const isProduction = process.env.NODE_ENV === 'production';
    
//     const cookieOptions = {
//       httpOnly: true,
//       secure: isProduction, // Only require HTTPS in production
//       sameSite: 'lax' as const, // Changed to lax for better compatibility
//       path: '/',
//       maxAge: 60 * 60 * 8, // 8 hours
//     };

//     console.log('🍪 Setting cookie with options:', {
//       ...cookieOptions,
//       tokenLength: token.length
//     });

//     res.setHeader(
//       'Set-Cookie',
//       cookie.serialize('billing_auth', token, cookieOptions)
//     );

//     console.log('✅ Login successful for:', email);

//     // Return success response
//     return res.status(200).json({ 
//       message: 'Login successful',
//       success: true 
//     });

//   } catch (err: any) {
//     console.error('❌ Unexpected error in login API:', err);
//     console.error('Error stack:', err.stack);
//     return res.status(500).json({ 
//       message: 'An unexpected error occurred',
//       error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
//     });
//   }
// }