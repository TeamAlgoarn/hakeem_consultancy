
// import { useEffect, useState, FormEvent } from "react";
// import { useRouter } from "next/router";
// import { supabase } from "../../lib/supabaseClient";

// export default function ResetPasswordPage() {
//   const router = useRouter();
//   const [newPassword, setNewPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [checking, setChecking] = useState(true);
//   const [canReset, setCanReset] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [debugInfo, setDebugInfo] = useState("");

//   useEffect(() => {
//     async function checkSession() {
//       console.log("=== RESET PASSWORD PAGE LOADED ===");
      
//       if (!supabase) {
//         console.error("❌ Supabase client not initialized");
//         setDebugInfo("Supabase client not initialized");
//         setCanReset(false);
//         setChecking(false);
//         return;
//       }

//       // Log the current URL and hash
//       const currentURL = window.location.href;
//       const hash = window.location.hash;
//       console.log("📍 Current URL:", currentURL);
//       console.log("🔗 URL Hash:", hash);
//       setDebugInfo(`URL: ${currentURL}\nHash: ${hash || 'No hash'}`);

//       // Wait a bit for Supabase to auto-process the hash
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       // Check for session
//       const { data, error } = await supabase.auth.getSession();
      
//       console.log("👤 Session data:", data.session);
//       console.log("⚠️ Session error:", error);

//       if (data?.session) {
//         console.log("✅ Valid session found!");
//         setCanReset(true);
//         setDebugInfo(`Valid session found for: ${data.session.user?.email}`);
//       } else if (hash && (hash.includes("access_token") || hash.includes("type=recovery"))) {
//         console.log("🔄 Hash detected but no session yet, retrying...");
//         setDebugInfo(`Hash detected: ${hash.substring(0, 50)}...\nWaiting for session...`);
        
//         // Wait longer and try again
//         await new Promise(resolve => setTimeout(resolve, 1500));
//         const { data: retryData } = await supabase.auth.getSession();
        
//         if (retryData?.session) {
//           console.log("✅ Session found on retry!");
//           setCanReset(true);
//           setDebugInfo(`Valid session found on retry for: ${retryData.session.user?.email}`);
//         } else {
//           console.log("❌ No session after retry");
//           setCanReset(false);
//           setDebugInfo("Hash present but session could not be established");
//         }
//       } else {
//         console.log("❌ No session and no hash - invalid link");
//         setCanReset(false);
//         setDebugInfo("No valid session or recovery token found");
//       }
      
//       setChecking(false);
//     }

//     checkSession();
//   }, []);

//   async function handleSubmit(e: FormEvent) {
//     e.preventDefault();

//     if (newPassword.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     if (newPassword !== confirm) {
//       alert("Passwords do not match");
//       return;
//     }

//     if (!supabase) {
//       console.error("Supabase client not initialized");
//       alert("Server error. Please try again later.");
//       return;
//     }

//     try {
//       setSaving(true);
//       console.log("🔄 Updating password...");

//       const { error } = await supabase.auth.updateUser({
//         password: newPassword,
//       });

//       if (error) {
//         console.error("❌ Password update error:", error);
//         alert(error.message || "Failed to reset password");
//         return;
//       }

//       console.log("✅ Password updated successfully");
//       alert("Password updated successfully. Please login again.");
      
//       // Sign out the user after password reset
//       await supabase.auth.signOut();
      
//       router.push("/billing/login");
//     } catch (err) {
//       console.error("❌ Exception during password update:", err);
//       alert("An error occurred while updating password");
//     } finally {
//       setSaving(false);
//     }
//   }

//   if (checking) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 text-gray-900">
//         <div className="text-center">
//           <p className="text-gray-600 text-sm mb-4">Checking reset link…</p>
//           <pre className="text-xs text-left text-gray-400 bg-gray-100 p-3 rounded max-w-md overflow-auto">
//             {debugInfo}
//           </pre>
//         </div>
//       </div>
//     );
//   }

//   if (!canReset) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 text-gray-900">
//         <div className="bg-white shadow-md rounded-2xl p-6 max-w-md">
//           <h1 className="text-lg font-semibold mb-2 text-gray-900">
//             Invalid or expired link
//           </h1>
//           <p className="text-sm text-gray-600 mb-4">
//             Please go back to the login page and request a new password reset email.
//           </p>
          
//           {/* Debug info */}
//           <details className="mb-4 text-xs">
//             <summary className="cursor-pointer text-gray-500 hover:text-gray-700">
//               Debug Info (click to expand)
//             </summary>
//             <pre className="mt-2 text-xs text-gray-400 bg-gray-100 p-3 rounded overflow-auto">
//               {debugInfo}
//             </pre>
//           </details>
          
//           <button
//             onClick={() => router.push("/billing/login")}
//             className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
//           >
//             Back to login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
//         <h1 className="text-xl font-semibold text-gray-900 mb-1">
//           Reset Password
//         </h1>
//         <p className="text-sm text-gray-600 mb-4">
//           Enter a new password for your admin account.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               New password
//             </label>
//             <input
//               type="password"
//               className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               placeholder="New password"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm password
//             </label>
//             <input
//               type="password"
//               className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
//               value={confirm}
//               onChange={(e) => setConfirm(e.target.value)}
//               placeholder="Repeat new password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={saving}
//             className="w-full mt-2 rounded-lg bg-indigo-600 text-white py-2 text-sm font-medium hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
//           >
//             {saving ? "Updating…" : "Update password"}
//           </button>
//         </form>
        
//       </div>
//     </div>
//   );
// }

import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/router";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [checking, setChecking] = useState(true);
  const [canReset, setCanReset] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    async function checkResetToken() {
      console.log("=== RESET PASSWORD PAGE LOADED ===");
      
      // Get the hash from URL (contains access_token from Supabase)
      const hash = window.location.hash;
      console.log("🔗 URL Hash:", hash);

      if (!hash) {
        console.log("❌ No hash in URL");
        setCanReset(false);
        setChecking(false);
        return;
      }

      // Parse the hash to get access_token
      const params = new URLSearchParams(hash.substring(1)); // Remove '#'
      const token = params.get('access_token');
      const type = params.get('type');

      console.log("🔍 Token type:", type);
      console.log("🔑 Token present:", !!token);

      if (!token || type !== 'recovery') {
        console.log("❌ Invalid or missing recovery token");
        setCanReset(false);
        setChecking(false);
        return;
      }

      console.log("✅ Valid recovery token found");
      setAccessToken(token);
      setCanReset(true);
      setChecking(false);
    }

    checkResetToken();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirm) {
      setError("Passwords do not match");
      return;
    }

    if (!accessToken) {
      setError("Invalid reset token");
      return;
    }

    try {
      setSaving(true);
      console.log("🔄 Updating password...");

      const res = await fetch("/api/billing/update-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          accessToken,
          newPassword 
        }),
      });

      let data;
      const contentType = res.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        console.error("❌ Non-JSON response:", text);
        throw new Error("Server returned an invalid response");
      }

      if (!res.ok) {
        console.error("❌ Password update failed:", data);
        throw new Error(data?.message || data?.error || "Failed to reset password");
      }

      console.log("✅ Password updated successfully");
      alert("Password updated successfully. Please login again.");
      
      router.push("/billing/login");
    } catch (err: any) {
      console.error("❌ Exception during password update:", err);
      setError(err.message || "An error occurred while updating password");
    } finally {
      setSaving(false);
    }
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-4">Checking reset link…</p>
        </div>
      </div>
    );
  }

  if (!canReset) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white shadow-md rounded-2xl p-6 max-w-md">
          <h1 className="text-lg font-semibold mb-2 text-gray-900">
            Invalid or expired link
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Please go back to the login page and request a new password reset email.
          </p>
          
          <button
            onClick={() => router.push("/billing/login")}
            className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
          >
            Back to login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold text-gray-900 mb-1">
          Reset Password
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Enter a new password for your admin account.
        </p>

        {/* Error message */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setError("");
              }}
              placeholder="New password (min 6 characters)"
              disabled={saving}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
                setError("");
              }}
              placeholder="Repeat new password"
              disabled={saving}
              required
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full mt-2 rounded-lg bg-indigo-600 text-white py-2 text-sm font-medium hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? "Updating…" : "Update password"}
          </button>
        </form>
      </div>
    </div>
  );
}