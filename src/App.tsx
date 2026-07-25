import React, { useState } from "react";
import { DownloadButtonsSection } from "./components/DownloadButtonsSection";
import PhoneMockup from "./components/PhoneMockup";

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
    window.open(`https://wa.me/967773687374?text=${encodedText}`, "_blank");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative ${
        isDark
          ? "selection:bg-[#647DA1]/20 selection:text-[#647DA1] bg-[#121212] text-[#EBEBF5]"
          : "selection:bg-[#1A2B4C]/20 selection:text-[#1A2B4C] bg-white text-[#17181A]"
      }`}
    >
      {/* ━━━━━━━━━━ HEADER ━━━━━━━━━━ */}
      <header
        className={`sticky top-0 z-55 backdrop-blur-md border-b transition-all duration-300 ${
          isDark
            ? "bg-[#1C1C1E]/90 border-stone-800/80"
            : "bg-white/90 border-[#EFECE6]/60"
        }`}
      >
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
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='%23192a4a'><rect width='40' height='40' rx='10' fill='%23192a4a'/><path d='M20 10 L28 26 L12 26 Z' fill='white'/></svg>";
                }}
                className={`w-11 h-11 rounded-2xl bg-[#1A2B4C] p-1.5 object-contain border  transition-transform duration-200 md:group-hover:scale-105 ${
                  isDark ? "border-stone-800" : "border-[#2A3E68]"
                }`}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />
            </div>
            <div className="flex flex-col items-start text-right">
              <span
                className={`text-xl font-bold tracking-tight leading-none mb-1 ${
                  isDark ? "text-[#EBEBF5]" : "text-[#17181A]"
                }`}
              >
                استقم
              </span>
              <span
                className={`text-[10px] font-bold tracking-wider uppercase ${
                  isDark ? "text-[#EBEBF5]/60" : "text-slate-400"
                }`}
              >
                الدعوة السلفية بالمكلا
              </span>
            </div>
          </div>

          {/* Navigation links - Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#5E626A]">
            <a
              href="#"
              className={`transition-colors ${
                isDark
                  ? "text-[#EBEBF5]/65 hover:text-[#EBEBF5]"
                  : "hover:text-[#1A2B4C]"
              }`}
            >
              الرئيسية
            </a>
            <a
              href="#how-it-works"
              className={`transition-colors ${
                isDark
                  ? "text-[#EBEBF5]/65 hover:text-[#EBEBF5]"
                  : "hover:text-[#1A2B4C]"
              }`}
            >
              كيف تنتفع؟
            </a>
            <a
              href="#contact"
              className={`transition-colors ${
                isDark
                  ? "text-[#EBEBF5]/65 hover:text-[#EBEBF5]"
                  : "hover:text-[#1A2B4C]"
              }`}
            >
              الشكاوى والمقترحات
            </a>
          </nav>

          {/* Elegant Dark/Light Mode Switcher */}
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              type="button"
              aria-label="تغيير المظهر"
              className={`relative flex items-center justify-center w-10 h-10 rounded-[15px] border transition-all duration-300 active:scale-95 group overflow-hidden ${
                isDark
                  ? "bg-[#1C1C1E] text-[#EBEBF5] border-[#647DA1]/15 hover:bg-[#252529]"
                  : "bg-white text-[#1A2B4C] border-stone-200/60 hover:bg-stone-50 hover:text-black"
              }`}
            >
              {/* أيقونة الشمس (تظهر في الوضع الليلي للتحويل للنهاري) */}
              <svg
                className={`w-5 h-5 absolute transition-all duration-500 ease-out transform ${
                  isDark
                    ? "scale-100 rotate-0 opacity-100"
                    : "scale-0 -rotate-90 opacity-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 5.657a4 4 0 118 0 4 4 0 01-8 0z"
                />
              </svg>

              {/* أيقونة القمر (تظهر في الوضع النهاري للتحويل لليلي) */}
              <svg
                className={`w-5 h-5 absolute transition-all duration-500 ease-out transform ${
                  isDark
                    ? "scale-0 rotate-90 opacity-0"
                    : "scale-100 rotate-0 opacity-100"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
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
              <h1
                className={`text-[34px] sm:text-5xl lg:text-5.5xl font-bold tracking-tight leading-[1.2] mb-6 ${
                  isDark ? "text-[#EBEBF5]" : "text-[#17181A]"
                }`}
              >
                نزّل التطبيق
                <br />
                خذ من أهل العلم
                <br />
                <span
                  className={`relative inline-block mt-3 px-1 ${
                    isDark ? "text-[#647DA1]" : "text-[#1A2B4C]"
                  }`}
                >
                  استقم
                  <span
                    className={`absolute bottom-1 sm:bottom-2 inset-x-0 h-[4px] sm:h-[6px] rounded ${
                      isDark ? "bg-[#647DA1]/15" : "bg-[#1A2B4C]/15"
                    }`}
                  />
                </span>
              </h1>

              {/* Description */}
              <p
                className={`text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-medium ${
                  isDark ? "text-[#EBEBF5]/60" : "text-[#5E626A]"
                }`}
              >
                دروس ومحاضرات وفتاوى وتلاوات لأهل السنة، مرتبة ومصفّاة، في تطبيق
                واحد يسهل عليك الوصول للعلم{" "}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3.5 w-full justify-start">
                <DownloadButtonsSection isDark={isDark} />
              </div>

              {/* Sincere Slogan Mini Check */}
            </div>

            {/* HERO VISUAL - LEFT SIDE (Mockup with solid background backing) */}
            <div className="lg:col-span-5 lg:order-1 flex justify-center items-center relative py-8">
              {/* Concentric rotating wave lines around phone representation */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full border pointer-events-none -z-10 transition-colors ${
                  isDark ? "border-[#647DA1]/10" : "border-[#1A2B4C]/5"
                }`}
              />
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full border pointer-events-none -z-10 animate-spin transition-colors ${
                  isDark ? "border-[#647DA1]/5" : "border-[#1A2B4C]/3"
                }`}
                style={{ animationDuration: "60s" }}
              />

              {/* Premium Background Box Frame */}
              <div className="relative w-[280px] sm:w-[310px] flex items-center justify-center">
                {/* iPhone Frame */}
                <div className="w-full pb-2 flex justify-center">
                  <PhoneMockup
                    className="w-[280px] sm:w-[310px] md:hover:scale-[1.01] transition-transform duration-300 shadow-3xl"
                    imageSrc="/screens/dashboard.webp"
                    darkImageSrc="/screens/dashboard_dark.webp"
                    alt="شاشة لوحة التحكم الرئيسي"
                    darkMode={isDark}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ FEATURE SECTION ━━━━━━━━━━ */}
      <section
        id="how-it-works"
        className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
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
            <div
              className={`rounded-[28px] flex flex-col justify-between items-center text-center overflow-hidden group md:hover:shadow-xl md:hover:scale-[1.01] transition-all duration-200 active:scale-[0.99] border ${
                isDark
                  ? "bg-[#1C1C1E] border-stone-800/80 shadow-stone-950/40 shadow-lg"
                  : "bg-white border-stone-0 shadow-md"
              }`}
            >
              <div className="pt-8 px-6 sm:px-7 text-center w-full">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm ${
                    isDark
                      ? "bg-[#647DA1]/15 text-[#647DA1]"
                      : "bg-[#1A2B4C]/5 text-[#1A2B4C]"
                  }`}
                >
                  ١
                </div>
                <h3
                  className={`text-base sm:text-lg font-bold leading-snug mb-3 ${
                    isDark ? "text-[#EBEBF5]" : "text-[#111113]"
                  }`}
                >
                  افتح القسم، تجد محتواه مصفوفًا
                </h3>
              </div>

              {/* iPhone screen cropped neatly at the bottom edge */}
              <div className="w-full px-5 mt-auto pt-4 relative overflow-hidden h-[300px]">
                <div className="translate-y-4 md:group-hover:translate-y-2 transition-transform duration-300 ease-out origin-top">
                  <PhoneMockup
                    className="w-52"
                    glowColor="rgba(26,43,76,0.06)"
                    imageSrc="/screens/categories.webp"
                    darkImageSrc="/screens/categories_dark.webp"
                    alt="شاشة أقسام العلوم والدروس"
                    darkMode={isDark}
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Audio Player & Reading text */}
            <div
              className={`rounded-[28px] flex flex-col justify-between items-center text-center overflow-hidden group md:hover:shadow-xl md:hover:scale-[1.01] transition-all duration-200 active:scale-[0.99] border ${
                isDark
                  ? "bg-[#1C1C1E] border-stone-800/80 shadow-stone-950/40 shadow-lg"
                  : "bg-white border-stone-0 shadow-md"
              }`}
            >
              <div className="pt-8 px-6 sm:px-7 text-center w-full">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm ${
                    isDark
                      ? "bg-[#647DA1]/15 text-[#647DA1]"
                      : "bg-[#1A2B4C]/5 text-[#1A2B4C]"
                  }`}
                >
                  ٢
                </div>
                <h3
                  className={`text-base sm:text-lg font-bold leading-snug mb-3 ${
                    isDark ? "text-[#EBEBF5]" : "text-[#111113]"
                  }`}
                >
                  اسمع، أو اقرأ، ما يسّر الله به
                </h3>
              </div>

              {/* Phone nested */}
              <div className="w-full px-5 mt-auto pt-4 relative overflow-hidden h-[300px]">
                <div className="translate-y-4 md:group-hover:translate-y-2 transition-transform duration-300 ease-out origin-top">
                  <PhoneMockup
                    className="w-52"
                    glowColor="rgba(26,43,76,0.06)"
                    imageSrc="/screens/player.webp"
                    darkImageSrc="/screens/player_dark.webp"
                    alt="شاشة المشغل الصوتي التأصيلي"
                    darkMode={isDark}
                  />
                </div>
              </div>
            </div>

            {/* Card 3: Library */}
            <div
              className={`rounded-[28px] flex flex-col justify-between items-center text-center overflow-hidden group md:hover:shadow-xl md:hover:scale-[1.01] transition-all duration-200 active:scale-[0.99] border ${
                isDark
                  ? "bg-[#1C1C1E] border-stone-800/80 shadow-stone-950/40 shadow-lg"
                  : "bg-white border-stone-0 shadow-md"
              }`}
            >
              <div className="pt-8 px-6 sm:px-7 text-center w-full">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm ${
                    isDark
                      ? "bg-[#647DA1]/15 text-[#647DA1]"
                      : "bg-[#1A2B4C]/5 text-[#1A2B4C]"
                  }`}
                >
                  ٣
                </div>
                <h3
                  className={`text-base sm:text-lg font-bold leading-snug mb-3 ${
                    isDark ? "text-[#EBEBF5]" : "text-[#111113]"
                  }`}
                >
                  احفظ ما أردت بقاءه، أو نزّله في مكتبتك
                </h3>
              </div>

              {/* Phone nested */}
              <div className="w-full px-5 mt-auto pt-4 relative overflow-hidden h-[300px]">
                <div className="translate-y-4 md:group-hover:translate-y-2 transition-transform duration-300 ease-out origin-top">
                  <PhoneMockup
                    className="w-52"
                    glowColor="rgba(26,43,76,0.06)"
                    imageSrc="/screens/library.webp"
                    darkImageSrc="/screens/library_dark.webp"
                    alt="شاشة المكتبة والمحفوظات الصوتية"
                    darkMode={isDark}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ CLOSING SECTION ━━━━━━━━━━ */}
      <section
        id="download"
        className={`py-20 md:py-28 text-center relative overflow-hidden transition-colors duration-300 ${
          isDark ? "bg-[#121212]" : "bg-white"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Calm, sincere prayer text centering */}
          <div className="max-w-2xl mx-auto mb-16">
            <p
              className={`text-base sm:text-[21px] font-bold leading-[1.8] text-center px-4 transition-colors duration-300 ${
                isDark ? "text-[#EBEBF5]" : "text-[#1A2B4C]"
              }`}
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              "نسأل الله أن نكون وُفّقنا في أن نجعل استماعك للعلم سهلًا ميسّرًا،
              صافيًا من كل شاغل، ونسأله سبحانه القبول والإخلاص"
            </p>
            <div
              className={`h-0.5 w-16 mx-auto mt-8 rounded-full transition-colors duration-300 ${
                isDark ? "bg-[#647DA1]/20" : "bg-[#1A2B4C]/20"
              }`}
            />
          </div>

          {/* Large Centered Visual Showcase Phone - Mirroring Reference bottom phone */}
          <div className="relative mt-8 max-w-md mx-auto flex justify-center items-center">
            {/* Soft backdrop radial vector ripples */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full border pointer-events-none -z-10 transition-colors duration-300 ${
                isDark ? "border-[#647DA1]/10" : "border-[#1A2B4C]/4"
              }`}
            />
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[600px] h-[440px] sm:h-[600px] rounded-full border pointer-events-none -z-10 transition-colors duration-300 ${
                isDark ? "border-[#647DA1]/5" : "border-[#1A2B4C]/2"
              }`}
            />

            {/* Straight showcased mockup */}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ FOOTER ━━━━━━━━━━ */}
      <footer
        className={`border-t py-16 text-right font-sans transition-colors duration-300 ${
          isDark
            ? "bg-[#121212] border-stone-800/60"
            : "bg-white border-[#EFECE6]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div
            className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b transition-colors duration-300 ${
              isDark ? "border-stone-800/50" : "border-stone-100"
            }`}
          >
            {/* Link Directory columns replaced with Suggestions & Complaints Feedback Module */}
            <div id="contact" className="md:col-span-8 md:mr-10 text-right">
              <div
                className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  isDark ? " border-stone-800/80" : " border-stone-100/80"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4
                      className={`text-base font-bold mb-1 ${
                        isDark ? "text-[#EBEBF5]" : "text-[#111113]"
                      }`}
                    >
                      الشكاوى والمقترحات
                    </h4>
                    <p
                      className={`text-xs ${
                        isDark ? "text-[#EBEBF5]/60" : "text-[#5E626A]"
                      }`}
                    >
                      يسعدنا استقبال ملاحظاتكم لتطوير التطبيق وتحسين السعة
                      التحصيلية لطلبة العلم.
                    </p>
                  </div>

                  {/* Select Type Segmented Toggle */}
                  <div
                    className={`flex p-1 rounded-xl items-center w-fit self-start sm:self-center transition-colors ${
                      isDark ? "bg-[#121212]" : "bg-stone-200/50"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setMessageType("مقترح")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                        messageType === "مقترح"
                          ? isDark
                            ? "bg-[#647DA1] text-[#121212] shadow-sm"
                            : "bg-[#1A2B4C] text-white shadow-sm"
                          : isDark
                          ? "text-[#EBEBF5]/60 hover:text-[#EBEBF5]"
                          : "text-[#5E626A] hover:text-[#111113]"
                      }`}
                    >
                      مقترح
                    </button>
                    <button
                      type="button"
                      onClick={() => setMessageType("شكوى")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                        messageType === "شكوى"
                          ? isDark
                            ? "bg-[#647DA1] text-[#121212] shadow-sm"
                            : "bg-[#1A2B4C] text-white shadow-sm"
                          : isDark
                          ? "text-[#EBEBF5]/60 hover:text-[#EBEBF5]"
                          : "text-[#5E626A] hover:text-[#111113]"
                      }`}
                    >
                      شكوى
                    </button>
                  </div>
                </div>

                <form
                  onSubmit={handleSendMessage}
                  className="space-y-4 text-right"
                >
                  {/* Subject Input */}
                  <div>
                    <label
                      className={`block text-xs font-bold mb-1.5 text-right ${
                        isDark ? "text-[#EBEBF5]" : "text-[#111113]"
                      }`}
                    >
                      عنوان الرسالة
                    </label>
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
                    <label
                      className={`block text-xs font-bold mb-1.5 text-right ${
                        isDark ? "text-[#EBEBF5]" : "text-[#111113]"
                      }`}
                    >
                      نص الرسالة
                    </label>
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
                      <span>إرسال عبر الواتساب</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Copyright block */}
          <div
            className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
              isDark ? "text-[#EBEBF5]/60" : "text-[#5E626A]"
            }`}
          >
            <p className="font-medium text-center sm:text-right">
              © 2026 استقم. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
