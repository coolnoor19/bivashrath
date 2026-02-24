"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Watch & Prep", path: "/watch-prep" },
        { name: "Blog", path: "/blog" },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                            BIVASH<span className="text-amber-500">.</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/portfolio"
                            className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Explore
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
                >
                    <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white w-full text-center"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/portfolio"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 px-8 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors inline-block"
                        >
                            Explore
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
