
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DonationFormData } from '@/types/donations';

interface Step1Props {
  formData: DonationFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const DonationFormStep1: React.FC<Step1Props> = ({ 
  formData, 
  handleChange, 
  handleSelectChange, 
  handleSubmit 
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div>
          <Label htmlFor="foodType">Food Name</Label>
          <Input
            id="foodType"
            name="foodType"
            value={formData.foodType}
            onChange={handleChange}
            placeholder="E.g., Bread, Rice, Sandwiches"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            value={formData.category}
            onValueChange={(value) => handleSelectChange("category", value)}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="baked-goods">Baked Goods</SelectItem>
              <SelectItem value="produce">Produce</SelectItem>
              <SelectItem value="prepared-meals">Prepared Meals</SelectItem>
              <SelectItem value="canned-goods">Canned Goods</SelectItem>
              <SelectItem value="dairy">Dairy</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              min="0"
              step="0.1"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Amount"
              required
            />
          </div>
          <div>
            <Label htmlFor="unit">Unit</Label>
            <Select
              value={formData.unit}
              onValueChange={(value) => handleSelectChange("unit", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kg">Kilograms (kg)</SelectItem>
                <SelectItem value="servings">Servings</SelectItem>
                <SelectItem value="items">Items</SelectItem>
                <SelectItem value="trays">Trays</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label htmlFor="expiryDate">Expiry Date</Label>
          <Input
            id="expiryDate"
            name="expiryDate"
            type="date"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Additional details about the food"
            rows={3}
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full" onClick={handleSubmit}>Continue</Button>
    </div>
  );
};

export default DonationFormStep1;
