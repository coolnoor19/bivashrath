"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Mic2, Users } from "lucide-react";

const stats = [
    {
        id: 1,
        value: "67+",
        label: "Different Entities",
        description: "Successfully catered clients across government, private and non-profits.",
        icon: <Users className="w-6 h-6 text-amber-500" />
    },
    {
        id: 2,
        value: "500+",
        label: "Quizzes Hosted",
        description: "Across the length and breadth of India, and abroad in Oman.",
        icon: <Mic2 className="w-6 h-6 text-blue-500" />
    },
    {
        id: 3,
        value: "12+",
        label: "Years Experience",
        description: "Hosting professional quiz events, workshops and seminars since 2013.",
        icon: <Award className="w-6 h-6 text-emerald-500" />
    },
    {
        id: 4,
        value: "1000+",
        label: "Students Guided",
        description: "Found their passion and confidence from various sessions.",
        icon: <BookOpen className="w-6 h-6 text-purple-500" />
    }
];

export default function Stats() {
    return (
        <section className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
                    >
                        Quizzes Over The Years
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        A legacy of bringing knowledge to life through engaging and competitive formats.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden"
                        >
                            {/* Subtle hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-extrabold text-white mb-2">{stat.value}</h3>
                                <h4 className="text-lg font-semibold text-gray-200 mb-3">{stat.label}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
