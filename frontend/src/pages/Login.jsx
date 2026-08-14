import { SignIn, UserButton, useUser } from '@clerk/react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();

  return (
    <div className="w-full max-w-md">
      {!isLoaded ? null : user ? (
        <div className="rounded-[28px] border border-white/10 bg-zinc-950/70 p-6 text-center shadow-[0_0_30px_rgba(163,230,53,0.08)]">
          <p className="text-sm uppercase tracking-[0.2em] text-lime-300">Signed in</p>
          <div className="mt-4 flex justify-center">
            <UserButton afterSignOutUrl="/login" />
          </div>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-6 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200"
          >
            Continue to Dashboard
          </button>
        </div>
      ) : (
        <div className="rounded-[28px] border border-white/10 bg-zinc-950/70 p-4 shadow-[0_0_30px_rgba(163,230,53,0.08)] backdrop-blur-md sm:p-6">
          <h1 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Welcome Back!</h1>
          <p className="mb-2 text-sm leading-6 text-zinc-400">
            Sign in to continue to your premium AI workspace.
          </p>
          <p className="mb-6 text-xs text-zinc-500">
            Having issues? See <a href="/CLERK_SETUP_GUIDE.md" target="_blank" rel="noopener noreferrer" className="text-lime-300 hover:underline">setup guide</a>
          </p>

          <SignIn
            path="/login"
            routing="path"
            signUpUrl="/register"
            forceRedirectUrl="/"
            appearance={{
              elements: {
                rootBox: 'w-full',
                card: 'bg-transparent shadow-none border-0 p-0',
                headerTitle: 'text-white text-xl font-semibold',
                headerSubtitle: 'text-zinc-400',
                socialButtonsBlockButton: 'border border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.08] transition-all',
                socialButtonsBlockButtonText: 'text-white font-medium',
                dividerLine: 'bg-white/10',
                dividerText: 'text-zinc-500',
                formFieldInput: 'bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-500 focus:bg-white/[0.08] focus:border-lime-300 transition-all',
                formButtonPrimary: 'bg-lime-300 text-black hover:bg-lime-200 font-semibold transition-all',
                footerActionLink: 'text-lime-300 hover:text-lime-200',
                footerActionText: 'text-zinc-400',
                formFieldLabel: 'text-zinc-300 font-medium',
                alertBox: 'border border-red-400/30 bg-red-950/20 rounded-lg',
                alertText: 'text-red-300 text-sm',
              },
            }}
          />
        </div>
      )}
    </div>
  );
}