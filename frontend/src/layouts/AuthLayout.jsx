import { Outlet } from 'react-router-dom';

// Wraps every auth page (Login, Register, ForgotPassword) in the
// dark card + glowing orb shell. Add this as a parent route in
// AppRoutes.jsx, e.g.:
//
// <Route element={<AuthLayout />}>
//   <Route path="/login" element={<Login />} />
//   <Route path="/register" element={<Register />} />
//   <Route path="/forgot-password" element={<ForgotPassword />} />
// </Route>

export default function AuthLayout() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#060a05] font-sans text-[#f3f5ee] flex items-center justify-center p-5 sm:p-8">
      {/* decorative dot grid, top-left corner */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-64 w-64"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          maskImage:
            'radial-gradient(circle at top left, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(circle at top left, black 30%, transparent 75%)',
        }}
      />

      <div className="relative z-10 flex w-full max-w-[980px] flex-col items-center gap-8 rounded-[22px] border border-white/10 bg-white/[0.025] p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-10 md:flex-row md:gap-14 md:p-14">
        {/* orb visual */}
        <div className="flex w-full flex-none items-center justify-center md:w-[220px]">
          <div className="relative h-[140px] w-[140px] md:h-[200px] md:w-[200px]">
            <div className="absolute -inset-[18px] rounded-full border border-lime-300/10 animate-ringSpin" />
            <div className="h-full w-full animate-orbPulse rounded-full bg-[radial-gradient(circle_at_35%_30%,#1c2b0f_0%,#070a05_70%)]" />
          </div>
        </div>

        {/* page-specific content renders here */}
        <div className="w-full min-w-0 flex-1 text-center md:text-left">
          <Outlet />
        </div>
      </div>
    </div>
  );
}