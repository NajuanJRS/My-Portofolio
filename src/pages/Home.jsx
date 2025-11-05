import './Home.css'

export default function Home() {
  return (
    <section id="home" className="home">
      <h2>Halo, Saya <span className="highlight">Pria Misterius</span></h2>
      <p>
        Saya mahasiswa Teknik Informatika yang suka membangun website, sistem informasi, dan aplikasi berbasis web.
      </p>
      <button onClick={() => window.location.href = '#projects'}>
        Lihat Proyek Saya
      </button>
    </section>
  )
}