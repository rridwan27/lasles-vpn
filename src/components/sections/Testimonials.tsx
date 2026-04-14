"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    quote:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    avatar: "/avatar1.jpg",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: 4.5,
    quote:
      "I like it because I like to travel far and still can connect with high speed.",
    avatar: "/avatar2.webp",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    quote:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
    avatar: "/avatar3.jpg",
  },
  {
    name: "James Wright",
    location: "New York, USA",
    rating: 5,
    quote:
      "LaslesVPN has been a game changer for my remote work setup. Fast, reliable and secure.",
    avatar: "/avatar4.webp",
  },
  {
    name: "Sofia Morales",
    location: "Madrid, Spain",
    rating: 4.5,
    quote:
      "I can finally access all my favorite content from anywhere in the world. Highly recommended!",
    avatar: "/avatar5.jpeg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const visibleCount = 3;
  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoPlay, total]);

  const prev = () => {
    setAutoPlay(false);
    setCurrent((c) => (c - 1 + total) % total);
  };

  const next = () => {
    setAutoPlay(false);
    setCurrent((c) => (c + 1) % total);
  };

  const getVisible = () => {
    return Array.from(
      { length: visibleCount },
      (_, i) => TESTIMONIALS[(current + i) % total],
    );
  };

  return (
    <section id="testimonials" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
            Trusted by Thousands of Happy Customers
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base text-center max-w-md">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisible().map((t, i) => (
            <div
              key={t.name + i}
              className={`flex flex-col gap-4 p-6 rounded-2xl border-2 transition-all duration-300 ${
                i === 0
                  ? "border-red-500 shadow-lg shadow-red-100 dark:shadow-red-900/20"
                  : "border-gray-200 dark:border-gray-700"
              } bg-white dark:bg-gray-800`}
            >
              {/* Avatar + Name + Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://ui-avatars.com/api/?name=${t.name}&background=F23A3A&color=fff`;
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {t.rating}
                  </span>
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Bottom — Dots + Buttons */}
        <div className="flex items-center justify-between mt-10">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrent(i);
                }}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "w-8 h-3 bg-red-500"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-red-300"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-red-500 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
