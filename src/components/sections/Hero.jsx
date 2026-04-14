import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="about"
      className="flex items-center bg-white dark:bg-gray-900 pt-40 pb-12"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Want anything to be easy with{" "}
            <span className="text-gray-900 dark:text-white font-extrabold">
              LaslesVPN.
            </span>
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-md">
            Provide a network for all your needs with ease and fun using{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              LaslesVPN
            </span>{" "}
            discover interesting features from us.
          </p>

          <div>
            <Button variant="primary">Get Started</Button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center items-center">
          <Image
            src="/Hero.svg"
            alt="Hero Illustration"
            width={600}
            height={500}
            className="w-full max-w-lg object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
