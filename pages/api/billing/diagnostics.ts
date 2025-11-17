// pages/api/billing/diagnostics.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const diagnostics = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    
    environmentVariables: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? 
        `${process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 40)}...` : 
        '❌ NOT SET',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 
        `SET (length: ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.length})` : 
        '❌ NOT SET',
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? 
        `SET (length: ${process.env.SUPABASE_SERVICE_ROLE_KEY.length})` : 
        '❌ NOT SET',
    },
    
    clients: {
      supabaseClient: {
        initialized: !!supabase,
        type: supabase ? 'initialized' : 'null',
      },
      supabaseAdmin: {
        initialized: !!supabaseAdmin,
        type: supabaseAdmin ? 'initialized' : 'null',
      },
    },
    
    deployment: {
      vercel: !!process.env.VERCEL,
      vercelEnv: process.env.VERCEL_ENV || 'not-vercel',
      vercelUrl: process.env.VERCEL_URL || 'not-set',
      netlify: !!process.env.NETLIFY,
    },
    
    request: {
      host: req.headers.host,
      protocol: req.headers['x-forwarded-proto'] || 'unknown',
      origin: req.headers.origin || 'not-set',
    },
    
    allEnvKeys: Object.keys(process.env).filter(key => 
      key.includes('SUPABASE') || key.startsWith('NEXT_PUBLIC_')
    ),
  };

  console.log('🔍 Diagnostics:', JSON.stringify(diagnostics, null, 2));

  return res.status(200).json(diagnostics);
}