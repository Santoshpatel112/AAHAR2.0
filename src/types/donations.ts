
export interface DonationFormData {
  foodType: string;
  category: string;
  quantity: string;
  unit: string;
  expiryDate: string;
  description: string;
  pickupAddress: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}

export interface QRGeneratedData {
  hash: string;
  qrValue: string;
}
