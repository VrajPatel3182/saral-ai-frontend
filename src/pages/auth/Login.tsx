import { useState } from "react";
import { useDispatch } from "react-redux";
import { ArrowRight, Loader2, Mail, Sparkles } from "lucide-react";
import { loginStart, loginSuccess } from "../../store/auth/authSlice";
import { useNavigate } from "react-router";
import { loginApi } from "../../services/auth.api";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      dispatch(loginStart());

      const data = await loginApi({ email });

      dispatch(
        loginSuccess({
          token: data.token,
          user: data.user,
        })
      );

      navigate("/dashboard", { replace: true });
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border p-8"
      >
        <div className="text-center mb-8">
          <Sparkles className="mx-auto mb-4 w-10 h-10 text-primary" />
          <h2 className="text-2xl font-bold">Welcome to SARAL AI</h2>
          <p className="text-sm text-gray-500 mt-1">
            Login to access your workspace
          </p>
        </div>

        <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
          Work Email
        </label>
        <div className="relative mb-5">
          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {error && (
          <div className="text-sm text-red-500 mb-4">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-indigo-700 flex items-center justify-center gap-2 transition"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Signing in…
            </>
          ) : (
            <>
              Continue <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center mt-6">
          Secure login • SOC2 compliant
        </p>
      </form>
    </div>
  );
}
