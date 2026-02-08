import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
};

const quickChips = [
  "Find a contact",
  "Process guide",
  "IT Support",
  "HR Policies",
  "Submit expense",
  "Request PTO",
];

export function HeroSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/chat?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <motion.div variants={fadeUp} className="text-center space-y-6 py-8">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          How can I help you today?
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Find contacts, processes, or anything you need across your organization.
        </p>
      </div>

      <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
        <div
          className={`flex items-center gap-3 h-13 px-5 rounded-xl border transition-all duration-300 ${
            searchFocused
              ? "glass-panel-strong teal-glow border-secondary/30"
              : "glass-panel border-border/50"
          }`}
        >
          <Search className={`w-5 h-5 transition-colors ${searchFocused ? "text-secondary" : "text-muted-foreground"}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder="Ask anything... 'Who handles payroll?' or 'How do I request PTO?'"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none py-3"
          />
        </div>
      </form>

      <div className="flex flex-wrap justify-center gap-2">
        {quickChips.map((chip) => (
          <motion.button
            key={chip}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/chat?q=${encodeURIComponent(chip)}`)}
            className="glass-panel px-3 py-1.5 text-xs text-secondary hover:text-secondary/80 transition-colors cursor-pointer"
          >
            {chip}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
