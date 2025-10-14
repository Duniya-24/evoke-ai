import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BarChart4,
  Video,
  TrendingUp,
  Users,
  FileText,
  Briefcase,
  GraduationCap,
  Heart,
  MessageSquare,
  Mic,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const UseCases = () => {
  const useCases = [
    {
      icon: Video,
      title: "Content Creation & Filmmaking",
      description: "Analyze emotional impact of your videos, films, and creative content. Understand how your audience will emotionally respond to your storytelling.",
      benefits: [
        "Optimize emotional arcs in storytelling",
        "Test audience reactions before release",
        "Improve character emotional authenticity",
        "Enhance viewer engagement"
      ],
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Marketing & Advertising",
      description: "Create emotionally resonant ads and marketing campaigns. Measure the emotional impact of your messaging to maximize campaign effectiveness.",
      benefits: [
        "Test ad effectiveness before launch",
        "Optimize emotional messaging",
        "Increase conversion rates",
        "Measure brand sentiment"
      ],
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Monitor customer emotions in real-time across support channels. Improve satisfaction by understanding and responding to emotional needs.",
      benefits: [
        "Real-time emotion detection in support",
        "Identify frustrated customers early",
        "Improve customer satisfaction scores",
        "Train support teams effectively"
      ],
      color: "text-green-500"
    },
    {
      icon: Briefcase,
      title: "Sales & Pitch Videos",
      description: "Perfect your sales presentations and pitch videos. Ensure your delivery conveys confidence, enthusiasm, and authenticity to potential clients.",
      benefits: [
        "Optimize presentation delivery",
        "Increase pitch success rates",
        "Build authentic connections",
        "Analyze competitor presentations"
      ],
      color: "text-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      description: "Understand student engagement and emotional responses to educational content. Create more effective learning experiences.",
      benefits: [
        "Measure student engagement levels",
        "Identify confusing content areas",
        "Improve course completion rates",
        "Personalize learning experiences"
      ],
      color: "text-indigo-500"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Monitor patient emotional well-being and mental health indicators. Support therapeutic interventions with data-driven insights.",
      benefits: [
        "Track patient emotional progress",
        "Support mental health monitoring",
        "Enable telemedicine assessments",
        "Improve patient outcomes"
      ],
      color: "text-red-500"
    },
    {
      icon: MessageSquare,
      title: "Social Media Analysis",
      description: "Analyze emotional sentiment across social media channels. Understand audience reactions and optimize your social strategy.",
      benefits: [
        "Monitor brand sentiment in real-time",
        "Identify trending emotional topics",
        "Optimize content strategy",
        "Improve community engagement"
      ],
      color: "text-pink-500"
    },
    {
      icon: Mic,
      title: "Podcast & Audio Content",
      description: "Analyze emotional tone and engagement in podcasts and audio content. Optimize your voice delivery for maximum impact.",
      benefits: [
        "Optimize vocal tone and pacing",
        "Identify engaging segments",
        "Improve listener retention",
        "Analyze guest performance"
      ],
      color: "text-cyan-500"
    },
    {
      icon: FileText,
      title: "Research & Academia",
      description: "Conduct emotion research studies with precision. Gather unbiased emotional data for psychological and behavioral research.",
      benefits: [
        "Collect objective emotional data",
        "Reduce research bias",
        "Scale research studies efficiently",
        "Generate publishable insights"
      ],
      color: "text-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <BarChart4 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">Mood Metrics</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/#features" className="text-muted-foreground hover:text-primary smooth-transition">Features</Link>
              <Link to="/use-cases" className="text-primary font-medium">Use Cases</Link>
              <Link to="/#pricing" className="text-muted-foreground hover:text-primary smooth-transition">Pricing</Link>
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
      <section className="pt-32 pb-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
              Emotion AI for Every Industry
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how Mood Metrics transforms emotion understanding across diverse sectors. 
              From content creation to healthcare, our AI-powered platform delivers actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-12 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card border-border/50 hover:shadow-card smooth-transition group"
              >
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <useCase.icon className={`h-8 w-8 ${useCase.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground mb-2">Key Benefits:</p>
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full mt-6 group-hover:bg-primary/10 smooth-transition"
                  asChild
                >
                  <Link to="/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 sm:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading organizations rely on Mood Metrics to understand emotions and drive results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Videos Analyzed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">98.5%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-success mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Emotions Detected</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">AI Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-card border-border/50 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals using Mood Metrics to unlock deeper insights 
              into human emotions across every sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-primary hover:shadow-glow smooth-transition text-lg px-8">
                <Link to="/signup">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/dashboard">
                  View Demo
                </Link>
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
                <li><Link to="/#features" className="hover:text-primary smooth-transition">Features</Link></li>
                <li><Link to="/use-cases" className="hover:text-primary smooth-transition">Use Cases</Link></li>
                <li><Link to="/#pricing" className="hover:text-primary smooth-transition">Pricing</Link></li>
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

export default UseCases;
