import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-10 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Make an Impact?
            </h2>
            <p className="mt-4 text-white/90">
              Join hotels, restaurants, and food services already using AAHAR to reduce waste, 
              save money, and make a positive social impact through verified food donations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/donate">Start Donating</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link to="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
