
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { DonationFormData } from '@/types/donations';
import DonationStepper from './donation/DonationStepper';
import DonationFormStep1 from './donation/DonationFormStep1';
import DonationFormStep2 from './donation/DonationFormStep2';
import DonationFormStep3 from './donation/DonationFormStep3';

const DonationForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<DonationFormData>({
    foodType: "",
    category: "",
    quantity: "",
    unit: "kg",
    expiryDate: "",
    description: "",
    pickupAddress: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });
  
  const [generatedHash, setGeneratedHash] = useState("");
  const [generatedQR, setGeneratedQR] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      toast({
        title: "Donation Registered",
        description: "Your donation has been successfully registered. Please use the generated QR code for verification.",
      });
    }
  };
  
  const handleBack = () => {
    setStep(step - 1);
  };
  
  const handleQRGenerated = (hash: string, qrValue: string) => {
    setGeneratedHash(hash);
    setGeneratedQR(qrValue);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <DonationStepper currentStep={step} />

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <DonationFormStep1 
            formData={formData} 
            handleChange={handleChange} 
            handleSelectChange={handleSelectChange} 
            handleSubmit={handleSubmit} 
          />
        )}
        
        {step === 2 && (
          <DonationFormStep2 
            formData={formData} 
            handleChange={handleChange} 
            handleBack={handleBack} 
            handleSubmit={handleSubmit} 
          />
        )}
        
        {step === 3 && (
          <DonationFormStep3 
            formData={formData} 
            handleBack={handleBack} 
            handleSubmit={handleSubmit} 
            handleQRGenerated={handleQRGenerated} 
          />
        )}
      </form>
    </div>
  );
};

export default DonationForm;
