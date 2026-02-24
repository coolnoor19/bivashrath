export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    imageUrl: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "mastering-the-art-of-quizzing",
        title: "Mastering the Art of Quizzing: Tips from a Pro",
        excerpt: "Discover the secrets behind crafting and hosting engaging quizzes that keep audiences on the edge of their seats.",
        content: `
      <p>Quizzing is more than just asking questions; it's about crafting an experience. In my 12+ years of hosting across India and abroad, I've learned that the key to a memorable quiz lies in the storytelling.</p>
      
      <h3>The Hook</h3>
      <p>Every good quiz needs a hook. Start with something relatable but unexpected. A seemingly simple question that has a deeper twist can immediately capture the audience's attention.</p>
      
      <h3>Pacing and Rhythm</h3>
      <p>Just like music composition, a quiz needs rhythm. Mix up the difficulty levels. Follow a tough question with an easier, encouraging one. Building momentum ensures participants stay confident and engaged.</p>
      
      <h3>Visuals Matter</h3>
      <p>A picture is worth a thousand words. High-quality visual rounds and audio-visual clues can elevate the entire experience. Make sure your multimedia is well-researched and crisply presented.</p>
      
      <p>Remember, the goal isn't just to test knowledge, but to celebrate it. Happy quizzing!</p>
    `,
        date: "February 20, 2026",
        author: "Bivash Rath",
        imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop",
        category: "Quizzing"
    },
    {
        id: "2",
        slug: "music-and-education-a-harmony",
        title: "Music and Education: Finding the Perfect Harmony",
        excerpt: "Exploring how the principles of music composition can be applied to creating revolutionary educational experiences.",
        content: `
      <p>As a music composer and an educator, I often find myself drawing parallels between the two fields. Both require structure, creativity, and a deep understanding of the audience's emotional journey.</p>
      
      <h3>The Melody of Learning</h3>
      <p>In music, a strong melody is unforgettable. In education, a core concept presented clearly acts as that melody. Students should be able to 'hum' the central idea long after the lesson is over.</p>
      
      <h3>Orchestrating the Classroom</h3>
      <p>Just as a composer arranges different instruments to create a cohesive sound, an educator must blend various teaching methods—visuals, interactives, discussions—to cater to diverse learning styles.</p>
      
      <p>By bringing the emotional resonance of music into the classroom, we can create educational experiences that are not only informative but truly transformational.</p>
    `,
        date: "February 10, 2026",
        author: "Bivash Rath",
        imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2940&auto=format&fit=crop",
        category: "Music & Education"
    },
    {
        id: "3",
        slug: "building-thinqtank-learning",
        title: "Building Thinqtank: The Journey of an Ed-Tech Startup",
        excerpt: "Insights and lessons learned from bootstrapping an ed-tech company aimed at revolutionizing the Indian education system.",
        content: `
      <p>Starting Thinqtank Learning in 2020 was a leap of faith. We saw a gap in how education was being delivered and knew we had the tools to bridge it. Being completely bootstrapped meant every decision had to be precise and impactful.</p>
      
      <h3>The Core Philosophy</h3>
      <p>Our goal was never just to digitize textbooks. It was to fundamentally change how students interact with knowledge. We wanted to build a platform that encourages critical thinking over rote memorization.</p>
      
      <h3>Challenges and Triumphs</h3>
      <p>The journey hasn't been without its hurdles. From navigating technical infrastructure to demonstrating value to traditional institutions, every step was a learning curve. However, seeing our solutions deployed and making a tangible difference since 2023 has made it all worthwhile.</p>
      
      <p>The future of Ed-Tech in India is incredibly bright, and we are thrilled to be at the forefront of this revolution.</p>
    `,
        date: "January 28, 2026",
        author: "Bivash Rath",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop",
        category: "Entrepreneurship"
    }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}
