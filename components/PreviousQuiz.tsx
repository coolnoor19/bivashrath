"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Lightbulb,
  Lock,
  Unlock,
  Sparkles,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  hint: string;
  answer: string;
  category: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "Odia Cinema & Music",
    question:
      "He is well-known for his contributions not only to Odia cinema but also as a popular bhajan and devotional singer, composer and lyricist. His career began with the film 'Mukti' in 1977 but the big break came with Samar Selim Simon which established him in the hearts of Odias. Who is the person and which song established him as a major Odia artiste?",
    hint: "The song is a balm for the broken hearts",
    answer: "Sekhar Ghosh & Hrudaya Ra Ei Sunyata",
  },
  {
    id: 2,
    category: "Art & Heritage",
    question:
      "This visual represents the only handloom in the state where the dye is extracted purely from the roots of the Aal (Indian Madder) tree, mixed with castor oil and cow dung. The process of preparing the yarn alone can take up to 21 days. Name this type of handloom.",
    hint: "The first textile from Odisha to receive a GI tag.",
    answer: "Kotpad",
  },
  {
    id: 3,
    category: "GI Tags & Culture",
    question:
      "In early 2024-25, Odisha secured a flurry of Geographical Indication (GI) tags. One of the most talked-about globally was for a unique delicacy. It is known for its high protein, calcium, and medicinal value, often used by tribal communities to cure coughs and improve eyesight. Name this specific GI-tagged produce.",
    hint: 'This recognized "entomophagy" as a legitimate and scientifically valuable culinary heritage of the state.',
    answer: "Kai Chutney - Red Ant",
  },
  {
    id: 4,
    category: "Archaeology",
    question:
      "In Feb 2026, the ASI announced a groundbreaking discovery in the Cuttack district that has rewritten the history of rural settlements in coastal Odisha. They unearthed a well-structured, organized village dating back to Chalcolithic to Iron Age. Identify the specific village/site in Cuttack where this discovery was made.",
    hint: "It is situated between the Prachi River and the Tanala rivulet",
    answer: "Bharati Huda at Jalarpur Village",
  },
];

const categoryColors: Record<string, { bg: string; text: string; glow: string }> = {
  "Odia Cinema & Music": { bg: "bg-rose-500/15", text: "text-rose-400", glow: "shadow-rose-500/20" },
  "Art & Heritage": { bg: "bg-violet-500/15", text: "text-violet-400", glow: "shadow-violet-500/20" },
  "GI Tags & Culture": { bg: "bg-emerald-500/15", text: "text-emerald-400", glow: "shadow-emerald-500/20" },
  Archaeology: { bg: "bg-sky-500/15", text: "text-sky-400", glow: "shadow-sky-500/20" },
};

const numberGradients = [
  "from-rose-500/20 via-amber-500/10 to-transparent",
  "from-violet-500/20 via-amber-500/10 to-transparent",
  "from-emerald-500/20 via-amber-500/10 to-transparent",
  "from-sky-500/20 via-amber-500/10 to-transparent",
];

function QuizCard({ item, index }: { item: QuizQuestion; index: number }) {
  const [step, setStep] = useState<"question" | "hint" | "answer">("question");
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-150, 150], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const colors = categoryColors[item.category] || categoryColors["Archaeology"];

  const advanceStep = () => {
    if (step === "question") setStep("hint");
    else if (step === "hint") setStep("answer");
  };

  const resetCard = () => setStep("question");

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      {/* Ambient glow on hover */}
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:via-transparent group-hover:to-amber-500/5 transition-all duration-700 blur-xl`}
      />

      <div className="relative rounded-2xl border border-white/[0.08] bg-zinc-950/80 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:border-white/[0.15] group-hover:shadow-lg group-hover:shadow-amber-500/5">
        {/* Top decorative bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${numberGradients[index]}`} />

        {/* Large question number + category */}
        <div className="relative px-6 pt-6 pb-2 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`relative flex items-center justify-center w-11 h-11 rounded-xl ${colors.bg} border border-white/[0.06]`}>
              <span className={`text-lg font-bold ${colors.text}`}>
                {String(item.id).padStart(2, "0")}
              </span>
              {/* Subtle pulse ring */}
              <motion.div
                className={`absolute inset-0 rounded-xl ${colors.bg}`}
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className={`text-xs font-medium tracking-wider uppercase ${colors.text}`}>
              {item.category}
            </span>
          </div>

          {/* Step indicator dots */}
          <div className="flex items-center gap-1.5 pt-2">
            {(["question", "hint", "answer"] as const).map((s, i) => (
              <motion.div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  step === s
                    ? "w-5 bg-amber-400"
                    : (s === "hint" && step === "answer") || (s === "question")
                    ? "w-1.5 bg-white/20"
                    : "w-1.5 bg-white/10"
                }`}
                layout
              />
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="px-6 py-4">
          <p className="text-gray-300 text-[15px] leading-relaxed">
            {item.question}
          </p>
        </div>

        {/* Interactive area */}
        <div className="px-6 pb-6">
          {/* Hint section */}
          <AnimatePresence mode="wait">
            {step === "hint" && (
              <motion.div
                key="hint"
                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mb-4"
              >
                <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-amber-500/[0.07] border border-amber-500/20">
                  <Lightbulb size={18} className="text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-amber-200/80 text-sm leading-relaxed italic">
                    {item.hint}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Answer section */}
          <AnimatePresence mode="wait">
            {step === "answer" && (
              <motion.div
                key="answer"
                initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-4"
              >
                <div className="relative overflow-hidden px-4 py-4 rounded-xl bg-gradient-to-br from-amber-500/15 via-amber-500/10 to-amber-600/5 border border-amber-500/25">
                  {/* Sparkle decorations */}
                  <motion.div
                    className="absolute top-2 right-3"
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles size={14} className="text-amber-400/40" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-2 right-10"
                    animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  >
                    <Sparkles size={10} className="text-amber-300/30" />
                  </motion.div>

                  <p className="text-sm text-amber-400/70 font-medium mb-1">Answer</p>
                  <p className="text-amber-200 font-semibold text-base sm:text-lg">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action button */}
          {step !== "answer" ? (
            <motion.button
              onClick={advanceStep}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group/btn relative w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                background:
                  step === "question"
                    ? "rgba(255,255,255,0.04)"
                    : "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(217,119,6,0.08))",
                border:
                  step === "question"
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(245,158,11,0.25)",
              }}
            >
              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

              {step === "question" ? (
                <>
                  <HelpCircle size={16} className="text-gray-400 group-hover/btn:text-amber-400 transition-colors duration-300" />
                  <span className="text-gray-400 group-hover/btn:text-gray-200 transition-colors duration-300">
                    Need a Hint?
                  </span>
                  <ArrowRight size={14} className="text-gray-500 group-hover/btn:text-amber-400 group-hover/btn:translate-x-0.5 transition-all duration-300" />
                </>
              ) : (
                <>
                  <Lock size={16} className="text-amber-400/80 group-hover/btn:hidden transition-all duration-200" />
                  <Unlock size={16} className="text-amber-400 hidden group-hover/btn:block transition-all duration-200" />
                  <span className="text-amber-400/90 group-hover/btn:text-amber-300 transition-colors duration-300">
                    Reveal Answer
                  </span>
                  <ArrowRight size={14} className="text-amber-500/60 group-hover/btn:text-amber-400 group-hover/btn:translate-x-0.5 transition-all duration-300" />
                </>
              )}
            </motion.button>
          ) : (
            <motion.button
              onClick={resetCard}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-gray-500 hover:text-gray-300 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 cursor-pointer"
            >
              Reset
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function PreviousQuiz() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-amber-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-amber-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            Test Your Knowledge
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Questions From{" "}
            <span className="text-gradient-amber">Past Events</span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Handpicked questions from previous quiz events.
            <br className="hidden sm:block" />
            Think, guess, then reveal.
          </p>
        </motion.div>

        {/* Quiz Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {quizQuestions.map((item, index) => (
            <QuizCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
