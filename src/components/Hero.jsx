import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-white via-[#E3F2FD] to-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#0A84FF] animate-pulse" />
            <span className="text-sm text-slate-600">Smart. Secure. Simplified Testing.</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            RightTick
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] to-indigo-500">AI‑Powered Online Examinations</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-xl">
            A modern platform for secure, AI‑proctored exams across MCQs, theory and coding — built for students, admins and invigilators.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/student" className="px-5 py-3 rounded-xl bg-[#0A84FF] text-white shadow-lg shadow-[#0A84FF]/30 hover:shadow-[#0A84FF]/40 transition">Student</a>
            <a href="/admin" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">Admin</a>
            <a href="/invigilator" className="px-5 py-3 rounded-xl bg-white text-slate-900 shadow hover:shadow-md transition">Invigilator</a>
          </div>
        </div>
        <div className="relative h-[420px] rounded-2xl shadow-xl ring-1 ring-black/5 bg-white/60 backdrop-blur">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-transparent to-white/0" />
        </div>
      </div>
    </section>
  )
}