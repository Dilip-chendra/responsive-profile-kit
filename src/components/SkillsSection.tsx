
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  percentage: number;
  icon?: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<number[]>(Array(frontendSkills.length + backendSkills.length).fill(0));

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

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const allSkills = [...frontendSkills, ...backendSkills];
      const timer = setTimeout(() => {
        allSkills.forEach((skill, index) => {
          setTimeout(() => {
            setProgressValues(prev => {
              const newValues = [...prev];
              newValues[index] = skill.percentage;
              return newValues;
            });
          }, index * 100);
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Here are my technical skills and competencies that I've developed through years of practice and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{progressValues[index]}%</span>
                  </div>
                  <Progress value={progressValues[index]} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              Backend Development
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{progressValues[index + frontendSkills.length]}%</span>
                  </div>
                  <Progress value={progressValues[index + frontendSkills.length]} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const frontendSkills: Skill[] = [
  { name: "HTML/CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React.js", percentage: 80 },
  { name: "TypeScript", percentage: 75 },
];

const backendSkills: Skill[] = [
  { name: "Node.js", percentage: 85 },
  { name: "Express", percentage: 80 },
  { name: "MongoDB", percentage: 75 },
  { name: "Python", percentage: 70 },
];

export default SkillsSection;
