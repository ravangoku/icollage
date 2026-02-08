import { motion } from "framer-motion";

interface QuickActionChipProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export function QuickActionChip({ label, onClick, icon }: QuickActionChipProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="glass-panel px-3 py-1.5 text-xs font-medium text-secondary hover:text-secondary/80 flex items-center gap-1.5 transition-colors cursor-pointer"
    >
      {icon}
      {label}
    </motion.button>
  );
}
