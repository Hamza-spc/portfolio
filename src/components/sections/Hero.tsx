import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Creative Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="slide-up">
          <h2 className="text-lg md:text-xl text-muted-foreground mb-4 slide-in-left">
            Hi, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 slide-in-right">
            <span className="gradient-text">Alex Johnson</span>
          </h1>
          
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <h3 className="text-2xl md:text-4xl font-semibold text-foreground">
              {displayText}
              <span className="animate-blink border-r-2 border-primary ml-1" />
            </h3>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed scale-in">
            Passionate about creating beautiful, interactive web experiences that blend 
            cutting-edge technology with stunning design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 scale-in">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 glow-effect transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold glass-card border-primary/50 hover:border-primary transform hover:scale-105 transition-all duration-300"
            >
              View Projects
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center scale-in">
            <a 
              href="#" 
              className="p-3 rounded-full glass-card border-primary/30 hover:border-primary transform hover:scale-110 transition-all duration-300 glow-effect"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full glass-card border-primary/30 hover:border-primary transform hover:scale-110 transition-all duration-300 glow-effect"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-primary" />
        </div>
      </div>
    </section>
  );
};