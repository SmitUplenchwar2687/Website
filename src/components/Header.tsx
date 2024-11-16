import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold text-gray-900">
            Smit Uplenchwar
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
            <a href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#interests" className="text-gray-700 hover:text-gray-900 transition-colors">Interests</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/SmitUplenchwar2687" className="text-gray-700 hover:text-gray-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/smit-uplenchwar-41b473219/" className="text-gray-700 hover:text-gray-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:smituplenchwar02@gmail.com" className="text-gray-700 hover:text-gray-900 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Experience</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#interests" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Interests</a>
          </div>
        </div>
      )}
    </header>
  );
}