import React from "react";
import { 
  Play, 
  Pause, 
  Search, 
  BookOpen, 
  Download, 
  Bookmark, 
  FolderIcon, 
  ChevronLeft, 
  Volume2, 
  Clock, 
  CheckCircle2, 
  ArrowLeft,
  Sliders,
  Check,
  Star
} from "lucide-react";

// Accent Color: #1A2B4C

// --- 1. DASHBOARD SCREEN (HERO SMART HOME) ---
export function DashboardScreen() {
  const scholars = [
    { id: 1, name: "ابن عثيمين", initial: "ع", color: "bg-[#1A2B4C]" },
    { id: 2, name: "ابن باز", initial: "ب", color: "bg-[#2A3E68]" },
    { id: 3, name: "الألباني", initial: "أ", color: "bg-[#3D5280]" },
    { id: 4, name: "الفوزان", initial: "ف", color: "bg-[#516799]" },
  ];

  const recentLessons = [
    { title: "عقيدة أهل السنة والجماعة", scholar: "الشيخ ابن عثيمين", duration: "٢٤ د", category: "العقيدة" },
    { title: "كتاب التوحيد - الدرس الأول", scholar: "الشيخ ابن باز", duration: "٤٥ د", category: "التوحيد" },
    { title: "شرح رياض الصالحين", scholar: "الشيخ ابن عثيمين", duration: "١٨ د", category: "الحديث" },
  ];

  return (
    <div className="h-full flex flex-col justify-between text-right p-4 text-white font-sans overflow-hidden">
      {/* Mini App Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">صافٍ</span>
          </div>
          <span className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
            استقم
            <span className="inline-block w-4 h-4 rounded bg-[#1A2B4C] border border-[#2A3E68] text-[9.5px] leading-4 text-center">١</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4.5 bg-white/6 rounded-xl p-2.5 border border-white/5 flex items-center justify-between">
          <span className="text-slate-400 text-xs">ابحث عن درس، أو عالم، أو فتوى...</span>
          <Search className="w-4 h-4 text-slate-400" />
        </div>

        {/* Scholars Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-slate-400">الكل</span>
            <h4 className="text-xs font-semibold text-slate-200">العلماء</h4>
          </div>
          <div className="flex items-center justify-between gap-1">
            {scholars.map((sch) => (
              <div key={sch.id} className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 rounded-full ${sch.color} flex items-center justify-center border border-white/10 shadow-lg text-xs font-bold text-white`}>
                  {sch.initial}
                </div>
                <span className="text-[9.5px] text-slate-300 font-medium truncate max-w-[50px]">
                  {sch.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Card */}
        <div className="mb-4 rounded-2xl bg-gradient-to-l from-[#1A2B4C]/90 to-[#121D33] p-3 border.5 border-[#2A416E]/40 relative overflow-hidden">
          <div className="absolute top-2 left-2 flex gap-1">
            <span className="px-1.5 py-0.5 rounded text-[8px] font-medium bg-[#1A2B4C] text-[#AABBD9] uppercase border border-[#2A416E]/40">ميزّة</span>
          </div>
          <p className="text-[9px] text-[#AABBD9] font-medium mb-1">الدرس اليومي المقترح</p>
          <h3 className="text-xs font-bold text-white mb-2 leading-relaxed">
            تأصيل طالب العلم المبتدئ
          </h3>
          <p className="text-[9px] text-slate-300 mb-3 block">الشيخ صالح بن فوزان الفوزان • ٣٥ دقيقة</p>
          <div className="flex items-center justify-between bg-black/20 rounded-xl p-2">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[8.5px] text-slate-300 font-mono">١,٨٢٠ مستمع الآن</span>
            </div>
            <button className="flex items-center gap-1 bg-white text-[#1A2B4C] px-2 py-0.5 rounded-md text-[9px] font-bold">
              <span>استمع</span>
              <Play className="w-2.5 h-2.5 fill-current" />
            </button>
          </div>
        </div>

        {/* Recent Items */}
        <div className="mb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] text-[#AABBD9] hover:underline cursor-pointer">عرض القائمة كاملة</span>
            <h4 className="text-xs font-semibold text-slate-200">أحدث الإضافات</h4>
          </div>
          <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-0.5">
            {recentLessons.map((les, idx) => (
              <div 
                key={idx} 
                className="bg-white/4 hover:bg-white/7 rounded-xl p-2 border border-white/5 flex items-center justify-between transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#1A2B4C]/40 border border-[#2A3E68]/30 flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 text-[#8BA5CF] fill-current" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-white text-right truncate max-w-[130px]">
                      {les.title}
                    </h5>
                    <p className="text-[8px] text-slate-400 text-right font-light">
                      {les.scholar}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-slate-400 font-mono text-[8px]">
                  <span>{les.duration}</span>
                  <Clock className="w-2.5 h-2.5 opacity-80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Persistent Mini Play Bar at the Bottom */}
      <div className="mt-2 bg-[#121E35] border border-[#24375A]/60 rounded-xl p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="w-6 h-6 rounded-full bg-[#1A2B4C] flex items-center justify-center text-white">
            <Pause className="w-3 h-3 fill-current text-white" />
          </button>
          <div className="text-right">
            <p className="text-[9px] font-bold text-white truncate max-w-[110px]">الأصول الثلاثة للعلامة عبد العزيز بن باز</p>
            <p className="text-[8px] text-[#AABBD9]">الدرس ١٥ من ٢٤ • جاري الاستماع</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 pl-1.5">
          <Volume2 className="w-3.5 h-3.5 text-slate-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
        </div>
      </div>
    </div>
  );
}

// --- 2. CATEGORY SCREEN (CARD ONE: "افتح القسم، تجد محتواه مصفوفًا.") ---
export function CategoryScreen() {
  const categories = [
    { title: "العقيدة والتوحيد", count: "١٦٢ درس ومحاضرة", progress: "مكتمل", icon: FolderIcon },
    { title: "الحديث وشروحه", count: "٣٠٤ دروس مصفّاة", progress: "مكتمل", icon: BookOpen },
    { title: "الفقه وأصوله", count: "٢٤٥ فتوى ومسألة", progress: "مكتمل", icon: Sliders },
    { title: "التفسير وعلوم القرآن", count: "١٨٠ تلاوة وتفسيرًا", progress: "قيد التصفية", icon: Bookmark },
  ];

  return (
    <div className="h-full flex flex-col justify-between text-right p-4 text-white font-sans overflow-hidden">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4.5">
          <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
            <ChevronLeft className="w-3.5 h-3.5 text-slate-300" />
          </div>
          <h3 className="text-xs font-bold text-white">أقسام المواد والعلوم</h3>
        </div>

        {/* Section title & filters */}
        <div className="mb-4">
          <p className="text-[10px] text-slate-400 mb-1">العلوم المصفّاة</p>
          <h2 className="text-base font-bold text-slate-100 leading-normal">
            سهولة التنقل والوصول المبسّط
          </h2>
          <p className="text-[9px] text-[#AABBD9] mt-0.5 font-light">لا تفرّق، لا ضياع. تدرج من التوحيد فالفقه بالتدريب والمسائل الواضحة.</p>
        </div>

        {/* Categories List */}
        <div className="space-y-2 max-h-[290px] overflow-y-auto pr-0.5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="bg-white/4 border border-white/5 hover:border-slate-800 rounded-xl p-3 flex items-center justify-between transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1A2B4C]/50 border border-[#2A3E68]/40 flex items-center justify-center text-[#8AA5CF]">
                    <Icon className="w-4 h-4 text-[#8BA5CF]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-white">{cat.title}</h4>
                    <span className="text-[8px] text-slate-400">{cat.count}</span>
                  </div>
                </div>

                {/* Left Progress badge */}
                <span className={`px-1.5 py-0.5 rounded text-[7.5px] font-semibold ${cat.progress === 'مكتمل' ? 'bg-[#1A2B4C] text-[#AABBD9]' : 'bg-slate-800 text-slate-400'}`}>
                  {cat.progress}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Tip Container */}
      <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-right flex items-start gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#8BA5CF] shrink-0 mt-0.5" />
        <p className="text-[8.5px] text-slate-300 leading-relaxed font-light">
          تمت تصفية أكثر من <strong className="text-white font-bold font-mono">١,٥٠٠</strong> مادة لإسقاط المكرر، وحفظ جودة المادة العلمية.
        </p>
      </div>
    </div>
  );
}

// --- 3. AUDIO PLAYER SCREEN (CARD TWO: "اسمع، أو اقرأ، ما يسّر الله به.") ---
export function AudioPlayerScreen() {
  return (
    <div className="h-full flex flex-col justify-between text-right p-4 text-white font-sans overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[9px] px-1.5 py-0.5 bg-white/10 rounded-full font-mono text-slate-300">١.٢٥x</span>
        <h3 className="text-xs font-bold text-slate-200">المشغل الصوتي والمؤصل</h3>
        <button className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
          <ArrowLeft className="w-3.5 h-3.5 text-slate-300" />
        </button>
      </div>

      {/* Scholar and lecture summary */}
      <div className="my-1 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1A2B4C] to-[#254178] border border-white/10 flex items-center justify-center shadow-lg mb-2">
          <span className="text-2xl font-bold font-serif text-white">ع</span>
        </div>
        <h4 className="text-[11.5px] font-bold text-white mb-0.5">
          شرح العقيدة الواسطية - الدرس الأول
        </h4>
        <p className="text-[9.5px] text-slate-400">فضيلة الشيخ محمد بن صالح العثيمين</p>
      </div>

      {/* Soundwaves mockup (Beautiful pure SVG custom waveforms) */}
      <div className="my-2.5 h-10 flex items-center justify-center gap-1 px-4">
        {[20, 40, 60, 25, 75, 50, 95, 80, 40, 60, 30, 85, 90, 40, 60, 15, 35, 70, 50, 30].map((val, idx) => (
          <span 
            key={idx} 
            className={`w-[2.5px] rounded-full transition-all duration-300 ${idx === 6 || idx === 7 || idx === 8 || idx === 9 ? 'bg-[#9BB4E1] h-9' : 'bg-white/20'}`}
            style={{ height: `${val}%` }}
          />
        ))}
      </div>

      {/* Progress slider and times */}
      <div className="mb-2">
        <div className="flex items-center justify-between text-[8px] text-slate-400 font-mono mb-1">
          <span>١٦:٢٥</span>
          <span>٢٤:١٠-</span>
        </div>
        <div className="relative h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="absolute inset-y-0 right-0 left-[60%] bg-[#8BA5CF] rounded-full" />
        </div>
      </div>

      {/* Playback action controls bar */}
      <div className="flex items-center justify-center gap-4.5 mb-2 bg-[#1A2B4C]/25 py-2 px-4 rounded-xl border border-[#2A3E68]/30">
        <button className="text-slate-400 hover:text-white transition-colors duration-150">
          <Bookmark className="w-3.5 h-3.5" />
        </button>
        <button className="text-slate-300 hover:text-white transition-colors duration-150">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
          </svg>
        </button>
        <button className="w-9 h-9 rounded-full bg-[#1A2B4C] flex items-center justify-center text-white hover:scale-105 transition-transform duration-150 shadow-md">
          <Play className="w-4 h-4 fill-current mr-0.5" />
        </button>
        <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 005 8v8a1 1 0 001.6.8l5.334-4z" />
        </svg>
        <button className="text-slate-400 hover:text-white transition-colors duration-150">
          <Download className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Read Metn Text Card (Elegantly fulfilling "اسمع، أو اقرأ" with modern UI) */}
      <div className="bg-slate-900/80 border border-white/5 rounded-xl p-2 md:p-2.5 text-right relative overflow-hidden">
        <div className="flex items-center justify-between mb-1 border-b border-white/5 pb-1">
          <span className="text-[7.5px] px-1 bg-white/5 text-slate-400 rounded">المتن الشرعي</span>
          <p className="text-[8px] text-[#AABBD9] font-medium scale-95 origin-right">متن العقيدة الواسطية</p>
        </div>
        <p className="text-[8.5px] leading-relaxed text-slate-200 line-clamp-2">
          "أمَّا بَعْدُ: فَهَذَا اعْتِقَادُ الفِرْقَةِ النَّاجِيَةِ المَنْصُورَةِ إِلَى قِيَامِ السَّاعَةِ؛ أَهْلِ السُّنَّةِ وَالجَمَاعَةِ - وَهُوَ الإِيمَانُ بِاللَّهِ، وَمَلائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ..."
        </p>
        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

// --- 4. LIBRARY SCREEN (CARD THREE: "احفظ ما أردت بقاءه، أو نزّله في مكتبتك.") ---
export function LibraryScreen() {
  const downloadedLessons = [
    { title: "شرح كتاب التوحيد - كاملًا", scholar: "الشيخ عبد العزيز بن باز", size: "٢٤٠ ميجا", count: "٣٠ درس" },
    { title: "شرح الأربعين النووية - المختصر", scholar: "الشيخ ابن عثيمين", size: "٤٥ ميجا", count: "١٦ درس" },
    { title: "الأصول الثلاثة وأدلتها", scholar: "الشيخ صالح الفوزان", size: "١٢ ميجا", count: "٥ دروس" },
  ];

  return (
    <div className="h-full flex flex-col justify-between text-right p-4 text-white font-sans overflow-hidden">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] text-emerald-400 font-mono">متاح أوفلاين</span>
          </div>
          <h3 className="text-xs font-bold text-white flex items-center gap-1">
            المكتبة والمحفوظات
            <BookOpen className="w-3.5 h-3.5 text-[#8BA5CF]" />
          </h3>
        </div>

        {/* Device Memory Usage Status */}
        <div className="mb-4 bg-[#1A2B4C]/30 border border-[#2A3E68]/30 rounded-xl p-2.5">
          <div className="flex items-center justify-between text-[8px] text-slate-300 font-mono mb-1">
            <span>١.٢ جيجا مستخدم</span>
            <span>مساحة التخزين</span>
          </div>
          <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-[40%] bg-[#8BA5CF] rounded-full" />
          </div>
          <p className="text-[8px] text-slate-400 mt-1">تلقائيًا: سيتم ضغط الصوتيات لتوفير باقة بيانات الجوال.</p>
        </div>

        {/* Segment Tabs */}
        <div className="flex items-center justify-between gap-1 p-1 bg-white/5 rounded-lg mb-3">
          <span className="w-1/2 py-1 text-center text-[9px] font-medium text-slate-400 rounded-md cursor-pointer hover:text-white transition-colors duration-150">الحافظات</span>
          <span className="w-1/2 py-1 text-center text-[9px] font-bold text-white bg-[#1A2B4C] rounded-md shadow-sm">المحملات صوتيًا</span>
        </div>

        {/* Downloaded content list */}
        <div className="space-y-2 max-h-[160px] overflow-y-auto pr-0.5">
          {downloadedLessons.map((les, idx) => (
            <div 
              key={idx}
              className="bg-white/4 hover:bg-white/7 rounded-xl p-2.5 border border-white/5 flex items-center justify-between transition-colors duration-200"
            >
              {/* Checkmark icon & metadata */}
              <div className="flex items-center gap-1 font-mono text-[7.5px] text-slate-300 select-none shrink-0">
                <span>{les.size}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              </div>

              {/* Title & Scholar */}
              <div className="text-right">
                <h5 className="text-[9.5px] font-bold text-white max-w-[120px] truncate">{les.title}</h5>
                <p className="text-[8px] text-slate-400 font-light mt-0.5">{les.scholar} • {les.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sincere Slogan at Library Bottom */}
      <div className="bg-[#121B2C] border.5 border-[#203254] rounded-xl p-2 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <Check className="w-3 h-3 text-emerald-400" />
        </div>
        <p className="text-[8.5px] text-slate-300 text-right leading-normal font-light">
          تم الحفظ بنجاح. العلوم متوفرة أينما كنت بدون اتصال بالشبكة.
        </p>
      </div>
    </div>
  );
}
