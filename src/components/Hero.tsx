
import { ArrowDown, Download, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl font-bold text-blue-600">
                BD
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              Bashir <span className="text-blue-600">Dauda</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Software Developer & Problem Solver
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions through code. 
              Specializing in full-stack development and modern web technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:daudabashiru97@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/bashir-dauda-6915541a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://github.com/bashiribndawud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Learn More
              <ArrowDown className="w-4 h-4" />
            </button>
            <a href='/Bashir_Dauda.pdf' download className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;