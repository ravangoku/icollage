import type { LucideIcon } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export interface DepartmentProcess {
  title: string;
  steps: number;
  estimatedTime: string;
}

export interface DepartmentDetail {
  teamMembers: TeamMember[];
  processes: DepartmentProcess[];
  location: string;
  slackChannel: string;
}

export const departmentDetails: Record<string, DepartmentDetail> = {
  Engineering: {
    location: "Building A, Floor 3-4",
    slackChannel: "#engineering",
    teamMembers: [
      { name: "Sarah Chen", role: "VP of Engineering", email: "s.chen@company.com", phone: "+1 (555) 234-5678" },
      { name: "Alex Kim", role: "Staff Engineer", email: "a.kim@company.com", phone: "+1 (555) 234-5679" },
      { name: "Jordan Lee", role: "Senior Engineer", email: "j.lee@company.com", phone: "+1 (555) 234-5680" },
      { name: "Maria Garcia", role: "DevOps Lead", email: "m.garcia@company.com", phone: "+1 (555) 234-5681" },
      { name: "Ryan Patel", role: "QA Manager", email: "r.patel@company.com", phone: "+1 (555) 234-5682" },
    ],
    processes: [
      { title: "Submit Code Review", steps: 4, estimatedTime: "15 min" },
      { title: "Request Dev Environment", steps: 5, estimatedTime: "10 min" },
      { title: "Report Production Incident", steps: 6, estimatedTime: "5 min" },
    ],
  },
  Marketing: {
    location: "Building B, Floor 2",
    slackChannel: "#marketing",
    teamMembers: [
      { name: "James Rivera", role: "CMO", email: "j.rivera@company.com", phone: "+1 (555) 345-6001" },
      { name: "Lisa Wong", role: "Content Lead", email: "l.wong@company.com", phone: "+1 (555) 345-6002" },
      { name: "Tom Baker", role: "Growth Manager", email: "t.baker@company.com", phone: "+1 (555) 345-6003" },
      { name: "Nina Patel", role: "Brand Designer", email: "n.patel@company.com", phone: "+1 (555) 345-6004" },
    ],
    processes: [
      { title: "Submit Campaign Brief", steps: 5, estimatedTime: "20 min" },
      { title: "Request Brand Assets", steps: 3, estimatedTime: "5 min" },
      { title: "Approve Press Release", steps: 7, estimatedTime: "30 min" },
    ],
  },
  "Human Resources": {
    location: "Building A, Floor 1",
    slackChannel: "#hr-general",
    teamMembers: [
      { name: "Priya Sharma", role: "CHRO", email: "p.sharma@company.com", phone: "+1 (555) 456-7001" },
      { name: "David Liu", role: "Talent Acquisition Lead", email: "d.liu@company.com", phone: "+1 (555) 456-7002" },
      { name: "Rachel Green", role: "People Ops Manager", email: "r.green@company.com", phone: "+1 (555) 456-7003" },
      { name: "Sam Jackson", role: "Benefits Specialist", email: "s.jackson@company.com", phone: "+1 (555) 456-7004" },
    ],
    processes: [
      { title: "Request Time Off (PTO)", steps: 3, estimatedTime: "5 min" },
      { title: "Onboard New Team Member", steps: 12, estimatedTime: "2 hrs" },
      { title: "Update Emergency Contacts", steps: 3, estimatedTime: "5 min" },
      { title: "Schedule Performance Review", steps: 4, estimatedTime: "10 min" },
    ],
  },
  Finance: {
    location: "Building C, Floor 1",
    slackChannel: "#finance",
    teamMembers: [
      { name: "Michael Torres", role: "CFO", email: "m.torres@company.com", phone: "+1 (555) 567-8001" },
      { name: "Anna Wright", role: "Controller", email: "a.wright@company.com", phone: "+1 (555) 567-8002" },
      { name: "Kevin Park", role: "Senior Accountant", email: "k.park@company.com", phone: "+1 (555) 567-8003" },
    ],
    processes: [
      { title: "Submit Expense Report", steps: 5, estimatedTime: "10 min" },
      { title: "Submit Travel Request", steps: 7, estimatedTime: "20 min" },
      { title: "Set Up Direct Deposit", steps: 4, estimatedTime: "10 min" },
    ],
  },
  Sales: {
    location: "Building B, Floor 3",
    slackChannel: "#sales",
    teamMembers: [
      { name: "Emily Watson", role: "VP of Sales", email: "e.watson@company.com", phone: "+1 (555) 678-9001" },
      { name: "Chris Morgan", role: "Enterprise AE", email: "c.morgan@company.com", phone: "+1 (555) 678-9002" },
      { name: "Jessica Huang", role: "SDR Manager", email: "j.huang@company.com", phone: "+1 (555) 678-9003" },
      { name: "Marcus Brown", role: "Sales Ops Lead", email: "m.brown@company.com", phone: "+1 (555) 678-9004" },
      { name: "Sophie Carter", role: "Account Manager", email: "s.carter@company.com", phone: "+1 (555) 678-9005" },
    ],
    processes: [
      { title: "Log Deal in CRM", steps: 4, estimatedTime: "10 min" },
      { title: "Request Discount Approval", steps: 5, estimatedTime: "15 min" },
    ],
  },
  "Customer Support": {
    location: "Building A, Floor 2",
    slackChannel: "#support",
    teamMembers: [
      { name: "David Kim", role: "Head of Support", email: "d.kim@company.com", phone: "+1 (555) 789-0001" },
      { name: "Alicia Fernandez", role: "Tier 2 Lead", email: "a.fernandez@company.com", phone: "+1 (555) 789-0002" },
      { name: "Brian Scott", role: "CS Manager", email: "b.scott@company.com", phone: "+1 (555) 789-0003" },
      { name: "Wendy Lin", role: "Knowledge Base Lead", email: "w.lin@company.com", phone: "+1 (555) 789-0004" },
    ],
    processes: [
      { title: "Create IT Support Ticket", steps: 4, estimatedTime: "5 min" },
      { title: "Escalate Customer Issue", steps: 5, estimatedTime: "10 min" },
    ],
  },
  "Legal & Compliance": {
    location: "Building C, Floor 2",
    slackChannel: "#legal",
    teamMembers: [
      { name: "Amanda Foster", role: "General Counsel", email: "a.foster@company.com", phone: "+1 (555) 890-1001" },
      { name: "Robert Davis", role: "Compliance Officer", email: "r.davis@company.com", phone: "+1 (555) 890-1002" },
      { name: "Sandra Nguyen", role: "Contract Specialist", email: "s.nguyen@company.com", phone: "+1 (555) 890-1003" },
    ],
    processes: [
      { title: "File Compliance Report", steps: 8, estimatedTime: "30 min" },
      { title: "Request Contract Review", steps: 5, estimatedTime: "15 min" },
    ],
  },
  Design: {
    location: "Building B, Floor 1",
    slackChannel: "#design",
    teamMembers: [
      { name: "Lucas Nguyen", role: "Head of Design", email: "l.nguyen@company.com", phone: "+1 (555) 901-2001" },
      { name: "Emma Clark", role: "Senior UX Designer", email: "e.clark@company.com", phone: "+1 (555) 901-2002" },
      { name: "Jake Wilson", role: "UI Designer", email: "j.wilson@company.com", phone: "+1 (555) 901-2003" },
      { name: "Mia Thompson", role: "UX Researcher", email: "m.thompson@company.com", phone: "+1 (555) 901-2004" },
    ],
    processes: [
      { title: "Request Design Review", steps: 4, estimatedTime: "10 min" },
      { title: "Submit Brand Guidelines Update", steps: 6, estimatedTime: "20 min" },
    ],
  },
  "IT & Infrastructure": {
    location: "Building A, Floor 5",
    slackChannel: "#it-ops",
    teamMembers: [
      { name: "Rachel Adams", role: "CTO", email: "r.adams@company.com", phone: "+1 (555) 012-3001" },
      { name: "Tyler Brooks", role: "Systems Admin", email: "t.brooks@company.com", phone: "+1 (555) 012-3002" },
      { name: "Casey Moore", role: "Network Engineer", email: "c.moore@company.com", phone: "+1 (555) 012-3003" },
      { name: "Derek Tan", role: "Security Analyst", email: "d.tan@company.com", phone: "+1 (555) 012-3004" },
    ],
    processes: [
      { title: "Request VPN Access", steps: 5, estimatedTime: "10 min" },
      { title: "Request Software License", steps: 6, estimatedTime: "15 min" },
      { title: "Report IT Incident", steps: 4, estimatedTime: "5 min" },
    ],
  },
  Operations: {
    location: "Building C, Floor 3",
    slackChannel: "#operations",
    teamMembers: [
      { name: "Daniel Brooks", role: "VP of Operations", email: "d.brooks@company.com", phone: "+1 (555) 123-4001" },
      { name: "Olivia Stone", role: "Facilities Manager", email: "o.stone@company.com", phone: "+1 (555) 123-4002" },
      { name: "Nathan Reed", role: "Procurement Lead", email: "n.reed@company.com", phone: "+1 (555) 123-4003" },
    ],
    processes: [
      { title: "Book Conference Room", steps: 3, estimatedTime: "3 min" },
      { title: "Order Office Supplies", steps: 4, estimatedTime: "5 min" },
    ],
  },
  Security: {
    location: "Building A, Floor 5",
    slackChannel: "#security",
    teamMembers: [
      { name: "Alex Morgan", role: "CISO", email: "a.morgan@company.com", phone: "+1 (555) 234-5001" },
      { name: "Patricia Hall", role: "Security Engineer", email: "p.hall@company.com", phone: "+1 (555) 234-5002" },
      { name: "Leo Martinez", role: "Risk Analyst", email: "l.martinez@company.com", phone: "+1 (555) 234-5003" },
    ],
    processes: [
      { title: "Request Badge Access", steps: 5, estimatedTime: "15 min" },
      { title: "Report Security Incident", steps: 6, estimatedTime: "15 min" },
    ],
  },
  Product: {
    location: "Building B, Floor 4",
    slackChannel: "#product",
    teamMembers: [
      { name: "Olivia Park", role: "CPO", email: "o.park@company.com", phone: "+1 (555) 345-6101" },
      { name: "Ian Foster", role: "Senior PM", email: "i.foster@company.com", phone: "+1 (555) 345-6102" },
      { name: "Kate Sullivan", role: "Product Analyst", email: "k.sullivan@company.com", phone: "+1 (555) 345-6103" },
      { name: "Ben Harris", role: "Technical PM", email: "b.harris@company.com", phone: "+1 (555) 345-6104" },
    ],
    processes: [
      { title: "Submit Feature Request", steps: 4, estimatedTime: "10 min" },
      { title: "Request Roadmap Update", steps: 5, estimatedTime: "15 min" },
    ],
  },
};
