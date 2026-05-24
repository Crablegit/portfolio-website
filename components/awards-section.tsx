"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Trophy, Award, GraduationCap, Medal, BookOpen, ChevronDown } from "lucide-react"
import { useState } from "react"

export function AwardsSection() {
  const { language, t } = useLanguage()
  const [activeTab, setActiveTab] = useState<"olympiads" | "certifications" | null>(null)

  const olympiads = [
    {
      date: "01/2026",
      vi: "Giải Khuyến Khích môn Tin học - Kỳ thi chọn HSG cấp Quốc Gia (Bộ GD&ĐT)",
      en: "Consolation Prize in Informatics - Vietnam National Olympiad (MoET)",
      icon: Trophy,
    },
    {
      date: "11/2025",
      vi: "Giải Nhì môn Tin Học - Kỳ thi chọn HSG cấp Thành Phố và chọn đội tuyển HSGQG (Sở GD&ĐT Hà Nội)",
      en: "Second Prize in Informatics - Hanoi City Olympiad & National Team Selection",
      icon: Award,
    },
    {
      date: "11/2025",
      vi: "Giải Ba môn Tin Học - Kỳ thi Olympic THPT VNU (ĐHQGHN)",
      en: "Third Prize in Informatics - VNU High School Olympiad",
      icon: Medal,
    },
    {
      date: "08/2025",
      vi: "Huy chương Đồng môn Tin Học - Kỳ thi Olympic Trại Hè Hùng Vương",
      en: "Bronze Medal in Informatics - Hung Vuong Summer Camp Olympiad",
      icon: Medal,
    },
    {
      date: "06/2025",
      vi: "Giải Nhì bảng C1 - Hội thi tin học trẻ khu vực Miền Bắc",
      en: "Second Prize (Category C1) - Northern Region Youth Informatics Competition",
      icon: Award,
    },
    {
      date: "06/2025",
      vi: "Giải Nhì bảng C - Hội thi tin học trẻ thành phố Hà Nội",
      en: "Second Prize (Category C) - Hanoi Youth Informatics Competition",
      icon: Award,
    },
    {
      date: "06/2025",
      vi: "Huy chương Vàng môn Tin Học - Kỳ thi Olympic chuyên Khoa Học Tự Nhiên (ĐH KHTN - ĐHQGHN)",
      en: "Gold Medal in Informatics - HUS High School Olympiad",
      icon: Trophy,
    },
    {
      date: "05/2025",
      vi: "Giải tiềm năng - Kỳ thi mô hình hóa Toán học Việt Nam (Viện nghiên cứu cao cấp về Toán)",
      en: "Potential Prize - Vietnam Mathematical Modeling Competition",
      icon: Award,
    },
    {
      date: "03/2025",
      vi: "Giải Khuyến Khích bảng Pro - Kỳ thi Huế ICT Challenge (Đại Học Khoa Học Huế)",
      en: "Consolation Prize (Pro Category) - Hue ICT Challenge",
      icon: Medal,
    },
    {
      date: "11/2024",
      vi: "Giải Nhì môn Tin Học - Kỳ thi chọn HSG cấp Thành Phố (Sở GD&ĐT Hà Nội)",
      en: "Second Prize in Informatics - Hanoi City Olympiad",
      icon: Award,
    },
    {
      date: "11/2024",
      vi: "Giải Khuyến Khích môn Tin Học - Kỳ thi Olympic THPT VNU (ĐHQGHN)",
      en: "Consolation Prize in Informatics - VNU High School Olympiad",
      icon: Medal,
    },
    {
      date: "05/2024",
      vi: "Giải Khuyến Khích bảng C - Hội thi tin học trẻ thành phố Hà Nội",
      en: "Consolation Prize (Category C) - Hanoi Youth Informatics Competition",
      icon: Medal,
    },
    {
      date: "04/2024",
      vi: "Giải Nhì môn Tin Học - Kỳ thi chọn HSG cấp trường (THPT Chuyên Nguyễn Huệ)",
      en: "Second Prize in Informatics - School-level Olympiad (Nguyen Hue High School for the Gifted)",
      icon: Award,
    },
  ]

  const certifications = [
    {
      date: "10/2025",
      vi: "Khóa học AI Programming for Beginners - Hoàn thành xuất sắc (With Distinction) - Hội Tin Học Việt Nam",
      en: "AI Programming for Beginners Course - Completed with Distinction - Vietnam Association for Information Processing",
      icon: BookOpen,
    },
    {
      date: "04/2025",
      vi: "Khóa học Introduction to DS and AI - Viện FDA - Đại Học KTQD",
      en: "Introduction to DS and AI Course - FDA Institute - National Economics University",
      icon: BookOpen,
    },
    {
      date: "7/2025",
      vi: "Chứng chỉ IELTS 6.5 (British Council)",
      en: "IELTS 6.5 Certificate (British Council)",
      icon: GraduationCap,
    },
  ]

  const activeData = activeTab === "olympiads" ? olympiads : activeTab === "certifications" ? certifications : []

  const toggleTab = (tab: "olympiads" | "certifications") => {
    setActiveTab(activeTab === tab ? null : tab)
  }

  return (
    <section id="academics" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("academic.title")}</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-8" />

          <div className="bg-navy-100 dark:bg-navy-800 rounded-2xl p-6 mb-4 inline-block">
            <div className="flex items-center gap-3 justify-center">
              <GraduationCap className="w-6 h-6 text-emerald-500" />
              <div className="text-left">
                <h3 className="font-semibold">{t("academic.school")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("academic.period")} • {t("academic.major")}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="bg-navy-50 dark:bg-navy-800 px-4 py-2 rounded-full border border-navy-200 dark:border-navy-700">
              <span className="text-sm text-muted-foreground">GPA: </span>
              <span className="font-semibold text-foreground">9.6</span>
            </div>
            <div className="bg-navy-50 dark:bg-navy-800 px-4 py-2 rounded-full border border-navy-200 dark:border-navy-700">
              <span className="text-sm text-muted-foreground">IELTS: </span>
              <span className="font-semibold text-foreground">6.5</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 mb-8"
        >
          <button
            onClick={() => toggleTab("olympiads")}
            className={`w-full px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-between ${
              activeTab === "olympiads"
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                : "bg-navy-100 dark:bg-navy-800 text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              {t("academic.tab1")}
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeTab === "olympiads" ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {activeTab === "olympiads" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="relative pl-8 pt-4">
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-navy-200 dark:bg-navy-700" />

                  <div className="space-y-4">
                    {olympiads.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="relative pl-8"
                        >
                          <div className="absolute left-0 w-5 h-5 rounded-full flex items-center justify-center bg-navy-200 dark:bg-navy-700 text-navy-600 dark:text-navy-300">
                            <Icon className="w-3 h-3" />
                          </div>

                          <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="p-4 rounded-xl border transition-all duration-300 bg-background border-border hover:border-emerald-300 dark:hover:border-emerald-700"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <span className="text-sm font-mono text-muted-foreground">
                                {item.date}
                              </span>
                              <span className="text-sm font-medium">
                                {language === "vi" ? item.vi : item.en}
                              </span>
                            </div>
                          </motion.div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => toggleTab("certifications")}
            className={`w-full px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-between ${
              activeTab === "certifications"
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                : "bg-navy-100 dark:bg-navy-800 text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              {t("academic.tab2")}
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeTab === "certifications" ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {activeTab === "certifications" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="relative pl-8 pt-4">
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-navy-200 dark:bg-navy-700" />

                  <div className="space-y-4">
                    {certifications.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="relative pl-8"
                        >
                          <div className="absolute left-0 w-5 h-5 rounded-full flex items-center justify-center bg-navy-200 dark:bg-navy-700 text-navy-600 dark:text-navy-300">
                            <Icon className="w-3 h-3" />
                          </div>

                          <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="p-4 rounded-xl border transition-all duration-300 bg-background border-border hover:border-emerald-300 dark:hover:border-emerald-700"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <span className="text-sm font-mono text-muted-foreground">
                                {item.date}
                              </span>
                              <span className="text-sm font-medium">
                                {language === "vi" ? item.vi : item.en}
                              </span>
                            </div>
                          </motion.div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
