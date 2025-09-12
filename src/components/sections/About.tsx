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
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg font-medium text-foreground">
                It all started when I began noticing small everyday problems and wondering,
                <span className="italic text-primary">"Could I build something to fix this?"</span>
              </p>
              
              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-foreground">Finding friends to play football</span> led me to create 
                  <span className="font-medium text-primary"> AtlasApp</span>, a sports platform that connects players and organizes matches.
                </p>
                
                <p>
                  <span className="font-semibold text-foreground">Searching for good places to eat or hang out</span> inspired 
                  <span className="font-medium text-primary"> TourInsight</span>, a web app that lets people share honest reviews.
                </p>
                
                <p>
                  <span className="font-semibold text-foreground">Watching hotels struggle to track lost items</span> sparked a digital 
                  <span className="font-medium text-primary"> Lost & Found system</span> to simplify the process.
                </p>
                
                <p>
                  <span className="font-semibold text-foreground">Even keeping track of my own expenses</span> turned into a project that uses 
                  <span className="font-medium text-primary"> AI to scan receipts</span> and calculate spending.
                </p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                <p className="font-medium text-foreground mb-3">
                  I'm Hamza Simou, a Computer Science student and full-stack developer who loves turning real-life frustrations into digital solutions.
                </p>
                <p className="mb-3">
                  I enjoy working across the stack—from smooth, user-friendly interfaces to solid back-end logic—and I'm always exploring new technologies to sharpen my skills.
                </p>
                <p className="text-primary font-medium">
                  I'm currently open to opportunities where I can keep solving meaningful problems and grow as a software engineer.
                </p>
              </div>
            </div>
           
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