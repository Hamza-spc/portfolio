import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 slide-up">
      <div className="glass-card px-6 py-3 rounded-full">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300 font-medium",
                  "hover:scale-105 transform",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground glow-effect"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};