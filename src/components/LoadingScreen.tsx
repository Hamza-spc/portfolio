import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  // Matrix rain effect
  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixInterval = setInterval(() => {
      setMatrixChars(prev => {
        const newChars = Array.from({ length: 20 }, () => 
          chars[Math.floor(Math.random() * chars.length)]
        );
        return [...prev.slice(-10), ...newChars];
      });
    }, 100);

    return () => clearInterval(matrixInterval);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 5000; // 5 seconds
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(progressPercent);
      
      if (progressPercent >= 100) {
        clearInterval(interval);
        setIsComplete(true);
        setTimeout(() => onComplete(), 1500);
      }
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        {matrixChars.map((char, index) => (
          <div
            key={index}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animation: 'matrix-fall 3s linear infinite'
            }}
          >
            {char}
          </div>
        ))}
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        {/* Gaming Border */}
        <div className="absolute inset-0 border-2 border-green-400/30 rounded-lg">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400" />
        </div>

        {/* Gaming Style Header */}
        <div className="mb-8">
          <div className="relative">
            {/* Main Logo */}
            <div className="relative">
              <div className="w-24 h-24 mx-auto mb-4 border-2 border-green-400 bg-black flex items-center justify-center text-3xl font-bold text-green-400 font-mono">
                H
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-green-400 font-mono mb-2 tracking-wider">
              HAMZA SIMOU
            </h1>
            <div className="text-green-300 font-mono text-sm tracking-widest">
              {isComplete ? 'PORTFOLIO READY' : 'PORTFOLIO LOADING...'}
            </div>
          </div>
        </div>

        {/* Gaming Style Progress Bar */}
        <div className="mb-8">
          <div className="relative">
            {/* Progress Bar Container */}
            <div className="w-full h-6 bg-black border-2 border-green-400 relative overflow-hidden">
              {/* Progress Fill */}
              <div 
                className="h-full transition-all duration-300 ease-out relative bg-gradient-to-r from-green-400 to-cyan-400"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                {/* Animated scan line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </div>
              
              {/* Progress Bar Border Glow */}
              <div className="absolute inset-0 border-2 border-green-400 shadow-green-400/50" style={{ boxShadow: '0 0 20px #4ade80' }} />
            </div>
            
            {/* Progress Text */}
            <div className="flex justify-between text-green-400 font-mono text-sm mt-2">
              <span className="tracking-wider">
                {isComplete ? 'COMPLETE' : 'LOADING'}
              </span>
              <span className="tracking-wider">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Terminal Style Messages */}
        <div className="h-48 flex items-center justify-center">
          {!isComplete && (
            <div className="text-green-400 font-mono text-sm text-left">
              <div className="mb-2">[SYSTEM] INITIALIZING...</div>
              <div className="text-green-300">
                {progress < 20 && (
                  <>
                    <div>┌─ Loading core modules...</div>
                    <div>├─ Initializing components...</div>
                    <div>└─ Status: STARTING</div>
                  </>
                )}
                {progress >= 20 && progress < 40 && (
                  <>
                    <div>┌─ Loading assets...</div>
                    <div>├─ Processing images...</div>
                    <div>└─ Status: LOADING</div>
                  </>
                )}
                {progress >= 40 && progress < 60 && (
                  <>
                    <div>┌─ Rendering UI...</div>
                    <div>├─ Building interface...</div>
                    <div>└─ Status: RENDERING</div>
                  </>
                )}
                {progress >= 60 && progress < 80 && (
                  <>
                    <div>┌─ Optimizing performance...</div>
                    <div>├─ Finalizing setup...</div>
                    <div>└─ Status: PREPARING</div>
                  </>
                )}
                {progress >= 80 && progress < 100 && (
                  <>
                    <div>┌─ Almost ready...</div>
                    <div>├─ Finalizing...</div>
                    <div>└─ Status: COMPLETING</div>
                  </>
                )}
              </div>
            </div>
          )}
          
          {isComplete && (
            <div className="text-center">
              <div className="text-green-400 text-2xl font-bold mb-2 font-mono">[READY] SYSTEM ONLINE</div>
              <div className="text-green-300 font-mono">
                <div>┌─ Portfolio: LOADED</div>
                <div>├─ Status: OPERATIONAL</div>
                <div>└─ Welcome to my world!</div>
              </div>
            </div>
          )}
        </div>

        {/* Gaming Style Loading Indicator */}
        {!isComplete && (
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-sm animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 bg-cyan-400 rounded-sm animate-pulse" style={{ animationDelay: '200ms' }} />
            <div className="w-3 h-3 bg-green-400 rounded-sm animate-pulse" style={{ animationDelay: '400ms' }} />
          </div>
        )}

        {/* Terminal Cursor */}
        {!isComplete && (
          <div className="mt-4 text-green-400 font-mono text-sm animate-pulse">
            {'>'} LOADING_MODE
          </div>
        )}

        {/* Matrix Rain Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
};