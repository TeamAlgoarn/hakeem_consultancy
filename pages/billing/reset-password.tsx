import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/router";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      setError("Invalid reset link");
      setLoading(false);
      return;
    }

    const params = new URLSearchParams(hash.substring(1));
    const token = params.get("access_token");
    const type = params.get("type");

    if (!token || type !== "recovery") {
      setError("Invalid or expired reset link");
      setLoading(false);
      return;
    }

    setAccessToken(token);
    setLoading(false);
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

    try {
      const res = await fetch("/api/billing/update-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessToken,
          newPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      alert("Password updated successfully!");
      router.push("/billing/login");
    } catch (err: any) {
      setError(err.message);
    }
  }

  if (loading) {
    return <p>Loading reset form…</p>;
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
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg"
          >
            Update password
          </button>

        </form>
      </div>
    </div>
  );
}
