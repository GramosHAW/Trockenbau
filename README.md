# 🏗️ Trockenbau Website Projekt

Eine moderne, professionelle Website für eine Trockenbau-Firma, entwickelt mit Next.js und TypeScript.

## 📋 Projektdetails

### Über das Projekt
Diese Website präsentiert eine Trockenbau-Firma mit einem modernen, benutzerfreundlichen Design. Das Projekt nutzt aktuelle Web-Technologien für optimale Performance, SEO und Benutzererfahrung.

### Technologie-Stack
- **Framework**: Next.js 16.1.1 (App Router)
- **Sprache**: TypeScript 5
- **UI**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint mit Next.js Config

### Projektstruktur
```
trockenbau-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   ├── kontakt/           # Kontaktseite
│   ├── termin-buchung/    # Termin-Buchung
│   ├── ueber-uns/         # Über uns Seite
│   ├── leistungen/        # Leistungen/Services
│   ├── referenzen/        # Referenzen/Projekte
│   └── globals.css        # Globale Styles
├── lib/                   # Utility-Funktionen
├── ui/                    # UI-Komponenten
│   ├── navigation.tsx     # Navigation-Komponente
│   ├── footer.tsx         # Footer-Komponente
│   └── ...
└── public/                # Statische Assets
```

## 🤖 LLM Guide - Entwicklungsstatus

Dieser Abschnitt dient als Leitfaden für LLMs, die an diesem Projekt arbeiten, um den aktuellen Stand und zukünftige Entwicklungen zu verstehen.

### ✅ Implementierte Funktionen

#### 1. **Grundlegende Projektstruktur**
- ✅ Next.js 16 App Router Setup
- ✅ TypeScript Konfiguration
- ✅ Tailwind CSS Integration
- ✅ ESLint Konfiguration
- ✅ Responsive Design Basis

### 🚧 Ausstehende Funktionen & TODO

#### 1. **Homepage & Navigation** (Priorität: Hoch)
- ❌ Professionelle Homepage mit Firmenpräsentation
- ❌ Navigation/Menü-Komponente (Header)
- ❌ Hero-Section mit Call-to-Action
- ❌ Services/Leistungen Vorschau
- ❌ Referenzen/Projekte Vorschau
- ❌ Footer-Komponente mit Kontaktinfo, Links, Social Media
- ❌ Responsive Mobile-Navigation

#### 2. **Kontakt** (Priorität: Hoch)
- ❌ Kontaktseite (`/kontakt`)
- ❌ Kontaktformular-Komponente
- ❌ Formular-Validierung (Client & Server)
- ❌ E-Mail-Versand Integration (z.B. Resend, SendGrid, Nodemailer)
- ❌ Kontaktinformationen (Adresse, Telefon, E-Mail)
- ❌ Google Maps Integration (Firmenstandort)
- ❌ Öffnungszeiten Anzeige
- ❌ Anfrageformular für unverbindliche Angebote

#### 3. **Termin-Buchung** (Priorität: Hoch)
- ❌ Termin-Buchungsseite (`/termin-buchung`)
- ❌ Kalender-Komponente für Terminauswahl
- ❌ Verfügbarkeitsprüfung
- ❌ Termin-Formular (Name, Kontakt, Projektart, etc.)
- ❌ Termin-Bestätigung (E-Mail)
- ❌ Termin-Verwaltung Backend/Integration
- ❌ Erinnerungen (optional)

#### 4. **Über uns** (Priorität: Hoch)
- ❌ Über uns Seite (`/ueber-uns`)
- ❌ Firmengeschichte & Vision
- ❌ Team-Vorstellung
- ❌ Zertifikate & Qualifikationen
- ❌ Firmenwerte & Philosophie
- ❌ Unternehmensdaten (Gründung, Mitarbeiter, etc.)

#### 5. **Leistungen/Services** (Priorität: Mittel)
- ❌ Leistungen-Übersichtsseite (`/leistungen`)
- ❌ Detailseiten für einzelne Leistungen:
  - ❌ Trockenbau-Wände
  - ❌ Deckenverkleidungen
  - ❌ Vorsatzschalen
  - ❌ Brandschutz
  - ❌ Schallschutz
  - ❌ Trockenestrich
  - ❌ Sanierung & Renovierung
- ❌ Leistungsbeschreibungen mit Bildern
- ❌ Technische Details & Materialien

#### 6. **Referenzen/Projekte** (Priorität: Mittel)
- ❌ Referenzen-Übersichtsseite (`/referenzen`)
- ❌ Projekt-Galerie mit Bildern
- ❌ Projekt-Detailseiten
- ❌ Projekt-Filterung (nach Typ, Größe, etc.)
- ❌ Vorher/Nachher Vergleiche
- ❌ Projektbeschreibungen
- ❌ Kunden-Feedback/Testimonials

#### 7. **Weitere typische Trockenbau-Firmen Features**
- ❌ FAQ-Bereich (Häufige Fragen)
- ❌ Zertifikate & Qualifikationen Sektion
- ❌ Partner & Lieferanten
- ❌ Materialien & Produkte (optional)
- ❌ Downloads (Prospekte, Broschüren)
- ❌ Aktuelles/News (optional, kein Blog)

#### 8. **Rechtliches & Compliance**
- ❌ Impressum-Seite
- ❌ Datenschutzerklärung
- ❌ AGB (Allgemeine Geschäftsbedingungen)
- ❌ Cookie-Banner (DSGVO-konform)
- ❌ Widerrufsbelehrung (falls relevant)

#### 9. **SEO & Performance**
- ❌ Meta-Tags und Open Graph für alle Seiten
- ❌ Sitemap.xml
- ❌ robots.txt
- ❌ Structured Data (Schema.org - LocalBusiness, Service)
- ❌ Bildoptimierung (Next.js Image)
- ❌ Lazy Loading
- ❌ Performance-Optimierung

#### 10. **Design & UI/UX**
- ❌ Design System / Komponenten-Bibliothek
- ❌ Konsistente Farbpalette (professionell, branchentypisch)
- ❌ Typografie-System
- ❌ Animationen & Transitions
- ❌ Accessibility (WCAG 2.1 AA Compliance)
- ❌ Mobile-First Responsive Design
- ❌ Loading States & Error Handling

### 📝 Entwicklungsrichtlinien

#### Code-Stil
- TypeScript mit strikter Typisierung verwenden
- Komponenten in `ui/` für wiederverwendbare UI-Elemente
- Business-Logik in `lib/` platzieren
- Konsistente Namenskonventionen (camelCase für Funktionen, PascalCase für Komponenten)
- Deutsche Kommentare und Variablennamen (wo sinnvoll)

#### Styling
- Tailwind CSS Utility-First Ansatz
- Responsive Design (mobile-first)
- Konsistente Spacing und Typografie
- Professionelles, modernes Design für Trockenbau-Branche
- Klare, übersichtliche Struktur
- Vertrauenswürdiges, seriöses Erscheinungsbild

#### Performance
- Next.js Image-Komponente für alle Bilder verwenden
- Statische Generierung wo möglich
- Code-Splitting beachten
- Optimale Bundle-Größe
- Schnelle Ladezeiten (Core Web Vitals)

#### Best Practices
- Accessibility (a11y) Standards einhalten
- SEO-optimierte Struktur und Content
- Semantisches HTML
- Fehlerbehandlung implementieren
- Loading States für asynchrone Operationen
- Formular-Validierung (Client & Server)
- Sichere Datenübertragung (HTTPS)

#### Trockenbau-spezifische Anforderungen
- Professionelle Präsentation der Leistungen
- Hohe Qualität der Projektbilder
- Klare Kommunikation von Kompetenzen
- Vertrauensaufbau durch Referenzen
- Einfache Kontaktaufnahme
- Benutzerfreundliche Terminbuchung

### 🎯 Prioritäten für nächste Schritte

1. **Hoch**: Homepage mit Navigation und Footer
2. **Hoch**: Kontaktseite mit Formular und Google Maps
3. **Hoch**: Termin-Buchung System
4. **Hoch**: Über uns Seite
5. **Mittel**: Leistungen/Services Seiten
6. **Mittel**: Referenzen/Projekte Galerie
7. **Niedrig**: FAQ, Zertifikate, weitere Features
8. **Niedrig**: Rechtliche Seiten (Impressum, Datenschutz)

### 🔧 Setup & Entwicklung

```bash
# Dependencies installieren
cd trockenbau-app
npm install

# Development Server starten
npm run dev

# Production Build
npm run build

# Production Server starten
npm start

# Linting
npm run lint
```

### 📚 Nützliche Ressourcen

- [Next.js Dokumentation](https://nextjs.org/docs)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [TypeScript Dokumentation](https://www.typescriptlang.org/docs/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/api-reference/components/image)

### 🚫 Nicht Teil des Projekts

- ❌ Blog-System (nicht gewünscht)
- ❌ Newsletter (optional, niedrige Priorität)
- ❌ Social Media Feed Integration (optional)

---

**Status**: 🟡 In Entwicklung  
**Version**: 0.1.0  
**Letzte Aktualisierung**: 2024
