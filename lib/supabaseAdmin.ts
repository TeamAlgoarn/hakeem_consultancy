// lib/supabaseAdmin.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Log configuration
console.log('🔍 Supabase Admin Configuration:', {
  hasUrl: !!supabaseUrl,
  hasServiceKey: !!supabaseServiceKey,
  urlPrefix: supabaseUrl ? supabaseUrl.substring(0, 30) + '...' : 'MISSING',
  serviceKeyLength: supabaseServiceKey?.length || 0,
});

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("❌ Missing Supabase Admin environment variables:", {
    NEXT_PUBLIC_SUPABASE_URL: supabaseUrl ? "SET" : "MISSING",
    SUPABASE_SERVICE_ROLE_KEY: supabaseServiceKey ? "SET" : "MISSING",
  });
}

export const supabaseAdmin =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      })
    : null;