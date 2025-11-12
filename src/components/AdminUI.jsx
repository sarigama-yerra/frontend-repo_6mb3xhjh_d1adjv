import { BarChart3, Users, Clock, ShieldCheck, Upload, Plus, Edit, Trash2, ArrowRight } from 'lucide-react'

export default function AdminUI(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">RightTick Admin</h2>
          <button className="px-4 py-2 rounded-xl bg-[#0A84FF] text-white">Create Test</button>
        </header>
        <section className="grid md:grid-cols-4 gap-4">
          <Card icon={<BarChart3/>} title="Total Tests" value="24" />
          <Card icon={<Users/>} title="Students" value="1,240" />
          <Card icon={<Clock/>} title="Active Exams" value="3" />
          <Card icon={<ShieldCheck/>} title="Avg Integrity" value="92%" />
        </section>
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="font-semibold mb-4">Average Score per Subject</h3>
            <div className="h-56 rounded-xl bg-slate-800" />
          </div>
          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="font-semibold mb-4">Cheating Trends</h3>
            <div className="h-56 rounded-xl bg-slate-800" />
          </div>
        </section>
        <section className="rounded-2xl bg-slate-900 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Test Management</h3>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800"><Plus size={16}/>New</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-slate-400">
                <tr>
                  <th className="py-3">Title</th>
                  <th>Code</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[{t:"Algorithms",c:"ALG123",s:"upcoming"},{t:"DBMS",c:"DBM456",s:"ongoing"},{t:"OS",c:"OPS789",s:"completed"}].map(row=> (
                  <tr key={row.c}>
                    <td className="py-3">{row.t}</td>
                    <td>{row.c}</td>
                    <td><span className="px-2 py-1 rounded-lg bg-slate-800 capitalize">{row.s}</span></td>
                    <td className="space-x-2">
                      <button className="px-2 py-1 rounded-lg bg-slate-800 inline-flex items-center gap-1"><Edit size={14}/>Edit</button>
                      <button className="px-2 py-1 rounded-lg bg-slate-800 inline-flex items-center gap-1"><Trash2 size={14}/>Delete</button>
                      <button className="px-2 py-1 rounded-lg bg-[#0A84FF] text-white inline-flex items-center gap-1">View<ArrowRight size={14}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

function Card({icon, title, value}){
  return (
    <div className="rounded-2xl bg-slate-900 p-5">
      <div className="text-slate-400 text-sm">{title}</div>
      <div className="mt-2 flex items-center gap-2 text-2xl font-bold">{icon}{value}</div>
    </div>
  )
}