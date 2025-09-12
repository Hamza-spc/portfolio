import React from 'react';
import { skillCategories } from '@/data/skills';
import { cn } from '@/lib/utils';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technologies and frameworks I master to build robust, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-6 rounded-xl border-primary/20 hover:border-primary/50 transform hover:scale-105 transition-all duration-300 glow-effect scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center text-2xl transform hover:scale-110 transition-transform duration-300`}>
                  {category.emoji}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={cn(
                      "flex items-center space-x-3 p-3 rounded-lg transition-all duration-200",
                      "hover:bg-primary/10 hover:scale-105 transform cursor-pointer",
                      "border border-border/50 hover:border-primary/30",
                      "hover:shadow-md hover:shadow-primary/20"
                    )}
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <skill.icon className={cn("w-6 h-6 transition-transform duration-200 hover:scale-110", skill.color)} />
                    <span className={cn("font-medium text-sm transition-colors duration-200", skill.color)}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
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