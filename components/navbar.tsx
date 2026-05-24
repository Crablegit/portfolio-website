"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"
import { Moon, Sun, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg border border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4">
          {[
            { key: "about", label: t("nav.about") },
            { key: "academics", label: t("nav.academics") },
            { key: "activities", label: t("nav.activities") },
            { key: "contact", label: t("nav.contact") },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            className="flex items-center gap-1.5 text-xs font-medium hover:text-emerald-500"
          >
            <Languages className="h-4 w-4" />
            {language === "en" ? "VI" : "EN"}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:text-emerald-500"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
