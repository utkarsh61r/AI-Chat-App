import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Sparkles, ArrowLeft } from 'lucide-react';

// npm install lucide-react react-router-dom
// Renders inside AuthLayout.jsx's <Outlet /> — no outer page wrapper here.

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setLoading(true);
    try {
      // TODO: replace with your real "send reset link" API call
      // const res = await fetch('/api/auth/forgot-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      // const data = await res.json();
      console.log('Sending reset link to', email);
      setSent(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <>
        <h1 className="mb-2 font-display text-[22px] font-bold sm:text-[26px] md:text-[30px]">
          Check your inbox
        </h1>
        <p className="mx-auto mb-7 max-w-[380px] text-xs sm:text-sm leading-relaxed text-[#9aa39a] md:mx-0">
          We've sent a password reset link to <span className="text-[#f3f5ee]">{email}</span>.
          It'll expire in 15 minutes.
        </p>

        <Link
          to="/login"
          className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-lime-300 py-[13px] text-[15px] font-semibold text-[#0a0d07] transition hover:bg-lime-400 active:scale-[0.98]"
        >
          <ArrowLeft size={16} />
          Back to sign in
        </Link>

        <p className="mt-6 text-center text-[13.5px] text-[#9aa39a]">
          Didn't get it?{' '}
          <button
            type="button"
            onClick={() => setSent(false)}
            className="font-medium text-lime-300 hover:underline"
          >
            Try a different email
          </button>
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className="mb-2 font-display text-[22px] font-bold sm:text-[26px] md:text-[30px]">
        Forgot Password?
      </h1>
      <p className="mx-auto mb-7 max-w-[380px] text-xs sm:text-sm leading-relaxed text-[#9aa39a] md:mx-0">
        No worries — enter your email and we'll send you a link to reset it.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-[22px]">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {error && <p className="mb-3 text-xs text-red-400">{error}</p>}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-lime-300 py-[13px] text-[15px] font-semibold text-[#0a0d07] transition hover:bg-lime-400 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={loading}
        >
          <Sparkles size={16} />
          {loading ? 'Sending link...' : 'Send reset link'}
        </button>
      </form>

      <p className="mt-6 flex items-center justify-center gap-1 text-center text-[13.5px] text-[#9aa39a] md:justify-start">
        <ArrowLeft size={14} />
        <Link to="/login" className="font-medium text-lime-300 hover:underline">
          Back to sign in
        </Link>
      </p>
    </>
  );
}