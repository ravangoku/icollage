import { motion } from "framer-motion";
import { Clock, Bot } from "lucide-react";
import { recentAssists, typeColors } from "@/data/dashboardData";

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
};

export function RecentAssistsCard() {
  return (
    <motion.div variants={fadeUp} className="glass-panel p-5 space-y-4 hover-lift">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-secondary" />
          <h3 className="font-heading font-semibold text-sm">Recent Assists</h3>
        </div>
        <span className="text-xs text-muted-foreground">{recentAssists.length} queries</span>
      </div>
      <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
        {recentAssists.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
          >
            <Bot className="w-4 h-4 text-muted-foreground mt-0.5 group-hover:text-secondary transition-colors shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">{item.query}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${typeColors[item.type] ?? "bg-muted text-muted-foreground"}`}>
                  {item.type}
                </span>
                <span className="text-[10px] text-muted-foreground">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
