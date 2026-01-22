export default function TerminBuchung() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Termin buchen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vereinbaren Sie einen unverbindlichen Beratungstermin für Ihr
            Trockenbau-Projekt
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formular Section */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ihre Anfrage
            </h2>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              {/* E-Mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              {/* Telefon */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="+49 123 456789"
                />
              </div>

              {/* Projektart */}
              <div>
                <label
                  htmlFor="project-type"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Projektart
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">Bitte wählen Sie eine Option</option>
                  <option value="trockenbau-waende">Trockenbau-Wände</option>
                  <option value="deckenverkleidung">
                    Deckenverkleidungen
                  </option>
                  <option value="brandschutz">Brandschutz</option>
                  <option value="schallschutz">Schallschutz</option>
                  <option value="vorsatzschalen">Vorsatzschalen</option>
                  <option value="sanierung">Sanierung & Renovierung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              {/* Gewünschter Termin */}
              <div>
                <label
                  htmlFor="preferred-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Gewünschter Termin
                </label>
                <input
                  type="date"
                  id="preferred-date"
                  name="preferred-date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              {/* Nachricht */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nachricht / Projektbeschreibung
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-8 py-4 rounded-none font-semibold hover:bg-blue-900 transition-all duration-200 shadow-lg shadow-blue-800/30 hover:shadow-xl hover:shadow-blue-800/40 text-lg"
              >
                Termin anfragen
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
              </p>
            </form>
          </div>

          {/* Kalender & Info Section */}
          <div className="space-y-8">
            {/* Kalender Platzhalter */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Verfügbare Termine
              </h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">📅</div>
                <p className="text-gray-600 mb-4">
                  [Platzhalter: Hier wird später ein Kalender-Widget
                  implementiert]
                </p>
                <p className="text-sm text-gray-500">
                  Wählen Sie einen passenden Termin aus oder geben Sie Ihren
                  Wunschtermin im Formular an.
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-l-4 border-blue-800 rounded-none p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Was passiert nach Ihrer Anfrage?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">✓</span>
                  <span>
                    Wir bestätigen Ihre Anfrage innerhalb von 24 Stunden
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">✓</span>
                  <span>
                    Wir kontaktieren Sie telefonisch zur Terminabstimmung
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">✓</span>
                  <span>
                    Vor Ort besprechen wir Ihr Projekt und erstellen ein
                    unverbindliches Angebot
                  </span>
                </li>
              </ul>
            </div>

            {/* Kontakt Info */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Alternativ kontaktieren Sie uns direkt:
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Telefon:</span>{' '}
                  <a
                    href="tel:+49123456789"
                    className="text-blue-800 hover:underline"
                  >
                    [Platzhalter: Telefonnummer]
                  </a>
                </p>
                <p>
                  <span className="font-semibold">E-Mail:</span>{' '}
                  <a
                    href="mailto:info@beispiel.de"
                    className="text-blue-800 hover:underline"
                  >
                    [Platzhalter: E-Mail-Adresse]
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Öffnungszeiten:</span>{' '}
                  Mo-Fr: 8:00 - 17:00 Uhr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
