// // lib/supabaseClient.ts
// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// if (!supabaseUrl || !supabaseAnonKey) {
//  console.error("Missing Supabase environment variables");
// }
// export const supabase =
//  supabaseUrl && supabaseAnonKey
//  ? createClient(supabaseUrl, supabaseAnonKey)
//  : null;

// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Log configuration status (helps debugging in production)
if (typeof window === 'undefined') {
  console.log('🔍 Supabase Client Configuration:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    urlPrefix: supabaseUrl ? supabaseUrl.substring(0, 30) + '...' : 'MISSING',
  });
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Missing Supabase environment variables:", {
    NEXT_PUBLIC_SUPABASE_URL: supabaseUrl ? "SET" : "MISSING",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: supabaseAnonKey ? "SET" : "MISSING",
  });
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;