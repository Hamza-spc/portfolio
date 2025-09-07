import React from 'react';

export const About = () => {

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Software Engineer and AI/ML enthusiast with 3+ years of professional 
            experience creating intelligent software solutions that combine machine learning 
            algorithms with elegant, user-friendly interfaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="slide-in-left">
            <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a Software Engineering graduate, I've always been fascinated by the 
              intersection of artificial intelligence and practical software development. 
              Over my 3+ years of professional experience, I've specialized in building 
              intelligent systems that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not developing software, you'll find me exploring the latest 
              machine learning algorithms, contributing to open source projects, or 
              diving deep into AI research papers to stay at the forefront of technology.
            </p>
          </div>
          
          <div className="slide-in-right">
            <div className="glass-card p-8 rounded-2xl glow-effect">
              <h4 className="text-xl font-semibold mb-4 gradient-text">Quick Facts</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>🎓 Software Engineer Graduate</li>
                <li>💼 3+ Years Professional Experience</li>
                <li>🤖 Machine Learning Enthusiast</li>
                <li>📚 Continuous Learner</li>
                <li>🌍 Based in Morocco</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};