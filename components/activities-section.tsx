"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Briefcase, Users, Calculator } from "lucide-react"

export function ActivitiesSection() {
  const { language, t } = useLanguage()

  const activities = [
    {
      icon: Briefcase,
      vi: {
        title: "Trợ giảng lập trình thi đấu",
        org: "Trung tâm Tin Học Codedream",
        period: "06/2025 - Hiện tại",
      },
      en: {
        title: "Competitive Programming Teaching Assistant",
        org: "Codedream Informatics Center",
        period: "06/2025 - Present",
      },
      color: "emerald",
      current: true,
    },
    {
      icon: Users,
      vi: {
        title: "Thành viên - CLB tài năng trẻ AI (AIYT)",
        org: "Viện AI4Life - Đại Học Bách Khoa Hà Nội",
        period: "04/2025 - 10/2025",
      },
      en: {
        title: "Member - AI Youth Talent Club (AIYT)",
        org: "AI4Life Institute - HUST",
        period: "04/2025 - 10/2025",
      },
      color: "navy",
      current: false,
    },
    {
      icon: Calculator,
      vi: {
        title: "Trợ giảng môn Toán chuyên",
        org: "CLB Toán Học Muôn Màu CMATH",
        period: "07/2023 - 04/2024",
      },
      en: {
        title: "Advanced Mathematics Teaching Assistant",
        org: "CMATH Club",
        period: "07/2023 - 04/2024",
      },
      color: "navy",
      current: false,
    },
  ]

  return (
    <section id="activities" className="py-20 px-4 bg-navy-50/50 dark:bg-navy-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("activities.title")}</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            const data = language === "vi" ? activity.vi : activity.en

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`h-full p-6 rounded-2xl border transition-all duration-300 ${
                    activity.current
                      ? "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/20 border-emerald-200 dark:border-emerald-700"
                      : "bg-background border-border hover:border-emerald-300 dark:hover:border-emerald-700"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        activity.current
                          ? "bg-emerald-500 text-white"
                          : "bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-300"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{data.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{data.org}</p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            activity.current
                              ? "bg-emerald-500 text-white"
                              : "bg-navy-200 dark:bg-navy-700 text-navy-600 dark:text-navy-300"
                          }`}
                        >
                          {data.period}
                        </span>
                        {activity.current && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
