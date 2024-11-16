export default function Experience() {
  const experiences = [
    {
      company: "Tech Corp",
      position: "Senior Full Stack Developer",
      period: "2020 - Present",
      description: "Led development of multiple high-impact projects, mentored junior developers, and implemented best practices.",
    },
    {
      company: "StartupX",
      position: "Full Stack Developer",
      period: "2018 - 2020",
      description: "Built and maintained scalable web applications, improved performance, and collaborated with cross-functional teams.",
    },
    {
      company: "Digital Agency",
      position: "Frontend Developer",
      period: "2016 - 2018",
      description: "Developed responsive websites and applications for various clients using modern frontend technologies.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-indigo-600">{exp.company}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}