
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardStats from '@/components/DashboardStats';
import RecentDonations from '@/components/RecentDonations';
import { useAuth } from '@/contexts/AuthContext';
import DonorDashboard from '@/components/dashboards/DonorDashboard';
import NgoDashboard from '@/components/dashboards/NgoDashboard';
import AdminDashboard from '@/components/dashboards/AdminDashboard';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 py-10">
          <div className="container">
            <Card>
              <CardHeader>
                <CardTitle>Authentication Required</CardTitle>
                <CardDescription>
                  Please log in to access your dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>You need to be logged in to view this page.</p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 py-10">
        <div className="container">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user.name}! Your role is: {user.role}
            </p>
          </div>
          
          {user.role === 'donor' && <DonorDashboard user={user} />}
          {user.role === 'ngo' && <NgoDashboard user={user} />}
          {user.role === 'admin' && <AdminDashboard user={user} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
