"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Quiz",
    description: "Explore quiz events, competitions, and knowledge battles across the country.",
    href: "/portfolio/quiz",
    image: "/images/AMQ 2024 -1.JPG",
    gradient: "from-amber-500/30 via-orange-500/20 to-yellow-500/10",
  },
  {
    title: "Music",
    description: "Discover live performances, musical sessions, and soulful experiences.",
    href: "/portfolio/music",
    image: "/bivash.avif",
    gradient: "from-purple-500/30 via-pink-500/20 to-fuchsia-500/10",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

export default function Portfolio() {
  return (
    <section className="relative min-h-screen bg-black pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] -left-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-[10%] -right-48 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 dot-grid animate-grid-fade" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-4">
            My <span className="text-gradient-amber">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my work across quiz mastery and musical performances.
          </p>
        </motion.div>

        {/* Two Cards - 50/50 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <motion.div key={cat.title} {...fadeUp(0.2 + i * 0.15)}>
              <Link href={cat.href} className="group block">
                <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500">
                  {/* Background Image */}
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
                      {cat.title}
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-sm leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Explore
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
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
