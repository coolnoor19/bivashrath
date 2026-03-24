"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { quizEvents } from "@/data/portfolio";

export default function QuizDetailPage() {
  const { slug } = useParams();
  const event = quizEvents.find((e) => e.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!event) {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center pt-28">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Event not found</h1>
          <Link href="/portfolio/quiz" className="text-amber-400 hover:underline">
            Back to Quiz Events
          </Link>
        </div>
      </section>
    );
  }

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + event.images.length) % event.images.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % event.images.length : null
    );

  return (
    <section className="relative min-h-screen bg-black pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] -left-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-[10%] -right-48 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 dot-grid animate-grid-fade" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/portfolio/quiz"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Quiz Events
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-10 border border-white/10"
        >
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 sm:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {event.title}
            </h1>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-12"
        >
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            {event.content}
          </p>
        </motion.div>

        {/* Videos */}
        {event.videos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.videos.map((video, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-white/10"
                >
                  <video
                    src={video}
                    controls
                    playsInline
                    className="w-full aspect-video object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Image Gallery */}
        {event.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {event.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="relative aspect-square rounded-lg overflow-hidden border border-white/10 cursor-pointer group"
                >
                  <Image
                    src={img}
                    alt={`${event.title} - ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={36} />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl max-h-[85vh] aspect-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={event.images[lightboxIndex]}
                alt={`${event.title} - ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                className="w-full h-full max-h-[85vh] object-contain rounded-lg"
              />
              <p className="text-center text-gray-400 text-sm mt-4">
                {lightboxIndex + 1} / {event.images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
