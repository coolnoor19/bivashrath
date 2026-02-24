"use client";

import { PlayCircle } from "lucide-react";

// Mock YouTube Video list - Change the videoId to the real IDs of the client's videos
const videos = [
    { id: "1", title: "National Level Quiz Finals 2025", date: "August 12, 2025", videoId: "dQw4w9WgXcQ" },
    { id: "2", title: "PCRA Regional Quiz Round", date: "May 24, 2024", videoId: "dQw4w9WgXcQ" },
    { id: "3", title: "Corporate Mind Challenge @ SBI", date: "November 5, 2023", videoId: "dQw4w9WgXcQ" },
    { id: "4", title: "Inter-College Mega Quiz Open", date: "February 10, 2023", videoId: "dQw4w9WgXcQ" },
    { id: "5", title: "Music & Trivia Mashup Event", date: "October 22, 2022", videoId: "dQw4w9WgXcQ" },
    { id: "6", title: "Thinqtank Learning Seminar", date: "July 15, 2022", videoId: "dQw4w9WgXcQ" },
];

export default function WatchPrep() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24 selection:bg-amber-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Editorial Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-10 mb-16 gap-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-bold text-amber-500 tracking-widest uppercase block mb-4">
                            Archive / Watch & Prep
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight">
                            Previous Quizzes & Live Events
                        </h1>
                    </div>
                    <div className="max-w-sm">
                        <p className="text-base text-gray-400 font-light leading-relaxed">
                            Relive the action, prepare for upcoming events, and witness the energy of live quizzing. A curated collection of past performances.
                        </p>
                    </div>
                </div>

                {/* Video Grid - Minimalist approach */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {videos.map((video) => (
                        <article
                            key={video.id}
                            className="group flex flex-col"
                        >
                            {/* Video Container Frame */}
                            <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden mb-6 border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                                <iframe
                                    className="absolute inset-0 w-full h-full grayscale-50 group-hover:grayscale-0 transition-all duration-500"
                                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Typography Info */}
                            <div className="flex flex-col grow">
                                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
                                    <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase flex items-center gap-2">
                                        <PlayCircle className="w-4 h-4 text-amber-500" />
                                        Replay
                                    </span>
                                    <span className="text-xs text-gray-500">{video.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-amber-500 transition-colors duration-200">
                                    {video.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </main>
    );
}