import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Brain } from "lucide-react";

const Analytics = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <BarChart3 className="w-8 h-8 mr-3 text-primary" />
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Comprehensive emotion intelligence insights and reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Total Analyses</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">15,247</div>
                <div className="text-sm text-success flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12.5% from last month
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Active Users</CardTitle>
                <CardDescription>Current month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">2,834</div>
                <div className="text-sm text-success flex items-center mt-1">
                  <Users className="w-3 h-3 mr-1" />
                  +8.2% growth
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Accuracy Rate</CardTitle>
                <CardDescription>AI model performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">98.5%</div>
                <div className="text-sm text-primary flex items-center mt-1">
                  <Brain className="w-3 h-3 mr-1" />
                  +0.3% improvement
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Processing Time</CardTitle>
                <CardDescription>Average response</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">150ms</div>
                <div className="text-sm text-success flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  -5ms faster
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Analytics Dashboard Coming Soon</h2>
            <p className="text-muted-foreground">
              Comprehensive charts and detailed insights are being developed
            </p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;