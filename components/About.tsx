"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
    const experiences = [
        {
            role: "Quizzes Hosted For",
            period: "2012 - Present",
            description: "PCRA (Ministry of Petroleum), NCERT, Odisha State Road & Transport Corporation. Corporates like SBI, NTPC. Govt Educational Institutions like IIT-BBS, NIT-Rourkela and private ones like XIMB, SOA."
        },
        {
            role: "Music Composer",
            period: "2012 - Present",
            description: "Pratikshya (2022 - National Award), Google Kahuchi (2020), Panchatantra, etc."
        },
        {
            role: "Thinqtank Learning Pvt Ltd",
            period: "2020 - Present",
            description: "Building the Ed-tech startup that India deserves. Aims to revolutionize the education system through innovative solutions. We are completely boot-strapped and have been delivering since 2023."
        }
    ];

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column - About Me */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="sticky top-32"
                    >
                        <h2 className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-3">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            A blend of logic, <br /><span className="text-gray-500">art, and education.</span>
                        </h3>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            With a passion for engaging storytelling, quizzing, and education, I create high-impact learning experiences. Whether it's curating knowledge-driven content, running Thinqtank Learning, or making music, I help bring ideas to life and see them to their intended outcome with utmost efficiency.
                        </p>
                        <Link href="/portfolio" className="inline-flex items-center gap-2 text-white font-semibold hover:text-amber-400 transition-colors group">
                            Explore my journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Right Column - Overview Timeline */}
                    <div className="space-y-12">
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4"
                            >
                                My Journey
                            </motion.h3>

                            <div className="space-y-10 border-l border-white/10 pl-6 ml-2">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-amber-500" />

                                        <span className="text-sm font-medium text-amber-500 mb-2 inline-block">{exp.period}</span>
                                        <h4 className="text-xl font-bold text-white mb-3">{exp.role}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                            {exp.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
