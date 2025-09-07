import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Lightbulb, Heart } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful interfaces that users love to interact with.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and pushing boundaries.",
    },
    {
      icon: Heart,
      title: "User-Focused",
      description: "Building experiences that put users at the center of everything.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital experiences that combine technical excellence with creative vision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="slide-in-left">
            <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Started as a curious computer science student, I fell in love with the 
              intersection of technology and creativity. Over the years, I've worked 
              with startups and enterprises, building everything from mobile apps to 
              complex web platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, 
              contributing to open source projects, or experimenting with the latest 
              web technologies.
            </p>
          </div>
          
          <div className="slide-in-right">
            <div className="glass-card p-8 rounded-2xl glow-effect">
              <h4 className="text-xl font-semibold mb-4 gradient-text">Quick Facts</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>🎓 Computer Science Graduate</li>
                <li>💼 5+ Years Professional Experience</li>
                <li>🌍 Based in San Francisco</li>
                <li>☕ Coffee Enthusiast</li>
                <li>🎮 Gaming in Free Time</li>
                <li>📚 Continuous Learner</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="glass-card border-primary/20 hover:border-primary/50 transform hover:scale-105 transition-all duration-500 glow-effect scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 gradient-text">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};