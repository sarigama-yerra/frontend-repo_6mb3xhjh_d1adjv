import Hero from './components/Hero'
import StudentUI from './components/StudentUI'
import AdminUI from './components/AdminUI'
import InvigilatorMobile from './components/InvigilatorMobile'

export default function App(){
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <section id="student">
        <StudentUI />
      </section>
      <section id="admin">
        <AdminUI />
      </section>
      <section id="invigilator" className="bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold mb-6">Invigilator (Mobile Preview)</h3>
          <div className="mx-auto max-w-md rounded-3xl border shadow">
            <InvigilatorMobile />
          </div>
        </div>
      </section>
    </div>
  )
}