import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Mic, 
  Video, 
  TrendingUp,
  Users,
  Clock,
  Brain,
  Sparkles
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Analyses",
      value: "12,847",
      change: "+12.5%",
      icon: BarChart3,
      trend: "up"
    },
    {
      title: "Text Processed",
      value: "2.4M",
      change: "+8.2%",
      icon: FileText,
      trend: "up"
    },
    {
      title: "Active Sessions",
      value: "156",
      change: "+23.1%",
      icon: Users,
      trend: "up"
    },
    {
      title: "Accuracy Rate",
      value: "98.5%",
      change: "+0.3%",
      icon: Brain,
      trend: "up"
    }
  ];

  const recentActivity = [
    {
      type: "text",
      title: "Document Analysis Completed",
      description: "Marketing campaign sentiment report",
      time: "2 minutes ago",
      emotion: "Positive"
    },
    {
      type: "speech",
      title: "Voice Analysis Processed",
      description: "Customer support call recording",
      time: "15 minutes ago",
      emotion: "Neutral"
    },
    {
      type: "video",
      title: "Video Emotion Detection",
      description: "Interview analysis session",
      time: "1 hour ago",
      emotion: "Mixed"
    },
    {
      type: "chat",
      title: "AI Chatbot Interaction",
      description: "Real-time emotion monitoring",
      time: "2 hours ago",
      emotion: "Happy"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Welcome back! Here's your emotion intelligence overview.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                Premium Account
              </Badge>
              <Button className="bg-gradient-primary hover:shadow-glow smooth-transition">
                New Analysis
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card smooth-transition">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-success flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-gradient-card border-border/50 hover:shadow-card smooth-transition group cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary group-hover:text-accent smooth-transition" />
                <h3 className="font-semibold mb-2">AI Chatbot</h3>
                <p className="text-sm text-muted-foreground">
                  Start a conversation with emotion analysis
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-card smooth-transition group cursor-pointer">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-primary group-hover:text-accent smooth-transition" />
                <h3 className="font-semibold mb-2">Text Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Analyze emotions in text and documents
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-card smooth-transition group cursor-pointer">
              <CardContent className="p-6 text-center">
                <Mic className="h-12 w-12 mx-auto mb-4 text-primary group-hover:text-accent smooth-transition" />
                <h3 className="font-semibold mb-2">Speech Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Extract emotions from voice and audio
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-card smooth-transition group cursor-pointer">
              <CardContent className="p-6 text-center">
                <Video className="h-12 w-12 mx-auto mb-4 text-primary group-hover:text-accent smooth-transition" />
                <h3 className="font-semibold mb-2">Video Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Detect emotions from facial expressions
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Your latest emotion analysis activities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 rounded-lg bg-background/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {activity.type === 'text' && <FileText className="w-4 h-4 text-primary" />}
                      {activity.type === 'speech' && <Mic className="w-4 h-4 text-primary" />}
                      {activity.type === 'video' && <Video className="w-4 h-4 text-primary" />}
                      {activity.type === 'chat' && <MessageSquare className="w-4 h-4 text-primary" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                        <Badge variant="outline" className={
                          activity.emotion === 'Positive' ? 'border-success text-success' :
                          activity.emotion === 'Happy' ? 'border-accent text-accent' :
                          activity.emotion === 'Mixed' ? 'border-warning text-warning' :
                          'border-muted-foreground text-muted-foreground'
                        }>
                          {activity.emotion}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  Emotion Trends
                </CardTitle>
                <CardDescription>
                  Emotion distribution over the last 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Happy</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-success rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Neutral</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-accent rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">50%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sad</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-1/4 h-full bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Angry</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-1/6 h-full bg-destructive rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">15%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;