import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';
import cookie from 'cookie';
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
 
  const { email, password } = req.body as { email?: string; password?: string };
 
  console.log('API /billing/login called with:', email);
 
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
if (!supabase) return res.status(500).json({ error: "Supabase not configured" });
  // Supabase email/password sign in
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
 
  if (error || !data.session) {
    console.error('Supabase login error:', error);
    return res.status(401).json({ message: 'Invalid email or password' });
  }
 
  // Put access token in a simple cookie (for middleware billing protection)
  const token = data.session.access_token;
 
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('billing_auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
    })
  );
 
  return res.status(200).json({ message: 'OK' });
}