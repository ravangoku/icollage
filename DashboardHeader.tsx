import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, LogOut } from "lucide-react";

export function DashboardHeader() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const initials = user?.email?.slice(0, 2).toUpperCase() ?? "??";

  return (
    <header className="relative z-10 border-b border-border/50 glass-panel-strong rounded-none">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <h1 className="font-heading font-bold text-lg nebula-gradient-text">iColleague</h1>
        <nav className="flex items-center gap-4 text-sm">
          <button
            onClick={() => navigate("/chat")}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Chat
          </button>
          <button
            onClick={signOut}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
          <div className="w-8 h-8 rounded-full nebula-gradient flex items-center justify-center text-xs font-semibold text-primary-foreground cursor-pointer">
            {initials}
          </div>
        </nav>
      </div>
    </header>
  );
}
