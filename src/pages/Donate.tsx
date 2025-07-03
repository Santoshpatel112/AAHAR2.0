
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import DonationForm from '@/components/DonationForm';

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 py-10">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight">Donate Surplus Food</h1>
            <p className="mt-4 text-muted-foreground">
              Fill out the form below to log a new food donation. Our system will generate a secure QR code
              that can be used to verify the donation throughout its journey.
            </p>
          </div>
          
          <DonationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
