// pages/api/billing/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import cookie from 'cookie';

// Create a simple server-side Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Log this in server logs so we can see it on Vercel if needed
  console.error('❌ Supabase env vars missing in login API', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
  });
}

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      })
    : null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Allow only POST
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    // Basic input validation
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' });
    }

    // Supabase client check
    if (!supabase) {
      return res.status(500).json({
        message: 'Server configuration error',
        error: 'Supabase client not initialized',
      });
    }

    // Authenticate with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('❌ Supabase login error:', error.message);
      return res.status(401).json({
        message: 'Invalid email or password',
        error: error.message,
      });
    }

    if (!data.session) {
      return res.status(401).json({
        message: 'Authentication failed - no session created',
      });
    }

    const token = data.session.access_token;
    if (!token) {
      return res.status(500).json({
        message: 'Authentication failed - no token generated',
      });
    }

    // Use a simple secure flag for cookies
    const isSecure = process.env.NODE_ENV === 'production';

    const cookieOptions = {
      httpOnly: true,
      secure: isSecure,
      sameSite: 'lax' as const,
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
      // No custom domain override for now – keeps it simple and safe
    };

    // Set the cookie
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('billing_auth', token, cookieOptions)
    );

    // Success response
    return res.status(200).json({
      message: 'Login successful',
      success: true,
      user: {
        email: data.user?.email ?? email,
        id: data.user?.id ?? null,
      },
    });
  } catch (err: any) {
    // 🔥 DEBUG CATCH: this is what will run if anything throws above
    console.error('❌ Unexpected error in login API [DEBUG VERSION]:', err);
    console.error('Error name:', err?.name);
    console.error('Error message:', err?.message);
    console.error('Error stack:', err?.stack);

    // IMPORTANT: we expose the real error message here so we can see
    // what is actually going wrong in production.
    return res.status(500).json({
      message: 'DEBUG: login route crashed',
      error: err?.message || 'no-message',
      errorType: err?.name || 'Error',
      debugVersion: 'login-api-v3',
    });
  }
}

// // pages/api/billing/login.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { createClient } from '@supabase/supabase-js';
// import cookie from 'cookie';

// // Create a simple server-side Supabase client
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseAnonKey) {
//   // Log this in server logs so we can see it on Vercel if needed
//   console.error('❌ Supabase env vars missing in login API', {
//     hasUrl: !!supabaseUrl,
//     hasKey: !!supabaseAnonKey,
//   });
// }

// const supabase =
//   supabaseUrl && supabaseAnonKey
//     ? createClient(supabaseUrl, supabaseAnonKey, {
//         auth: {
//           persistSession: false,
//           autoRefreshToken: false,
//         },
//       })
//     : null;

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     // Allow only POST
//     if (req.method !== 'POST') {
//       return res.status(405).json({ message: 'Method not allowed' });
//     }

//     // Basic input validation
//     const { email, password } = req.body as {
//       email?: string;
//       password?: string;
//     };

//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ message: 'Email and password are required' });
//     }

//     // Supabase client check
//     if (!supabase) {
//       return res.status(500).json({
//         message: 'Server configuration error',
//         error: 'Supabase client not initialized',
//       });
//     }

//     // Authenticate with Supabase
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       console.error('❌ Supabase login error:', error.message);
//       return res.status(401).json({
//         message: 'Invalid email or password',
//         error: error.message,
//       });
//     }

//     if (!data.session) {
//       return res.status(401).json({
//         message: 'Authentication failed - no session created',
//       });
//     }

//     const token = data.session.access_token;
//     if (!token) {
//       return res.status(500).json({
//         message: 'Authentication failed - no token generated',
//       });
//     }

//     // Use a simple secure flag for cookies
//     const isSecure = process.env.NODE_ENV === 'production';

//     const cookieOptions = {
//       httpOnly: true,
//       secure: isSecure,
//       sameSite: 'lax' as const,
//       path: '/',
//       maxAge: 60 * 60 * 8, // 8 hours
//       // No custom domain override for now – keeps it simple and safe
//     };

//     // Set the cookie
//     res.setHeader(
//       'Set-Cookie',
//       cookie.serialize('billing_auth', token, cookieOptions)
//     );

//     // Success response
//     return res.status(200).json({
//       message: 'Login successful',
//       success: true,
//       user: {
//         email: data.user?.email ?? email,
//         id: data.user?.id ?? null,
//       },
//     });
//   } catch (err: any) {
//     console.error('❌ Unexpected error in login API:', err);

//     return res.status(500).json({
//       message: 'An unexpected error occurred',
//       error:
//         process.env.NODE_ENV === 'development'
//           ? err?.message || 'Unknown error'
//           : 'Internal server error',
//       errorType: err?.name || 'Error',
//     });
//   }
// }


