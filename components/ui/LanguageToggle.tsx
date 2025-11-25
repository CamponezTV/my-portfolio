"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { useLanguage } from "@/app/language-provider";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowMenu(!showMenu)}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.2] dark:bg-black-100 hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle language"
      >
        <Languages className="h-4 w-4 text-neutral-600 dark:text-neutral-50" />
      </motion.button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-0 bg-white dark:bg-black-100 border border-white/[0.2] rounded-lg shadow-lg overflow-hidden z-50"
          >
            <button
              onClick={() => {
                setLanguage("en");
                setShowMenu(false);
              }}
              className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                language === "en"
                  ? "text-green-500 font-semibold"
                  : "text-neutral-600 dark:text-neutral-50"
              }`}
            >
              🇺🇸 English
            </button>
            <button
              onClick={() => {
                setLanguage("pt");
                setShowMenu(false);
              }}
              className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                language === "pt"
                  ? "text-green-500 font-semibold"
                  : "text-neutral-600 dark:text-neutral-50"
              }`}
            >
              🇧🇷 Português
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
