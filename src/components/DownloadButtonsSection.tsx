interface DownloadButtonProps {
  isDark: boolean;
}

const appStoreUrl = import.meta.env.VITE_APP_STORE_URL ?? "#download";
const playStoreUrl = import.meta.env.VITE_PLAY_STORE_URL ?? "#download";

const AppStoreButton = ({ isDark }: DownloadButtonProps) => (
  <a
    href={appStoreUrl}
    dir="rtl"
    className={`flex items-center justify-center gap-4 px-5 w-full sm:w-[240px] h-[58px] rounded-[50px] border transition-all duration-200 md:hover:scale-[1.02] active:scale-95 group ${
      isDark
        ? "bg-[#1C1C1E] md:hover:bg-[#202C41] text-white border-[#647DA1]/15"
        : "bg-[#1A2B4C] md:hover:bg-[#111C33] text-white border-white/10"
    }`}
  >
    <svg
      className="w-8 h-8 text-white fill-current transition-transform duration-200 md:group-hover:scale-105"
      viewBox="0 0 24 24"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.72-1.16 1.87-1.01 2.98 1.12.09 2.27-.6 2.94-1.41z" />
    </svg>
    <div className="flex flex-col items-start leading-[1.2]">
      <span className="text-[11px] text-[#AABBD9] font-sans mb-1">
        حمل التطبيق من
      </span>
      <span className="text-[15px] font-bold font-sans">متجـر أبـل سـتور</span>
    </div>
  </a>
);

const GooglePlayButton = ({ isDark }: DownloadButtonProps) => (
  <a
    href={playStoreUrl}
    dir="rtl"
    className={`flex items-center justify-center gap-4 px-5 w-full sm:w-[240px] h-[58px] rounded-[50px] border transition-all duration-200 md:hover:scale-[1.02] active:scale-95 group ${
      isDark
        ? "bg-[#1C1C1E] md:hover:bg-[#202C41] text-white border-[#647DA1]/15"
        : "bg-[#1A2B4C] md:hover:bg-[#111C33] text-white border-white/10"
    }`}
  >
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 text-white fill-current transition-transform duration-200 md:group-hover:scale-105"
      fill="currentColor"
    >
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
    <div className="flex flex-col items-start leading-[1.2]">
      <span className="text-[11px] text-[#AABBD9] font-sans mb-1">
        حمل التطبيق من
      </span>
      <span className="text-[16px] font-bold font-sans">متجـر جوجـل بـلاي</span>
    </div>
  </a>
);

export function DownloadButtonsSection({ isDark }: DownloadButtonProps) {
  return (
    <div className="flex items-center gap-4">
      <AppStoreButton isDark={isDark} />
      <GooglePlayButton isDark={isDark} />
    </div>
  );
}
