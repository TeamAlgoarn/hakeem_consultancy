// // //supabaseServerClient.ts 
// // import { createClient } from '@supabase/supabase-js';
 
// // const supabaseUrl = process.env.SUPABASE_URL!;
// // const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
 
// // export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey); 
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl =
//   process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;

// const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// if (!supabaseUrl) {
//   throw new Error("supabaseUrl is required.");
// }

// if (!supabaseServiceRoleKey) {
//   throw new Error("SUPABASE_SERVICE_ROLE_KEY is required.");
// }

// export const supabaseServer = createClient(
//   supabaseUrl,
//   supabaseServiceRoleKey
// );

import { createClient } from "@supabase/supabase-js";

export function getSupabaseServer() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;

  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL) in environment variables.");
  }

  if (!supabaseServiceRoleKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY in environment variables.");
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey);
}
