import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React/React Native', level: 85, color: 'bg-blue-500' },
    { name: 'Node.js/Express', level: 80, color: 'bg-green-500' },
    { name: 'CSS3', level: 90, color: 'bg-indigo-500' },
    { name: 'HTML5', level: 90, color: 'bg-red-500' },
    { name: 'SQL/MongoDB', level: 80, color: 'bg-purple-500' },
    { name: 'Git/GitHub', level: 90, color: 'bg-gray-700' },
    { name: 'TailwindCSS', level: 80, color: 'bg-orange-500' }
  ];

  const tools = [
    'Visual Studio Code', 'IntelliJ IDEA', 'Android Studio', 'Figma',
    'Postman', 'Docker', 'Jest', 'Webpack', 'Firebase', 'Vercel'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication',
    'Project Management', 'Critical Thinking', 'Adaptability'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-900 font-medium">{skill.name}</span>
                    <span className="text-gray-600 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Soft Skills */}
          <div className="space-y-12">
            {/* Tools */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Soft Skills</h3>
              <div className="space-y-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900">Frontend Web Development Certification</h4>
                  <p className="text-sm text-gray-600">Devsnest</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900">J.P. Morgan Software Engineering Experience</h4>
                  <p className="text-sm text-gray-600">J.P. Morgan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;