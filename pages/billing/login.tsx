import { useState } from "react";

export default function BillingLogin() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const r = await fetch("/api/billing/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (r.ok) {
      window.location.href = "/billing"; // go to dashboard
    } else {
      setError("Incorrect password. Try again.");
    }
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background — soft StudyVisum vibe */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3F5FF] via-[#F7F8FF] to-white" />
      {/* Soft floating circles like your counselling page */}
      <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-indigo-100/70 blur-2xl" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-28 w-28 rounded-full bg-fuchsia-100/70 blur-2xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-purple-100/60 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="rounded-[28px] bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              {/* Hides automatically if logo missing */}
              {/* <img
                src="/logos/studyvisum.png"
                alt="StudyVisum"
                className="h-9 w-9 object-contain"
                onError={(e) => ((e.currentTarget.style.display = "none"))}
              /> */}
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Billing Login</h1>
                <p className="text-xs sm:text-sm text-gray-500">Admin access</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-700">Enter password</span>
                <div className="flex items-stretch rounded-2xl border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
                  <input
                    type={show ? "text" : "password"}
                    className="w-full rounded-l-2xl px-4 py-3 outline-none bg-transparent text-gray-900 placeholder-gray-400"
                    placeholder="••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoFocus
                    aria-label="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="px-4 text-sm text-indigo-600 hover:text-indigo-700"
                    aria-label={show ? "Hide password" : "Show password"}
                  >
                    {show ? "Hide" : "Show"}
                  </button>
                </div>
              </label>

              {error && (
                <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 border border-red-200">
                  {error}
                </p>
              )}

              {/* Big visible button */}
              <button
                type="submit"
                className="w-full rounded-2xl px-4 py-3 text-white font-medium shadow-lg transition
                           bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600
                           hover:brightness-110 active:brightness-95"
              >
                Login
              </button>
            </form>

            {/* Subtle info */}
            <div className="mt-5 text-center">
              <p className="text-xs sm:text-sm text-gray-500">
                Protected area. Unauthorized access is prohibited.
              </p>
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} StudyVisum • Hakeem Consultancy Services
          </div>
        </div>
      </div>
    </div>
  );
}
