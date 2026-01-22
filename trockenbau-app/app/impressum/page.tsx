export default function Impressum() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Impressum
          </h1>
        </div>

        {/* Impressum Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12">
          <div className="space-y-8">
            {/* Firmenname */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Firmenname
              </h2>
              <p className="text-gray-700 text-lg">
                Patrik Kljajic Gebäudereinigung
              </p>
            </section>

            {/* Inhaber */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Inhaber
              </h2>
              <p className="text-gray-700 text-lg">Patrik Kljajic</p>
            </section>

            {/* Adresse */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Adresse
              </h2>
              <p className="text-gray-700 text-lg">
                Billhorner Kanalstraße 23
                <br />
                20539 Hamburg
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kontakt
              </h2>
              <div className="space-y-2 text-gray-700 text-lg">
                <p>
                  <span className="font-semibold">Telefon:</span>{' '}
                  <a
                    href="tel:+4917622848779"
                    className="text-blue-800 hover:underline"
                  >
                    +49 176 22848779
                  </a>
                </p>
                <p>
                  <span className="font-semibold">E-Mail:</span>{' '}
                  <a
                    href="mailto:Kljajic.reinigung@gmail.com"
                    className="text-blue-800 hover:underline"
                  >
                    Kljajic.reinigung@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
