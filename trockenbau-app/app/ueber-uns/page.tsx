export default function UeberUns() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Über uns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ihr zuverlässiger Partner für professionelle Gebäudereinigung in Hamburg
          </p>
        </div>

        {/* Firmengeschichte/Vision Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Über uns
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Wir sind ein Hamburger Familienunternehmen und seit über 20 Jahren in der professionellen Gebäudereinigung tätig. Mit unserem erfahrenen Team bieten wir Ihnen Unterhaltsreinigung, Grundreinigung, Treppenhausreinigung, Bauendreinigung und Fensterreinigung an – zuverlässig, gründlich und mit Liebe zum Detail.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-800 rounded-none p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Haben Sie Fragen?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Kontaktieren Sie uns gerne für weitere Informationen
          </p>
          <a
            href="/kontakt"
            className="bg-white text-blue-800 px-8 py-4 rounded-none font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl text-lg inline-block"
          >
            Kontakt aufnehmen
          </a>
        </section>
      </div>
    </div>
  )
}
