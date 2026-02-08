import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2, ChevronRight, Users } from "lucide-react";
import { departments, Department } from "@/data/dashboardData";
import { DepartmentDetailDialog } from "./DepartmentDetailDialog";

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
};

export const DepartmentsCard = forwardRef<HTMLDivElement>((_props, ref) => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  return (
    <>
      <motion.div ref={ref} variants={fadeUp} className="glass-panel p-5 space-y-4 hover-lift">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-secondary" />
            <h3 className="font-heading font-semibold text-sm">Departments</h3>
          </div>
          <span className="text-xs text-muted-foreground">{departments.length} teams</span>
        </div>
        <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
          {departments.map((dept) => (
            <div
              key={dept.name}
              onClick={() => setSelectedDept(dept)}
              className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
            >
              <dept.icon className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{dept.name}</span>
                  <span className="text-[10px] text-muted-foreground hidden sm:inline">{dept.description}</span>
                </div>
                <span className="text-[10px] text-muted-foreground">Lead: {dept.lead}</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Users className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-medium">{dept.count}</span>
              </div>
              <ChevronRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </div>
          ))}
        </div>
      </motion.div>

      <DepartmentDetailDialog
        department={selectedDept}
        open={!!selectedDept}
        onOpenChange={(open) => { if (!open) setSelectedDept(null); }}
      />
    </>
  );
});

DepartmentsCard.displayName = "DepartmentsCard";
