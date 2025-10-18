import { Home, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LanguageSelector } from './LanguageSelector';

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isDashboard = location.pathname === '/dashboard';

  if (isHome) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 animate-fade-in">
      <LanguageSelector />
      {!isHome && (
        <Link to="/">
          <Button
            variant="secondary"
            size="icon"
            className="shadow-elevation hover-scale bg-card border border-border"
          >
            <Home className="h-4 w-4" />
          </Button>
        </Link>
      )}
      {!isDashboard && location.pathname !== '/leaderboard' && (
        <Link to="/dashboard">
          <Button
            variant="secondary"
            size="icon"
            className="shadow-elevation hover-scale bg-card border border-border"
          >
            <LayoutDashboard className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};
