
// import { useState, useEffect } from "react";
// import type { FormEvent } from "react";
// import { useRouter } from "next/router";
// import { supabase } from "../../lib/supabaseClient";

// export default function BillingLogin() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isResetting, setIsResetting] = useState(false);

//   // Remove the useEffect that was interfering with the redirect
//   // Supabase will handle the redirect directly to /billing/reset-password

//   async function handleSubmit(e: FormEvent) {
//     e.preventDefault();
//     if (!email || !password) {
//       alert("Email and password are required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("/api/billing/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data?.message || "Login failed");
//       }

//       alert("Login successful! Redirecting to Billing");
//       router.push("/billing");
//     } catch (err: any) {
//       console.error(err);
//       alert(err.message ?? "Login error");
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleResetPassword(e: React.MouseEvent) {
//     e.preventDefault();
//     if (!email) {
//       alert("Please enter your admin email first");
//       return;
//     }
    
//     if (!supabase) {
//       console.error("Supabase client not initialized");
//       alert("Server error. Please try again later.");
//       return;
//     }

//     try {
//       setIsResetting(true);

//       const { error } = await supabase.auth.resetPasswordForEmail(email, {
//         redirectTo: "https://www.studyvisum.com/billing/reset-password"
//       });

//       if (error) {
//         console.error(error);
//         alert(error.message || "Failed to send reset link");
//         return;
//       }

//       alert("Password reset email sent. Please check your inbox.");
//     } catch (err) {
//       console.error(err);
//       alert("An error occurred while sending reset email");
//     } finally {
//       setIsResetting(false);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 text-gray-900">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
//         <h1 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
//           Admin Login
//         </h1>
//         <p className="text-sm text-gray-500 mb-6 text-center">
//           Sign in to access the Billing Dashboard
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="admin@example.com"
//             />
//           </div>

//           {/* Password + Forgot */}
//           <div>
//             <div className="flex justify-between items-center mb-1">
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//             </div>
//             <input
//               type="password"
//               className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//             />
//             <div className="flex justify-end">
//               <button
//                   type="button"
//                   onClick={handleResetPassword}
//                   disabled={isResetting}
//                   className="text-xs text-indigo-600 hover:text-indigo-800"
//                 >
//                   {isResetting ? "Sending..." : "Forgot password?"}
//               </button>
//             </div>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full mt-4 py-3 rounded-xl text-sm font-semibold
//                        text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
//                        shadow-md hover:shadow-lg hover:brightness-110
//                        transition-all duration-200
//                        disabled:opacity-60 disabled:cursor-not-allowed"
//           >
//             {loading ? "Logging in…" : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/router";

// Debug component that only renders on client to avoid hydration issues
function DebugInfo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <details className="mt-4 text-xs">
      <summary className="cursor-pointer text-gray-500 hover:text-gray-700">
        Debug Info
      </summary>
      <pre className="mt-2 text-xs text-gray-400 bg-gray-100 p-3 rounded overflow-auto">
        Environment: {process.env.NODE_ENV}{'\n'}
        Origin: {window.location.origin}
      </pre>
    </details>
  );
}

export default function BillingLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(""); // Clear any previous errors
    
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    
    try {
      console.log("🔄 Attempting login for:", email);

      const res = await fetch("/api/billing/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log("📡 Response status:", res.status);

      // Handle different response types
      let data;
      const contentType = res.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        console.error("❌ Non-JSON response:", text);
        setError("Server returned an invalid response");
        setLoading(false);
        return;
      }

      if (!res.ok) {
        console.error("❌ Login failed:");
        console.error("Status:", res.status);
        console.error("Response data:", data);
        
        // Show the specific error message from the API
        const errorMessage = data?.message || data?.error || "Login failed";
        setError(errorMessage);
        setLoading(false);
        return;
      }

      console.log("✅ Login successful:", data);
      
      // Give the cookie time to be set
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Force a hard navigation to ensure cookie is recognized
      window.location.href = "/billing";
      
    } catch (err: any) {
      console.error("❌ Login error:", err);
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  }

  async function handleResetPassword(e: React.MouseEvent) {
    e.preventDefault();
    setError(""); // Clear any previous errors
    
    if (!email) {
      setError("Please enter your admin email first");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setIsResetting(true);
      console.log("🔄 Sending password reset email to:", email);

      const res = await fetch("/api/billing/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
        console.error("❌ Reset password failed:", data);
        throw new Error(data?.message || data?.error || "Failed to send reset link");
      }

      console.log("✅ Password reset email sent");
      
      // Show success message without alert
      setError(""); // Clear error
      
      // Create a success element temporarily
      const successMsg = document.createElement('div');
      successMsg.className = 'fixed top-4 right-4 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg shadow-lg z-50';
      successMsg.textContent = 'Password reset email sent! Please check your inbox.';
      document.body.appendChild(successMsg);
      
      // Remove after 5 seconds
      setTimeout(() => {
        successMsg.remove();
      }, 5000);
      
    } catch (err: any) {
      console.error("❌ Exception during password reset:", err);
      setError(err.message || "An error occurred while sending reset email");
    } finally {
      setIsResetting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
          Admin Login
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Sign in to access the Billing Dashboard
        </p>

        {/* Error message */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(""); // Clear error when user types
              }}
              placeholder="admin@example.com"
              disabled={loading || isResetting}
              required
            />
          </div>

          {/* Password + Forgot */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
            </div>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); // Clear error when user types
              }}
              placeholder="••••••••"
              disabled={loading || isResetting}
              required
            />
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={handleResetPassword}
                disabled={isResetting || loading}
                className="text-xs text-indigo-600 hover:text-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResetting ? "Sending..." : "Forgot password?"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || isResetting}
            className="w-full mt-4 py-3 rounded-xl text-sm font-semibold
                       text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       shadow-md hover:shadow-lg hover:brightness-110
                       transition-all duration-200
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>

        {/* Debug info in development - using useEffect to avoid hydration errors */}
        {process.env.NODE_ENV === 'development' && <DebugInfo />}
      </div>
    </div>
  );
}