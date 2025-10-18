import { Network } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SkillTree } from '@/components/SkillTree';

interface SkillTreePanelProps {
  data: any[];
}

export const SkillTreePanel = ({ data }: SkillTreePanelProps) => {
  if (data.length === 0) return null;

  return (
    <div className="lg:col-span-2 animate-fade-in">
      <Card className="shadow-elevation">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5 text-primary" />
            Your Learning Roadmap
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SkillTree data={data} />
        </CardContent>
      </Card>
    </div>
  );
};
