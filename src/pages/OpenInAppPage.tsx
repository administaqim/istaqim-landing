import { DownloadButtonsSection } from "../components/DownloadButtonsSection";
import { buildCustomSchemeUrl } from "../lib/app-link";
import { Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";

const REDIRECT_DELAY_MS = 1500;

export function OpenInAppPage() {
  const { pathname, search } = useLocation();
  const { id: lessonId } = useParams<{ id?: string }>();
  const [isDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const [showDownloads, setShowDownloads] = useState(false);

  const isLessonRoute = pathname.startsWith("/lesson/");
  const hasValidLessonId = Boolean(lessonId?.trim());

  if (isLessonRoute && !hasValidLessonId) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    if (isLessonRoute && !hasValidLessonId) {
      return;
    }

    const schemeUrl = buildCustomSchemeUrl(pathname, search);
    window.location.href = schemeUrl;

    const timer = window.setTimeout(() => {
      setShowDownloads(true);
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [hasValidLessonId, isLessonRoute, pathname, search]);

  return (
    <div
      dir="rtl"
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 transition-colors duration-300 ${
        isDark ? "bg-[#121212] text-[#EBEBF5]" : "bg-white text-[#17181A]"
      }`}
    >
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
          isDark ? "bg-[#1C1C1E]" : "bg-[#1A2B4C]/10"
        }`}
      >
        <Smartphone
          className={isDark ? "text-[#647DA1]" : "text-[#1A2B4C]"}
          size={32}
        />
      </div>

      <h1 className="text-2xl font-bold text-center mb-3">
        افتح في تطبيق استقم
      </h1>
      <p
        className={`text-sm text-center max-w-md mb-8 leading-relaxed ${
          isDark ? "text-[#EBEBF5]/70" : "text-[#5E626A]"
        }`}
      >
        {showDownloads
          ? "إذا لم يُفتح التطبيق تلقائياً، حمّله من المتجر ثم أعد فتح الرابط."
          : "جارٍ فتح التطبيق..."}
      </p>

      {showDownloads ? (
        <DownloadButtonsSection isDark={isDark} />
      ) : (
        <div
          className={`w-8 h-8 border-2 rounded-full animate-spin ${
            isDark
              ? "border-[#647DA1]/30 border-t-[#647DA1]"
              : "border-[#1A2B4C]/30 border-t-[#1A2B4C]"
          }`}
        />
      )}

      <Link
        to="/"
        className={`mt-10 text-sm underline-offset-4 hover:underline ${
          isDark ? "text-[#647DA1]" : "text-[#1A2B4C]"
        }`}
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}
