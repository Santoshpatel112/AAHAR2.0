
import React from 'react';

interface DonationStepperProps {
  currentStep: number;
}

const DonationStepper: React.FC<DonationStepperProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Food Info' },
    { number: 2, label: 'Contact Details' },
    { number: 3, label: 'Generate QR' }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step) => (
          <div key={step.number} className="flex items-center">
            <div 
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                currentStep >= step.number ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
              }`}
            >
              {step.number}
            </div>
            <div className={`ml-2 ${currentStep >= step.number ? 'text-foreground' : 'text-muted-foreground'}`}>
              {step.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 overflow-hidden rounded-full bg-muted">
        <div
          className="h-2 bg-primary transition-all duration-500"
          style={{
            width: currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%',
          }}
        />
      </div>
    </div>
  );
};

export default DonationStepper;
