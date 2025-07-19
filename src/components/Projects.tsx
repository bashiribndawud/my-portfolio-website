import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Koko Healthcare eHMS (Enterprise Hospital Management System)",
      category: "Web Application",
      description:
        "A cultural platform for discovering, sharing, and learning African proverbs with rich categorization and daily wisdom updates.",
      image: "https://kokohealthcare.com/wp-content/uploads/2024/12/hero.png",
      technologies: ["React", "Nextjs", "Redux Toolkit", "Shadcn", "TypeScript", "TailwindCSS"],
      features: [
        "Comprehensive patient management",
        "Appointment scheduling and reminders",
        "Electronic medical records (EMR)",
        "Billing and invoicing system",
        "Role-based access control for staff",
        "Real-time notifications and alerts",
        "Responsive design for mobile and desktop",
        "Secure data handling and encryption",
        "Integration with third-party services"
      ],
      liveUrl: "https://kokohealthcare.com/",
      // githubUrl: "#", // Optional: leave as "#" if repo is private
      icon: Globe
    },
    {
      title: "Impactify LMS",
      category: "Web Application",
      description:
        "A full-featured Learning Management System (LMS) for managing courses, modules, assessments, users, and notifications. Built with modern React architecture and best practices.",
      image: "https://impactify.ogtlprojects.com/assets/Content-Dn6T1_sa.png",
      technologies: ["React", "Redux Toolkit", "React Query", "TypeScript", "TailwindCSS"],
      features: [
        "Course & module management",
        "User roles & permissions",
        "Real-time notifications via WebSocket",
        "Assessment and question management",
        "Responsive admin and participant dashboards"
      ],
      liveUrl: "https://impactify.ogtlprojects.com/", // Replace with live URL if available
      // githubUrl: "https://github.com/bashiribndawud", // Replace with repo if public
      icon: Globe
    },
    {
      title: "African Proverbs Portal",
      category: "Web Application",
      description:
        "A cultural platform for discovering, sharing, and learning African proverbs with rich categorization and daily wisdom updates.",
      image: "https://africanproverbs.com/_next/static/media/homeaboutimage.422047b3.png",
      technologies: ["React", "Redux Toolkit", "React Query", "TypeScript", "TailwindCSS"],
      features: [
        "Dynamic proverb listing with categories",
        "Daily proverb feed",
        "Search and filter by culture or theme",
        "Newsletter integration",
        "Multilingual support"
      ],
      liveUrl: "https://africanproverbs.com/",
      // githubUrl: "#", // Optional: leave as "#" if repo is private
      icon: Globe
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a> */}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <project.icon className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-xs">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
                  >
                    Live Demo
                  </a>
                  {/* <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
                  >
                    View Code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/bashiribndawud"
            target="_blank"
            className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
