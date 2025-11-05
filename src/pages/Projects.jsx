import './Projects.css'

export default function Projects() {
  const projects = [
    { name: 'Sistem Informasi Apotek', link: 'https://github.com/rizkySA-PUTRA1996/SIAP-Project.git' },
    { name: 'Sistem Manajemen Perhotelan', link: 'https://github.com/NajuanJRS/UAS-Struktur-Data.git' },
    { name: 'Proyek Magang', link: 'https://github.com/NajuanJRS/Proyek-Magang' },
  ]

  return (
    <section id="projects" className="projects">
      <h2>Proyek Saya</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.name}</h3>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              Lihat di GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
