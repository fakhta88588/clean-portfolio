export default function Projects() {
  const projects = [
    { name: 'Alpha Tech', type: 'Corporate Site', img: '/logo.svg' },
    { name: 'Baker’s Joy', type: 'E-commerce', img: '/logo.svg' },
    { name: 'FitFlow', type: 'Landing Page', img: '/logo.svg' },
  ]
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-sky-600 mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.name} className="border rounded-xl p-4 hover:shadow transition">
            <img src={p.img} alt={p.name} className="h-40 w-full object-contain mb-4" />
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-slate-500">{p.type}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
