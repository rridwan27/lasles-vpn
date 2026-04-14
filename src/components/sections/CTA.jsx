"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (value) => {
    if (!value) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Enter a valid email.";
    return "";
  };

  const handleSubmit = () => {
    const err = validate(email);
    if (err) return setError(err);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200 dark:border-gray-700 rounded-2xl px-10 py-10 shadow-sm">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-snug">
              Subscribe Now for <br /> Get Special Features!
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              Let's subscribe with us and find the fun.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            {success ? (
              <p className="text-emerald-500 font-semibold text-sm">
                Subscribed successfully!
              </p>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    className={`px-5 py-3 rounded-full border text-sm outline-none transition-all w-full sm:w-72 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 ${
                      error
                        ? "border-red-500"
                        : "border-gray-200 dark:border-gray-700 focus:border-red-400"
                    }`}
                  />
                  {error && (
                    <p className="text-red-500 text-xs pl-3">{error}</p>
                  )}
                </div>
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  className={loading ? "opacity-70 cursor-not-allowed" : ""}
                >
                  {loading ? "Subscribing..." : "Subscribe Now"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
