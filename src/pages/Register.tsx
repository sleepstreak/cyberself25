import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const { t, language: currentLang, setLanguage: setCurrentLang } = useLanguage();
  const [nickname, setNickname] = useState('');
  const [consent, setConsent] = useState(false);

  const handleContinue = () => {
    if (!nickname.trim()) {
      toast.error(t('enterNickname'));
      return;
    }
    if (!consent) {
      toast.error(t('consentRequired'));
      return;
    }

    // Store user session data
    const session = {
      nickname: nickname.trim(),
      language: currentLang,
      startTime: new Date().toISOString(),
    };
    localStorage.setItem('cyberself_session', JSON.stringify(session));
    
    toast.success(`${t('success')}, ${nickname}!`);
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
          <h1 className="text-3xl font-bold mb-2">{t('registerTitle')}</h1>
          <p className="text-muted-foreground">
            {t('registerSubtitle')}
          </p>
        </div>

        <Card className="shadow-elevation">
          <CardHeader>
            <CardTitle>{t('registrationHeader')}</CardTitle>
            <CardDescription>
              {t('registrationDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nickname">{t('nickname')}</Label>
              <Input
                id="nickname"
                placeholder={t('enterNickname')}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                maxLength={20}
              />
              <p className="text-xs text-muted-foreground">
                {t('nicknameHelper')}
              </p>
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
                  {t('consentLabel')}
                </Label>
                <p className="text-xs text-muted-foreground">
                  {t('consentDesc')}
                </p>
              </div>
            </div>

            <Button
              size="lg"
              variant="hero"
              className="w-full"
              onClick={handleContinue}
            >
              {t('continue')}
            </Button>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
          >
            {t('back')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
