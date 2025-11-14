// import { useState } from "react";

// export default function BillingLogin() {
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const [error, setError] = useState("");

//   async function submit(e: React.FormEvent) {
//     e.preventDefault();
//     setError("");

//     const r = await fetch("/api/billing/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ password }),
//     });

//     if (r.ok) {
//       window.location.href = "/billing"; // go to dashboard
//     } else {
//       setError("Incorrect password. Try again.");
//     }
//   }

//   return (
//     <div className="min-h-screen w-full relative overflow-hidden">
//       {/* Background — soft StudyVisum vibe */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#F3F5FF] via-[#F7F8FF] to-white" />
//       {/* Soft floating circles like your counselling page */}
//       <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-indigo-100/70 blur-2xl" />
//       <div className="pointer-events-none absolute top-1/3 right-10 h-28 w-28 rounded-full bg-fuchsia-100/70 blur-2xl" />
//       <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-purple-100/60 blur-2xl" />

//       {/* Content */}
//       <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
//         <div className="w-full max-w-md">
//           {/* Card */}
//           <div className="rounded-[28px] bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
//             {/* Header */}
//             <div className="flex items-center gap-3 mb-6">
//               {/* Hides automatically if logo missing */}
//               {/* <img
//                 src="/logos/studyvisum.png"
//                 alt="StudyVisum"
//                 className="h-9 w-9 object-contain"
//                 onError={(e) => ((e.currentTarget.style.display = "none"))}
//               /> */}
//               <div>
//                 <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Billing Login</h1>
//                 <p className="text-xs sm:text-sm text-gray-500">Admin access</p>
//               </div>
//             </div>

//             {/* Form */}
//             <form onSubmit={submit} className="space-y-4">
//               <label className="block">
//                 <span className="mb-2 block text-sm font-medium text-gray-700">Enter password</span>
//                 <div className="flex items-stretch rounded-2xl border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
//                   <input
//                     type={show ? "text" : "password"}
//                     className="w-full rounded-l-2xl px-4 py-3 outline-none bg-transparent text-gray-900 placeholder-gray-400"
//                     placeholder="••••••••••"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     autoFocus
//                     aria-label="Password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShow((s) => !s)}
//                     className="px-4 text-sm text-indigo-600 hover:text-indigo-700"
//                     aria-label={show ? "Hide password" : "Show password"}
//                   >
//                     {show ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </label>

//               {error && (
//                 <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 border border-red-200">
//                   {error}
//                 </p>
//               )}

//               {/* Big visible button */}
//               <button
//                 type="submit"
//                 className="w-full rounded-2xl px-4 py-3 text-white font-medium shadow-lg transition
//                            bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600
//                            hover:brightness-110 active:brightness-95"
//               >
//                 Login
//               </button>
//             </form>

//             {/* Subtle info */}
//             <div className="mt-5 text-center">
//               <p className="text-xs sm:text-sm text-gray-500">
//                 Protected area. Unauthorized access is prohibited.
//               </p>
//             </div>
//           </div>

//           {/* Footnote */}
//           <div className="mt-6 text-center text-xs text-gray-500">
//             © {new Date().getFullYear()} StudyVisum • Hakeem Consultancy Services
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








// // 'use client';

// // import { FormEvent, useState } from 'react';

// // export default function BillingLogin() {
// //   const [email, setEmail] = useState('');          // you can prefill for testing
// //   const [password, setPassword] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   async function handleSubmit(e: FormEvent) {
// //     e.preventDefault();
// //     setLoading(true);
// //     console.log('Submitting login:', { email });

// //     try {
// //       const res = await fetch('/api/billing/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       console.log('Response status:', res.status);
// //       const data = await res.json().catch(() => ({}));

// //       if (!res.ok) {
// //         console.error('Login failed:', data);
// //         alert(data.message || 'Login failed');
// //         setLoading(false);
// //         return;
// //       }

// //       alert('Login successful! Redirecting to /billing');
// //       window.location.href = '/billing'; // simple guaranteed redirect
// //     } catch (err) {
// //       console.error('Network error:', err);
// //       alert('Network error, check console');
// //       setLoading(false);
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
// //       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
// //         <h1 className="text-2xl font-semibold text-center text-gray-900 mb-1">
// //           Admin Login
// //         </h1>
// //         <p className="text-sm text-center text-gray-500 mb-6">
// //           Sign in to access the Billing Dashboard
// //         </p>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               placeholder="admin@example.com"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="********"
// //               required
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
// //           >
// //             {loading ? 'Logging in…' : 'Login'}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }







// // // pages/billing/login.tsx
// // import { useState } from "react";
// // import type { FormEvent } from "react";
// // import { useRouter } from "next/router";
// // import { supabase } from "../../lib/supabaseClient";

// // export default function BillingLogin() {
// //   const router = useRouter();

// //   const [email, setEmail] = useState("ashwinipatil38107@gmail.com"); // your admin email
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [isResetting, setIsResetting] = useState(false);

// //   async function handleSubmit(e: FormEvent) {
// //     e.preventDefault();
// //     if (!email || !password) {
// //       alert("Email and password are required");
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const res = await fetch("/api/billing/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       const data = await res.json();
// //       if (!res.ok) {
// //         throw new Error(data?.message || "Login failed");
// //       }

// //       alert("Login successful! Redirecting to Billing");
// //       router.push("/billing");
// //     } catch (err: any) {
// //       console.error(err);
// //       alert(err.message ?? "Login error");
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   // ===== Forgot password / Reset email flow =====
// //   async function handleResetPassword(e: React.MouseEvent) {
// //     e.preventDefault();
// //     if (!email) {
// //       alert("Please enter your admin email first");
// //       return;
// //     }

// //     try {
// //       setIsResetting(true);

// //       const { error } = await supabase.auth.resetPasswordForEmail(email, {
// //         redirectTo: `${window.location.origin}/billing/reset-password`,
// //       });

// //       if (error) {
// //         console.error(error);
// //         alert(error.message || "Failed to send reset link");
// //         return;
// //       }

// //       alert("Password reset email sent. Please check your inbox.");
// //     } finally {
// //       setIsResetting(false);
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
// //       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
// //         <h1 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
// //           Admin Login
// //         </h1>
// //         <p className="text-sm text-gray-500 mb-6 text-center">
// //           Sign in to access the Billing Dashboard
// //         </p>
// //      <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //         <label className="block text-sm font-medium text-gray-700 mb-1">
// //           Email
// //            </label>
// //           <input
// //               type="email"
// //               className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               placeholder="admin@example.com"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="********"
// //               required
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
// //           >
// //             {loading ? 'Logging in…' : 'Login'}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }



// pages/billing/login.tsx
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabaseClient";

export default function BillingLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("ashwinipatil38107@gmail.com"); // your admin email
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/billing/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Login failed");
      }

      alert("Login successful! Redirecting to Billing");
      router.push("/billing");
    } catch (err: any) {
      console.error(err);
      alert(err.message ?? "Login error");
    } finally {
      setLoading(false);
    }
  }

  // ===== Forgot password / Reset email flow =====
  async function handleResetPassword(e: React.MouseEvent) {
    e.preventDefault();
    if (!email) {
      alert("Please enter your admin email first");
      return;
    }

    try {
      setIsResetting(true);

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/billing/reset-password`,
      });

      if (error) {
        console.error(error);
        alert(error.message || "Failed to send reset link");
        return;
      }

      alert("Password reset email sent. Please check your inbox.");
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

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
            />
          </div>

          {/* Password + Forgot */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <button
                type="button"
                onClick={handleResetPassword}
                disabled={isResetting}
                className="text-xs text-indigo-600 hover:text-indigo-800"
              >
                {isResetting ? "Sending..." : "Forgot password?"}
              </button>
            </div>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {/* Submit */}
        {/* <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in…' : 'Login'}
          </button> */}
          <button
  type="submit"
  disabled={loading}
  className="w-full mt-4 py-3 rounded-xl text-sm font-semibold
             text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
             shadow-md hover:shadow-lg hover:brightness-110
             transition-all duration-200
             disabled:opacity-60 disabled:cursor-not-allowed"
>
  {loading ? "Logging in…" : "Login"}
</button>

        </form>
      </div>
    </div>
  );
}