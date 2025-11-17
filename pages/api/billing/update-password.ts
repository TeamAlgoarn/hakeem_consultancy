// import { NextApiRequest, NextApiResponse } from "next";
// import { createClient } from "@supabase/supabase-js";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { accessToken, newPassword } = req.body;

//   if (!accessToken || !newPassword) {
//     return res.status(400).json({ message: "Missing accessToken or newPassword" });
//   }

//   try {
//     const supabase = createClient(
//       process.env.NEXT_PUBLIC_SUPABASE_URL!,
//       process.env.SUPABASE_SERVICE_ROLE_KEY! // service role – required
//     );

//     // 1️⃣ Exchange token for a real session (v2 accepts ONLY a string)
//     const { data: sessionData, error: exchangeError } =
//       await supabase.auth.exchangeCodeForSession(accessToken);

//     if (exchangeError || !sessionData?.session) {
//       console.error("exchangeCodeForSession error:", exchangeError);
//       return res.status(400).json({ message: "Invalid or expired token" });
//     }

//     const userAccessToken = sessionData.session.access_token;

//     // 2️⃣ Update password (v2 syntax)
//     const { data, error: updateError } = await supabase.auth.updateUser(
//       {
//         password: newPassword,
//       },
//       {
//         accessToken: userAccessToken,
//       }
//     );

//     if (updateError) {
//       console.error("Password update error:", updateError);
//       return res.status(400).json({ message: updateError.message });
//     }

//     return res.status(200).json({ message: "Password reset successful" });
//   } catch (err: any) {
//     console.error("Server error:", err);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }

// pages/api/billing/update-password.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('❌ Invalid method:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { accessToken, newPassword } = req.body as { 
    accessToken?: string; 
    newPassword?: string; 
  };

  console.log('🔄 API /billing/update-password called');
  console.log('📝 Request details:', { 
    hasToken: !!accessToken, 
    tokenLength: accessToken?.length || 0,
    hasPassword: !!newPassword,
    passwordLength: newPassword?.length || 0,
    tokenPreview: accessToken ? `${accessToken.substring(0, 20)}...` : 'none'
  });

  // Validate input
  if (!accessToken || !newPassword) {
    console.log('❌ Missing accessToken or newPassword');
    return res.status(400).json({ message: 'Access token and new password are required' });
  }

  if (newPassword.length < 6) {
    console.log('❌ Password too short');
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }

  // Check if Supabase Admin is configured
  if (!supabaseAdmin) {
    console.error('❌ Supabase Admin not configured');
    return res.status(500).json({ 
      message: 'Server configuration error',
      error: 'Supabase admin client not initialized. Check SUPABASE_SERVICE_ROLE_KEY.'
    });
  }

  try {
    console.log('🔄 Step 1: Verifying access token...');

    // Get user from access token using admin client
    const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(accessToken);

    if (userError) {
      console.error('❌ Failed to verify token:', userError.message);
      return res.status(401).json({ 
        message: 'Invalid or expired reset link. Please request a new password reset email.',
        error: userError.message 
      });
    }

    if (!userData.user) {
      console.error('❌ No user found for token');
      return res.status(401).json({ 
        message: 'Invalid or expired reset link. Please request a new password reset email.',
      });
    }

    console.log('✅ Token verified for user:', userData.user.email);
    console.log('🔄 Step 2: Updating password...');

    // Update the user's password using admin API
    const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
      userData.user.id,
      { password: newPassword }
    );

    if (updateError) {
      console.error('❌ Failed to update password:', updateError.message);
      return res.status(400).json({ 
        message: 'Failed to update password',
        error: updateError.message 
      });
    }

    console.log('✅ Password updated successfully for:', userData.user.email);

    // Return success response
    return res.status(200).json({ 
      message: 'Password updated successfully',
      success: true 
    });

  } catch (err: any) {
    console.error('❌ Unexpected error in update password API:', err);
    console.error('Error stack:', err.stack);
    return res.status(500).json({ 
      message: 'An unexpected error occurred',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }
}
