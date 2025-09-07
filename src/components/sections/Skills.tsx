import React, { useState } from 'react';
import { 
  Database, 
  Code2, 
  Type, 
  Globe, 
  FileCode, 
  Terminal, 
  Palette, 
  Shield, 
  Server, 
  TestTube, 
  GitBranch, 
  Brain, 
  Layers, 
  Lock
} from 'lucide-react';

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const techStacks = [
    {
      name: 'MERN STACK',
      color: 'from-green-500 to-emerald-500',
      icon: Code2,
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js']
    },
    {
      name: 'Java',
      color: 'from-orange-500 to-red-500',
      icon: Code2,
      technologies: ['Spring Boot', 'Java SE', 'Java EE', 'Maven']
    },
    {
      name: 'TypeScript',
      color: 'from-blue-600 to-blue-400',
      icon: Type,
      technologies: ['TypeScript', 'TSX', 'Type Definitions', 'Generics']
    },
    {
      name: 'Next.js',
      color: 'from-gray-800 to-gray-600',
      icon: Globe,
      technologies: ['Next.js', 'App Router', 'Server Components', 'SSR/SSG']
    },
    {
      name: 'Python',
      color: 'from-yellow-500 to-orange-500',
      icon: FileCode,
      technologies: ['Django', 'Flask', 'FastAPI', 'Pandas', 'NumPy']
    },
    {
      name: 'C & C++',
      color: 'from-blue-800 to-blue-600',
      icon: Terminal,
      technologies: ['C Programming', 'C++', 'Memory Management', 'Data Structures']
    },
    {
      name: 'Tailwind CSS',
      color: 'from-cyan-500 to-blue-500',
      icon: Palette,
      technologies: ['Tailwind CSS', 'Utility-first', 'Responsive Design', 'Custom Components']
    },
    {
      name: '.NET',
      color: 'from-purple-600 to-purple-400',
      icon: Shield,
      technologies: ['C#', '.NET Core', 'ASP.NET', 'Entity Framework']
    },
    {
      name: 'PHP',
      color: 'from-indigo-500 to-purple-500',
      icon: Server,
      technologies: ['Laravel', 'PHP', 'Eloquent ORM', 'Blade Templates']
    },
    {
      name: 'Databases',
      color: 'from-pink-500 to-rose-500',
      icon: Database,
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase']
    },
    {
      name: 'Cloud & DevOps',
      color: 'from-orange-400 to-yellow-500',
      icon: Server,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux']
    },
    {
      name: 'Testing',
      color: 'from-green-400 to-green-600',
      icon: TestTube,
      technologies: ['Jest', 'Cypress', 'Unit Testing', 'Integration Testing']
    },
    {
      name: 'Tools & Version Control',
      color: 'from-gray-500 to-gray-700',
      icon: GitBranch,
      technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma']
    },
    {
      name: 'Machine Learning',
      color: 'from-purple-500 to-pink-500',
      icon: Brain,
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'OpenCV']
    },
    {
      name: 'Architecture & Patterns',
      color: 'from-indigo-500 to-purple-500',
      icon: Layers,
      technologies: ['Microservices', 'REST APIs', 'GraphQL', 'MVC', 'MVVM', 'Clean Architecture', 'SOLID Principles']
    },
    {
      name: 'Security',
      color: 'from-red-500 to-orange-500',
      icon: Lock,
      technologies: ['OAuth 2.0', 'JWT', 'HTTPS/SSL', 'CORS', 'Input Validation', 'SQL Injection Prevention', 'XSS Protection']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technologies and frameworks I master to build robust, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStacks.map((stack, index) => (
            <div
              key={stack.name}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(stack.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="glass-card p-6 rounded-xl border-primary/20 hover:border-primary/50 transform hover:scale-105 transition-all duration-300 cursor-pointer glow-effect scale-in"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stack.color} flex items-center justify-center`}>
                    <stack.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">
                    {stack.name}
                  </h3>
                </div>
              </div>

              {/* Hover Tooltip */}
              {hoveredSkill === stack.name && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 w-64">
                  <div className="glass-card p-4 rounded-lg border border-primary/30 shadow-lg">
                    <h4 className="font-semibold text-foreground mb-3 text-center">
                      {stack.name}
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {stack.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-xs font-medium border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Arrow pointing up */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-primary/30 rotate-45"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto glow-effect">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always exploring new technologies and staying up-to-date with the latest trends in software development, 
              machine learning, and cloud computing to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};