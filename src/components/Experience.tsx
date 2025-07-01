import { Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Engineer (Lead)",
      company: "Calm Global Information",
      location: "Lagos, Nigeria",
      period: "Oct 2023 – May 2025",
      type: "Full-time",
      description: "Led frontend architecture and UI development for key projects including African Proverbs Software and KOKO Health EMR, with a focus on performance, SEO, and UX.",
      achievements: [
        "Improved site traffic by 20% through SEO optimization.",
        "Led a team of 5 engineers to build a React app, boosting engagement by 25% and reducing load time by 20%.",
        "Introduced reusable components with Storybook, reducing development time by 25%."
      ],
      technologies: ["React", "Redux", "TypeScript", "Storybook", "Tailwind CSS"]
    },
    {
      title: "Frontend Engineer",
      company: "Nerve Group",
      location: "Lagos, Nigeria",
      period: "May 2022 – Oct 2023",
      type: "Full-time",
      description: "Redesigned front-end architecture and delivered efficient web applications using Next.js and custom-built reusable components.",
      achievements: [
        "Enhanced code maintainability by 25% via modular architecture.",
        "Used Jest to test reusable components and APIs, reducing bugs by 30%.",
        "Built high-performance Next.js apps tailored to business needs."
      ],
      technologies: ["Next.js", "React", "TypeScript", "Jest", "CSS Modules"]
    },
    {
      title: "Frontend Engineer",
      company: "Scholapay",
      location: "Lagos, Nigeria",
      period: "Feb 2020 – Mar 2022",
      type: "Full-time",
      description: "Developed scalable frontend solutions using React and Next.js. Collaborated with designers to convert Figma into pixel-perfect production-ready apps.",
      achievements: [
        "Delivered high-quality React interfaces based on detailed specifications.",
        "Established a code review process to enforce quality and reusability.",
        "Translated Figma designs into responsive UI components."
      ],
      technologies: ["React", "Next.js", "Redux", "Figma", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey through various roles and the impact I've made in each position
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="ml-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 font-medium mb-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        exp.type === 'Full-time' ? 'bg-green-100 text-green-800' :
                        exp.type === 'Contract' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for New Opportunities
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in exciting projects and opportunities to grow. 
            Let's discuss how I can contribute to your team's success.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            <ExternalLink className="w-4 h-4" />
            View Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
