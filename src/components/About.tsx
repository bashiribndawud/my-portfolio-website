import { Code, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Proficient in modern programming languages and frameworks"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that exceed expectations"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my background, passion, and what drives me in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Passionate Software Developer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a dedicated software developer with a strong foundation in computer science 
                and a passion for creating innovative digital solutions. My journey in technology 
                began with curiosity and has evolved into a professional commitment to excellence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With experience spanning various technologies and frameworks, I specialize in 
                building scalable web applications and implementing modern 
                development practices that drive business success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              {/* <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">20+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div> */}
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">10+</div>
                <div className="text-gray-600 text-sm">Technologies</div>
              </div>
              {/* <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div> */}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Education</h3>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-blue-600 font-medium">Bayero University Kano, Nigeria</p>
                <p className="text-gray-500 text-sm mt-1">
                  Relevant coursework: Software Engineering, Data Structures, Database Systems, 
                  Web Development, Mobile Application Development
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  2017 - 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;