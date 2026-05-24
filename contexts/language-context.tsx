"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "vi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.about": { en: "About", vi: "Giới thiệu" },
  "nav.academics": { en: "Academic & Awards", vi: "Học vấn & Giải thưởng" },
  "nav.activities": { en: "Activities", vi: "Hoạt động" },
  "nav.contact": { en: "Contact", vi: "Liên hệ" },

  // Hero
  "hero.greeting": { en: "Hi, I'm", vi: "Xin chào, mình là" },
  "hero.name": { en: "Le Minh Quang", vi: "Lê Minh Quang" },
  "hero.tagline": {
    en: "An Informatics-specialized student passionate about Data Science and Artificial Intelligence.",
    vi: "Một học sinh chuyên Tin đam mê Khoa học dữ liệu và Trí tuệ nhân tạo.",
  },
  "hero.gpa10": { en: "GPA 10", vi: "GPA lớp 10" },
  "hero.gpa11": { en: "GPA 11", vi: "GPA lớp 11" },

  // About
  "about.title": { en: "About Me", vi: "Về Mình" },
  "about.description": {
    en: "I am a dedicated student at Nguyen Hue High School for the Gifted in Hanoi, specializing in Informatics. My journey in Computer Science has been driven by a deep fascination with how algorithms can solve real-world problems. I aspire to pursue a degree in Computer Science with a focus on Artificial Intelligence and Data Science, aiming to contribute to technological innovations that can make a positive impact on society.",
    vi: "Mình là học sinh chuyên Tin tại trường THPT Chuyên Nguyễn Huệ, Hà Nội. Hành trình của mình trong ngành Khoa học Máy tính được thúc đẩy bởi niềm đam mê sâu sắc với cách các thuật toán có thể giải quyết các vấn đề thực tế. Mình mong muốn theo đuổi ngành Khoa học Máy tính với trọng tâm về Trí tuệ Nhân tạo và Khoa học Dữ liệu, hướng tới việc đóng góp vào những đổi mới công nghệ có thể tạo ra tác động tích cực cho xã hội.",
  },
  "about.hobbies": { en: "Hobbies & Interests", vi: "Sở thích" },
  "about.photography": {
    en: "Beyond algorithms, I have a deep passion for street photography. Capturing moments through the lens trains my eye for meticulous observation, patience, and finding unique beauty in everyday life — a mindset that closely parallels how I approach and solve complex programming problems.",
    vi: "Bên cạnh thuật toán, mình có một niềm đam mê lớn với nhiếp ảnh đường phố (Street Photography). Việc cầm máy ảnh đi qua từng góc phố giúp mình rèn luyện góc nhìn quan sát tỉ mỉ, tính kiên nhẫn và khả năng tìm kiếm vẻ đẹp độc đáo từ những điều bình dị nhất — một tư duy rất tương đồng với cách mình tiếp cận và giải quyết các bài toán lập trình.",
  },
  "about.skills": { en: "Technical Skills", vi: "Kỹ năng" },
  "about.languages": { en: "Languages", vi: "Ngôn ngữ" },
  "about.programming": { en: "Programming", vi: "Lập trình" },

  // Academic
  "academic.title": { en: "Academic & Awards", vi: "Học vấn & Giải thưởng" },
  "academic.school": {
    en: "Nguyen Hue High School for the Gifted - Hanoi",
    vi: "THPT Chuyên Nguyễn Huệ - Hà Nội",
  },
  "academic.period": { en: "09/2023 - 06/2026", vi: "09/2023 - 06/2026" },
  "academic.major": { en: "Specialization: Informatics", vi: "Chuyên ngành: Tin học" },
  "academic.tab1": { en: "Olympiads & Competitions", vi: "Giải thưởng & Cuộc thi" },
  "academic.tab2": { en: "Certifications & Courses", vi: "Chứng chỉ & Khóa học" },

  // Activities
  "activities.title": { en: "Extracurricular Activities", vi: "Hoạt động Ngoại khóa" },
  "activities.present": { en: "Present", vi: "Hiện tại" },

  // Contact
  "contact.title": { en: "Get In Touch", vi: "Liên Hệ" },
  "contact.subtitle": {
    en: "Feel free to reach out if you'd like to connect or learn more about my work.",
    vi: "Hãy liên hệ nếu bạn muốn kết nối hoặc tìm hiểu thêm về công việc của mình.",
  },
  "contact.name": { en: "Your Name", vi: "Họ tên" },
  "contact.email": { en: "Your Email", vi: "Email" },
  "contact.message": { en: "Your Message", vi: "Tin nhắn" },
  "contact.send": { en: "Send Message", vi: "Gửi tin nhắn" },
  "contact.directContact": { en: "Direct Contact", vi: "Liên hệ trực tiếp" },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
