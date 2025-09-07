import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'React / Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js / Express', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'Python / Django', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'PostgreSQL / MongoDB', level: 82, color: 'from-purple-500 to-pink-500' },
    { name: 'AWS / Docker', level: 80, color: 'from-orange-500 to-red-500' },
    { name: 'UI/UX Design', level: 87, color: 'from-pink-500 to-purple-500' },
    { name: 'GraphQL', level: 78, color: 'from-indigo-500 to-blue-500' },
  ];

  const tools = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Figma',
    'Git', 'Linux', 'Redis', 'Kubernetes', 'Jest', 'Cypress'
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse toolkit of technologies and frameworks that I use to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="slide-in-left">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="glass-card p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={isVisible ? skill.level : 0} 
                      className="h-3 bg-muted/50"
                    />
                    <div 
                      className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out glow-effect`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slide-in-right">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Tools & Technologies</h3>
            <div className="glass-card p-8 rounded-xl h-fit">
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-sm font-medium border border-primary/30 hover:border-primary/60 transform hover:scale-105 transition-all duration-300 scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 glass-card p-6 rounded-xl glow-effect">
              <h4 className="text-lg font-semibold mb-4 gradient-text">Currently Learning</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>🦀 Rust Programming</li>
                <li>🤖 Machine Learning with TensorFlow</li>
                <li>🔗 Blockchain Development</li>
                <li>📱 React Native</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};