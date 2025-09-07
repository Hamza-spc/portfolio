import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      company: "EUREKA DIGITAL",
      location: "Marrakech",
      position: "Python Developer (Intern)",
      period: "July 2024 – August 2024",
      description: "Developed an internal Python tool to automatically transfer customer order data from Excel files into the company's database, reducing manual entry time by 30%. Used Pandas to process the files and clean the data before inserting it into the system.",
      technologies: ["Python", "Pandas", "Excel", "Database", "Data Processing"]
    },
    {
      company: "Sofitel Hotel",
      location: "Marrakech",
      position: "Software Developer Intern",
      period: "July 2025 – August 2025",
      description: "Developed a full-stack Lost & Found Management System to streamline item reporting, searching, and management. Implemented client authentication, automated notifications, payment integration, and AI-powered tools to enhance efficiency.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AI", "Payment Integration"]
    },
    {
      company: "Freelance",
      location: "Remote",
      position: "Web Developer",
      period: "2023 – Present",
      description: "Designed and developed landing pages for affiliate marketing agencies to optimize conversions and user engagement. Delivered responsive, SEO-friendly, and performance-optimized pages.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "SEO"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through my professional experience, from internships to freelance work, 
            showcasing my growth as a software developer.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company}
              className="glass-card border-primary/20 hover:border-primary/50 transform hover:scale-[1.02] transition-all duration-500 glow-effect slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl font-semibold text-primary">{exp.company}</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-sm font-medium border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
