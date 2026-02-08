import { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  ArrowLeft,
  Clock,
  Settings,
  Bot,
  Search,
  Users,
  FileText,
  User,
  AlertCircle,
} from "lucide-react";
import { QuickActionChip } from "@/components/QuickActionChip";
import { ThinkingDots } from "@/components/ThinkingDots";
import { streamChat, type ChatMessage } from "@/lib/chatStream";
import ReactMarkdown from "react-markdown";
import { useToast } from "@/hooks/use-toast";

interface UIMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const initialSuggestions = [
  { label: "Find a contact", icon: <Users className="w-3 h-3" /> },
  { label: "How to submit an expense report?", icon: <FileText className="w-3 h-3" /> },
  { label: "IT Support help", icon: <Settings className="w-3 h-3" /> },
  { label: "Show me department info", icon: <Clock className="w-3 h-3" /> },
];

export default function Chat() {
  const [searchParams] = useSearchParams();
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("General");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming]);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      sendMessage(q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ts = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const sendMessage = async (text: string) => {
    if (isStreaming) return;

    const userMsg: UIMessage = { id: Date.now().toString(), role: "user", content: text, timestamp: ts() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsStreaming(true);

    // Detect topic
    const lower = text.toLowerCase();
    if (lower.includes("contact") || lower.includes("find") || lower.includes("who")) setCurrentTopic("Contacts");
    else if (lower.includes("process") || lower.includes("how") || lower.includes("expense")) setCurrentTopic("Processes");
    else if (lower.includes("it ") || lower.includes("vpn") || lower.includes("support")) setCurrentTopic("IT Support");
    else setCurrentTopic("General");

    // Build history for AI
    const chatHistory: ChatMessage[] = [
      ...messages.map((m) => ({ role: m.role, content: m.content })),
      { role: "user" as const, content: text },
    ];

    let assistantSoFar = "";
    const assistantId = (Date.now() + 1).toString();

    try {
      await streamChat({
        messages: chatHistory,
        onDelta: (chunk) => {
          assistantSoFar += chunk;
          const content = assistantSoFar;
          setMessages((prev) => {
            const last = prev[prev.length - 1];
            if (last?.role === "assistant" && last.id === assistantId) {
              return prev.map((m) => (m.id === assistantId ? { ...m, content } : m));
            }
            return [...prev, { id: assistantId, role: "assistant", content, timestamp: ts() }];
          });
        },
        onDone: () => {
          setIsStreaming(false);
        },
        onError: (err) => {
          setIsStreaming(false);
          toast({
            title: "AI Error",
            description: err,
            variant: "destructive",
          });
        },
      });
    } catch (e) {
      setIsStreaming(false);
      toast({
        title: "Connection Error",
        description: "Failed to reach the assistant. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isStreaming) sendMessage(input.trim());
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Context Bar */}
      <header className="border-b border-border/50 glass-panel-strong rounded-none flex-shrink-0">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full nebula-gradient flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-sm">iColleague Assistant</h2>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${isStreaming ? "bg-warning animate-pulse" : "bg-success"}`} />
                  <span className="text-[10px] text-muted-foreground">
                    {isStreaming ? "Thinking…" : currentTopic}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
          {messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl nebula-gradient mx-auto flex items-center justify-center teal-glow">
                <Bot className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">Start a conversation</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Ask me about contacts, processes, or anything else.
                </p>
              </div>
            </motion.div>
          )}

          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.role === "user" ? "nebula-gradient" : "glass-panel"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <Bot className="w-4 h-4 text-secondary" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] ${
                    msg.role === "user" ? "chat-bubble-user" : "chat-bubble-assistant"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="text-sm leading-relaxed prose prose-invert prose-sm max-w-none prose-p:my-1 prose-li:my-0.5 prose-ul:my-1 prose-ol:my-1 prose-headings:text-foreground prose-strong:text-foreground">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  )}
                  <span className="text-[10px] text-muted-foreground mt-1.5 block">{msg.timestamp}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isStreaming && messages[messages.length - 1]?.role !== "assistant" && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full glass-panel flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-secondary animate-pulse" />
              </div>
              <div className="glass-panel-strong rounded-2xl rounded-bl-md">
                <ThinkingDots />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border/50 glass-panel-strong rounded-none flex-shrink-0">
        {messages.length === 0 && (
          <div className="max-w-3xl mx-auto px-4 pt-3 flex flex-wrap gap-2">
            {initialSuggestions.map((s) => (
              <QuickActionChip
                key={s.label}
                label={s.label}
                icon={s.icon}
                onClick={() => sendMessage(s.label)}
              />
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 h-12 px-4 rounded-xl glass-panel border border-border/50 focus-within:teal-glow focus-within:border-secondary/30 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isStreaming ? "Waiting for response…" : "Type your question..."}
              disabled={isStreaming}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none disabled:opacity-50"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              disabled={!input.trim() || isStreaming}
              className="text-secondary disabled:text-muted-foreground disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}
