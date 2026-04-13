"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";

interface Plan {
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period: string;
  highlighted: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    title: "Free Plan",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    period: "",
    highlighted: false,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
  },
  {
    title: "Standard Plan",
    monthlyPrice: "$9",
    yearlyPrice: "$90",
    period: "/ mo",
    highlighted: false,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
  },
  {
    title: "Premium Plan",
    monthlyPrice: "$12",
    yearlyPrice: "$120",
    period: "/ mo",
    highlighted: true,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string>("Premium Plan");

  return (
    <section id="pricing" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Choose Your Plan
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base text-center leading-relaxed max-w-md">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center gap-3 mt-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                billing === "monthly"
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                billing === "yearly"
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Yearly
              <span className="ml-1 text-xs text-red-500 font-bold">-20%</span>
            </button>
          </div>

          {/* Selected Plan Summary */}
          {selectedPlan && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Selected:{" "}
              <span className="text-red-500 font-semibold">{selectedPlan}</span>
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {PLANS.map((plan) => {
            const isSelected = selectedPlan === plan.title;
            const price =
              billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                key={plan.title}
                className={`flex flex-col bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 border-2 ${
                  isSelected
                    ? "border-red-500 shadow-xl shadow-red-100 dark:shadow-red-900/20"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className="flex flex-col gap-3 items-center justify-center">
                  <Image src="/plan.svg" alt="Plan" width={100} height={100} />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-6">
                    {plan.title}
                  </h3>
                </div>
                {/* Illustration */}

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 grow">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400"
                    >
                      <Check
                        size={16}
                        strokeWidth={3}
                        className="shrink-0 text-emerald-500"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-center mt-auto">
                  <div className="mb-4 flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-black text-gray-900 dark:text-white">
                      {price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => setSelectedPlan(plan.title)}
                    className={`w-full py-2.5 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-red-500 text-white shadow-lg shadow-red-200 dark:shadow-red-900/30 hover:bg-red-600"
                        : "bg-white dark:bg-gray-800 text-red-500 border-2 border-red-500 hover:bg-red-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {isSelected ? "Selected ✓" : "Select"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
