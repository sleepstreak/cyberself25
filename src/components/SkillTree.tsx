import { useState } from 'react';
import { ChevronDown, ChevronRight, Check, Lock, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SkillNode {
  id: string;
  name: string;
  mastered: boolean;
  recommended: boolean;
  children?: SkillNode[];
}

interface SkillTreeProps {
  data: SkillNode[];
}

const SkillNodeComponent = ({ node, depth = 0 }: { node: SkillNode; depth?: number }) => {
  const [expanded, setExpanded] = useState(depth === 0);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="animate-fade-in">
      <div
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg transition-smooth cursor-pointer",
          node.mastered && "bg-success/10 border border-success/30",
          node.recommended && !node.mastered && "bg-primary/10 border border-primary/30 animate-pulse-glow",
          !node.mastered && !node.recommended && "bg-muted/30 border border-border"
        )}
        onClick={() => hasChildren && setExpanded(!expanded)}
        style={{ marginLeft: `${depth * 24}px` }}
      >
        {hasChildren && (
          <button className="text-muted-foreground hover:text-foreground transition-smooth">
            {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        )}
        
        {!hasChildren && (
          <div className="w-4" />
        )}

        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-smooth",
          node.mastered ? "bg-success text-white" : node.recommended ? "bg-primary text-white" : "bg-muted"
        )}>
          {node.mastered ? (
            <Check className="w-4 h-4" />
          ) : node.recommended ? (
            <Sparkles className="w-4 h-4 animate-pulse" />
          ) : (
            <Lock className="w-4 h-4" />
          )}
        </div>

        <span className={cn(
          "font-medium flex-1",
          node.mastered ? "text-success" : node.recommended ? "text-primary" : "text-muted-foreground"
        )}>
          {node.name}
        </span>

        {node.mastered && (
          <Badge variant="outline" className="bg-success/10 text-success border-success">
            Mastered
          </Badge>
        )}
        {node.recommended && !node.mastered && (
          <Badge className="bg-primary text-primary-foreground animate-pulse">
            Next Step
          </Badge>
        )}
      </div>

      {hasChildren && expanded && (
        <div className="mt-2 space-y-2">
          {node.children!.map((child) => (
            <SkillNodeComponent key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const SkillTree = ({ data }: SkillTreeProps) => {
  return (
    <Card className="shadow-elevation">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Learning Roadmap</h3>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 text-sm">
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-muted-foreground">Mastered</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Recommended</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {data.map((node) => (
            <SkillNodeComponent key={node.id} node={node} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
