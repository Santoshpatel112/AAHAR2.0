
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecentDonations from '@/components/RecentDonations';

interface NgoDashboardProps {
  user: User;
}

const NgoDashboard: React.FC<NgoDashboardProps> = ({ user }) => {
  // Mock data for statistics
  const stats = [
    {
      title: "Pending Pickups",
      value: "8",
      description: "2 nearby your location",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="m9 22-5-5a2 2 0 0 1 0-2.83L15.17 3" />
          <path d="M6 8h12a2 2 0 0 1 2 2v1" />
          <path d="m21 8-5-5" />
        </svg>
      ),
    },
    {
      title: "Donations Received",
      value: "125 kg",
      description: "↑ 18% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
          <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
          <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
        </svg>
      ),
    },
    {
      title: "People Fed",
      value: "3,240",
      description: "This month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4" />
          <path d="M10 19H5a2 2 0 0 1-2-2v-1a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2h-5" />
          <path d="m6 9 12 0" />
        </svg>
      ),
    },
    {
      title: "Donor Partners",
      value: "24",
      description: "5 new this month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M14 7.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0" />
          <path d="M16.5 10h.5a3 3 0 0 1 3 3v1" />
          <path d="M5 7.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0" />
          <path d="M7.5 10H7a3 3 0 0 0-3 3v1" />
          <path d="M9.5 10h5" />
          <path d="M9 12.5v-5" />
          <path d="M15 12.5v-5" />
          <path d="M12 7.5v-5" />
        </svg>
      ),
    },
  ];
  
  // Mock available donations for pickup
  const availableDonations = [
    {
      id: 'don-1',
      donor: 'Cafe Milano',
      foodType: 'Sandwiches and Pastries',
      quantity: '12 kg',
      expiryDate: '2025-04-29',
      location: '123 Main St, Milan',
      distance: '1.2 km'
    },
    {
      id: 'don-2',
      donor: 'Fresh Market',
      foodType: 'Fresh Produce',
      quantity: '8 kg',
      expiryDate: '2025-05-01',
      location: '456 Central Ave, Milan',
      distance: '2.5 km'
    },
    {
      id: 'don-3',
      donor: 'Hotel Continental',
      foodType: 'Catering Leftovers',
      quantity: '15 kg',
      expiryDate: '2025-04-28',
      location: '789 Plaza Dr, Milan',
      distance: '3.8 km'
    }
  ];
  
  return (
    <div className="space-y-8 mt-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">NGO Dashboard</h2>
          <p className="text-muted-foreground">Manage food pickups and deliveries</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Scan QR Code</Button>
          <Button>Find Donations</Button>
        </div>
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
        <Tabs defaultValue="available">
          <TabsList>
            <TabsTrigger value="available">Available for Pickup</TabsTrigger>
            <TabsTrigger value="inprogress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="available" className="mt-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Available Donations</h3>
              
              {availableDonations.map((donation) => (
                <Card key={donation.id} className="hover:bg-accent/10 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <h4 className="font-semibold">{donation.donor}</h4>
                        <p className="text-sm text-muted-foreground">{donation.foodType}</p>
                        <div className="flex gap-4 mt-2">
                          <span className="text-sm">Quantity: {donation.quantity}</span>
                          <span className="text-sm">Expires: {donation.expiryDate}</span>
                        </div>
                        <p className="text-sm mt-1">{donation.location} ({donation.distance})</p>
                      </div>
                      <div className="flex gap-2 self-end">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button size="sm">Pick Up</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="inprogress" className="mt-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">In Progress Pickups</h3>
              <p>You have no in-progress pickups at the moment.</p>
            </div>
          </TabsContent>
          <TabsContent value="completed" className="mt-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Completed Donations</h3>
              <RecentDonations />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NgoDashboard;
