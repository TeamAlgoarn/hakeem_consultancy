// pages/billing/reset-password.tsx
import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabaseClient";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isValidSession, setIsValidSession] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      if (!supabase) {
        setError("Configuration error - please contact support");
        setLoading(false);
        return;
      }

      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          console.error("Session error:", sessionError);
          setError("Invalid or expired reset link");
          setLoading(false);
          return;
        }

        if (!session) {
          setError("Invalid or expired reset link. Please request a new password reset.");
          setLoading(false);
          return;
        }

        console.log("✅ Valid recovery session found");
        setIsValidSession(true);
        setLoading(false);

      } catch (err: any) {
        console.error("Error checking session:", err);
        setError("Failed to validate reset link");
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!supabase) {
      setError("Configuration error");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (updateError) {
        throw updateError;
      }

      console.log("✅ Password updated successfully");
      
      await supabase.auth.signOut();

      alert("Password updated successfully! Please log in with your new password.");
      router.push("/billing/login");

    } catch (err: any) {
      console.error("Password update error:", err);
      setError(err.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
          <p className="text-center text-gray-600">Loading reset form...</p>
        </div>
      </div>
    );
  }

  if (!isValidSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
          <h1 className="text-xl font-semibold mb-4 text-red-600">Invalid Reset Link</h1>
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 mb-4 rounded">
            {error}
          </div>
          <button
            onClick={() => router.push("/billing/login")}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4">Reset Password</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">New Password</label>
            <input
              type="password"
              className="w-full mt-1 border rounded-lg px-3 py-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={6}
              disabled={loading}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full mt-1 border rounded-lg px-3 py-2"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              minLength={6}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
}






// import { useEffect, useState, FormEvent } from "react";
// import { useRouter } from "next/router";

// export default function ResetPasswordPage() {
//   const router = useRouter();
//   const [newPassword, setNewPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [accessToken, setAccessToken] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const hash = window.location.hash;

//     if (!hash) {
//       setError("Invalid reset link");
//       setLoading(false);
//       return;
//     }

//     const params = new URLSearchParams(hash.substring(1));
//     const token = params.get("access_token");
//     const type = params.get("type");

//     if (!token || type !== "recovery") {
//       setError("Invalid or expired reset link");
//       setLoading(false);
//       return;
//     }

//     setAccessToken(token);
//     setLoading(false);
//   }, []);

//   async function handleSubmit(e: FormEvent) {
//     e.preventDefault();
//     setError("");

//     if (newPassword.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     if (newPassword !== confirm) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const res = await fetch("/api/billing/update-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           accessToken,
//           newPassword,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to reset password");
//       }

//       alert("Password updated successfully!");
//       router.push("/billing/login");
//     } catch (err: any) {
//       setError(err.message);
//     }
//   }

//   if (loading) {
//     return <p>Loading reset form…</p>;
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">

//         <h1 className="text-xl font-semibold mb-4">Reset Password</h1>

//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 p-3 mb-4 rounded">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <div>
//             <label className="text-sm font-medium">New Password</label>
//             <input
//               type="password"
//               className="w-full mt-1 border rounded-lg px-3 py-2"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Confirm Password</label>
//             <input
//               type="password"
//               className="w-full mt-1 border rounded-lg px-3 py-2"
//               value={confirm}
//               onChange={(e) => setConfirm(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg"
//           >
//             Update password
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }
