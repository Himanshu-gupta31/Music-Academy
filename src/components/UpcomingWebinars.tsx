"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide bg-gradient-to-r from-teal-100 to-teal-800 text-transparent bg-clip-text uppercase">
            Featured Webinar
          </h2>
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Music Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug,
            }))}
          />
        </div>
        <div className="mt-10 text-center ">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-gray-500 text-neutral-700 bg-white hover:bg-gray-300 transition duration-200"
          >
            View All Webinar
          </Link>
        </div>
      </div>
    </div>
  );
}
export default UpcomingWebinars;
