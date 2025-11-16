// pages/api/billing/update-password.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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

  // Validate input
  if (!accessToken || !newPassword) {
    console.log('❌ Missing accessToken or newPassword');
    return res.status(400).json({ message: 'Access token and new password are required' });
  }

  if (newPassword.length < 6) {
    console.log('❌ Password too short');
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }

  // Check if Supabase is configured
  if (!supabaseUrl) {
    console.error('❌ NEXT_PUBLIC_SUPABASE_URL not set');
    return res.status(500).json({ 
      message: 'Server configuration error',
      error: 'Supabase URL not configured'
    });
  }

  if (!supabaseAnonKey) {
    console.error('❌ NEXT_PUBLIC_SUPABASE_ANON_KEY not set');
    return res.status(500).json({ 
      message: 'Server configuration error',
      error: 'Supabase anon key not configured'
    });
  }

  try {
    // Create Supabase client with the user's access token
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    });

    console.log('🔄 Updating password with user token...');

    // Update the user's password (user can update their own password with valid recovery token)
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      console.error('❌ Failed to update password:', error.message);
      return res.status(400).json({ 
        message: error.message || 'Failed to update password',
        error: error.message 
      });
    }

    console.log('✅ Password updated successfully');

    // Return success response
    return res.status(200).json({ 
      message: 'Password updated successfully',
      success: true 
    });

  } catch (err: any) {
    console.error('❌ Unexpected error in update password API:', err);
    return res.status(500).json({ 
      message: 'An unexpected error occurred',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
}