import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Log Surplus Food',
      description: 'Donors fill a simple form in the app with food type, quantity, and expiry date. Optionally upload a photo.',
      color: 'bg-primary/10',
    },
    {
      number: '02',
      title: 'Secure Hash Generation',
      description: 'The system creates a tamper-proof SHA-256 hash for each donation as a digital signature.',
      color: 'bg-secondary/10',
    },
    {
      number: '03',
      title: 'QR Code Creation',
      description: 'A QR code is generated containing the hash, which can be displayed on screen or printed.',
      color: 'bg-accent/10',
    },
    {
      number: '04',
      title: 'Pickup by NGO',
      description: 'NGO volunteer scans the QR code at pickup to verify authenticity and update status to "In Transit".',
      color: 'bg-primary/10',
    },
    {
      number: '05',
      title: 'Delivery & Verification',
      description: 'At the destination, the QR is scanned again to confirm delivery and record the complete journey.',
      color: 'bg-secondary/10',
    },
    {
      number: '06',
      title: 'Impact Measurement',
      description: 'The system automatically calculates meals served, CO₂ saved, and economic value recovered.',
      color: 'bg-accent/10',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How AAHAR Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            From donation to delivery, our platform ensures transparency and security at every step.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl ${step.color} p-6 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -right-2 -top-2 font-display text-5xl font-bold text-primary/20">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
