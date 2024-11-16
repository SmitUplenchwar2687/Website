import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hello, I'm John Doe
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Full Stack Developer & Tech Enthusiast
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Learn More
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}