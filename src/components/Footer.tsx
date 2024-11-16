import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Smit Uplenchwar</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/SmitUplenchwar2687" className="hover:text-gray-300 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/smit-uplenchwar-41b473219/" className="hover:text-gray-300 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:smituplenchwar02@gmail.com" className="hover:text-gray-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Smit Uplenchwar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}