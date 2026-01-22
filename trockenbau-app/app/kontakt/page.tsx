export default function Kontakt() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nehmen Sie Kontakt mit uns auf - wir sind gerne für Sie da
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Kontaktinformationen */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Kontaktinformationen
            </h2>
            <div className="space-y-6">
              {/* Adresse */}
              <div className="flex items-start">
                <div className="text-2xl mr-4">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-700">
                    Billhorner Kanalstraße 23
                    <br />
                    20539 Hamburg
                  </p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start">
                <div className="text-2xl mr-4">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-700">
                    <a
                      href="tel:+4917622848779"
                      className="text-blue-800 hover:underline"
                    >
                      +49 176 22848779
                    </a>
                  </p>
                </div>
              </div>

              {/* E-Mail */}
              <div className="flex items-start">
                <div className="text-2xl mr-4">✉️</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-Mail</h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:Kljajic.reinigung@gmail.com"
                      className="text-blue-800 hover:underline"
                    >
                      Kljajic.reinigung@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="flex items-start">
                <div className="text-2xl mr-4">🕒</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Öffnungszeiten
                  </h3>
                  <div className="text-gray-700 space-y-1">
                    <p>Montag - Freitag: 8:00 - 17:00 Uhr</p>
                    <p>Samstag: Nach Vereinbarung</p>
                    <p>Sonntag: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media (optional) */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">
                Folgen Sie uns
              </h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                  <span className="text-gray-600">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                  <span className="text-gray-600">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                  <span className="text-gray-600">ig</span>
                </div>
              </div>
            </div>
          </div>

          {/* Kontaktformular */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nachricht senden
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring- focus:ring-blue-500 focus:border-blue-500 transition-all"
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

              {/* Betreff */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Betreff Ihrer Nachricht"
                />
              </div>

              {/* Nachricht */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Ihre Nachricht an uns..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-8 py-4 rounded-none font-semibold hover:bg-blue-900 transition-all duration-200 shadow-lg shadow-blue-800/30 hover:shadow-xl hover:shadow-blue-800/40 text-lg"
              >
                Nachricht senden
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
              </p>
            </form>
          </div>
        </div>

        {/* Google Maps Platzhalter */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            So finden Sie uns
          </h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600 mb-2">
                [Platzhalter: Hier wird später Google Maps eingebunden]
              </p>
              <p className="text-sm text-gray-500">
                Interaktive Karte mit Routenplaner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
