import React from 'react';

export const ShootingStars = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Shooting stars moving horizontally from right to left */}
      <div className="absolute top-1/4 w-1 h-1 bg-white rounded-full shooting-star opacity-80"
           style={{ 
             animationDelay: '0s',
             animationDuration: '3s'
           }} />
      <div className="absolute top-1/3 w-0.5 h-0.5 bg-primary rounded-full shooting-star opacity-60"
           style={{ 
             animationDelay: '1s',
             animationDuration: '4s'
           }} />
      <div className="absolute top-1/2 w-1.5 h-1.5 bg-accent rounded-full shooting-star opacity-90"
           style={{ 
             animationDelay: '2s',
             animationDuration: '2.5s'
           }} />
      <div className="absolute top-2/3 w-0.5 h-0.5 bg-primary-glow rounded-full shooting-star opacity-70"
           style={{ 
             animationDelay: '3s',
             animationDuration: '3.5s'
           }} />
      <div className="absolute top-3/4 w-1 h-1 bg-white rounded-full shooting-star opacity-85"
           style={{ 
             animationDelay: '4s',
             animationDuration: '2.8s'
           }} />
      <div className="absolute top-1/6 w-0.5 h-0.5 bg-accent rounded-full shooting-star opacity-65"
           style={{ 
             animationDelay: '5s',
             animationDuration: '4.2s'
           }} />
      <div className="absolute top-5/6 w-1 h-1 bg-primary rounded-full shooting-star opacity-75"
           style={{ 
             animationDelay: '6s',
             animationDuration: '3.2s'
           }} />
      
      {/* Additional smaller stars for depth */}
      <div className="absolute top-1/5 w-0.5 h-0.5 bg-white rounded-full shooting-star opacity-50"
           style={{ 
             animationDelay: '1.5s',
             animationDuration: '5s'
           }} />
      <div className="absolute top-4/5 w-0.5 h-0.5 bg-primary-glow rounded-full shooting-star opacity-55"
           style={{ 
             animationDelay: '2.5s',
             animationDuration: '4.5s'
           }} />
      <div className="absolute top-1/8 w-0.5 h-0.5 bg-accent rounded-full shooting-star opacity-60"
           style={{ 
             animationDelay: '3.5s',
             animationDuration: '3.8s'
           }} />
      <div className="absolute top-7/8 w-0.5 h-0.5 bg-white rounded-full shooting-star opacity-45"
           style={{ 
             animationDelay: '4.5s',
             animationDuration: '4.8s'
           }} />
      
      {/* Trail effects for some stars */}
      <div className="absolute top-1/4 w-2 h-0.5 bg-gradient-to-r from-transparent to-white/30 rounded-full shooting-star-trail opacity-60"
           style={{ 
             animationDelay: '0s',
             animationDuration: '3s'
           }} />
      <div className="absolute top-1/2 w-3 h-0.5 bg-gradient-to-r from-transparent to-primary/40 rounded-full shooting-star-trail opacity-70"
           style={{ 
             animationDelay: '2s',
             animationDuration: '2.5s'
           }} />
      <div className="absolute top-3/4 w-2.5 h-0.5 bg-gradient-to-r from-transparent to-accent/35 rounded-full shooting-star-trail opacity-65"
           style={{ 
             animationDelay: '4s',
             animationDuration: '2.8s'
           }} />
    </div>
  );
};
