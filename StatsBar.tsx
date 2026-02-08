import { motion } from "framer-motion";
import { Users, FileText, Building2, MessageSquare } from "lucide-react";
import { departments, processGuides, recentAssists } from "@/data/dashboardData";

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
};

const totalPeople = departments.reduce((sum, d) => sum + d.count, 0);

const stats = [
  { label: "Total People", value: totalPeople, icon: Users },
  { label: "Departments", value: departments.length, icon: Building2 },
  { label: "Process Guides", value: processGuides.length, icon: FileText },
  { label: "Recent Queries", value: recentAssists.length, icon: MessageSquare },
];

export function StatsBar() {
  return (
    <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className="glass-panel p-4 text-center space-y-1">
          <stat.icon className="w-4 h-4 text-secondary mx-auto" />
          <p className="text-2xl font-heading font-bold">{stat.value}</p>
          <p className="text-[11px] text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}
