import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Brain, 
  Clock, 
  Target,
  Eye,
  Download,
  Filter,
  Calendar,
  Smile,
  Frown,
  Meh,
  Heart,
  Zap
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';

const Analytics = () => {
  // Mock data for charts
  const emotionData = [
    { name: 'Jan', happy: 45, sad: 12, angry: 8, neutral: 35 },
    { name: 'Feb', happy: 52, sad: 10, angry: 6, neutral: 32 },
    { name: 'Mar', happy: 48, sad: 15, angry: 9, neutral: 28 },
    { name: 'Apr', happy: 61, sad: 8, angry: 5, neutral: 26 },
    { name: 'May', happy: 55, sad: 12, angry: 7, neutral: 26 },
    { name: 'Jun', happy: 67, sad: 9, angry: 4, neutral: 20 }
  ];

  const usageData = [
    { name: 'Mon', analyses: 24 },
    { name: 'Tue', analyses: 45 },
    { name: 'Wed', analyses: 38 },
    { name: 'Thu', analyses: 52 },
    { name: 'Fri', analyses: 61 },
    { name: 'Sat', analyses: 28 },
    { name: 'Sun', analyses: 35 }
  ];

  const emotionDistribution = [
    { name: 'Happy', value: 45, color: '#10b981' },
    { name: 'Neutral', value: 30, color: '#6b7280' },
    { name: 'Sad', value: 15, color: '#ef4444' },
    { name: 'Angry', value: 10, color: '#f97316' }
  ];

  const topEmotions = [
    { emotion: 'Joy', percentage: 34, change: '+5.2%', trend: 'up' },
    { emotion: 'Confidence', percentage: 28, change: '+2.1%', trend: 'up' },
    { emotion: 'Calm', percentage: 22, change: '-1.3%', trend: 'down' },
    { emotion: 'Excitement', percentage: 16, change: '+8.7%', trend: 'up' }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <BarChart3 className="w-8 h-8 mr-3 text-primary" />
                Analytics Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Comprehensive emotion intelligence insights and reports
              </p>
            </div>
            
            <div className="flex gap-2">
              <Select defaultValue="30d">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Total Analyses
                </CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">15,247</div>
                <div className="text-sm text-success flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12.5% from last month
                </div>
                <Progress value={75} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2 text-accent" />
                  Active Users
                </CardTitle>
                <CardDescription>Current month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">2,834</div>
                <div className="text-sm text-success flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8.2% growth
                </div>
                <Progress value={68} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-success" />
                  Accuracy Rate
                </CardTitle>
                <CardDescription>AI model performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">98.5%</div>
                <div className="text-sm text-primary flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +0.3% improvement
                </div>
                <Progress value={98} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-secondary" />
                  Processing Time
                </CardTitle>
                <CardDescription>Average response</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">150ms</div>
                <div className="text-sm text-success flex items-center mt-1">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  -5ms faster
                </div>
                <Progress value={85} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="emotions">Emotions</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Emotion Trends */}
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Emotion Trends</CardTitle>
                    <CardDescription>Monthly emotion analysis results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={emotionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="happy" stackId="1" stroke="#10b981" fill="#10b981" />
                        <Area type="monotone" dataKey="neutral" stackId="1" stroke="#6b7280" fill="#6b7280" />
                        <Area type="monotone" dataKey="sad" stackId="1" stroke="#ef4444" fill="#ef4444" />
                        <Area type="monotone" dataKey="angry" stackId="1" stroke="#f97316" fill="#f97316" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Daily Usage */}
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Daily Usage</CardTitle>
                    <CardDescription>Analysis activity this week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={usageData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="analyses" fill="hsl(var(--primary))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest emotion analysis sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: 'Text Analysis', emotion: 'Joy', confidence: 94, time: '2 minutes ago' },
                      { type: 'Speech Analysis', emotion: 'Calm', confidence: 87, time: '15 minutes ago' },
                      { type: 'Video Analysis', emotion: 'Excitement', confidence: 92, time: '1 hour ago' },
                      { type: 'Text Analysis', emotion: 'Neutral', confidence: 78, time: '2 hours ago' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <div>
                            <p className="font-medium">{activity.type}</p>
                            <p className="text-sm text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary">{activity.emotion}</Badge>
                          <span className="text-sm font-medium">{activity.confidence}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="emotions" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Emotion Distribution */}
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Emotion Distribution</CardTitle>
                    <CardDescription>Current month breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={emotionDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {emotionDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Top Emotions */}
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Top Emotions</CardTitle>
                    <CardDescription>Most detected emotions this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topEmotions.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              {index === 0 && <Smile className="w-4 h-4 text-success" />}
                              {index === 1 && <Zap className="w-4 h-4 text-primary" />}
                              {index === 2 && <Heart className="w-4 h-4 text-secondary" />}
                              {index === 3 && <Brain className="w-4 h-4 text-accent" />}
                            </div>
                            <div>
                              <p className="font-medium">{item.emotion}</p>
                              <p className="text-sm text-muted-foreground">{item.percentage}% of analyses</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-medium ${item.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                              {item.change}
                            </span>
                            {item.trend === 'up' ? 
                              <TrendingUp className="w-4 h-4 text-success" /> : 
                              <TrendingDown className="w-4 h-4 text-destructive" />
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="usage" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Text Analysis</CardTitle>
                    <CardDescription>Most used feature</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8,432</div>
                    <div className="text-sm text-muted-foreground">Total sessions</div>
                    <Progress value={85} className="mt-2" />
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Speech Analysis</CardTitle>
                    <CardDescription>Voice emotion detection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4,156</div>
                    <div className="text-sm text-muted-foreground">Total sessions</div>
                    <Progress value={52} className="mt-2" />
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Video Analysis</CardTitle>
                    <CardDescription>Facial expression detection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,659</div>
                    <div className="text-sm text-muted-foreground">Total sessions</div>
                    <Progress value={35} className="mt-2" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Key Insights</CardTitle>
                    <CardDescription>AI-generated analysis insights</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="font-medium text-primary">Peak Activity Hours</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Most analyses occur between 9-11 AM and 2-4 PM, suggesting optimal engagement during work hours.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                      <p className="font-medium text-success">Positive Trend</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Happy emotions increased by 15% this month, indicating improved user sentiment.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <p className="font-medium text-accent">Usage Pattern</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Text analysis remains the most popular feature, accounting for 55% of all sessions.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Recommendations</CardTitle>
                    <CardDescription>Optimize your emotion analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="font-medium">Increase Video Analysis</p>
                        <p className="text-sm text-muted-foreground">
                          Consider using video analysis for more comprehensive emotion detection.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                      <div>
                        <p className="font-medium">Schedule Regular Analysis</p>
                        <p className="text-sm text-muted-foreground">
                          Set up automated analysis during peak hours for better insights.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                      <div>
                        <p className="font-medium">Export Weekly Reports</p>
                        <p className="text-sm text-muted-foreground">
                          Regular exports help track long-term emotion trends and patterns.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;