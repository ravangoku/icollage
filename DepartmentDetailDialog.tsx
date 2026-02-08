import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Mail, Phone, MapPin, Hash, FileText, Clock, ChevronRight } from "lucide-react";
import { Department } from "@/data/dashboardData";
import { departmentDetails } from "@/data/departmentDetails";

interface DepartmentDetailDialogProps {
  department: Department | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DepartmentDetailDialog({ department, open, onOpenChange }: DepartmentDetailDialogProps) {
  if (!department) return null;

  const details = departmentDetails[department.name];
  if (!details) return null;

  const DeptIcon = department.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-panel-strong border-border/60 sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl nebula-gradient flex items-center justify-center">
              <DeptIcon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle className="font-heading text-lg">{department.name}</DialogTitle>
              <p className="text-xs text-muted-foreground mt-0.5">{department.description}</p>
            </div>
          </div>
        </DialogHeader>

        {/* Quick info strip */}
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-2">
          <div className="flex items-center gap-1.5">
            <Users className="w-3 h-3 text-secondary" />
            <span>{department.count} members</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-secondary" />
            <span>{details.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Hash className="w-3 h-3 text-secondary" />
            <span>{details.slackChannel}</span>
          </div>
        </div>

        <Tabs defaultValue="team" className="mt-4">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
            <TabsTrigger value="team" className="text-xs">Team Members</TabsTrigger>
            <TabsTrigger value="processes" className="text-xs">Key Processes</TabsTrigger>
          </TabsList>

          <TabsContent value="team" className="mt-3 space-y-2">
            {details.teamMembers.map((member) => (
              <div
                key={member.email}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full nebula-gradient flex items-center justify-center text-xs font-heading font-semibold text-primary-foreground shrink-0">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{member.name}</p>
                  <p className="text-[11px] text-muted-foreground">{member.role}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={`mailto:${member.email}`} className="p-1.5 rounded-md hover:bg-muted/60 text-secondary">
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a href={`tel:${member.phone}`} className="p-1.5 rounded-md hover:bg-muted/60 text-secondary">
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
            <p className="text-[10px] text-muted-foreground text-center pt-1">
              Lead: {department.lead}
            </p>
          </TabsContent>

          <TabsContent value="processes" className="mt-3 space-y-2">
            {details.processes.map((proc) => (
              <div
                key={proc.title}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{proc.title}</p>
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span>{proc.steps} steps</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5">
                      <Clock className="w-3 h-3" />
                      {proc.estimatedTime}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
