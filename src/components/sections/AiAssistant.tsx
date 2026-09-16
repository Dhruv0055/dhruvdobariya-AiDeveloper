import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Bot, Send, Terminal, RotateCcw } from "lucide-react";
import { aiResponses, samplePrompts } from "../../data/aiKnowledge";
import type { ChatMessage } from "../../types";

export const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "assistant",
      text: "Hello! I am Dhruv's AI Assistant. Ask me anything about his technical stack, engineering experience, recent projects, or design philosophy.",
      timestamp: "Just now"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Reference to ONLY the internal chat container, preventing whole page from scrolling
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollChatToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollChatToBottom();
  }, [messages, isTyping]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes("praval") || q.includes("jewel") || q.includes("gold")) {
      return aiResponses.praval || aiResponses.projects;
    }
    if (q.includes("body") || q.includes("fitness") || q.includes("gym")) {
      return aiResponses.bodylab || aiResponses.projects;
    }
    if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("tool") || q.includes("antigravity") || q.includes("claude") || q.includes("lovable")) {
      return aiResponses.skills;
    }
    if (q.includes("project") || q.includes("built") || q.includes("portfolio")) {
      return aiResponses.projects;
    }
    if (q.includes("contact") || q.includes("whatsapp") || q.includes("email") || q.includes("hire") || q.includes("reach") || q.includes("touch")) {
      return aiResponses.contact;
    }
    if (q.includes("available") || q.includes("freelance") || q.includes("full-time") || q.includes("job")) {
      return aiResponses.availability;
    }
    if (q.includes("design") || q.includes("ui") || q.includes("ux")) {
      return aiResponses.design;
    }
    return "Thanks for asking! Dhruv is an AI Web Developer & Designer skilled in Next.js, React, Google Antigravity, Claude 3.5 AI, ChatGPT, Lovable, Python, and modern UI/UX. Contact him directly on WhatsApp at +91 8160925636 or email dhruvdobariya005@gmail.com.";
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateAnswer(query);
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: responseText,
        timestamp: "Just now"
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "1",
        sender: "assistant",
        text: "Terminal reset. Ask me about Dhruv's background, AI tools, or availability.",
        timestamp: "Just now"
      }
    ]);
  };

  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-accent">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section id="ai-assistant" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeading
        index="04 // Interactive AI Sandbox"
        title="Explore Dhruv’s stack via live assistant."
        subtitle="Interact with the simulated AI assistant to learn about architecture decisions, tools, and availability without leaving the page."
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className="rounded-3xl border border-light-border dark:border-white/10 bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-light-border dark:border-white/10 bg-light-card/40 dark:bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-4 w-px bg-light-border dark:border-white/10" />
            <div className="flex items-center gap-2 font-mono text-xs text-light-subtext dark:text-dark-subtext">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span>dhruv-ai-agent-v1.4 • interactive sandbox</span>
            </div>
          </div>

          <button
            onClick={handleResetChat}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-light-subtext dark:text-dark-subtext hover:text-light-text dark:hover:text-dark-text hover:bg-light-card dark:hover:bg-white/5 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        {/* Suggested Prompts (No outer scroll jump) */}
        <div className="px-6 py-3 border-b border-light-border/60 dark:border-white/5 bg-light-surface/30 dark:bg-dark-surface/30 flex items-center gap-2 overflow-x-auto hide-scrollbar">
          <span className="text-[10px] font-mono uppercase tracking-wider text-light-subtext/70 dark:text-dark-subtext/70 shrink-0">
            Suggested:
          </span>
          {samplePrompts.map((prompt, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSendMessage(prompt);
              }}
              className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-mono border border-light-border dark:border-white/10 bg-light-card/60 dark:bg-white/5 hover:border-accent hover:bg-accent/10 text-light-text dark:text-dark-text transition-all hover:scale-[1.02] cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat Stream Window - Contained Smooth Scroll */}
        <div
          ref={chatContainerRef}
          className="p-6 h-80 sm:h-96 overflow-y-auto space-y-4 font-sans text-sm hide-scrollbar"
        >
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-accent text-white rounded-br-none shadow-md"
                    : "bg-light-card/70 dark:bg-white/5 border border-light-border dark:border-white/10 text-light-text dark:text-dark-text rounded-bl-none backdrop-blur-sm"
                }`}
              >
                <div className="flex items-center gap-2 mb-1 opacity-70 text-[10px] font-mono">
                  {msg.sender === "assistant" && <Bot className="w-3 h-3 text-accent" />}
                  <span>{msg.sender === "user" ? "Visitor" : "Dhruv AI Agent"}</span>
                </div>
                <div className="text-xs sm:text-sm leading-relaxed">
                  {formatText(msg.text)}
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="p-3 rounded-2xl bg-light-card/70 dark:bg-white/5 border border-light-border dark:border-white/10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.4s]" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-4 border-t border-light-border dark:border-white/10 bg-light-surface/40 dark:bg-dark-surface/40 flex items-center gap-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about AI tools, Praval Jewels, Body Lab, contact..."
            className="flex-1 bg-light-card/60 dark:bg-white/5 border border-light-border dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-light-text dark:text-dark-text focus:outline-none focus:border-accent transition-colors placeholder:text-light-subtext/60 dark:placeholder:text-dark-subtext/60 font-sans"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-3 rounded-xl bg-accent text-white hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </section>
  );
};
