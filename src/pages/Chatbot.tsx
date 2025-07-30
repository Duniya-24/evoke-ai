import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Bot, User, Smile, Meh, Frown } from "lucide-react";
import { useState } from "react";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hello! I'm your AI emotion analysis assistant. How are you feeling today?",
      emotion: "friendly",
      confidence: 95,
      timestamp: "10:30 AM"
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: message,
      emotion: "neutral",
      confidence: 78,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const botResponse = {
      id: messages.length + 2,
      type: "bot",
      content: "I can sense some positive energy in your message! That's wonderful to hear. Would you like me to analyze the emotional content in more detail?",
      emotion: "empathetic",
      confidence: 87,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage, botResponse]);
    setMessage("");
  };

  const getEmotionIcon = (emotion: string) => {
    if (emotion.includes("positive") || emotion.includes("happy") || emotion.includes("friendly")) {
      return <Smile className="w-4 h-4 text-success" />;
    } else if (emotion.includes("negative") || emotion.includes("sad")) {
      return <Frown className="w-4 h-4 text-destructive" />;
    }
    return <Meh className="w-4 h-4 text-muted-foreground" />;
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <MessageSquare className="w-8 h-8 mr-3 text-primary" />
                AI Emotion Chatbot
              </h1>
              <p className="text-muted-foreground mt-1">
                Intelligent conversation with real-time emotion analysis
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
            {/* Chat Interface */}
            <div className="lg:col-span-3">
              <Card className="bg-gradient-card border-border/50 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-primary" />
                    Conversation
                  </CardTitle>
                  <CardDescription>
                    AI-powered chat with emotion recognition
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  {/* Messages */}
                  <div className="flex-1 space-y-4 mb-4 overflow-y-auto max-h-96">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                          msg.type === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-background/50'
                        }`}>
                          <div className="flex items-center mb-1">
                            {msg.type === 'user' ? (
                              <User className="w-4 h-4 mr-1" />
                            ) : (
                              <Bot className="w-4 h-4 mr-1 text-primary" />
                            )}
                            <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                          </div>
                          <p className="text-sm">{msg.content}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-1">
                              {getEmotionIcon(msg.emotion)}
                              <span className="text-xs capitalize">{msg.emotion}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {msg.confidence}%
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="flex space-x-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="bg-background/50"
                    />
                    <Button onClick={handleSendMessage} className="bg-gradient-primary hover:shadow-glow">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emotion Analysis Panel */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Live Emotion Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-background/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Current Mood</span>
                      <Smile className="w-4 h-4 text-success" />
                    </div>
                    <div className="text-lg font-bold text-success">Positive</div>
                    <div className="text-xs text-muted-foreground">Confidence: 87%</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Joy</span>
                      <span className="text-success">45%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Confidence</span>
                      <span className="text-primary">38%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Curiosity</span>
                      <span className="text-accent">28%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Neutral</span>
                      <span className="text-muted-foreground">15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Conversation Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center p-3 rounded-lg bg-background/50">
                    <div className="text-2xl font-bold text-primary">8.5</div>
                    <div className="text-xs text-muted-foreground">Engagement Score</div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Messages</span>
                      <span className="text-muted-foreground">{messages.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. Sentiment</span>
                      <Badge variant="outline" className="border-success text-success">Positive</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Emotion Range</span>
                      <span className="text-muted-foreground">Moderate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">AI Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 rounded bg-background/50">
                      <p className="text-primary">💡 You seem excited today! Would you like to explore what's making you feel this way?</p>
                    </div>
                    <div className="p-2 rounded bg-background/50">
                      <p className="text-accent">🎯 Your communication style shows confidence. Great for important conversations!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Chatbot;