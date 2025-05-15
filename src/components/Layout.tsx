
import React from 'react';
import { Building } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-realestate-primary" />
            <h1 className="text-xl font-bold text-realestate-dark">RealEstate AI</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="text-realestate-dark hover:text-realestate-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-realestate-dark hover:text-realestate-primary transition-colors">About</a></li>
              <li><a href="#" className="text-realestate-dark hover:text-realestate-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-realestate-dark text-white mt-10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">RealEstate AI</h3>
              <p className="text-gray-300">Automated marketing solutions for real estate professionals.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Testimonials</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@realestate-ai.com</p>
              <p className="text-gray-300">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} RealEstate AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
