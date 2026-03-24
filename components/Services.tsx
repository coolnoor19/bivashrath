"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Music, MonitorPlay, Calendar } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Quiz Mastery",
            description: "Hosting engaging quizzes for corporates, schools, and colleges across India.",
            icon: <MonitorPlay className="w-8 h-8 text-white" />,
            link: "/portfolio",
            color: "bg-blue-600"
        },
        {
            title: "Music Composition",
            description: "National Award-winning music composition for films and independent projects.",
            icon: <Music className="w-8 h-8 text-white" />,
            link: "/portfolio",
            color: "bg-amber-500"
        },
        {
            title: "Thinq-Tank",
            description: "Professional hosting for workshops, seminars, and corporate events.",
            icon: <Calendar className="w-8 h-8 text-white" />,
            link: "/portfolio",
            color: "bg-emerald-600"
        }
    ];

    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What I Deliver</h2>
                        <p className="text-gray-400 text-lg">
                            Is excellence across multiple disciplines, from education to entertainment.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-medium">
                            View All Works <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-white/30 transition-colors p-8 min-h-[320px] flex flex-col"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 shadow-lg`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">{service.title}</h3>
                            <p className="text-gray-400 mb-8 grow">{service.description}</p>

                            <Link href={service.link} className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all mt-auto">
                                Discover More <ArrowRight size={18} className="text-amber-500" />
                            </Link>

                            {/* Decorative gradient overlay on hover */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
