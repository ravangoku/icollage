import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, ChevronRight, ListChecks } from "lucide-react";
import { processGuides, categoryColors } from "@/data/dashboardData";

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
};

export const ProcessGuidesCard = forwardRef<HTMLDivElement>((_props, ref) => {
  const navigate = useNavigate();

  return (
    <motion.div ref={ref} variants={fadeUp} className="glass-panel p-5 space-y-4 hover-lift">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-secondary" />
          <h3 className="font-heading font-semibold text-sm">Process Guides</h3>
        </div>
        <span className="text-xs text-muted-foreground">{processGuides.length} guides</span>
      </div>
      <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
        {processGuides.map((process) => (
          <button
            key={process.title}
            onClick={() => navigate(`/chat?q=${encodeURIComponent(`How do I ${process.title.toLowerCase()}?`)}`)}
            className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors text-left group"
          >
            <ListChecks className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate font-medium">{process.title}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`text-[10px] ${categoryColors[process.category] ?? "text-muted-foreground"}`}>
                  {process.category}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {process.steps} steps · {process.estimatedTime}
                </span>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          </button>
        ))}
      </div>
    </motion.div>
  );
});

ProcessGuidesCard.displayName = "ProcessGuidesCard";
