import {
  Zap,
  TrendingUp,
  Users,
  Building2,
  Shield,
  Headphones,
  Briefcase,
  Code,
  Palette,
  Scale,
  Megaphone,
  Server,
  type LucideIcon,
} from "lucide-react";

export interface Department {
  name: string;
  icon: LucideIcon;
  count: number;
  lead: string;
  description: string;
}

export interface RecentAssist {
  query: string;
  type: "process" | "contact" | "policy" | "support";
  time: string;
}

export interface ProcessGuide {
  title: string;
  category: string;
  steps: number;
  estimatedTime: string;
}

export const departments: Department[] = [
  { name: "Engineering", icon: Code, count: 42, lead: "Sarah Chen", description: "Software development, QA, and DevOps" },
  { name: "Marketing", icon: Megaphone, count: 18, lead: "James Rivera", description: "Brand, content, and growth marketing" },
  { name: "Human Resources", icon: Users, count: 12, lead: "Priya Sharma", description: "Talent acquisition, culture, and people ops" },
  { name: "Finance", icon: Building2, count: 15, lead: "Michael Torres", description: "Accounting, budgeting, and financial planning" },
  { name: "Sales", icon: TrendingUp, count: 28, lead: "Emily Watson", description: "Business development and account management" },
  { name: "Customer Support", icon: Headphones, count: 22, lead: "David Kim", description: "Technical support and customer success" },
  { name: "Legal & Compliance", icon: Scale, count: 8, lead: "Amanda Foster", description: "Contracts, regulatory, and compliance" },
  { name: "Design", icon: Palette, count: 10, lead: "Lucas Nguyen", description: "UI/UX design, brand identity, and research" },
  { name: "IT & Infrastructure", icon: Server, count: 14, lead: "Rachel Adams", description: "Systems, networking, and security ops" },
  { name: "Operations", icon: Briefcase, count: 9, lead: "Daniel Brooks", description: "Facilities, procurement, and logistics" },
  { name: "Security", icon: Shield, count: 6, lead: "Alex Morgan", description: "Information security and risk management" },
  { name: "Product", icon: Zap, count: 11, lead: "Olivia Park", description: "Product strategy, roadmap, and analytics" },
];

export const recentAssists: RecentAssist[] = [
  { query: "How to submit expense report?", type: "process", time: "2 min ago" },
  { query: "Find John from Engineering", type: "contact", time: "15 min ago" },
  { query: "IT ticket escalation process", type: "process", time: "1 hr ago" },
  { query: "Marketing team lead contact", type: "contact", time: "3 hrs ago" },
  { query: "Remote work policy details", type: "policy", time: "4 hrs ago" },
  { query: "VPN setup troubleshooting", type: "support", time: "5 hrs ago" },
  { query: "Annual leave balance check", type: "process", time: "6 hrs ago" },
  { query: "New hire onboarding checklist", type: "process", time: "Yesterday" },
  { query: "Conference room booking guide", type: "process", time: "Yesterday" },
  { query: "Data privacy compliance FAQ", type: "policy", time: "2 days ago" },
];

export const processGuides: ProcessGuide[] = [
  { title: "Submit Expense Report", category: "Finance", steps: 5, estimatedTime: "10 min" },
  { title: "Request Time Off (PTO)", category: "HR", steps: 3, estimatedTime: "5 min" },
  { title: "Onboard New Team Member", category: "HR", steps: 12, estimatedTime: "2 hrs" },
  { title: "Create IT Support Ticket", category: "IT", steps: 4, estimatedTime: "5 min" },
  { title: "Request Software License", category: "IT", steps: 6, estimatedTime: "15 min" },
  { title: "Book Conference Room", category: "Operations", steps: 3, estimatedTime: "3 min" },
  { title: "Submit Travel Request", category: "Finance", steps: 7, estimatedTime: "20 min" },
  { title: "Update Emergency Contacts", category: "HR", steps: 3, estimatedTime: "5 min" },
  { title: "Request VPN Access", category: "IT", steps: 5, estimatedTime: "10 min" },
  { title: "File Compliance Report", category: "Legal", steps: 8, estimatedTime: "30 min" },
  { title: "Order Office Supplies", category: "Operations", steps: 4, estimatedTime: "5 min" },
  { title: "Set Up Direct Deposit", category: "Finance", steps: 4, estimatedTime: "10 min" },
  { title: "Request Badge Access", category: "Security", steps: 5, estimatedTime: "15 min" },
  { title: "Schedule Performance Review", category: "HR", steps: 4, estimatedTime: "10 min" },
  { title: "Report Security Incident", category: "Security", steps: 6, estimatedTime: "15 min" },
];

export const typeColors: Record<string, string> = {
  process: "bg-secondary/10 text-secondary",
  contact: "bg-primary/20 text-accent",
  policy: "bg-accent/15 text-accent",
  support: "bg-destructive/10 text-destructive",
};

export const categoryColors: Record<string, string> = {
  Finance: "text-secondary",
  HR: "text-accent",
  IT: "text-secondary",
  Operations: "text-muted-foreground",
  Legal: "text-warning",
  Security: "text-destructive",
};
