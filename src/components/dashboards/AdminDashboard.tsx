
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from '@/contexts/AuthContext';
import DashboardStats from '@/components/DashboardStats';
import RecentDonations from '@/components/RecentDonations';

interface AdminDashboardProps {
  user: User;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
  // Mock data for statistics
  const stats = [
    {
      title: "Total Donations",
      value: "1,256 kg",
      description: "↑ 24% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
          <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
          <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
        </svg>
      ),
    },
    {
      title: "Active Users",
      value: "264",
      description: "↑ 12% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "NGO Partners",
      value: "32",
      description: "↑ 8% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M12 12c4 0 8-1 8-5s-4-5-8-5-8 1-8 5 4 5 8 5z" />
          <path d="M12 12v10" />
          <path d="M6 16a2 2 0 1 0 12 0" />
        </svg>
      ),
    },
    {
      title: "System Status",
      value: "Healthy",
      description: "All systems operational",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ];

  // Mock users data
  const mockUsers = [
    { id: 'usr-1', name: 'John Smith', email: 'john@example.com', role: 'donor', status: 'active', joinDate: '2025-01-15' },
    { id: 'usr-2', name: 'Feeding Hands', email: 'contact@feedinghands.org', role: 'ngo', status: 'active', joinDate: '2025-02-03' },
    { id: 'usr-3', name: 'Sarah Johnson', email: 'sarah@restaurant.com', role: 'donor', status: 'inactive', joinDate: '2025-03-10' },
    { id: 'usr-4', name: 'Food Rescue', email: 'info@foodrescue.org', role: 'ngo', status: 'active', joinDate: '2025-01-22' },
    { id: 'usr-5', name: 'Michael Chen', email: 'mike@hotel.com', role: 'donor', status: 'active', joinDate: '2025-03-28' },
  ];
  
  return (
    <div className="space-y-8 mt-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <p className="text-muted-foreground">System overview and management</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Export Reports</Button>
          <Button>System Settings</Button>
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
        <Tabs defaultValue="users">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="users" className="mt-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">User Management</h3>
                <Button>Add New User</Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4">Name</th>
                          <th className="text-left p-4">Email</th>
                          <th className="text-left p-4">Role</th>
                          <th className="text-left p-4">Status</th>
                          <th className="text-left p-4">Join Date</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockUsers.map((user) => (
                          <tr key={user.id} className="border-b hover:bg-accent/10">
                            <td className="p-4">{user.name}</td>
                            <td className="p-4">{user.email}</td>
                            <td className="p-4 capitalize">{user.role}</td>
                            <td className="p-4">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="p-4">{user.joinDate}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">Edit</Button>
                                <Button variant="ghost" size="sm" className="text-red-500">Suspend</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="donations" className="mt-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Donation Management</h3>
                <Button>Export Data</Button>
              </div>
              <RecentDonations />
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">System Analytics</h3>
              <DashboardStats />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
