import { Music, Book, Plane, Code } from 'lucide-react';

export default function Interests() {
  const interests = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      description: "Exploring new technologies and building side projects.",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music",
      description: "Playing guitar and discovering new genres.",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel",
      description: "Exploring different cultures and places.",
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Reading",
      description: "Technical books and science fiction novels.",
    },
  ];

  return (
    <section id="interests" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Interests</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4 text-indigo-600">
                {interest.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
              <p className="text-gray-600">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}