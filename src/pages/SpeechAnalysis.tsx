import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Mic, Play, Pause, Upload, Download, MicOff, Volume2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const SpeechAnalysis = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);

  const mockEmotions = [
    { emotion: "Confidence", confidence: 82, color: "primary" },
    { emotion: "Calm", confidence: 71, color: "success" },
    { emotion: "Enthusiasm", confidence: 68, color: "accent" },
    { emotion: "Neutral", confidence: 45, color: "muted" },
    { emotion: "Nervousness", confidence: 28, color: "warning" },
  ];

  const handleRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(async () => {
        setIsRecording(false);
        setHasRecording(true);
        
        // Save to history
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await supabase.from('emotion_history').insert({
            user_id: user.id,
            analysis_type: 'speech',
            emotions: mockEmotions,
            content_preview: 'Audio recording',
          });
        }
      }, 3000);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <Mic className="w-8 h-8 mr-3 text-primary" />
                Speech Emotion Analysis
              </h1>
              <p className="text-muted-foreground mt-1">
                Analyze emotions from speech patterns, tone, and vocal characteristics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Audio Recording</CardTitle>
                <CardDescription>
                  Record audio or upload a file for emotion analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-8">
                  <div className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center ${
                    isRecording ? 'bg-destructive/20 animate-pulse-glow' : 'bg-primary/20'
                  }`}>
                    {isRecording ? (
                      <MicOff className="w-16 h-16 text-destructive" />
                    ) : (
                      <Mic className="w-16 h-16 text-primary" />
                    )}
                  </div>
                  
                  <Button 
                    onClick={handleRecord}
                    size="lg"
                    className={isRecording ? 'bg-destructive hover:bg-destructive/80' : 'bg-gradient-primary hover:shadow-glow'}
                  >
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                  </Button>
                  
                  {isRecording && (
                    <p className="text-sm text-muted-foreground mt-2">Recording... Speak clearly</p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Button variant="outline" className="mr-2">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Audio
                    </Button>
                  </div>

                  {hasRecording && (
                    <div className="p-4 rounded-lg bg-background/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">recording_001.wav</span>
                        <span className="text-sm text-muted-foreground">0:03</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Button size="sm" variant="outline" onClick={() => setIsPlaying(!isPlaying)}>
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-1/3 h-full bg-primary rounded-full"></div>
                        </div>
                        <Volume2 className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <Button size="sm" className="w-full bg-gradient-primary">
                        Analyze Speech
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Speech Analysis Results</CardTitle>
                <CardDescription>
                  Emotion detection from voice patterns and tone
                </CardDescription>
              </CardHeader>
              <CardContent>
                {hasRecording ? (
                  <div className="space-y-4">
                    <div className="text-center p-4 rounded-lg bg-background/50 mb-4">
                      <div className="text-2xl font-bold text-primary mb-1">Confident Speaker</div>
                      <div className="text-sm text-muted-foreground">Primary emotion detected</div>
                    </div>

                    {mockEmotions.map((emotion, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                        <span className="font-medium">{emotion.emotion}</span>
                        <div className="flex items-center space-x-3">
                          <Progress value={emotion.confidence} className="w-24" />
                          <span className="text-sm font-medium w-12">{emotion.confidence}%</span>
                        </div>
                      </div>
                    ))}

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-3 rounded-lg bg-background/50">
                        <div className="text-lg font-bold text-accent">120 BPM</div>
                        <div className="text-xs text-muted-foreground">Speech Rate</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-background/50">
                        <div className="text-lg font-bold text-success">Stable</div>
                        <div className="text-xs text-muted-foreground">Voice Quality</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Mic className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Record or upload audio to see emotion analysis</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {hasRecording && (
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Speech Characteristics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Vocal Qualities</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Pitch</span>
                        <Badge variant="outline" className="border-primary text-primary">Average</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Volume</span>
                        <Badge variant="outline" className="border-success text-success">Consistent</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Clarity</span>
                        <Badge variant="outline" className="border-accent text-accent">High</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Speech Patterns</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Pace</span>
                        <span className="text-muted-foreground">Natural</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Pauses</span>
                        <span className="text-muted-foreground">Appropriate</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Emphasis</span>
                        <span className="text-muted-foreground">Moderate</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Emotional Indicators</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Stress Level</span>
                        <Badge variant="outline" className="border-success text-success">Low</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Engagement</span>
                        <Badge variant="outline" className="border-primary text-primary">High</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Confidence</span>
                        <Badge variant="outline" className="border-accent text-accent">Strong</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default SpeechAnalysis;