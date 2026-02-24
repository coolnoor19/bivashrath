"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export default function Blog() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24 selection:bg-amber-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                    >
                        <span className="text-sm font-medium text-amber-500 tracking-wide uppercase">Insights & Stories</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        The <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">Journal</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg text-gray-400 font-light"
                    >
                        Thoughts on quizzing, music composition, entrepreneurship, and the future of education.
                    </motion.p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                            className="group relative bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/30 transition-all flex flex-col h-full"
                        >
                            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                                <span className="sr-only">Read {post.title}</span>
                            </Link>

                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />

                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wider uppercase">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wider">
                                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-gray-400 mb-8 line-clamp-3 text-sm flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-sm mt-auto border-t border-white/10 pt-6">
                                    <span className="text-white font-medium">{post.author}</span>
                                    <span className="flex items-center gap-1 text-amber-500 font-semibold group-hover:gap-2 transition-all">
                                        Read Article <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </main>
    );
}