import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";

// For static export and faster loading
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black pt-32 pb-24 selection:bg-amber-500/30">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <div className="mb-12">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors font-medium">
                        <ArrowLeft size={20} /> Back to Blog
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-16">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-amber-500 tracking-wider uppercase">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-gray-400 font-medium tracking-wide">
                            <span className="flex items-center gap-1.5"><Calendar size={16} /> {post.date}</span>
                            <span className="flex items-center gap-1.5"><User size={16} /> {post.author}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                        {post.title}
                    </h1>

                    {/* Hero Image */}
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1200px) 100vw, 896px"
                        />
                    </div>
                </header>

                {/* Article Content */}
                <div className="max-w-none space-y-8 text-lg text-gray-300 leading-relaxed font-light [&>p]:mb-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-4 [&>h3]:mt-10 [&>a]:text-amber-500 hover:[&>a]:text-amber-400">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Footer Footer */}
                <footer className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center text-black font-bold text-xl">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-white font-bold">{post.author}</p>
                            <p className="text-sm text-gray-400">Written by</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                            Share Article
                        </button>
                    </div>
                </footer>
            </article>
        </main>
    );
}
