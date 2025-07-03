
import React from 'react';
import { Button } from "@/components/ui/button";
import QRCodeGenerator from '@/components/QRCodeGenerator';
import { DonationFormData } from '@/types/donations';

interface Step3Props {
  formData: DonationFormData;
  handleBack: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleQRGenerated: (hash: string, qrValue: string) => void;
}

const DonationFormStep3: React.FC<Step3Props> = ({ 
  formData, 
  handleBack, 
  handleSubmit, 
  handleQRGenerated 
}) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 rounded-lg bg-muted p-4">
        <h3 className="text-lg font-medium">Donation Summary</h3>
        <dl className="mt-4 space-y-2">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Food Item:</dt>
            <dd>{formData.foodType}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Quantity:</dt>
            <dd>{formData.quantity} {formData.unit}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Expiry Date:</dt>
            <dd>{formData.expiryDate}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Contact:</dt>
            <dd>{formData.contactName}</dd>
          </div>
        </dl>
      </div>
      
      <QRCodeGenerator 
        initialData={`trackbite:summary/${formData.foodType}-${formData.quantity}`}
        onGenerate={handleQRGenerated}
      />
      
      <div className="mt-6 flex space-x-4">
        <Button type="button" variant="outline" className="flex-1" onClick={handleBack}>
          Back
        </Button>
        <Button type="submit" className="flex-1" onClick={handleSubmit}>
          Confirm Donation
        </Button>
      </div>
    </div>
  );
};

export default DonationFormStep3;
