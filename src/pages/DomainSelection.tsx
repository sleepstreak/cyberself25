import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Network, Code, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { domains } from '@/data/domains';
import { toast } from 'sonner';
import { Domain } from '@/types/assessment';

const iconMap = {
  Shield: Shield,
  Network: Network,
  Code: Code,
};

const DomainSelection = () => {
  const navigate = useNavigate();
  const [selectedDomains, setSelectedDomains] = useState<Domain[]>([]);

  const toggleDomain = (domainId: Domain) => {
    setSelectedDomains((prev) =>
      prev.includes(domainId)
        ? prev.filter((d) => d !== domainId)
        : [...prev, domainId]
    );
  };

  const handleContinue = () => {
    if (selectedDomains.length === 0) {
      toast.error('Please select at least one domain');
      return;
    }

    // Update session with selected domains
    const sessionData = localStorage.getItem('cyberself_session');
    if (sessionData) {
      const session = JSON.parse(sessionData);
      session.selectedDomains = selectedDomains;
      localStorage.setItem('cyberself_session', JSON.stringify(session));
    }

    navigate('/assessment-intro');
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">CyberSelf</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Domains</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select one or more cybersecurity domains to assess. Each domain contains adaptive questions
            tailored to your skill level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {domains.map((domain) => {
            const Icon = iconMap[domain.icon as keyof typeof iconMap];
            const isSelected = selectedDomains.includes(domain.id);

            return (
              <Card
                key={domain.id}
                className={`cursor-pointer transition-smooth hover:shadow-glow ${
                  isSelected ? 'ring-2 ring-primary shadow-elevation' : ''
                }`}
                onClick={() => toggleDomain(domain.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${domain.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: domain.color }} />
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{domain.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {domain.difficulty}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {domain.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" onClick={() => navigate('/register')}>
            Back
          </Button>
          <Button
            size="lg"
            variant="hero"
            onClick={handleContinue}
            disabled={selectedDomains.length === 0}
            className="min-w-[200px]"
          >
            Continue
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Selected {selectedDomains.length} of {domains.length} domains
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainSelection;
