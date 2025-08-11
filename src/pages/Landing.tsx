import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BarChart4, 
  MessageSquare, 
  FileText, 
  Mic, 
  Video, 
  BarChart3, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "AI-Powered Chatbot",
      description: "Intelligent emotion detection in real-time conversations with advanced sentiment analysis."
    },
    {
      icon: FileText,
      title: "Text Emotion Analysis",
      description: "Analyze emotions in documents, messages, and written content with high accuracy."
    },
    {
      icon: Mic,
      title: "Speech Recognition",
      description: "Extract emotions from voice patterns and speech tone for comprehensive analysis."
    },
    {
      icon: Video,
      title: "Video Emotion Detection",
      description: "Advanced facial expression analysis and emotion tracking in video content."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and insights with detailed emotion metrics and trends."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption for sensitive emotion data."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BarChart4 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">Mood Metrics</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary smooth-transition">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-primary smooth-transition">About</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary smooth-transition">Pricing</a>
              <Button variant="outline" asChild className="mr-2">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-gradient-primary hover:shadow-glow smooth-transition">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Advanced AI Emotion Recognition
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Understand Emotions
              <br />
              <span className="text-foreground">Like Never Before</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Harness the power of AI to analyze emotions across text, speech, and video. 
              Get deep insights into human sentiment with enterprise-grade accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="bg-gradient-primary hover:shadow-glow smooth-transition text-lg px-8">
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link to="/dashboard">
                  View Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant animate-float">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-card/50 rounded-lg">
                    <div className="text-2xl font-bold text-success">98.5%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">150ms</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">50+</div>
                    <div className="text-sm text-muted-foreground">Emotions</div>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Every Use Case
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From real-time conversations to comprehensive video analysis, 
              our platform delivers professional-grade emotion recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-border/50 hover:shadow-card smooth-transition group"
              >
                <div className="mb-4">
                  <feature.icon className="h-12 w-12 text-primary group-hover:text-accent smooth-transition" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-card border-border/50 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Understanding of Emotions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals using Mood Metrics to unlock deeper insights 
              into human emotions and sentiment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-primary hover:shadow-glow smooth-transition text-lg px-8">
                <Link to="/signup">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Contact Sales
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarChart4 className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Mood Metrics</span>
              </div>
              <p className="text-muted-foreground">
                Advanced emotion recognition platform powered by cutting-edge AI technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary smooth-transition">Features</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Pricing</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">API Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary smooth-transition">About</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Blog</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary smooth-transition">Help Center</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Contact</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Mood Metrics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
