
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const RecentDonations = () => {
  // Mock data for recent donations
  const donations = [
    {
      id: "DON-001",
      foodType: "Assorted Sandwiches",
      quantity: "5 kg",
      donor: "City Hotel",
      timestamp: "Today, 14:32",
      status: "ready",
    },
    {
      id: "DON-002",
      foodType: "Fresh Produce",
      quantity: "12 kg",
      donor: "Green Grocers",
      timestamp: "Today, 11:15",
      status: "picked-up",
    },
    {
      id: "DON-003",
      foodType: "Bread and Pastries",
      quantity: "8 kg",
      donor: "Morning Bakery",
      timestamp: "Yesterday, 17:40",
      status: "delivered",
    },
    {
      id: "DON-004",
      foodType: "Prepared Meals",
      quantity: "10 kg",
      donor: "Gourmet Restaurant",
      timestamp: "Yesterday, 14:22",
      status: "delivered",
    },
    {
      id: "DON-005",
      foodType: "Dairy Products",
      quantity: "3 kg",
      donor: "Local Supermarket",
      timestamp: "2 days ago",
      status: "delivered",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "ready":
        return <Badge className="bg-amber-500">Ready for Pickup</Badge>;
      case "picked-up":
        return <Badge className="bg-blue-500">In Transit</Badge>;
      case "delivered":
        return <Badge className="bg-primary">Delivered</Badge>;
      default:
        return <Badge className="bg-muted">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Donations</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {donations.map((donation) => (
            <div key={donation.id} className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-1">
                <div className="font-medium">{donation.foodType}</div>
                <div className="text-sm text-muted-foreground">
                  {donation.quantity} from {donation.donor}
                </div>
                <div className="text-xs text-muted-foreground">{donation.timestamp}</div>
              </div>
              <div className="flex items-center gap-4">
                {getStatusBadge(donation.status)}
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentDonations;
