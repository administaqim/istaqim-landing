import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  AppWindow, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Volume2, 
  Compass, 
  CheckCircle,
  HelpCircle,
  Mail,
  Smartphone,
  Moon,
  Sun
} from "lucide-react";
import PhoneMockup from "./components/PhoneMockup";

// Custom Premium download badges - perfectly identical in height, border, colors, and padding dynamically
interface DownloadButtonProps {
  isDark: boolean;
}

const AppStoreButton = ({ isDark }: DownloadButtonProps) => (
  <a 
    href="#download" 
    className={`inline-flex items-center gap-3 px-5 sm:px-6 h-[58px] rounded-2xl border transition-all duration-200 md:hover:scale-[1.02] active:scale-95 group mb-1.5 sm:mb-0 shadow-lg ${
      isDark 
        ? "bg-[#1C1C1E] md:hover:bg-[#202C41] text-white border-[#647DA1]/15 shadow-black/10" 
        : "bg-[#1A2B4C] md:hover:bg-[#111C33] text-white border-white/10 shadow-[#1A2B4C]/20"
    }`}
  >
    <svg className="w-8 h-8 text-white fill-current transition-transform duration-200 md:group-hover:scale-105" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.72-1.16 1.87-1.01 2.98 1.12.09 2.27-.6 2.94-1.41z"/>
    </svg>
    <div className="text-right flex flex-col items-start leading-[1.2]">
      <span className="text-[9px] text-[#AABBD9] tracking-wider uppercase font-bold font-sans">تحميل للآيفون</span>
      <span className="text-[14px] font-bold font-sans mt-0.5">App Store</span>
    </div>
  </a>
);

const GooglePlayButton = ({ isDark }: DownloadButtonProps) => (
  <a 
    href="#download" 
    className={`inline-flex items-center gap-3 px-5 sm:px-6 h-[58px] rounded-2xl border transition-all duration-200 md:hover:scale-[1.02] active:scale-95 group mb-1.5 sm:mb-0 shadow-lg ${
      isDark 
        ? "bg-[#1C1C1E] md:hover:bg-[#202C41] text-white border-[#647DA1]/15 shadow-black/10" 
        : "bg-[#1A2B4C] md:hover:bg-[#111C33] text-white border-white/10 shadow-[#1A2B4C]/20"
    }`}
  >
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current transition-transform duration-200 md:group-hover:scale-105" fill="currentColor">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
    <div className="text-right flex flex-col items-start leading-[1.2]">
      <span className="text-[9px] text-[#AABBD9] tracking-wider uppercase font-bold font-sans">تحميل للأندرويد</span>
      <span className="text-[14px] font-bold font-sans mt-0.5">Google Play</span>
    </div>
  </a>
);

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const [messageType, setMessageType] = useState<"شكوى" | "مقترح">("مقترح");
  const [subject, setSubject] = useState("");
  const [messageText, setMessageText] = useState("");

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !messageText.trim()) {
      return;
    }
    const formattedText = `السلام عليكم ورحمة الله وبركاته،\n\nأود تقديم [${messageType}] بخصوص تطبيق "استقم":\n\n*العنوان:* ${subject}\n\n*الرسالة:*\n${messageText}`;
    const encodedText = encodeURIComponent(formattedText);
    window.open(`https://api.whatsapp.com/send?text=${encodedText}`, "_blank");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${isDark ? "selection:bg-[#647DA1]/20 selection:text-[#647DA1] bg-[#121212] text-[#EBEBF5]" : "selection:bg-[#1A2B4C]/20 selection:text-[#1A2B4C] bg-white text-[#17181A]"}`}>
      
      {/* ━━━━━━━━━━ HEADER ━━━━━━━━━━ */}
      <header className={`sticky top-0 z-55 backdrop-blur-md border-b transition-all duration-300 ${isDark ? "bg-[#1C1C1E]/90 border-stone-800/80" : "bg-white/90 border-[#EFECE6]/60"}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              {/* BRAND LOGO SOURCE: You can easily swap "/favicon.svg" below with your custom image path (e.g. SVG or PNG) to modify the logo across the header and web tab */}
              <img 
                src="/favicon.webp" 
                alt="شعار استقم" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='%23192a4a'><rect width='40' height='40' rx='10' fill='%23192a4a'/><path d='M20 10 L28 26 L12 26 Z' fill='white'/></svg>";
                }}
                className={`w-11 h-11 rounded-2xl bg-[#1A2B4C] p-1.5 object-contain border  transition-transform duration-200 md:group-hover:scale-105 ${isDark ? "border-stone-800" : "border-[#2A3E68]"}`} 
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />
            </div>
            <div className="flex flex-col items-start text-right">
              <span className={`text-xl font-bold tracking-tight leading-none mb-1 ${isDark ? "text-[#EBEBF5]" : "text-[#17181A]"}`}>استقم</span>
              <span className={`text-[10px] font-bold tracking-wider uppercase ${isDark ? "text-[#EBEBF5]/60" : "text-slate-400"}`}>الدعوة السلفية بالمكلا</span>
            </div>
          </div>

          {/* Navigation links - Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#5E626A]">
            <a href="#" className={`transition-colors ${isDark ? "text-[#EBEBF5]/65 hover:text-[#EBEBF5]" : "hover:text-[#1A2B4C]"}`}>الرئيسية</a>
            <a href="#how-it-works" className={`transition-colors ${isDark ? "text-[#EBEBF5]/65 hover:text-[#EBEBF5]" : "hover:text-[#1A2B4C]"}`}>كيف تنتفع؟</a>
            <a href="#contact" className={`transition-colors ${isDark ? "text-[#EBEBF5]/65 hover:text-[#EBEBF5]" : "hover:text-[#1A2B4C]"}`}>الشكاوى والمقترحات</a>
          </nav>

          {/* Elegant Dark/Light Mode Switcher */}
          <div>
            <button 
              onClick={toggleDarkMode}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs shadow-md transition-all duration-200 active:scale-95 ${
                isDark 
                  ? "bg-[#1C1C1E] hover:bg-stone-800 text-[#647DA1] shadow-stone-950/20 border border-stone-800" 
                  : "bg-stone-100 hover:bg-stone-200 text-[#1A2B4C] border border-stone-200 shadow-sm"
              }`}
            >
              {isDark ? (
                <>
                  
                  <span className="text-[#EBEBF5]">جرِّب الوضع النهاري</span>
                </>
              ) : (
                <>
                 
                  <span>جرِّب الوضع الليلي</span>
                </>
              )}
            </button>
          </div>

        </div>
      </header>
      
      {/* ━━━━━━━━━━ HERO SECTION ━━━━━━━━━━ */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-28 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* HERO TEXT - RIGHT SIDE (RTL layouts place text on the right) */}
            <div className="lg:col-span-7 flex flex-col items-start text-right lg:order-2">
              
              {/* Minimal App Badge */}
             

              {/* Headline */}
              <h1 className={`text-[34px] sm:text-5xl lg:text-5.5xl font-bold tracking-tight leading-[1.2] mb-6 ${isDark ? "text-[#EBEBF5]" : "text-[#17181A]"}`}>
                نزّل التطبيق
                <br />
                خذ من أهل العلم
                <br />
                <span className={`relative inline-block mt-3 px-1 ${isDark ? "text-[#647DA1]" : "text-[#1A2B4C]"}`}>
                  استقم
                  <span className={`absolute bottom-1 sm:bottom-2 inset-x-0 h-[4px] sm:h-[6px] rounded ${isDark ? "bg-[#647DA1]/15" : "bg-[#1A2B4C]/15"}`} />
                </span>
              </h1>

              {/* Description */}
              <p className={`text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-medium ${isDark ? "text-[#EBEBF5]/60" : "text-[#5E626A]"}`}>
                دروس ومحاضرات وفتاوى وتلاوات لأهل السنة، مرتبة ومصفّاة، في تطبيق واحد يسهل عليك الوصول للعلم             </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3.5 w-full justify-start">
                <AppStoreButton isDark={isDark} />
                <GooglePlayButton isDark={isDark} />
              </div>

              {/* Sincere Slogan Mini Check */}
          
            </div>

            {/* HERO VISUAL - LEFT SIDE (Mockup with solid background backing) */}
            <div className="lg:col-span-5 lg:order-1 flex justify-center items-center relative py-8">
              
              {/* Concentric rotating wave lines around phone representation */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full border pointer-events-none -z-10 transition-colors ${isDark ? "border-[#647DA1]/10" : "border-[#1A2B4C]/5"}`} />
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full border pointer-events-none -z-10 animate-spin transition-colors ${isDark ? "border-[#647DA1]/5" : "border-[#1A2B4C]/3"}`} style={{ animationDuration: '60s' }} />

              {/* Premium Background Box Frame */}
              <div className="relative w-[280px] sm:w-[310px] flex items-center justify-center">
                
               
                {/* iPhone Frame */}
                <div className="w-full pb-2 flex justify-center">
                  <PhoneMockup className="w-[280px] sm:w-[310px] md:hover:scale-[1.01] transition-transform duration-300 shadow-3xl" imageSrc="/screens/dashboard.webp" darkImageSrc="/screens/dashboard_dark.webp" alt="شاشة لوحة التحكم الرئيسي" darkMode={isDark} />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ FEATURE SECTION ━━━━━━━━━━ */}
      <section id="how-it-works" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Black Container Box - Preserving the EXACT style of reference dark features block */}
        <div className="bg-[#111113] rounded-[36px] sm:rounded-[48px] px-6 sm:px-12 py-16 md:py-24 text-center relative overflow-hidden ring-1 ring-white/5">
          {/* Subtle gold-gilded premium glow accent */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2A3F68]/30 to-transparent" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1A2B4C]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-2xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4.5xl font-bold text-white mb-4 tracking-tight leading-normal">
              كيف تنتفع بالتطبيق؟
            </h2>
            <div className="w-12 h-1 bg-[#1A2B4C] mx-auto rounded-full mt-4" />
          </div>

          {/* 3 Featured Cards Layout Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-right">
            
            {/* Card 1: Directory */}
            <div className={`rounded-[28px] flex flex-col justify-between items-center text-center overflow-hidden group md:hover:shadow-xl md:hover:scale-[1.01] transition-all duration-200 active:scale-[0.99] border ${isDark ? "bg-[#1C1C1E] border-stone-800/80 shadow-stone-950/40 shadow-lg" : "bg-white border-stone-0 shadow-md"}`}>
              <div className="pt-8 px-6 sm:px-7 text-center w-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm ${isDark ? "bg-[#647DA1]/15 text-[#647DA1]" : "bg-[#1A2B4C]/5 text-[#1A2B4C]"}`}>
                  ١
                </div>
                <h3 className={`text-base sm:text-lg font-bold leading-snug mb-3 ${isDark ? "text-[#EBEBF5]" : "text-[#111113]"}`}>
                  افتح القسم، تجد محتواه مصفوفًا
                </h3>
               
              </div>

              {/* iPhone screen cropped neatly at the bottom edge */}
              <div className="w-full px-5 mt-auto pt-4 relative overflow-hidden h-[300px]">
                <div className="translate-y-4 md:group-hover:translate-y-2 transition-transform duration-300 ease-out origin-top">
                  <PhoneMockup className="w-52" glowColor="rgba(26,43,76,0.06)" imageSrc="/screens/categories.webp" darkImageSrc="/screens/categories_dark.webp" alt="شاشة أقسام العلوم والدروس" darkMode={isDark} />
                </div>
              </div>
            </div>

            {/* Card 2: Audio Player & Reading text */}
            <div className={`rounded-[28px] flex flex-col justify-between items-center text-center overflow-hidden group md:hover:shadow-xl md:hover:scale-[1.01] transition-all duration-200 active:scale-[0.99] border ${isDark ? "bg-[#1C1C1E] border-stone-800/80 shadow-stone-950/40 shadow-lg" : "bg-white border-stone-0 shadow-md"}`}>
              <div className="pt-8 px-6 sm:px-7 text-center w-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm ${isDark ? "bg-[#647DA1]/15 text-[#647DA1]" : "bg-[#1A2B4C]/5 text-[#1A2B4C]"}`}>
                  ٢
                </div>
                <h3 className={`text-base sm:text-lg font-bold leading-snug mb-3 ${isDark ? "text-[#EBEBF5]" : "text-[#111113]"}`}>
                  اسمع، أو اقرأ، ما يسّر الله به
                </h3>
                
              </div>

              {/* Phone nested */}
              <div className="w-full px-5 mt-auto pt-4 relative overflow-hidden h-[300px]">
                <div className="translate-y-4 md:group-hover:translate-y-2 transition-transform duration-300 ease-out origin-top">
                  <PhoneMockup className="w-52" glowColor="rgba(26,43,76,0.06)" imageSrc="/screens/player.webp" darkImageSrc="/screens/player_dark.webp" alt="شاشة المشغل الصوتي التأصيلي" darkMode={isDark} />
                </div>
              </div>
            </div>

            {/* Card 3: Library */}
            <div className={`rounded-[28px] flex flex-col justify-between items-center text-center overflow-hidden group md:hover:shadow-xl md:hover:scale-[1.01] transition-all duration-200 active:scale-[0.99] border ${isDark ? "bg-[#1C1C1E] border-stone-800/80 shadow-stone-950/40 shadow-lg" : "bg-white border-stone-0 shadow-md"}`}>
              <div className="pt-8 px-6 sm:px-7 text-center w-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm ${isDark ? "bg-[#647DA1]/15 text-[#647DA1]" : "bg-[#1A2B4C]/5 text-[#1A2B4C]"}`}>
                  ٣
                </div>
                <h3 className={`text-base sm:text-lg font-bold leading-snug mb-3 ${isDark ? "text-[#EBEBF5]" : "text-[#111113]"}`}>
                  احفظ ما أردت بقاءه، أو نزّله في مكتبتك
                </h3>
                             </div>

              {/* Phone nested */}
              <div className="w-full px-5 mt-auto pt-4 relative overflow-hidden h-[300px]">
                <div className="translate-y-4 md:group-hover:translate-y-2 transition-transform duration-300 ease-out origin-top">
                  <PhoneMockup className="w-52" glowColor="rgba(26,43,76,0.06)" imageSrc="/screens/library.webp" darkImageSrc="/screens/library_dark.webp" alt="شاشة المكتبة والمحفوظات الصوتية" darkMode={isDark} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ CLOSING SECTION ━━━━━━━━━━ */}
      <section id="download" className={`py-20 md:py-28 text-center relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#121212]" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          {/* Calm, sincere prayer text centering */}
          <div className="max-w-2xl mx-auto mb-16">
            <p 
              className={`text-base sm:text-[21px] font-bold leading-[1.8] text-center px-4 transition-colors duration-300 ${isDark ? "text-[#EBEBF5]" : "text-[#1A2B4C]"}`}
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              "نسأل الله أن نكون وُفّقنا في أن نجعل استماعك للعلم سهلًا ميسّرًا، صافيًا من كل شاغل. ونسأله سبحانه القبول والإخلاص"
            </p>
            <div className={`h-0.5 w-16 mx-auto mt-8 rounded-full transition-colors duration-300 ${isDark ? "bg-[#647DA1]/20" : "bg-[#1A2B4C]/20"}`} />
          </div>

          {/* Large Centered Visual Showcase Phone - Mirroring Reference bottom phone */}
          <div className="relative mt-8 max-w-md mx-auto flex justify-center items-center">
            
            {/* Soft backdrop radial vector ripples */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full border pointer-events-none -z-10 transition-colors duration-300 ${isDark ? "border-[#647DA1]/10" : "border-[#1A2B4C]/4"}`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[600px] h-[440px] sm:h-[600px] rounded-full border pointer-events-none -z-10 transition-colors duration-300 ${isDark ? "border-[#647DA1]/5" : "border-[#1A2B4C]/2"}`} />

            {/* Straight showcased mockup */}
            
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━ FOOTER ━━━━━━━━━━ */}
      <footer className={`border-t py-16 text-right font-sans transition-colors duration-300 ${isDark ? "bg-[#121212] border-stone-800/60" : "bg-white border-[#EFECE6]"}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b transition-colors duration-300 ${isDark ? "border-stone-800/50" : "border-stone-100"}`}>
            
           

            {/* Link Directory columns replaced with Suggestions & Complaints Feedback Module */}
            <div id="contact" className="md:col-span-8 md:mr-10 text-right">
              <div className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${isDark ? "bg-[#1C1C1E] border-stone-800/80" : "bg-stone-50 border-stone-100/80"}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className={`text-base font-bold mb-1 ${isDark ? "text-[#EBEBF5]" : "text-[#111113]"}`}>الشكاوى والمقترحات</h4>
                    <p className={`text-xs ${isDark ? "text-[#EBEBF5]/60" : "text-[#5E626A]"}`}>يسعدنا استقبال ملاحظاتكم لتطوير التطبيق وتحسين السعة التحصيلية لطلبة العلم.</p>
                  </div>
                  
                  {/* Select Type Segmented Toggle */}
                  <div className={`flex p-1 rounded-xl items-center w-fit self-start sm:self-center transition-colors ${isDark ? "bg-[#121212]" : "bg-stone-200/50"}`}>
                    <button 
                      type="button"
                      onClick={() => setMessageType("مقترح")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                        messageType === "مقترح" 
                          ? (isDark ? "bg-[#647DA1] text-[#121212] shadow-sm" : "bg-[#1A2B4C] text-white shadow-sm") 
                          : (isDark ? "text-[#EBEBF5]/60 hover:text-[#EBEBF5]" : "text-[#5E626A] hover:text-[#111113]")
                      }`}
                    >
                      مقترح
                    </button>
                    <button 
                      type="button"
                      onClick={() => setMessageType("شكوى")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                        messageType === "شكوى" 
                          ? (isDark ? "bg-[#647DA1] text-[#121212] shadow-sm" : "bg-[#1A2B4C] text-white shadow-sm") 
                          : (isDark ? "text-[#EBEBF5]/60 hover:text-[#EBEBF5]" : "text-[#5E626A] hover:text-[#111113]")
                      }`}
                    >
                      شكوى
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSendMessage} className="space-y-4 text-right">
                  {/* Subject Input */}
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 text-right ${isDark ? "text-[#EBEBF5]" : "text-[#111113]"}`}>عنوان الرسالة</label>
                    <input 
                      type="text" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="امثلة: إضافة محاضرة، إصلاح عارض فني، اقتراح ميزة..." 
                      className={`w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 transition-all font-sans text-right ${
                        isDark 
                          ? "bg-[#121212] border-stone-800 text-[#EBEBF5] focus:ring-[#647DA1]/20 focus:border-[#647DA1]" 
                          : "bg-white border-stone-200 text-[#111113] focus:ring-[#1A2B4C]/20 focus:border-[#1A2B4C]"
                      }`}
                      required
                    />
                  </div>

                  {/* Message Body Input */}
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 text-right ${isDark ? "text-[#EBEBF5]" : "text-[#111113]"}`}>نص الرسالة</label>
                    <textarea 
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      rows={4}
                      placeholder="اكتب تفاصيل مقترحك أو الشكوى التي واجهتك بكل أريحية هنا..." 
                      className={`w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 transition-all font-sans resize-none text-right ${
                        isDark 
                          ? "bg-[#121212] border-stone-800 text-[#EBEBF5] focus:ring-[#647DA1]/20 focus:border-[#647DA1]" 
                          : "bg-white border-stone-200 text-[#111113] focus:ring-[#1A2B4C]/20 focus:border-[#1A2B4C]"
                      }`}
                      required
                    />
                  </div>

                  {/* Submit via Whatsapp button */}
                  <div className="pt-2 flex justify-start">
                    <button
                      type="submit"
                      disabled={!subject.trim() || !messageText.trim()}
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-emerald-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      <svg className="w-4.5 h-4.5 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.009-.002-3.98-.51-5.734-1.482L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.011-5.09-2.855-6.938C16.638 2.02 14.17 1 11.545 1 6.112 1 1.689 5.367 1.685 10.797c-.001 1.701.464 3.363 1.346 4.825l-.946 3.454 3.562-.924z" stroke="none" />
                      </svg>
                      <span>إرسال عبر الواتساب</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>

          {/* Footer Copyright block */}
          <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${isDark ? "text-[#EBEBF5]/60" : "text-[#5E626A]"}`}>
            <p className="font-medium text-center sm:text-right">
              © 2026 استقم. جميع الحقوق محفوظة.
            </p>
           
          </div>

        </div>
      </footer>

    </div>
  );
}
