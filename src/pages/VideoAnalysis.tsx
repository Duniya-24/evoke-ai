import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Video, Play, Pause, Upload, Camera, Download } from "lucide-react";
import { useState } from "react";

const VideoAnalysis = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);

  const mockEmotions = [
    { emotion: "Happy", confidence: 75, color: "success", timestamp: "0:15" },
    { emotion: "Focused", confidence: 68, color: "primary", timestamp: "0:32" },
    { emotion: "Surprised", confidence: 52, color: "accent", timestamp: "0:48" },
    { emotion: "Thoughtful", confidence: 41, color: "muted", timestamp: "1:05" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <Video className="w-8 h-8 mr-3 text-primary" />
                Video Emotion Analysis
              </h1>
              <p className="text-muted-foreground mt-1">
                Detect and analyze facial expressions and emotions in video content
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Video Input</CardTitle>
                <CardDescription>
                  Record video or upload a file for facial emotion analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {isRecording ? (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-4 h-4 bg-destructive rounded-full mx-auto mb-2 animate-pulse"></div>
                        <p className="text-sm text-muted-foreground">Recording...</p>
                      </div>
                    </div>
                  ) : hasVideo ? (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Button size="lg" variant="outline">
                        <Play className="w-6 h-6 mr-2" />
                        Play Video
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Video className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <p className="text-muted-foreground">No video loaded</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Button 
                    onClick={() => {
                      setIsRecording(!isRecording);
                      if (!isRecording) {
                        setTimeout(() => {
                          setIsRecording(false);
                          setHasVideo(true);
                        }, 3000);
                      }
                    }}
                    className={isRecording ? 'bg-destructive hover:bg-destructive/80' : 'bg-gradient-primary hover:shadow-glow'}
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                  </Button>
                  
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Video
                  </Button>
                </div>

                {hasVideo && (
                  <Button className="w-full bg-gradient-primary hover:shadow-glow">
                    Analyze Video Emotions
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Emotion Timeline</CardTitle>
                <CardDescription>
                  Frame-by-frame emotion detection results
                </CardDescription>
              </CardHeader>
              <CardContent>
                {hasVideo ? (
                  <div className="space-y-4">
                    <div className="text-center p-4 rounded-lg bg-background/50 mb-4">
                      <div className="text-2xl font-bold text-success mb-1">Happy Expression</div>
                      <div className="text-sm text-muted-foreground">Dominant emotion (75% confidence)</div>
                    </div>

                    <div className="space-y-3">
                      {mockEmotions.map((emotion, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline" className="text-xs">
                              {emotion.timestamp}
                            </Badge>
                            <span className="font-medium">{emotion.emotion}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Progress value={emotion.confidence} className="w-20" />
                            <span className="text-sm font-medium w-12">{emotion.confidence}%</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 rounded-lg bg-background/50">
                      <h4 className="font-semibold mb-3">Facial Features Analysis</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span>Eye Movement</span>
                          <Badge variant="outline" className="border-success text-success">Active</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Smile Intensity</span>
                          <Badge variant="outline" className="border-primary text-primary">High</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Eyebrow Position</span>
                          <Badge variant="outline" className="border-accent text-accent">Raised</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Head Tilt</span>
                          <Badge variant="outline" className="border-muted-foreground text-muted-foreground">Neutral</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Record or upload video to see emotion analysis</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {hasVideo && (
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Detailed Analysis Report</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Emotion Summary</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Overall Mood</span>
                        <Badge variant="outline" className="border-success text-success">Positive</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Emotion Stability</span>
                        <span className="text-muted-foreground">High</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Peak Emotion</span>
                        <span className="text-muted-foreground">Happy (75%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Facial Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Face Detection</span>
                        <Badge variant="outline" className="border-success text-success">100%</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Expression Changes</span>
                        <span className="text-muted-foreground">12</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Confidence Score</span>
                        <span className="text-muted-foreground">8.5/10</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Analysis Quality</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Video Quality</span>
                        <Badge variant="outline" className="border-primary text-primary">HD</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Lighting</span>
                        <Badge variant="outline" className="border-success text-success">Good</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Face Visibility</span>
                        <Badge variant="outline" className="border-accent text-accent">Excellent</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Analysis Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default VideoAnalysis;