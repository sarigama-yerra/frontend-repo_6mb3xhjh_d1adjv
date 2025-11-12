import { useState } from 'react'
import { Smartphone, Bell, Send, Ban, Camera } from 'lucide-react'

export default function InvigilatorMobile(){
  const [tab, setTab] = useState('live')
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold"><Smartphone size={18} className="text-[#0A84FF]"/>RightTick</div>
          <div className="flex gap-2">
            <button onClick={()=>setTab('live')} className={`px-3 py-1 rounded-full ${tab==='live'?'bg-[#0A84FF] text-white':'bg-slate-100'}`}>Live</button>
            <button onClick={()=>setTab('alerts')} className={`px-3 py-1 rounded-full ${tab==='alerts'?'bg-[#0A84FF] text-white':'bg-slate-100'}`}>Alerts</button>
            <button onClick={()=>setTab('board')} className={`px-3 py-1 rounded-full ${tab==='board'?'bg-[#0A84FF] text-white':'bg-slate-100'}`}>Leaderboard</button>
          </div>
        </div>
      </header>
      {tab==='live' && <LiveView/>}
      {tab==='alerts' && <AlertsTab/>}
      {tab==='board' && <LeaderboardTab/>}
    </div>
  )
}

function LiveView(){
  return (
    <div className="max-w-md mx-auto px-4 py-4 space-y-4">
      <div className="rounded-xl border p-3 flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-500">Active Exams</div>
          <div className="font-semibold">Algorithms — ALG123</div>
        </div>
        <button className="px-3 py-2 rounded-lg bg-[#0A84FF] text-white">Open</button>
      </div>
      <div className="space-y-3">
        {Array.from({length:8}).map((_,i)=> (
          <div key={i} className="rounded-xl border p-3 flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-slate-200 grid place-items-center"><Camera size={20}/></div>
            <div className="flex-1">
              <div className="font-medium">Student {i+1}</div>
              <div className="text-xs text-slate-500">Roll 22CS10{i}</div>
            </div>
            <div className="flex gap-2">
              <button className="px-2 py-1 rounded-lg bg-amber-100 text-amber-700 inline-flex items-center gap-1"><Send size={14}/>Warn</button>
              <button className="px-2 py-1 rounded-lg bg-rose-100 text-rose-700 inline-flex items-center gap-1"><Ban size={14}/>Block</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AlertsTab(){
  return (
    <div className="max-w-md mx-auto px-4 py-4 space-y-3">
      {Array.from({length:6}).map((_,i)=> (
        <div key={i} className="rounded-xl border p-3 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center"><Bell size={18}/></div>
          <div className="flex-1">
            <div className="font-medium">Tab change detected</div>
            <div className="text-xs text-slate-500">ALG123 • Student {i+1}</div>
          </div>
          <button className="px-2 py-1 rounded-lg bg-slate-100">View</button>
        </div>
      ))}
    </div>
  )
}

function LeaderboardTab(){
  return (
    <div className="max-w-md mx-auto px-4 py-4">
      <div className="rounded-xl border overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50">
            <tr><th className="p-2">Rank</th><th>Name</th><th>Score</th><th>Integrity</th></tr>
          </thead>
          <tbody>
            {[{r:1,n:'Aarav',s:98,i:'96%'},{r:2,n:'Zoya',s:95,i:'94%'},{r:3,n:'Kabir',s:92,i:'92%'}].map(x=> (
              <tr key={x.r} className="border-t"><td className="p-2">{x.r}</td><td>{x.n}</td><td>{x.s}</td><td>{x.i}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}