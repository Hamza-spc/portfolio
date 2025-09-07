import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Lost & Found Management System",
      description: "A comprehensive full-stack web application for managing lost and found items with advanced features including Google OAuth authentication, AI-powered image similarity search, Stripe payment processing, automated email notifications, and bilingual support. Built for Sofitel Hotel with MERN stack.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tags: ["React", "Node.js", "Express", "MongoDB", "AI", "Stripe", "OAuth", "TensorFlow.js"],
      github: "https://github.com/Hamza-spc/Lost_management",
      live: "#",
      featured: true,
    },
    {
      title: "TourInsight - Venue Rating System",
      description: "A Django-based web application for discovering, rating, and reviewing venues like hotels, restaurants, cafes, and more. TourInsight helps travelers make informed decisions with real reviews and ratings.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Python", "Django", "HTML", "CSS", "MySQL", "Rating System"],
      github: "https://github.com/Hamza-spc/RateWebsite",
      live: "#",
      featured: true,
    },
    {
      title: "SportsApp - Event Discovery Platform",
      description: "A modern web platform for discovering events, venues, and social feeds. Built with Next.js, TypeScript, and Tailwind CSS for a seamless user experience.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Events", "Social"],
      github: "https://github.com/Hamza-spc/sportsApp",
      live: "#",
      featured: true,
    },
    {
      title: "Blog Website",
      description: "A full-featured blog platform built with PHP Laravel, featuring modern design with Tailwind CSS and MySQL database integration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["PHP", "Laravel", "HTML", "Tailwind CSS", "MySQL", "Blog"],
      github: "https://github.com/Hamza-spc/myblogproject",
      live: "#",
      featured: false,
    },
    {
      title: "Hangman Game",
      description: "A classic word guessing game implemented in C programming language. Features interactive gameplay, word selection, and score tracking with a clean command-line interface.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop",
      tags: ["C", "Game Development", "Command Line", "Data Structures", "Algorithms"],
      github: "https://github.com/Hamza-spc",
      live: "#",
      featured: false,
    },
    {
      title: "Receipt Management System",
      description: "An intelligent receipt analysis system using Python, AI, and Tesseract OCR to automatically extract and analyze receipt data. Features automated text recognition, data processing, and expense categorization.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      tags: ["Python", "AI", "Tesseract OCR", "Computer Vision", "Data Processing", "Machine Learning"],
      github: "https://github.com/Hamza-spc",
      live: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring full-stack applications, AI-powered tools, and modern web solutions built with various technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card border-primary/20 hover:border-primary/50 transform hover:scale-[1.02] transition-all duration-500 overflow-hidden group glow-effect slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 hover:border-primary/60 transform hover:scale-105 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md glass-card border-primary/50 hover:border-primary transform hover:scale-105 transition-all duration-300 border"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 text-primary-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-card border-primary/20 hover:border-primary/50 transform hover:scale-105 transition-all duration-500 overflow-hidden group scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg gradient-text">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
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
                  
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center flex-1 px-3 py-2 text-xs font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center flex-1 px-3 py-2 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
