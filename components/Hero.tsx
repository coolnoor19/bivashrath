"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-28 pb-12">
            {/* Background gradients */}
            <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="flex flex-col items-start text-left order-2 lg:order-1">
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        <span className="text-xs md:text-sm font-medium text-gray-300 tracking-wide uppercase">Available for Events</span>
                    </motion.div> */}

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-tight font-heading"
                    >
                        Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Experiences</span> <br className="hidden lg:block" />
                        Through Knowledge.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="max-w-xl text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed"
                    >
                        Entrepreneur, Quiz Master, Musician & Educator. I create high-impact learning experiences and engaging storytelling that inspire.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <Link href="/portfolio" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-full overflow-hidden transition-all hover:scale-105 w-full sm:w-auto">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-amber-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative flex items-center gap-2">
                                Explore Portfolio <ArrowRight size={18} />
                            </span>
                        </Link>

                        <Link href="/watch-prep" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto">
                            Watch & Prep
                        </Link>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative w-[300px] h-[350px] sm:w-[400px] sm:h-[480px] lg:w-[450px] lg:h-[550px]">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-[2rem] blur-3xl opacity-30 animate-pulse"></div>

                        {/* Image container */}
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl z-10">
                            <Image
                                src="/bivash.avif"
                                alt="Bivash Rath - Quiz Master"
                                fill
                                className="object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                priority
                            />
                        </div>

                        {/* Decorative floating element */}
                        {/* <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl z-20 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🎤</span>
                                <div>
                                    <p className="text-white text-sm font-bold">Quiz Master</p>
                                    <p className="text-amber-400 text-xs">500+ Events</p>
                                </div>
                            </div>
                        </motion.div> */}
                    </div>
                </motion.div>

            </div>

            {/* Decorative lines */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute left-[10%] top-0 w-px h-full bg-white/5" />
                <div className="absolute left-[50%] top-0 w-px h-full bg-white/5" />
                <div className="absolute left-[90%] top-0 w-px h-full bg-white/5" />
            </div>
        </section>
    );
}
