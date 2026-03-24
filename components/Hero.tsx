"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-16 lg:pt-24 lg:pb-20 ">

            {/* ── Background Layer ── */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated gradient orbs */}
                <div className="absolute top-[15%] -left-32 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] animate-glow-pulse" />
                <div className="absolute bottom-[10%] -right-48 w-[600px] h-[600px] bg-amber-700/10 rounded-full blur-[160px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
                <div className="absolute top-[60%] left-[40%] w-[300px] h-[300px] bg-orange-500/8 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "3s" }} />

                {/* Dot grid overlay */}
                <div className="absolute inset-0 dot-grid animate-grid-fade" />

                {/* Subtle vertical lines with gradient fade */}
                <div className="absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <div className="absolute left-[50%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <div className="absolute left-[90%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

                {/* Horizontal accent line */}
                <div className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
            </div>

            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* ── Left: Text Content ── */}
                <div className="flex flex-col items-start text-left order-2 lg:order-1">

                    {/* Status Badge */}
                    {/* <motion.div
                        {...fadeUp(0)}
                        className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-gray-300 tracking-widest uppercase">
                            Available for Events
                        </span>
                    </motion.div> */}

                    {/* Heading */}
                    <motion.h1
                        {...fadeUp(0.15)}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-[1.05]"
                    >
                        Crafting{" "}
                        <span className="text-gradient-amber">
                            Experiences
                        </span>
                        <br className="hidden sm:block" />
                        Through Knowledge.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        {...fadeUp(0.3)}
                        className="max-w-lg text-base sm:text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed"
                    >
                        Entrepreneur, Quiz Master, Musician & Educator. I create
                        high-impact learning experiences and engaging storytelling
                        that inspire.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        {...fadeUp(0.45)}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        {/* Primary CTA - Amber gradient with shimmer */}
                        <Link
                            href="/portfolio"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105 w-full sm:w-auto"
                        >
                            <span className="absolute inset-0 shimmer-bg animate-shimmer" />
                            <span className="relative flex items-center gap-2">
                                Explore Portfolio
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>

                        {/* Secondary CTA */}
                        <Link
                            href="/watch-prep"
                            className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/15 rounded-full hover:border-amber-500/40 hover:bg-white/[0.04] transition-all duration-300 w-full sm:w-auto"
                        >
                            <span className="flex items-center gap-2">
                                Watch & Prep
                                <Sparkles size={16} className="text-amber-500/70 group-hover:text-amber-400 transition-colors" />
                            </span>
                        </Link>
                    </motion.div>

                    {/* Mini stats row */}
                    {/* <motion.div
                        {...fadeUp(0.6)}
                        className="flex items-center gap-6 mt-12 pt-8 border-t border-white/5"
                    >
                        {[
                            { value: "500+", label: "Quizzes" },
                            { value: "12+", label: "Years" },
                            { value: "67+", label: "Entities" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center sm:text-left">
                                <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div> */}
                </div>

                {/* ── Right: Profile Image ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 80, damping: 20 }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative w-[280px] h-[340px] sm:w-[380px] sm:h-[460px] lg:w-[430px] lg:h-[530px]">

                        {/* Outer glow */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-orange-500/15 rounded-[2.5rem] blur-3xl animate-glow-pulse" />

                        {/* Rotating gradient border */}
                        <div className="absolute -inset-[2px] rounded-[2rem] overflow-hidden">
                            <div
                                className="absolute inset-0 animate-rotate-gradient"
                                style={{
                                    background: "conic-gradient(from 0deg, #f59e0b, #fbbf24, #fde68a, rgba(255,255,255,0.15), #f59e0b)",
                                    width: "140%",
                                    height: "140%",
                                    left: "-20%",
                                    top: "-20%",
                                }}
                            />
                        </div>

                        {/* Image container */}
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-zinc-950 shadow-2xl z-10">
                            <Image
                                src="/bivash.avif"
                                alt="Bivash Rath - Quiz Master"
                                fill
                                className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                priority
                                sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 430px"
                            />
                            {/* Bottom gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>

                        {/* Floating badge - Quiz Master */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 glass rounded-2xl p-3 sm:p-4 z-20 shadow-xl"
                        >
                            {/* <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                    <Sparkles size={20} className="text-amber-400" />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">Quiz Master</p>
                                    <p className="text-amber-400 text-xs font-medium">500+ Events</p>
                                </div>
                            </div> */}
                        </motion.div>

                        {/* Floating badge - Experience */}
                        {/* <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 z-20 shadow-xl"
                        >
                            <p className="text-amber-400 text-xs font-bold tracking-wider uppercase">12+ Yrs</p>
                        </motion.div> */}
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll Indicator ── */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-6 left-1/2 animate-scroll-hint z-20"
            >
                <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">Scroll</span>
                    <ChevronDown size={16} className="text-gray-500" />
                </div>
            </motion.div> */}
        </section>
    );
}
