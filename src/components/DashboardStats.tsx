
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const DashboardStats = () => {
  // Mock data for the charts
  const monthlyData = [
    { name: 'Jan', amount: 120 },
    { name: 'Feb', amount: 180 },
    { name: 'Mar', amount: 150 },
    { name: 'Apr', amount: 210 },
    { name: 'May', amount: 240 },
    { name: 'Jun', amount: 200 },
    { name: 'Jul', amount: 280 },
    { name: 'Aug', amount: 260 },
    { name: 'Sep', amount: 300 },
    { name: 'Oct', amount: 340 },
    { name: 'Nov', amount: 280 },
    { name: 'Dec', amount: 320 },
  ];

  const categoryData = [
    { name: 'Prepared Meals', value: 42 },
    { name: 'Baked Goods', value: 28 },
    { name: 'Produce', value: 15 },
    { name: 'Dairy', value: 10 },
    { name: 'Other', value: 5 },
  ];

  const COLORS = ['#3ECF8E', '#6366F1', '#F97316', '#F43F5E', '#8B5CF6'];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Monthly Donations (kg)</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`${value} kg`, 'Amount']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              />
              <Bar 
                dataKey="amount" 
                fill="url(#colorGradient)" 
                radius={[4, 4, 0, 0]} 
                animationDuration={1500}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3ECF8E" stopOpacity={1} />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity={0.8} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Donation by Category</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                animationDuration={1500}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} kg`, 'Amount']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Impact Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">CO₂ Emissions Saved</div>
                <div className="text-sm text-muted-foreground">68%</div>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-primary" style={{ width: '68%' }} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">12.4 tons saved this year</div>
            </div>
            
            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Meals Provided</div>
                <div className="text-sm text-muted-foreground">82%</div>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-secondary" style={{ width: '82%' }} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">4,120 meals this quarter</div>
            </div>
            
            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Cost Savings</div>
                <div className="text-sm text-muted-foreground">54%</div>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-accent" style={{ width: '54%' }} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">€6,840 saved this year</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
