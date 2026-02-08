import { motion } from "framer-motion";
import { User, Bot } from "lucide-react";

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
  variant?: "process" | "contact" | "default";
}

export function ChatBubble({ message, isUser, timestamp, variant = "default" }: ChatBubbleProps) {
  const borderColor = variant === "process"
    ? "border-l-2 border-l-secondary/50"
    : variant === "contact"
    ? "border-l-2 border-l-primary/70"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? "nebula-gradient" : "glass-panel"
        }`}
      >
        {isUser ? (
          <User className="w-4 h-4 text-primary-foreground" />
        ) : (
          <Bot className="w-4 h-4 text-secondary" />
        )}
      </div>
      <div className={`max-w-[75%] ${isUser ? "chat-bubble-user" : `chat-bubble-assistant ${borderColor}`}`}>
        <p className="text-sm leading-relaxed">{message}</p>
        {timestamp && (
          <span className="text-[10px] text-muted-foreground mt-1.5 block">{timestamp}</span>
        )}
      </div>
    </motion.div>
  );
}
