export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience in building web applications. 
              I specialize in React, Node.js, and cloud technologies, with a strong focus on creating scalable 
              and user-friendly solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-gray-600">Node.js, Python, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}