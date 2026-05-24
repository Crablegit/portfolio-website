"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Camera, Code, Globe, Cpu } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()

  const programmingSkills = ["C++", "Python", "Competitive Programming", "Algorithms"]
  const languageSkills = [
    { name: "English", level: "IELTS 6.5" },
    { name: "Vietnamese", level: "Native" },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-navy-50/50 dark:bg-navy-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.title")}</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              {t("about.description")}
            </p>

            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Camera className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-lg">{t("about.hobbies")}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("about.photography")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-lg">{t("about.programming")}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {programmingSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-lg">{t("about.languages")}</h3>
              </div>
              <div className="space-y-3">
                {languageSkills.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex justify-between items-center"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="w-6 h-6" />
                <h3 className="font-semibold text-lg">Focus Area</h3>
              </div>
              <p className="text-emerald-50 text-sm">
                Data Science • Artificial Intelligence • Machine Learning
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
