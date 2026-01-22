import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
  className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/hero-reinigung.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto">
    <div className="text-center text-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Professionelle Gebäudereinigung in Hamburg
      </h1>
      <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
        Zuverlässig und gründlich 
      </p>

      <div className="flex flex-col sm:flex-row gap-8 justify-center">
        <Link
          href="/termin-buchung"
          className="bg-blue-800 text-white px-8 py-4 font-semibold hover:bg-blue-900 hover:-translate-y-0.5  transition-all text-lg"
        >
          Termin vereinbaren
        </Link>
        <Link
          href="/kontakt"
          className="bg-white text-blue-800 px-8 py-4 font-semibold hover:bg-gray-100 hover:-translate-y-0.5 transition-all text-lg"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Professionelle Gebäudereinigungs-Dienstleistungen für Ihr Zuhause oder Unternehmen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Unterhaltsreinigung', desc: 'Regelmäßige und zuverlässige Reinigung für ein sauberes Umfeld' },
              { name: 'Grundreinigung', desc: 'Tiefenreinigung für einen perfekten Start' },
              { name: 'Treppenhausreinigung', desc: 'Saubere Treppenhäuser für ein gepflegtes Erscheinungsbild' },
              { name: 'Bauendreinigung', desc: 'Gründliche Reinigung nach Bauarbeiten' },
              { name: 'Fensterreinigung', desc: 'Strahlend saubere Fenster für mehr Licht und Klarheit' },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-black-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-200 py-18 px-6 sm:px-10 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Bereit für eine saubere Lösung?
          </h2>
          <p className="text-xl text-blue-800 mb-8">
            Kontaktieren Sie uns für ein  Angebot
          </p>
          <Link
            href="/kontakt"
            className="bg-white text-blue-800 px-8 py-4 rounded-none font-semibold hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl text-lg inline-block"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  )
}
