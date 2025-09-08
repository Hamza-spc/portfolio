import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

export const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const projects = [
    {
      title: "Lost & Found Management System",
      description: "A comprehensive full-stack web application for managing lost and found items with advanced features including Google OAuth authentication, AI-powered image similarity search, Stripe payment processing, automated email notifications, and bilingual support. Built for Sofitel Hotel with MERN stack.",
      tags: ["React", "Node.js", "Express", "MongoDB", "AI", "Stripe", "OAuth", "TensorFlow.js"],
      github: "https://github.com/Hamza-spc/Lost_management",
      live: "#",
      featured: true,
    },
    {
      title: "TourInsight - Venue Rating System",
      description: "A Django-based web application for discovering, rating, and reviewing venues like hotels, restaurants, cafes, and more. TourInsight helps travelers make informed decisions with real reviews and ratings.",
      tags: ["Python", "Django", "HTML", "CSS", "MySQL", "Rating System"],
      github: "https://github.com/Hamza-spc/RateWebsite",
      live: "#",
      featured: true,
    },
    {
      title: "SportsApp - Event Discovery Platform",
      description: "A modern web platform for discovering events, venues, and social feeds. Built with Next.js, TypeScript, and Tailwind CSS for a seamless user experience.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Events", "Social"],
      github: "https://github.com/Hamza-spc/sportsApp",
      live: "#",
      featured: true,
    },
    {
      title: "Blog Website",
      description: "A full-featured blog platform built with PHP Laravel, featuring modern design with Tailwind CSS and MySQL database integration.",
      tags: ["PHP", "Laravel", "HTML", "Tailwind CSS", "MySQL", "Blog"],
      github: "https://github.com/Hamza-spc/myblogproject",
      live: "#",
      featured: false,
    },
    {
      title: "Hangman Game",
      description: "A classic word guessing game implemented in C programming language. Features interactive gameplay, word selection, and score tracking with a clean command-line interface.",
      tags: ["C", "Game Development", "Command Line", "Data Structures", "Algorithms"],
      github: "https://github.com/Hamza-spc",
      live: "#",
      featured: false,
    },
    {
      title: "Receipt Management System",
      description: "An intelligent receipt analysis system using Python, AI, and Tesseract OCR to automatically extract and analyze receipt data. Features automated text recognition, data processing, and expense categorization.",
      tags: ["Python", "AI", "Tesseract OCR", "Computer Vision", "Data Processing", "Machine Learning"],
      github: "https://github.com/Hamza-spc",
      live: "#",
      featured: false,
    },
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring full-stack applications, AI-powered tools, and modern web solutions built with various technologies.
          </p>
        </div>

        {/* Floating Screen Container */}
        <div className="relative flex justify-center items-center min-h-[600px] mb-16">
          {/* Background floating elements */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </div>
          
          {/* Main floating screen */}
          <Card className="relative z-10 w-full max-w-4xl glass-card border-primary/30 hover:border-primary/60 transform hover:scale-[1.02] transition-all duration-700 overflow-hidden group glow-effect slide-up shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            
            <CardHeader className="relative z-10 p-8 pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentProjectIndex + 1} of {projects.length}
                </div>
              </div>
              
              <CardTitle className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                {currentProject.title}
              </CardTitle>
              
              <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                {currentProject.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10 p-8 pt-0">
              <div className="flex flex-wrap gap-3 mb-8">
                {currentProject.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 hover:border-primary/60 transform hover:scale-105 transition-all duration-300 px-4 py-2 text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg glass-card border-primary/50 hover:border-primary transform hover:scale-105 transition-all duration-300 border"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </a>
                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 text-primary-foreground"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <Button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 glass-card border-primary/50 hover:border-primary transform hover:scale-110 transition-all duration-300 w-12 h-12 rounded-full p-0"
            variant="outline"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 glass-card border-primary/50 hover:border-primary transform hover:scale-110 transition-all duration-300 w-12 h-12 rounded-full p-0"
            variant="outline"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProjectIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProjectIndex
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Project List */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setCurrentProjectIndex(index)}
                className={`p-4 rounded-lg text-left transition-all duration-300 ${
                  index === currentProjectIndex
                    ? 'glass-card border-primary/50 bg-primary/10'
                    : 'glass-card border-primary/20 hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                <h4 className="font-semibold text-lg gradient-text mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-gradient-to-r from-primary/20 to-accent/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
