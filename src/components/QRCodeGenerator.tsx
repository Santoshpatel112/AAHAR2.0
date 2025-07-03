
import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const QRCodeGenerator = ({ initialData = "", onGenerate = (hash, qrValue) => {} }) => {
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [qrData, setQrData] = useState(initialData);
  const [hash, setHash] = useState("");
  
  const generateQR = () => {
    if (foodType && quantity) {
      const timestamp = new Date().toISOString();
      // In a real app, we'd use a proper SHA-256 hash function
      // Here we're just simulating it for demo purposes
      const mockHash = `hash-${foodType}-${quantity}-${timestamp}`.replace(/\s+/g, '-').toLowerCase();
      const qrValue = `trackbite:donation/${mockHash}`;
      
      setHash(mockHash);
      setQrData(qrValue);
      onGenerate(mockHash, qrValue);
    }
  };
  
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-4">Generate Donation QR Code</h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="food-type">Food Type</Label>
          <Input 
            id="food-type" 
            value={foodType} 
            onChange={(e) => setFoodType(e.target.value)} 
            placeholder="e.g., Bread, Produce, Prepared Meals" 
          />
        </div>
        
        <div>
          <Label htmlFor="quantity">Quantity (kg)</Label>
          <Input 
            id="quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            placeholder="e.g., 5" 
            type="number" 
            min="0" 
            step="0.1" 
          />
        </div>
        
        <Button className="w-full" onClick={generateQR} disabled={!foodType || !quantity}>
          Generate QR Code
        </Button>
      </div>
      
      {qrData && (
        <div className="mt-6 space-y-4">
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg">
              <QRCodeSVG value={qrData} size={200} />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Hash: {hash}</p>
            <p className="text-sm text-muted-foreground break-all">{qrData}</p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Button variant="outline" onClick={() => window.print()}>
              Print QR
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                // In a real app, this would be a proper download function
                alert("Download functionality would be implemented here");
              }}
            >
              Download
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
