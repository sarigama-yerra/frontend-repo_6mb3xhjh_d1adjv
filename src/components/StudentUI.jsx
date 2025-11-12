import { useState } from 'react'
import { Play, WebcamIcon, Clock, Shield, AlertTriangle } from 'lucide-react'

export default function StudentUI() {
  const [joined, setJoined] = useState(false)
  const [started, setStarted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F5F9FF] to-white">
      {!joined ? (
        <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Join Your Test</h2>
            <p className="text-slate-600">Enter your details to join the secure AI‑proctored exam.</p>
            <form onSubmit={(e)=>{e.preventDefault(); setJoined(true)}} className="grid gap-4">
              <input required placeholder="Full Name" className="h-12 rounded-xl px-4 bg-white shadow border border-slate-100 outline-none focus:ring-2 focus:ring-[#0A84FF]" />
              <input required placeholder="Student ID" className="h-12 rounded-xl px-4 bg-white shadow border border-slate-100 outline-none focus:ring-2 focus:ring-[#0A84FF]" />
              <input required placeholder="Test Code" className="h-12 rounded-xl px-4 bg-white shadow border border-slate-100 outline-none focus:ring-2 focus:ring-[#0A84FF]" />
              <button className="h-12 rounded-xl bg-[#0A84FF] text-white font-semibold shadow-lg shadow-[#0A84FF]/30 hover:shadow-[#0A84FF]/40 flex items-center justify-center gap-2"><Play size={18}/> Join Test</button>
            </form>
            <div className="grid grid-cols-3 gap-4 text-slate-600">
              <div className="flex items-center gap-2"><WebcamIcon size={18}/> AI Proctor</div>
              <div className="flex items-center gap-2"><Clock size={18}/> Timed</div>
              <div className="flex items-center gap-2"><Shield size={18}/> Secure</div>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-white to-[#E3F2FD] p-8 shadow-xl">
            <div className="h-64 rounded-xl bg-slate-900/90 text-white grid place-items-center">
              <p className="opacity-80">AI Security Illustration</p>
            </div>
          </div>
        </div>
      ) : !started ? (
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="rounded-2xl bg-white shadow-xl p-8 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-2xl font-bold">Sample Test — Algorithms</h3>
              <p className="text-slate-600">Duration: 60 minutes</p>
            </div>
            <div className="flex items-center md:justify-end">
              <button onClick={()=>setStarted(true)} className="h-12 px-6 rounded-xl bg-[#0A84FF] text-white font-semibold shadow-lg shadow-[#0A84FF]/30">Start Test</button>
            </div>
          </div>
        </div>
      ) : (
        <ExamInterface />
      )}
    </div>
  )
}

function ExamInterface(){
  return (
    <div className="h-screen w-full grid grid-cols-12 bg-white">
      <div className="col-span-2 border-r bg-[#F7FAFF] p-4 space-y-2 overflow-y-auto">
        {Array.from({length:20}).map((_,i)=> (
          <button key={i} className="w-full h-10 rounded-lg bg-white shadow text-slate-700 hover:ring-2 hover:ring-[#0A84FF]">Q{i+1}</button>
        ))}
      </div>
      <div className="col-span-7 p-6 space-y-4 overflow-y-auto">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h4 className="font-semibold mb-2">MCQ — Choose the correct option</h4>
          <p className="text-slate-700">Which of the following sorts has average time complexity O(n log n)?</p>
          <div className="mt-4 grid gap-3">
            {["Bubble Sort","Merge Sort","Insertion Sort","Selection Sort"].map((o)=> (
              <label key={o} className="flex items-center gap-3 rounded-xl border p-3 hover:border-[#0A84FF]">
                <input type="radio" name="mcq" />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="rounded-xl border bg-slate-900 p-4 shadow-sm">
          <div className="flex items-center justify-between text-white">
            <h4 className="font-semibold">Coding — Two Sum</h4>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-lg bg-slate-800">Run</button>
              <button className="px-3 py-1 rounded-lg bg-[#0A84FF]">Submit</button>
            </div>
          </div>
          <div className="mt-3 h-48 rounded-lg bg-black/50 text-green-400 font-mono text-sm p-3">
            // Monaco‑style editor placeholder
          </div>
        </div>
      </div>
      <div className="col-span-3 p-4 space-y-4 border-l bg-[#F7FAFF]">
        <div className="rounded-xl bg-white p-3 shadow">
          <div className="text-sm text-slate-600">Webcam</div>
          <div className="mt-2 h-32 rounded-lg bg-black/80" />
        </div>
        <div className="rounded-xl bg-white p-3 shadow">
          <div className="flex items-center justify-between"><span className="text-sm text-slate-600">Timer</span><span className="font-semibold">59:48</span></div>
          <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
            <div className="h-2 rounded-full bg-[#0A84FF] w-3/4" />
          </div>
        </div>
        <div className="rounded-xl bg-white p-3 shadow">
          <div className="flex items-center gap-2 text-amber-600"><AlertTriangle size={16}/> Proctor Alerts</div>
          <div className="mt-2 space-y-2 text-sm">
            <div className="p-2 rounded-lg bg-amber-50 border border-amber-200">Eye movement detected</div>
            <div className="p-2 rounded-lg bg-amber-50 border border-amber-200">Tab switch detected</div>
          </div>
        </div>
        <button className="w-full h-12 rounded-xl bg-emerald-600 text-white font-semibold">Submit Test</button>
      </div>
    </div>
  )
}