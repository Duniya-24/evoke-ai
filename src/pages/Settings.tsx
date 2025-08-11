import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Palette, 
  Brain, 
  Volume2, 
  Download,
  Globe,
  Zap,
  Save
} from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      analysisComplete: true,
      weeklyReport: true
    },
    analysis: {
      autoSave: true,
      confidenceThreshold: [75],
      language: "english",
      voiceAnalysis: true,
      realTimeProcessing: false
    },
    privacy: {
      dataRetention: "1year",
      shareAnalytics: false,
      publicProfile: false
    }
  });

  const updateSetting = (category: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value
      }
    }));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <SettingsIcon className="w-8 h-8 mr-3 text-primary" />
              Settings
            </h1>
            <p className="text-muted-foreground mt-1">
              Configure your emotion analysis preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Theme & Appearance */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Theme & Appearance
                </CardTitle>
                <CardDescription>
                  Customize the look and feel of your interface
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
                  </div>
                  <ThemeToggle />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Interface Language</Label>
                  <Select defaultValue="english">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications
                </CardTitle>
                <CardDescription>
                  Control what notifications you receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.email}
                    onCheckedChange={(value) => updateSetting('notifications', 'email', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Browser notifications</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.push}
                    onCheckedChange={(value) => updateSetting('notifications', 'push', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Analysis Complete</Label>
                    <p className="text-sm text-muted-foreground">Notify when analysis finishes</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.analysisComplete}
                    onCheckedChange={(value) => updateSetting('notifications', 'analysisComplete', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">Summary of your activity</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.weeklyReport}
                    onCheckedChange={(value) => updateSetting('notifications', 'weeklyReport', value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Analysis Settings */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Analysis Settings
                </CardTitle>
                <CardDescription>
                  Configure AI emotion recognition preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Auto-save Results</Label>
                    <p className="text-sm text-muted-foreground">Automatically save analysis results</p>
                  </div>
                  <Switch 
                    checked={settings.analysis.autoSave}
                    onCheckedChange={(value) => updateSetting('analysis', 'autoSave', value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Confidence Threshold: {settings.analysis.confidenceThreshold[0]}%</Label>
                  <p className="text-sm text-muted-foreground">Minimum confidence level for results</p>
                  <Slider
                    value={settings.analysis.confidenceThreshold}
                    onValueChange={(value) => updateSetting('analysis', 'confidenceThreshold', value)}
                    min={50}
                    max={99}
                    step={5}
                    className="w-full"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Voice Analysis</Label>
                    <p className="text-sm text-muted-foreground">Enable advanced voice emotion detection</p>
                  </div>
                  <Switch 
                    checked={settings.analysis.voiceAnalysis}
                    onCheckedChange={(value) => updateSetting('analysis', 'voiceAnalysis', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Real-time Processing</Label>
                    <p className="text-sm text-muted-foreground">Process data as you type/speak</p>
                    <Badge variant="secondary" className="ml-2">Beta</Badge>
                  </div>
                  <Switch 
                    checked={settings.analysis.realTimeProcessing}
                    onCheckedChange={(value) => updateSetting('analysis', 'realTimeProcessing', value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Privacy & Security
                </CardTitle>
                <CardDescription>
                  Manage your data and privacy settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Data Retention Period</Label>
                  <p className="text-sm text-muted-foreground">How long to keep your analysis data</p>
                  <Select 
                    value={settings.privacy.dataRetention}
                    onValueChange={(value) => updateSetting('privacy', 'dataRetention', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30days">30 Days</SelectItem>
                      <SelectItem value="6months">6 Months</SelectItem>
                      <SelectItem value="1year">1 Year</SelectItem>
                      <SelectItem value="forever">Forever</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Share Analytics</Label>
                    <p className="text-sm text-muted-foreground">Help improve our AI models</p>
                  </div>
                  <Switch 
                    checked={settings.privacy.shareAnalytics}
                    onCheckedChange={(value) => updateSetting('privacy', 'shareAnalytics', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Public Profile</Label>
                    <p className="text-sm text-muted-foreground">Make your profile visible to others</p>
                  </div>
                  <Switch 
                    checked={settings.privacy.publicProfile}
                    onCheckedChange={(value) => updateSetting('privacy', 'publicProfile', value)}
                  />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export My Data
                  </Button>
                  <Button variant="destructive" className="w-full">
                    Delete All Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Save Settings */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="pt-6">
              <div className="flex justify-end">
                <Button className="bg-gradient-primary hover:shadow-glow">
                  <Save className="mr-2 h-4 w-4" />
                  Save All Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;