
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, Cell, PieChart, Pie } from 'recharts';

const Impact = () => {
  // Mock data for charts
  const yearlyData = [
    { year: '2020', donations: 120, co2: 400, meals: 480 },
    { year: '2021', donations: 280, co2: 950, meals: 1120 },
    { year: '2022', donations: 430, co2: 1450, meals: 1720 },
    { year: '2023', donations: 620, co2: 2100, meals: 2480 },
    { year: '2024', donations: 850, co2: 2880, meals: 3400 },
    { year: '2025', donations: 1200, co2: 4080, meals: 4800 },
  ];

  const impactByRegion = [
    { name: 'North Region', value: 35 },
    { name: 'South Region', value: 25 },
    { name: 'East Region', value: 20 },
    { name: 'West Region', value: 15 },
    { name: 'Central', value: 5 },
  ];

  const COLORS = ['#3ECF8E', '#6366F1', '#F97316', '#F43F5E', '#8B5CF6'];

  const impactCards = [
    {
      title: "Environmental Impact",
      metrics: [
        { name: "CO₂ Emissions Saved", value: "528 tons" },
        { name: "Landfill Space Saved", value: "156 m³" },
        { name: "Water Conserved", value: "2.8 million liters" },
      ],
      color: "from-green-500 to-emerald-700",
    },
    {
      title: "Social Impact",
      metrics: [
        { name: "Meals Provided", value: "87,640" },
        { name: "People Served", value: "12,520" },
        { name: "Communities Reached", value: "28" },
      ],
      color: "from-blue-500 to-indigo-700",
    },
    {
      title: "Economic Impact",
      metrics: [
        { name: "Money Saved for Donors", value: "€142,800" },
        { name: "Value Generated for NGOs", value: "€324,500" },
        { name: "Jobs Supported", value: "15" },
      ],
      color: "from-orange-500 to-amber-700",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 py-10">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight">Our Impact</h1>
            <p className="mt-4 text-muted-foreground">
              See the environmental, social, and economic benefits of our collective efforts in reducing food waste.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {impactCards.map((card, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`h-2 bg-gradient-to-r ${card.color}`} />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <div className="space-y-4">
                    {card.metrics.map((metric, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{metric.name}</span>
                        <span className="font-medium">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Yearly Growth</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={yearlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3ECF8E" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3ECF8E" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area type="monotone" dataKey="donations" stroke="#3ECF8E" fillOpacity={1} fill="url(#colorDonations)" />
                      <Area type="monotone" dataKey="co2" stroke="#6366F1" fillOpacity={1} fill="url(#colorCO2)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 flex justify-center space-x-6">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm">Donations (kg)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-secondary mr-2"></div>
                    <span className="text-sm">CO₂ Saved (kg)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Regional Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={impactByRegion}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {impactByRegion.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-xl p-8 mb-12">
            <div className="mx-auto max-w-3xl text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight">SDG Alignment</h2>
              <p className="mt-2 text-muted-foreground">
                Our work directly contributes to the UN Sustainable Development Goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                  SDG 2
                </div>
                <h3 className="font-bold mb-2">Zero Hunger</h3>
                <p className="text-sm text-muted-foreground">Providing meals to those in need through food recovery</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
                <div className="w-16 h-16 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                  SDG 12
                </div>
                <h3 className="font-bold mb-2">Responsible Consumption</h3>
                <p className="text-sm text-muted-foreground">Reducing food waste through better tracking and redistribution</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                  SDG 13
                </div>
                <h3 className="font-bold mb-2">Climate Action</h3>
                <p className="text-sm text-muted-foreground">Reducing greenhouse gas emissions by diverting food from landfills</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
