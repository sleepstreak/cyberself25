import { Download, Share2, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PersonaProfile } from '@/types/persona';
import { toast } from '@/hooks/use-toast';

interface ExportPanelProps {
  nickname: string;
  totalXP: number;
  overallScore: number;
  badges: string[];
  persona: PersonaProfile | null;
}

export const ExportPanel = ({ nickname, totalXP, overallScore, badges, persona }: ExportPanelProps) => {
  const handleExportPDF = () => {
    toast({
      title: "Export Started",
      description: "Generating your progress report...",
    });
    
    // TODO: Implement PDF generation
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: "Your progress report is ready!",
      });
    }, 1500);
  };

  const handleShare = () => {
    const shareText = `🎓 CyberSelf Progress Report\n\n` +
      `Name: ${nickname}\n` +
      `Level: ${Math.floor(totalXP / 100) + 1}\n` +
      `Score: ${overallScore}%\n` +
      `Badges: ${badges.length}\n` +
      `Persona: ${persona?.name || 'N/A'}\n\n` +
      `Check out CyberSelf to assess your cybersecurity skills!`;

    if (navigator.share) {
      navigator.share({
        title: 'My CyberSelf Progress',
        text: shareText,
      }).catch(() => {
        navigator.clipboard.writeText(shareText);
        toast({
          title: "Copied to Clipboard",
          description: "Share your progress with others!",
        });
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to Clipboard",
        description: "Share your progress with others!",
      });
    }
  };

  return (
    <Card className="shadow-elevation animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="w-5 h-5 text-primary" />
          Export & Share
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Download your progress report or share your achievements with others.
        </p>

        {/* Preview Card */}
        <div className="p-4 rounded-lg border bg-card space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                {persona?.icon || '🎓'}
              </div>
              <div>
                <div className="font-semibold">{nickname}</div>
                <div className="text-xs text-muted-foreground">{persona?.name || 'Learner'}</div>
              </div>
            </div>
            <FileText className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded bg-muted/30">
              <div className="font-bold text-primary">{totalXP}</div>
              <div className="text-muted-foreground">XP</div>
            </div>
            <div className="p-2 rounded bg-muted/30">
              <div className="font-bold text-primary">{overallScore}%</div>
              <div className="text-muted-foreground">Score</div>
            </div>
            <div className="p-2 rounded bg-muted/30">
              <div className="font-bold text-primary">{badges.length}</div>
              <div className="text-muted-foreground">Badges</div>
            </div>
          </div>
        </div>

        {/* Export Buttons */}
        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={handleExportPDF}
          >
            <Download className="mr-2 w-4 h-4" />
            Download PDF Report
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleShare}
          >
            <Share2 className="mr-2 w-4 h-4" />
            Share Progress
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
