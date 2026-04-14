import Image from "next/image";
import { CheckCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const FEATURES = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

export default function Features() {
  return (
    <section id="features" className="bg-white dark:bg-gray-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left — Illustration */}
        <div className="flex justify-center">
          <Image
            src="/Features.svg"
            alt="Features Illustration"
            width={500}
            height={500}
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right — Text */}
        <div className="flex flex-col gap-6">
          <SectionTitle
            title="We Provide Many Features You Can Use"
            subtitle="You can explore the features that we provide with fun and have their own functions each feature."
          />

          <ul className="flex flex-col gap-4 mt-2">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
