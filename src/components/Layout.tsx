
import React from 'react';
import { Building, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Outlet, Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';

const Layout = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      {/* Header styled similar to besichtigungstermin.de with orange theme */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <Building className="h-8 w-8 text-orange-500" />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">ImmoMarketing KI</h1>
              <p className="text-sm text-gray-500 hidden md:block">{t('header.subtitle')}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-auto flex justify-center">
              <LanguageSelector />
            </div>
            <nav className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <li className="w-full md:w-auto text-center">
                <Link to="/" className="block text-gray-700 hover:text-orange-500 transition-colors text-sm md:text-base py-2 px-4">{t('nav.home')}</Link>
              </li>
              <li className="w-full md:w-auto text-center">
                <Link to="/#form" className="block text-gray-700 hover:text-orange-500 transition-colors text-sm md:text-base py-2 px-4">{t('nav.startTool')}</Link>
              </li>
              <li className="w-full md:w-auto text-center">
                <Link to="/templates" className="block text-gray-700 hover:text-orange-500 transition-colors text-sm md:text-base py-2 px-4">{t('nav.templates')}</Link>
              </li>
              <li className="w-full md:w-auto text-center">
                <Link to="/contact" className="block text-gray-700 hover:text-orange-500 transition-colors text-sm md:text-base py-2 px-4">{t('nav.contact')}</Link>
              </li>
              <li className="hidden md:block w-auto">
                <button className="text-gray-700 hover:text-orange-500 transition-colors px-4">
                  <Search className="h-5 w-5" />
                </button>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
