"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { quizEvents } from "@/data/portfolio";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

export default function QuizPage() {
  return (
    <section className="relative min-h-screen bg-black pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] -left-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-[15%] -right-48 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 dot-grid animate-grid-fade" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back + Heading */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
            <span className="text-gradient-amber">Quiz</span> Events
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            Browse through various quiz competitions and events I&apos;ve hosted and participated in.
          </p>
        </motion.div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizEvents.map((event, i) => (
            <motion.div key={event.slug} {...fadeUp(0.1 + i * 0.08)}>
              <Link href={`/portfolio/quiz/${event.slug}`} className="group block">
                <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500 bg-white/[0.02]">
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <Image
                      src={event.coverImage}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-amber-400/80 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      View Details
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
