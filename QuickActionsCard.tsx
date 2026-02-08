import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Users, FileText, ChevronRight, Zap, HelpCircle, ShieldCheck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
};

const actions = [
  { icon: MessageSquare, label: "Start a conversation", route: "/chat" },
  { icon: Users, label: "Browse departments", route: "/dashboard", section: "departments" },
  { icon: FileText, label: "View processes", route: "/dashboard", section: "processes" },
  { icon: HelpCircle, label: "IT support request", route: "/chat?q=Create%20IT%20support%20ticket" },
  { icon: ShieldCheck, label: "Report an incident", route: "/chat?q=Report%20security%20incident" },
];

interface QuickActionsCardProps {
  onScrollTo?: (section: string) => void;
}

export function QuickActionsCard({ onScrollTo }: QuickActionsCardProps) {
  const navigate = useNavigate();

  const handleAction = (action: typeof actions[number]) => {
    if (action.section && onScrollTo) {
      onScrollTo(action.section);
    } else {
      navigate(action.route);
    }
  };

  return (
    <motion.div variants={fadeUp} className="glass-panel p-5 space-y-4 hover-lift">
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 text-secondary" />
        <h3 className="font-heading font-semibold text-sm">Quick Actions</h3>
      </div>
      <div className="space-y-1">
        {actions.map((item) => (
          <button
            key={item.label}
            onClick={() => handleAction(item)}
            className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors text-left group"
          >
            <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
            <span className="text-sm">{item.label}</span>
            <ChevronRight className="w-3 h-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
