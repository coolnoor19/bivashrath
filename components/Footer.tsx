import Link from "next/link";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-bold tracking-tighter text-white block mb-6">
                            BIVASH<span className="text-amber-500">.</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Entrepreneur, Quiz Master, Musician & Educator creating high-impact learning experiences.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="mailto:hello@bivashrath.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link href="/watch-prep" className="text-gray-400 hover:text-white transition-colors">Watch & Prep</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400">Bhubaneswar, Odisha<br />India</li>
                            <li><a href="mailto:hello@bivashrath.com" className="text-gray-400 hover:text-amber-500 transition-colors">hello@example.com</a></li>
                            <li><a href="tel:+910000000000" className="text-gray-400 hover:text-amber-500 transition-colors">+91 000 000 0000</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Bivash Rath. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
