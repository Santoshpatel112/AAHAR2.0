
import React from 'react';

const ImpactStats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Our Collective Impact
          </h2>
          <p className="mt-4 text-muted-foreground">
            Together, we're making a significant difference in reducing food waste and feeding communities.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="impact-card rounded-xl bg-white p-8 text-center shadow">
            <div className="font-display text-5xl font-bold text-primary">87,640</div>
            <div className="mt-2 text-xl font-medium">Meals Served</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Nutritious meals provided to those in need through our network of partner NGOs.
            </p>
          </div>
          
          <div className="impact-card rounded-xl bg-white p-8 text-center shadow">
            <div className="font-display text-5xl font-bold text-primary">156</div>
            <div className="mt-2 text-xl font-medium">Tons of Food Saved</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Quality surplus food redirected from landfills to hungry people in our communities.
            </p>
          </div>
          
          <div className="impact-card rounded-xl bg-white p-8 text-center shadow">
            <div className="font-display text-5xl font-bold text-primary">528</div>
            <div className="mt-2 text-xl font-medium">Tons of CO₂ Avoided</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Greenhouse gas emissions prevented by keeping food waste out of landfills.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Data based on our impact since launch. Updated in real-time as new donations are logged and verified.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
