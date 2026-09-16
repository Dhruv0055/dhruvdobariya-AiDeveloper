import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Copy, Check, Send, MessageCircle } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";
import { WhatsAppIcon } from "../ui/Icons";
import confetti from "canvas-confetti";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = "dhruvdobariya005@gmail.com";
  const phone = "8160925636";
  const formattedPhone = "+91 8160925636";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#3B82F6", "#60A5FA", "#10B981"]
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#25D366", "#128C7E", "#3B82F6"]
    });
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Format the inquiry into a clean WhatsApp message
    const messageText = `👋 *New Inquiry from Portfolio Website*\n\n👤 *Name:* ${formData.name}\n✉️ *Email:* ${formData.email}\n💬 *Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/918160925636?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp chat directly with the pre-filled message
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 400);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        index="05 // Direct Contact"
        title="Let's build something exceptional."
        subtitle="Available for web development projects, AI implementations, and UI/UX engineering. Reach out directly via WhatsApp or Email."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct WhatsApp & Email Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="lg:col-span-5 space-y-6"
        >
          {/* WhatsApp Primary Direct Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/20 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Direct WhatsApp
              </span>
              <WhatsAppIcon className="w-5 h-5 text-emerald-500" />
            </div>

            <div>
              <p className="font-display font-light text-2xl sm:text-3xl text-light-text dark:text-dark-text tracking-tight">
                {formattedPhone}
              </p>
              <p className="font-mono text-xs font-light text-light-subtext dark:text-dark-subtext mt-1">
                Fastest response • Instant chat & inquiries
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Magnetic strength={15}>
                <a
                  href="https://wa.me/918160925636"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Chat"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-mono text-xs font-medium hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Now</span>
                </a>
              </Magnetic>

              <Magnetic strength={15}>
                <button
                  onClick={handleCopyPhone}
                  data-cursor="Copy"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-emerald-500/30 bg-light-surface dark:bg-dark-surface hover:bg-emerald-500/10 font-mono text-xs font-medium text-light-text dark:text-dark-text transition-all"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </Magnetic>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-sm space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-light-subtext dark:text-dark-subtext">
              Direct Email
            </span>
            <p className="font-display font-light text-xl sm:text-2xl text-light-text dark:text-dark-text break-all">
              {email}
            </p>

            <Magnetic strength={20}>
              <button
                onClick={handleCopyEmail}
                data-cursor="Copy"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:bg-light-muted dark:hover:bg-dark-muted font-mono text-xs font-semibold text-light-text dark:text-dark-text transition-all duration-200"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right Column: Contact Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-10 rounded-3xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-sm">
            {submitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <Check className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display font-light text-2xl text-light-text dark:text-dark-text tracking-tight">
                    Opening in WhatsApp...
                  </h3>
                  <p className="text-sm text-light-subtext dark:text-dark-subtext max-w-sm mx-auto mt-1.5 font-light leading-relaxed">
                    Your inquiry has been formatted and redirected to Dhruv's WhatsApp (<strong className="text-emerald-500 font-normal">+91 8160925636</strong>).
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/918160925636?text=${encodeURIComponent(
                      `👋 *New Inquiry from Portfolio Website*\n\n👤 *Name:* ${formData.name || "Client"}\n✉️ *Email:* ${formData.email || "Email"}\n💬 *Message:* ${formData.message || "Project details"}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-mono text-xs font-normal hover:bg-emerald-700 shadow-md transition-all hover:scale-[1.02]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Open WhatsApp Chat Again</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="px-5 py-3 rounded-xl border border-light-border dark:border-dark-border hover:bg-light-card dark:hover:bg-dark-card font-mono text-xs font-normal text-light-subtext dark:text-dark-subtext hover:text-light-text dark:hover:text-dark-text transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-light-subtext dark:text-dark-subtext uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text focus:outline-none focus:border-accent dark:focus:border-accent-light transition-colors text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-light-subtext dark:text-dark-subtext uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text focus:outline-none focus:border-accent dark:focus:border-accent-light transition-colors text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-light-subtext dark:text-dark-subtext uppercase tracking-wider block">
                    Message / Project Inquiry
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your website project, timeline, or idea..."
                    className="w-full px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text focus:outline-none focus:border-accent dark:focus:border-accent-light transition-colors text-sm font-sans resize-none"
                  />
                </div>

                <Magnetic strength={15}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="Send"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-light-text text-light-bg dark:bg-white dark:text-dark-bg font-medium text-sm hover:opacity-90 shadow-lg shadow-black/10 dark:shadow-white/5 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
