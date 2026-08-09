import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember me:", rememberMe);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-md">

        {/* Logo / Orb */}
        <div className="flex justify-center mb-8">

          <div className="relative w-24 h-24 flex items-center justify-center">

            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-lime-400/20 blur-xl" />

            {/* Orb */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-lime-200 via-lime-500 to-lime-950 shadow-[0_0_40px_rgba(190,242,100,0.5)] border border-lime-300/50">

              {/* Inner Orb */}
              <div className="absolute inset-3 rounded-full bg-black/60" />

            </div>

            {/* Orbit Rings */}
            <div className="absolute inset-[-8px] rounded-full border border-lime-400/20" />

            <div className="absolute inset-[-18px] rounded-full border border-lime-400/10" />

          </div>

        </div>

        {/* Heading */}
        <div className="text-center mb-8">

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Welcome Back!
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm mx-auto">
            Sign in to access smart, personalized
            <br className="hidden sm:block" />
            travel plans made for you.
          </p>

        </div>

        {/* Login Card */}
        <div className="relative rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>

              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email address*
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                required
                className="
                  w-full
                  h-12
                  px-4
                  rounded-xl
                  bg-black/60
                  border border-white/15
                  text-white
                  placeholder:text-gray-600
                  outline-none
                  transition
                  focus:border-lime-400/60
                  focus:ring-2
                  focus:ring-lime-400/10
                "
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-medium text-gray-200 mb-2">
                Password*
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="@Sn123hsn#"
                  required
                  className="
                    w-full
                    h-12
                    px-4
                    pr-12
                    rounded-xl
                    bg-black/60
                    border border-white/15
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    transition
                    focus:border-lime-400/60
                    focus:ring-2
                    focus:ring-lime-400/10
                  "
                />

                {/* Password Toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    hover:text-white
                    transition
                  "
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "◉" : "◌"}
                </button>

              </div>

            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between gap-4">

              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="
                    w-4
                    h-4
                    rounded
                    accent-lime-400
                    cursor-pointer
                  "
                />

                <span className="text-sm text-gray-400">
                  Remember me
                </span>

              </label>

              <Link
                to="/forgot-password"
                className="
                  text-sm
                  text-gray-300
                  hover:text-lime-400
                  transition
                  whitespace-nowrap
                "
              >
                Forgot Password?
              </Link>

            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="
                w-full
                h-12
                rounded-full
                bg-lime-300
                hover:bg-lime-200
                active:scale-[0.98]
                text-black
                font-semibold
                transition-all
                duration-200
                shadow-[0_0_25px_rgba(190,242,100,0.15)]
              "
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-lg">✣</span>
                Sign in
              </span>
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">

            <div className="h-px bg-white/10 flex-1" />

            <span className="text-sm text-gray-500 whitespace-nowrap">
              Or continue with
            </span>

            <div className="h-px bg-white/10 flex-1" />

          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">

            {/* Google */}
            <button
              type="button"
              className="
                h-12
                rounded-full
                border border-white/10
                bg-black/30
                hover:bg-white/5
                transition
                flex
                items-center
                justify-center
                gap-2
                text-gray-200
              "
            >
              <span className="font-bold text-base">G</span>
              <span>Google</span>
            </button>

            {/* Apple */}
            <button
              type="button"
              className="
                h-12
                rounded-full
                border border-white/10
                bg-black/30
                hover:bg-white/5
                transition
                flex
                items-center
                justify-center
                gap-2
                text-gray-200
              "
            >
              <span className="text-lg">●</span>
              <span>Apple</span>
            </button>

          </div>

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-8">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="
                text-lime-300
                hover:text-lime-200
                font-medium
                transition
              "
            >
              Sign up
            </Link>

          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;