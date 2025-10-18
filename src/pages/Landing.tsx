import { Shield, TrendingUp, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Landing = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6 animate-float">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">CyberHubs Self-Assessment Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('landingTitle')}
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {t('landingDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => navigate('/register')}
              className="bg-white text-white hover:bg-white/90 hover:shadow-xl"
            >
              {t('startAssessment')}
            </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50"
              >
                {t('getStarted')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CyberSelf?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for learners across 7 CyberHubs countries with cutting-edge adaptive technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="gradient-card rounded-xl p-6 shadow-elevation transition-smooth hover:shadow-glow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
              <p className="text-muted-foreground">
                Questions adjust to your skill level in real-time for accurate assessment
              </p>
            </div>

            <div className="gradient-card rounded-xl p-6 shadow-elevation transition-smooth hover:shadow-glow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Roadmap</h3>
              <p className="text-muted-foreground">
                AI-powered recommendations tailored to your strengths and weaknesses
              </p>
            </div>

            <div className="gradient-card rounded-xl p-6 shadow-elevation transition-smooth hover:shadow-glow">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry-Aligned</h3>
              <p className="text-muted-foreground">
                Content aligned with ENISA and EU cybersecurity frameworks
              </p>
            </div>

            <div className="gradient-card rounded-xl p-6 shadow-elevation transition-smooth hover:shadow-glow">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Benchmark</h3>
              <p className="text-muted-foreground">
                Compare your skills with peers across European CyberHubs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discover Your Cyber Potential?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of learners across Europe advancing their cybersecurity careers
            </p>
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => navigate('/register')}
            >
              Begin Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">CyberSelf</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Powered by CyberHubs & EU Skills Academy
              </p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Terms of Use
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
