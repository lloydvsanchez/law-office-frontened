// src/components/home/BlogSection.tsx
// "Legal Guides" blog preview — shows 3 most recent articles.
//
// FUTURE: Replace PLACEHOLDER_POSTS with a real API call:
//   const { data: posts } = useFetch<Post[]>('/api/v1/articles?limit=3')
// The BlogCard component is already structured to accept live data.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import ImagePlaceholder from "../ui/ImagePlaceholder";

// ── Types ─────────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: number | string;
  title: string;
  date: string;
  slug: string;
  /** Optional: URL to the post's featured image */
  imageUrl?: string;
}

// ── Placeholder data (remove when Rails API is connected) ─────────────────────
const PLACEHOLDER_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Understanding BP 22 Cases in the Philippines",
    date: "June 2025",
    slug: "understanding-bp-22-cases",
  },
  {
    id: 2,
    title: "Property Title Transfers: What You Need to Know",
    date: "May 2025",
    slug: "property-title-transfers",
  },
  {
    id: 3,
    title: "When to Choose Mediation Over Litigation",
    date: "April 2025",
    slug: "mediation-vs-litigation",
  },
];

// ── Sub-component ─────────────────────────────────────────────────────────────
const BlogCard: React.FC<BlogPost> = ({ title, date, slug, imageUrl }) => (
  <a
    href={`/blog/${slug}`}
    className="bg-white border border-[#E8D5A3] hover:border-[#C9A84C] transition-colors duration-200 overflow-hidden group flex flex-col"
  >
    {/* Banner image or placeholder */}
    {imageUrl ? (
      <img
        src={imageUrl}
        alt={title}
        className="w-full aspect-video object-cover"
      />
    ) : (
      <ImagePlaceholder
        label={`Blog Banner`}
        aspectClass="aspect-video"
        note="800×450px"
      />
    )}

    <div className="p-5 flex flex-col flex-1">
      <p className="font-sans text-[10px] text-[#C9A84C] uppercase tracking-widest mb-2">
        {date}
      </p>
      <h3
        className="text-lg text-[#1C1C1C] font-semibold leading-snug group-hover:text-[#C9A84C] transition-colors duration-150"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        {title}
      </h3>
    </div>
  </a>
);

// ── Section ───────────────────────────────────────────────────────────────────
interface BlogSectionProps {
  /** Pass live posts from the Rails API; falls back to placeholder data in development */
  posts?: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts = PLACEHOLDER_POSTS }) => (
  <section id="blog" className="bg-[#F5F0E8] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6">

      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <SectionEyebrow>Legal Guides</SectionEyebrow>
          <h2
            className="text-3xl md:text-4xl text-[#1C1C1C] font-light"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Accessible Legal Information
          </h2>
          <GoldRule />
        </div>
        <a
          href="/blog"
          className="font-sans text-sm text-[#C9A84C] hover:text-[#A8872E] underline underline-offset-4 tracking-wide self-start md:self-auto md:mb-6"
        >
          View All Articles →
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>

    </div>
  </section>
);

export default BlogSection;
