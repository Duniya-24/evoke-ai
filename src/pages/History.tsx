import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { History as HistoryIcon, FileText, Mic, Video, Trash2, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface EmotionHistory {
  id: string;
  analysis_type: string;
  emotions: any;
  content_preview: string;
  created_at: string;
}

const History = () => {
  const [history, setHistory] = useState<EmotionHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const { data, error } = await supabase
        .from('emotion_history')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setHistory(data || []);
    } catch (error) {
      console.error('Error fetching history:', error);
      toast({
        title: "Error",
        description: "Failed to load emotion history",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('emotion_history')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setHistory(history.filter(item => item.id !== id));
      toast({
        title: "Deleted",
        description: "History item removed successfully",
      });
    } catch (error) {
      console.error('Error deleting history:', error);
      toast({
        title: "Error",
        description: "Failed to delete history item",
        variant: "destructive",
      });
    }
  };

  const getAnalysisIcon = (type: string) => {
    switch (type) {
      case 'text':
        return FileText;
      case 'speech':
        return Mic;
      case 'video':
        return Video;
      default:
        return FileText;
    }
  };

  const getTopEmotion = (emotions: any) => {
    if (!emotions || emotions.length === 0) return null;
    return emotions[0];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <HistoryIcon className="w-8 h-8 mr-3 text-primary" />
                Emotion History
              </h1>
              <p className="text-muted-foreground mt-1">
                Track and review your emotion analysis history over time
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {loading ? (
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="py-12 text-center">
                  <div className="animate-pulse-glow w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading history...</p>
                </CardContent>
              </Card>
            ) : history.length === 0 ? (
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="py-12 text-center">
                  <HistoryIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <p className="text-muted-foreground">No emotion history found</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Start analyzing text, speech, or video to build your history
                  </p>
                </CardContent>
              </Card>
            ) : (
              history.map((item) => {
                const Icon = getAnalysisIcon(item.analysis_type);
                const topEmotion = getTopEmotion(item.emotions);

                return (
                  <Card key={item.id} className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg capitalize">
                              {item.analysis_type} Analysis
                            </CardTitle>
                            <CardDescription className="flex items-center mt-1">
                              <Calendar className="w-3 h-3 mr-1" />
                              {formatDate(item.created_at)}
                            </CardDescription>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {item.content_preview && (
                        <div className="p-3 rounded-lg bg-background/50 text-sm text-muted-foreground">
                          {item.content_preview}
                        </div>
                      )}

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Detected Emotions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.emotions.slice(0, 5).map((emotion: any, idx: number) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className={idx === 0 ? "border-primary text-primary" : ""}
                            >
                              {emotion.emotion} ({emotion.confidence}%)
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {topEmotion && (
                        <div className="text-center p-3 rounded-lg bg-background/50">
                          <div className="text-lg font-bold text-primary">
                            {topEmotion.emotion}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Primary emotion ({topEmotion.confidence}% confidence)
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default History;
