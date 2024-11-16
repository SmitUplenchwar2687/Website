export default function Experience() {
  const experiences = [
    {
      company: "o9 Solutions",
      position: "Software Development Engineer II",
      period: "02/2024 - 07/2024",
      description: [
        "Led development of a Forecast Generation Engine for Demand Planning which is used by 300+ clients all across the globe.",
        "Optimized the supply planning solver using advanced linear programming and heuristic algorithms, achieving a 93% increase in processing efficiency and significantly enhancing planning accuracy and resource utilization.",
        "Built reliable and real-time data pipelines for processing sales data using SSIS and IBPL to enhance supply chain operations."
      ],
    },
    {
      company: "o9 Solutions",
      position: "Software Development Engineer",
      period: "02/2022 - 02/2024",
      description: [
        "Created Forecasting Algorithm Plugins for demand planning, enhancing prediction accuracy by 70% for various industries.",
        "Created ETL pipelines to process and transform large datasets on AWS, optimizing data ingestion by 33% for forecasting and supply chain analytics.",
        "Resolved over 200+ bugs on a real-time system supporting 500+ clients, improving system reliability and performance."
      ],
    },
    {
      company: "Tegasys Solutions",
      position: "Software Engineering Intern",
      period: "06/2021 - 11/2021",
      description: [
        "Developed cross-platform mobile applications using Kotlin for Android and Swift for iOS, streamlining business operations and improving user experience.",
        "Automated business relationship management tasks, enhancing reliability and service delivery by integrating mobile app notifications and scheduling features.",
        "Collaborated with a team of developers to ensure seamless mobile app deployment, following Agile methodologies for efficient project management."
      ],
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