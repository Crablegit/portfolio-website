"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { User } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-emerald-500 font-medium"
            >
              {t("hero.greeting")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white"
            >
              {t("hero.name")}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 pt-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors"
            >
              {t("nav.contact")}
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-navy-300 dark:border-navy-600 rounded-full font-medium hover:border-emerald-500 hover:text-emerald-500 transition-colors"
            >
              {t("nav.about")}
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(16, 185, 129, 0.4)",
                  "0 0 0 20px rgba(16, 185, 129, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center"
            >
              <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                <User className="w-24 h-24 md:w-32 md:h-32 text-white/80" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
