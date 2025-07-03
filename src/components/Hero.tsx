import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-muted/50 py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-60 -left-20 h-60 w-60 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Reduce Food Waste, 
            <span className="gradient-text block mt-1">Increase Impact</span>
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            AAHAR helps restaurants, hotels, and food services track, donate, and reduce food waste through smart technology, verifiable donations, and real-time impact measurement.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/donate">Start Donating</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">1.8</div>
              <div className="text-sm text-muted-foreground">Tons of food saved per site yearly</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">€8K</div>
              <div className="text-sm text-muted-foreground">Average annual savings</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">6.8</div>
              <div className="text-sm text-muted-foreground">Tons of CO₂ reduced per site</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">11:1</div>
              <div className="text-sm text-muted-foreground">Benefit-to-Cost Ratio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
