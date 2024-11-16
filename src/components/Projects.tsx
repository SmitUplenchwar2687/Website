import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Pablo's Therapy",
      description: "Developed a multilingual voice therapy session application powered by generative AI.",
      image: "https://res.cloudinary.com/dninix0mh/image/upload/c_fit,f_auto,q_80/AI_Therapy",
      github: "https://github.com/SmitUplenchwar2687/Pablo-s-Therapy",
      live: "https://example.com",
      tags: ["Python", "WebSocket", "Flutter", "Dart", "MongoDB"],
    },
    {
      title: "Rice Crop Disease Detection",
      description: "Built a rice crop disease detection model with UAV using Machine Learning and Image Processing",
      image: "https://unsplash.com/photos/green-grass-field-near-mountain-during-daytime-84JgyHGljkA?auto=format&fit=crop&q=80",
      github: "https://github.com/SmitUplenchwar2687/Rice-Crop-Disease-Detection",
      live: "https://example.com",
      tags: ["Python", "TenserFlow", "Pillow"],
    },
    {
      title: "AI Chat Interface",
      description: "A modern chat interface for AI interactions with voice support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      github: "https://github.com",
      live: "https://example.com",
      tags: ["TypeScript", "OpenAI", "WebSocket"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}