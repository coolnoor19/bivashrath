"use client";

import Image from "next/image";

const brands = [
    { src: "/marquee/dav.png", alt: "DAV" },
    { src: "/marquee/euph.png", alt: "Eupheus Learning" },
    { src: "/marquee/govofindia.png", alt: "Government of India" },
    { src: "/marquee/iit.png", alt: "IIT" },
    { src: "/marquee/intach.jpg", alt: "INTACH" },
    { src: "/marquee/kiit.jpg", alt: "KIIT" },
    { src: "/marquee/ncert.webp", alt: "NCERT" },
    { src: "/marquee/nit.webp", alt: "NIT" },
    { src: "/marquee/ntpc.png", alt: "NTPC" },
    { src: "/marquee/odishasasan.png", alt: "Odisha Sasan" },
    { src: "/marquee/osrtc.jpg", alt: "OSRTC" },
    { src: "/marquee/sbilife.png", alt: "SBI Life" },
    { src: "/marquee/vssut.jpg", alt: "VSSUT" },
    { src: "/marquee/ximu.png", alt: "XIM University" },
    { src: "/marquee/yonosbi.jpg", alt: "Yono SBI" },
];

// Duplicate the array once to create a seamless 50% scroll loop
const duplicatedBrands = [...brands, ...brands];

export default function Marquee() {
    return (
        <section className="py-20 bg-zinc-950 border-t border-b border-white/10 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-400">Trusted By The Best</h3>
            </div>

            {/* Gradient fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

            <div className="flex w-full group overflow-hidden">
                <div className="flex items-center gap-16 px-8 w-max animate-marquee group-hover:[animation-play-state:paused]">
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="w-48 h-24 relative shrink-0 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                        >
                            <Image
                                src={brand.src}
                                alt={brand.alt}
                                fill
                                className="object-contain"
                                sizes="192px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
