
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from '@/contexts/AuthContext';
import DashboardStats from '@/components/DashboardStats';
import RecentDonations from '@/components/RecentDonations';
import { useNavigate } from 'react-router-dom';

interface DonorDashboardProps {
  user: User;
}

const DonorDashboard: React.FC<DonorDashboardProps> = ({ user }) => {
  const navigate = useNavigate();
  
  // Mock data for statistics
  const stats = [
    {
      title: "Your Donations",
      value: "56 kg",
      description: "↑ 12% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
          <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
          <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
        </svg>
      ),
    },
    {
      title: "CO₂ Saved",
      value: "189 kg",
      description: "↑ 8% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M2 22a8 8 0 0 1 8.5-7.5 6 6 0 0 1 12 0A8 8 0 0 1 22 22" />
          <path d="M12 11V9.5" />
          <path d="M8.8 9.6a6 6 0 0 1 10.4 0" />
          <path d="M17.4 6.6A10 10 0 0 0 8.8 5 10 10 0 0 0 6.6 6.6" />
        </svg>
      ),
    },
    {
      title: "Meals Generated",
      value: "1,480",
      description: "↑ 16% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4" />
          <path d="M10 19H5a2 2 0 0 1-2-2v-1a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2h-5" />
          <path d="m6 9 12 0" />
        </svg>
      ),
    },
    {
      title: "Money Saved",
      value: "€2,460",
      description: "↑ 10% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      ),
    },
  ];
  
  return (
    <div className="space-y-8 mt-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Donor Dashboard</h2>
          <p className="text-muted-foreground">Monitor your donations and impact</p>
        </div>
        <Button onClick={() => navigate('/donate')} className="md:self-end">
          Make New Donation
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Your Donation Stats</h3>
        <DashboardStats />
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Your Recent Donations</h3>
        <RecentDonations />
      </div>
    </div>
  );
};

export default DonorDashboard;
