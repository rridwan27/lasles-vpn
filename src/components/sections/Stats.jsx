import { Users, MapPin, Server } from "lucide-react";

const STATS = [
  {
    icon: <Users className="w-5 h-5 text-red-500" />,
    value: "90+",
    label: "Users",
  },
  {
    icon: <MapPin className="w-5 h-5 text-red-500" />,
    value: "30+",
    label: "Locations",
  },
  {
    icon: <Server className="w-5 h-5 text-red-500" />,
    value: "50+",
    label: "Servers",
  },
];

export default function Stats() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-2xl">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 px-10 py-8"
            >
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
