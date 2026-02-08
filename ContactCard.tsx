import { motion } from "framer-motion";
import { Mail, Phone, Building2 } from "lucide-react";

interface ContactCardProps {
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  avatar?: string;
}

export function ContactCard({ name, role, department, email, phone }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="glass-panel hover-lift p-4 space-y-3"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full nebula-gradient flex items-center justify-center text-sm font-heading font-semibold text-primary-foreground">
          {name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="space-y-1.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Building2 className="w-3 h-3 text-secondary" />
          <span>{department}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-3 h-3 text-secondary" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-3 h-3 text-secondary" />
          <span>{phone}</span>
        </div>
      </div>
    </motion.div>
  );
}
