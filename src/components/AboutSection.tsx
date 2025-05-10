
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className={`w-full md:w-1/3 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className={`w-full md:w-2/3 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer & UI/UX Designer</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate web developer with 5 years of experience building responsive and functional web applications. 
              My journey in web development started when I was in college and has evolved into a career that I truly love.
            </p>
            <p className="text-gray-700 mb-6">
              I specialize in JavaScript frameworks like React and Vue.js for front-end development, and Node.js/Express for back-end services. 
              I'm passionate about creating intuitive user experiences and believe that good design is as important as good code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-gray-600">John Doe</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
              <div>
                <p className="font-medium">From:</p>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div>
                <p className="font-medium">Freelance:</p>
                <p className="text-gray-600">Available</p>
              </div>
            </div>

            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
