
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DonationFormData } from '@/types/donations';

interface Step2Props {
  formData: DonationFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBack: () => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const DonationFormStep2: React.FC<Step2Props> = ({ 
  formData, 
  handleChange, 
  handleBack, 
  handleSubmit 
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div>
          <Label htmlFor="pickupAddress">Pickup Address</Label>
          <Textarea
            id="pickupAddress"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
            placeholder="Full address for food pickup"
            rows={2}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="contactName">Contact Person</Label>
          <Input
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            placeholder="Full name"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="contactPhone">Phone Number</Label>
          <Input
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            placeholder="Contact phone number"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="contactEmail">Email Address</Label>
          <Input
            id="contactEmail"
            name="contactEmail"
            type="email"
            value={formData.contactEmail}
            onChange={handleChange}
            placeholder="Contact email"
            required
          />
        </div>
      </div>
      
      <div className="flex space-x-4">
        <Button type="button" variant="outline" className="flex-1" onClick={handleBack}>
          Back
        </Button>
        <Button type="submit" className="flex-1" onClick={handleSubmit}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default DonationFormStep2;
