import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'pl', name: 'Polish' },
  { code: 'ro', name: 'Romanian' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'el', name: 'Greek' },
  { code: 'pt', name: 'Portuguese' },
];

const Register = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [language, setLanguage] = useState('en');
  const [consent, setConsent] = useState(false);

  const handleContinue = () => {
    if (!nickname.trim()) {
      toast.error('Please enter a nickname');
      return;
    }
    if (!consent) {
      toast.error('Please accept the consent agreement');
      return;
    }

    // Store user session data
    const session = {
      nickname: nickname.trim(),
      language,
      startTime: new Date().toISOString(),
    };
    localStorage.setItem('cyberself_session', JSON.stringify(session));
    
    toast.success(`Welcome, ${nickname}!`);
    navigate('/domains');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">CyberSelf</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Get Started</h1>
          <p className="text-muted-foreground">
            Begin your cybersecurity skills assessment
          </p>
        </div>

        <Card className="shadow-elevation">
          <CardHeader>
            <CardTitle>Registration</CardTitle>
            <CardDescription>
              We only need a nickname - no personal data required
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input
                id="nickname"
                placeholder="Enter your nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                maxLength={20}
              />
              <p className="text-xs text-muted-foreground">
                This will be used on the leaderboard (max 20 characters)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Language
                </div>
              </Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
              />
              <div className="space-y-1">
                <Label
                  htmlFor="consent"
                  className="text-sm font-normal cursor-pointer"
                >
                  I consent to anonymous data use for research purposes
                </Label>
                <p className="text-xs text-muted-foreground">
                  We collect anonymous assessment data to improve cybersecurity education
                </p>
              </div>
            </div>

            <Button
              size="lg"
              variant="hero"
              className="w-full"
              onClick={handleContinue}
            >
              Continue to Domain Selection
            </Button>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
