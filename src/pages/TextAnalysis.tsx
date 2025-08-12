import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Upload, Download, Smile, Frown, Meh, Heart, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const TextAnalysis = () => {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const mockEmotions = [
    { emotion: "Joy", confidence: 78, color: "success", icon: Smile },
    { emotion: "Confidence", confidence: 65, color: "primary", icon: Heart },
    { emotion: "Neutral", confidence: 45, color: "muted", icon: Meh },
    { emotion: "Concern", confidence: 32, color: "warning", icon: AlertTriangle },
    { emotion: "Sadness", confidence: 18, color: "destructive", icon: Frown },
  ];

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    
    setIsAnalyzing(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('text-analysis', {
        body: { text }
      });

      if (error) {
        console.error('Analysis error:', error);
        // Fallback to mock data if ML model is not available
        setResults(mockEmotions);
      } else {
        // Transform the ML model response to match our UI format
        setResults(data.emotions || mockEmotions);
      }
    } catch (error) {
      console.error('Failed to analyze text:', error);
      // Fallback to mock data
      setResults(mockEmotions);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <FileText className="w-8 h-8 mr-3 text-primary" />
                Text Emotion Analysis
              </h1>
              <p className="text-muted-foreground mt-1">
                Analyze emotions and sentiment in text content with AI precision
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Upload File
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Results
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Text Input</CardTitle>
                <CardDescription>
                  Enter or paste the text you want to analyze for emotional content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter your text here for emotion analysis..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[200px] bg-background/50"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {text.length} characters
                  </span>
                  <Button 
                    onClick={handleAnalyze}
                    disabled={!text.trim() || isAnalyzing}
                    className="bg-gradient-primary hover:shadow-glow smooth-transition"
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze Emotions"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Emotion Analysis Results</CardTitle>
                <CardDescription>
                  AI-detected emotions and confidence scores
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isAnalyzing ? (
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <div className="animate-pulse-glow w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Analyzing emotions...</p>
                    </div>
                  </div>
                ) : results ? (
                  <div className="space-y-4">
                    {results.map((emotion, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                        <div className="flex items-center space-x-3">
                          <emotion.icon className={`w-5 h-5 text-${emotion.color}`} />
                          <span className="font-medium">{emotion.emotion}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Progress value={emotion.confidence} className="w-24" />
                          <span className="text-sm font-medium w-12">{emotion.confidence}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Enter text above and click "Analyze Emotions" to see results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Detailed Analysis */}
          {results && (
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Detailed Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="breakdown">Sentence Breakdown</TabsTrigger>
                    <TabsTrigger value="keywords">Key Phrases</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-2xl font-bold text-success">Positive</div>
                        <div className="text-sm text-muted-foreground">Overall Sentiment</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-2xl font-bold text-primary">7.8/10</div>
                        <div className="text-sm text-muted-foreground">Confidence Score</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-2xl font-bold text-accent">Mixed</div>
                        <div className="text-sm text-muted-foreground">Emotion Complexity</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="breakdown" className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-background/50 border-l-4 border-success">
                        <p className="text-sm">"This is an amazing product that I absolutely love!"</p>
                        <Badge variant="outline" className="mt-2 border-success text-success">Joy (85%)</Badge>
                      </div>
                      <div className="p-3 rounded-lg bg-background/50 border-l-4 border-primary">
                        <p className="text-sm">"The features are well-designed and user-friendly."</p>
                        <Badge variant="outline" className="mt-2 border-primary text-primary">Confidence (72%)</Badge>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="keywords" className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-success text-success">amazing</Badge>
                      <Badge variant="outline" className="border-success text-success">love</Badge>
                      <Badge variant="outline" className="border-primary text-primary">well-designed</Badge>
                      <Badge variant="outline" className="border-accent text-accent">user-friendly</Badge>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default TextAnalysis;