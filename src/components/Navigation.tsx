import { Home, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isResults = location.pathname === '/results';

  if (isHome) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 animate-fade-in">
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
      {!isResults && location.pathname !== '/leaderboard' && (
        <Link to="/results">
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
