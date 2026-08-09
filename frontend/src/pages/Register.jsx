import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';

// npm install lucide-react react-router-dom
// Renders inside AuthLayout.jsx's <Outlet /> — no outer page wrapper here.

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.2 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.2 29.5 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.3 0 10.2-2 13.8-5.3l-6.4-5.2C29.4 35.4 26.8 36 24 36c-5.3 0-9.7-3.1-11.3-7.6l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.4 5.2C40.9 36.1 44 30.6 44 24c0-1.2-.1-2.4-.4-3.5z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="15" height="18" viewBox="0 0 384 512" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM256.4 100.9c26.9-32 24.5-61.2 23.7-71.7-23.8 1.4-51.4 16.4-67.1 34.9-17.3 19.8-27.5 44.4-25.3 71.2 25.4 2 48.6-11 68.7-34.4z" />
  </svg>
);

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!agreed) {
      setError('Please agree to the Terms & Privacy Policy.');
      return;
    }

    setLoading(true);
    try {
      // TODO: replace with your real register API call
      // const res = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // });
      // const data = await res.json();
      console.log('Registering with', form);
      navigate('/chat');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="mb-2 font-display text-[26px] font-bold sm:text-[30px]">
        Create Account
      </h1>
      <p className="mx-auto mb-7 max-w-[380px] text-sm leading-relaxed text-[#9aa39a] md:mx-0">
        Sign up to get smart, personalized answers made just for you.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-[18px]">
          <label className="mb-[7px] block text-[13.5px] font-medium" htmlFor="name">
            Full name<span className="text-lime-300">*</span>
          </label>
          <div className="relative flex items-center">
            <User className="pointer-events-none absolute left-[14px] h-[17px] w-[17px] text-[#9aa39a]" />
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-[10px] border border-white/10 bg-white/[0.045] py-3 pl-10 pr-3 text-sm outline-none transition-colors placeholder:text-[#656e63] focus:border-lime-300 focus:bg-white/[0.06]"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-[18px]">
          <label className="mb-[7px] block text-[13.5px] font-medium" htmlFor="email">
            Email address<span className="text-lime-300">*</span>
          </label>
          <div className="relative flex items-center">
            <Mail className="pointer-events-none absolute left-[14px] h-[17px] w-[17px] text-[#9aa39a]" />
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-[10px] border border-white/10 bg-white/[0.045] py-3 pl-10 pr-3 text-sm outline-none transition-colors placeholder:text-[#656e63] focus:border-lime-300 focus:bg-white/[0.06]"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-[18px]">
          <label className="mb-[7px] block text-[13.5px] font-medium" htmlFor="password">
            Password<span className="text-lime-300">*</span>
          </label>
          <div className="relative flex items-center">
            <Lock className="pointer-events-none absolute left-[14px] h-[17px] w-[17px] text-[#9aa39a]" />
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="w-full rounded-[10px] border border-white/10 bg-white/[0.045] py-3 pl-10 pr-9 text-sm outline-none transition-colors placeholder:text-[#656e63] focus:border-lime-300 focus:bg-white/[0.06]"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-[14px] text-[#9aa39a] hover:text-[#f3f5ee]"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-[17px] w-[17px]" /> : <Eye className="h-[17px] w-[17px]" />}
            </button>
          </div>
        </div>

        <div className="mb-[18px]">
          <label className="mb-[7px] block text-[13.5px] font-medium" htmlFor="confirmPassword">
            Confirm password<span className="text-lime-300">*</span>
          </label>
          <div className="relative flex items-center">
            <Lock className="pointer-events-none absolute left-[14px] h-[17px] w-[17px] text-[#9aa39a]" />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirm ? 'text' : 'password'}
              className="w-full rounded-[10px] border border-white/10 bg-white/[0.045] py-3 pl-10 pr-9 text-sm outline-none transition-colors placeholder:text-[#656e63] focus:border-lime-300 focus:bg-white/[0.06]"
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-[14px] text-[#9aa39a] hover:text-[#f3f5ee]"
              onClick={() => setShowConfirm((v) => !v)}
              aria-label={showConfirm ? 'Hide password' : 'Show password'}
            >
              {showConfirm ? <EyeOff className="h-[17px] w-[17px]" /> : <Eye className="h-[17px] w-[17px]" />}
            </button>
          </div>
        </div>

        <div className="mb-[22px] mt-1 flex flex-wrap items-center justify-center gap-2 text-[13.5px] md:justify-start">
          <label className="flex cursor-pointer select-none items-center gap-2 text-[#9aa39a]">
            <input
              type="checkbox"
              className="h-[15px] w-[15px] cursor-pointer accent-lime-300"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I agree to the Terms &amp; Privacy Policy
          </label>
        </div>

        {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-lime-300 py-[13px] text-[15px] font-semibold text-[#0a0d07] transition hover:bg-lime-400 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={loading}
        >
          <Sparkles size={16} />
          {loading ? 'Creating account...' : 'Sign up'}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs text-[#9aa39a]">
        <span className="h-px flex-1 bg-white/10" />
        Or continue with
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-white/[0.03] py-[11px] text-[13.5px] font-medium transition hover:bg-white/[0.07]"
        >
          <GoogleIcon /> Google
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-white/[0.03] py-[11px] text-[13.5px] font-medium transition hover:bg-white/[0.07]"
        >
          <AppleIcon /> Apple
        </button>
      </div>

      <p className="mt-6 text-center text-[13.5px] text-[#9aa39a]">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-lime-300 hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
}