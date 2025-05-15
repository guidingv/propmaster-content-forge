
import React from 'react';
import { Building, Search } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header styled similar to besichtigungstermin.de with orange theme */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <Building className="h-8 w-8 text-orange-500" />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">ImmoMarketing KI</h1>
              <p className="text-sm text-gray-500 hidden md:block">Automatisierte Texterstellung für Immobilienprofis</p>
            </div>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
              <li><a href="/" className="text-gray-700 hover:text-orange-500 transition-colors text-sm md:text-base py-2 px-1">Startseite</a></li>
              <li><a href="#form" className="text-gray-700 hover:text-orange-500 transition-colors text-sm md:text-base py-2 px-1">Tool starten</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-500 transition-colors text-sm md:text-base py-2 px-1">Vorlagen</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-500 transition-colors text-sm md:text-base py-2 px-1">Kontakt</a></li>
              <li className="hidden md:block">
                <button className="text-gray-700 hover:text-orange-500 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      {/* Footer with orange accents */}
      <footer className="bg-gray-900 text-white mt-10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ImmoMarketing KI</h3>
              <p className="text-gray-300">Automatisierte Texterstellung für Immobilienprofis</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-orange-400">Startseite</a></li>
                <li><a href="#form" className="text-gray-300 hover:text-orange-400">Tool starten</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400">Datenschutz</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400">Impressum</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <p className="text-gray-300">E-Mail: info@immomarketing-ki.de</p>
              <p className="text-gray-300">Telefon: (030) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ImmoMarketing KI. Eine Dienstleistung von Besichtigungstermin.de</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
