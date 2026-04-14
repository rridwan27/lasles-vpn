import Image from "next/image";
import { Camera } from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const LINKS = {
  Product: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
  Engage: [
    "LaslesVPN ?",
    "FAQ",
    "Tutorials",
    "About Us",
    "Privacy Policy",
    "Terms of Service",
  ],
  "Earn Money": ["Affiliate", "Become Partner"],
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left — Logo + Description + Socials */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src="/Logo.svg" alt="LaslesVPN" width={96} height={64} />
              {/* <span className="font-bold text-lg text-gray-900 dark:text-white">
                LaslesVPN
              </span> */}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                LaslesVPN
              </span>{" "}
              is a private virtual network that has unique features and has high
              security.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-2">
              {[FaFacebookF, FaTwitter, Camera].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-4">©2020LaslesVPN</p>
          </div>

          {/* Right — Link Columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
