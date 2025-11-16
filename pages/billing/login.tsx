
import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabaseClient";

export default function BillingLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Remove the useEffect that was interfering with the redirect
  // Supabase will handle the redirect directly to /billing/reset-password

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

  async function handleResetPassword(e: React.MouseEvent) {
    e.preventDefault();
    if (!email) {
      alert("Please enter your admin email first");
      return;
    }
    
    if (!supabase) {
      console.error("Supabase client not initialized");
      alert("Server error. Please try again later.");
      return;
    }

    try {
      setIsResetting(true);

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "https://www.studyvisum.com/billing/reset-password"
      });

      if (error) {
        console.error(error);
        alert(error.message || "Failed to send reset link");
        return;
      }

      alert("Password reset email sent. Please check your inbox.");
    } catch (err) {
      console.error(err);
      alert("An error occurred while sending reset email");
    } finally {
      setIsResetting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 text-gray-900">
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
            </div>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <div className="flex justify-end">
              <button
                  type="button"
                  onClick={handleResetPassword}
                  disabled={isResetting}
                  className="text-xs text-indigo-600 hover:text-indigo-800"
                >
                  {isResetting ? "Sending..." : "Forgot password?"}
              </button>
            </div>
          </div>

          {/* Submit */}
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