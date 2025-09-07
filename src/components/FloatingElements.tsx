import React from 'react';

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full floating-element blur-sm" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-accent/30 to-primary/30 rounded-lg floating-element transform rotate-45 blur-sm" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full floating-element blur-sm"
           style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/4 right-1/6 w-20 h-20 bg-gradient-to-r from-accent/25 to-primary/25 rounded-lg floating-element transform rotate-12 blur-sm"
           style={{ animationDelay: '1s' }} />
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full floating-element"
           style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full floating-element"
           style={{ animationDelay: '5s' }} />
      <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-primary-glow rounded-full floating-element"
           style={{ animationDelay: '2.5s' }} />
    </div>
  );
};