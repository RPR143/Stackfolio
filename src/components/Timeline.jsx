import React, { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const calculateExperienceDuration = (dateString, live = false) => {
  const [startStr, endStr] = dateString.split(" - ");
  if (!startStr || !endStr) return "";

  const start = new Date(startStr);
  const isPresent = endStr.toLowerCase() === "present";
  const end = isPresent ? new Date() : new Date(endStr);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years > 0) {
    return `${years} year${years !== 1 ? 's' : ''}-${months} month${months !== 1 ? 's' : ''}-${days} day${days !== 1 ? 's' : ''}`;
  } else {
    return `${months} month${months !== 1 ? 's' : ''}-${days} day${days !== 1 ? 's' : ''}`;
  }
};

// Hook to get a live-updating duration string for "Present" roles
const useLiveDuration = (dateString, isLive = true) => {
  const isPresent = dateString.toLowerCase().includes("present");
  const shouldLiveUpdate = isPresent && isLive;
  const [duration, setDuration] = useState(() => calculateExperienceDuration(dateString));

  useEffect(() => {
    if (!shouldLiveUpdate) return;
    // Update every day at midnight, but also recalculate immediately
    setDuration(calculateExperienceDuration(dateString));

    const getMsUntilMidnight = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      return midnight - now;
    };

    let dailyTimer;
    const scheduleDailyUpdate = () => {
      dailyTimer = setTimeout(() => {
        setDuration(calculateExperienceDuration(dateString));
        scheduleDailyUpdate();
      }, getMsUntilMidnight());
    };

    scheduleDailyUpdate();
    return () => clearTimeout(dailyTimer);
  }, [dateString, shouldLiveUpdate]);

  return duration;
};

// Experience data - Reverse Chronological Order
export const experienceData = [
  {
    id: "01",
    year: "19 January 2026 - Present",
    isLive: true,
    title: "Apprentice",
    institution: "American Express",
    description: "Upgraded a backend service to the latest major framework version and migrated distributed tracing from OpenTracing to OpenTelemetry. Automated 5 engineering workflows (PR creation/review and Jira ticket creation, review, and fix). Delivered real-time vulnerability reports across 50+ tracked services. Raised test coverage of an event-driven backend module from 20% to 100% by writing 20,000+ lines of automated tests using the Reflection API.",
  },
  {
    id: "02",
    year: "9 January 2025 - 19 November 2025",
    isLive: false,
    title: "Frontend Developer",
    institution: "Indian Infotech",
    description: "Built 10+ reusable React.js components for scalable, responsive UIs using HTML5, CSS3, and JavaScript. Shipped features across 10+ Agile sprint releases by integrating 8+ REST APIs in collaboration with cross-functional teams. Ensured reliable data flow across integrated REST APIs by testing each endpoint in Postman before connecting to React components.",
  },
  {
    id: "03",
    year: "10 April 2022 - 10 June 2022",
    isLive: false,
    title: "Artificial Intelligence Intern",
    institution: "Acmegrade",
    description: "Achieved 90% prediction accuracy by training a Python ML model with NumPy, Pandas, and Scikit-learn. Improved model input quality across 1,000+ records by performing data preprocessing and feature engineering. Verified the model's 90% accuracy by evaluating its predictions on test data using Scikit-learn.",
  }
];

// Helper to calculate total cumulative experience across all items in experienceData
export const calculateTotalExperienceYears = (experiences = experienceData) => {
  let totalMonths = 0;

  experiences.forEach((item) => {
    const [startStr, endStr] = item.year.split(" - ");
    if (!startStr || !endStr) return;

    const start = new Date(startStr);
    const isPresent = endStr.toLowerCase() === "present";
    const end = (isPresent && item.isLive !== false)
      ? new Date()
      : (isPresent && item.endDate ? new Date(item.endDate) : (isPresent ? new Date() : new Date(endStr)));

    if (isNaN(start.getTime()) || isNaN(end.getTime())) return;

    let y = end.getFullYear() - start.getFullYear();
    let m = end.getMonth() - start.getMonth();
    let d = end.getDate() - start.getDate();

    if (d < 0) {
      m -= 1;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      d += prevMonth.getDate();
    }
    if (m < 0) {
      y -= 1;
      m += 12;
    }

    const months = y * 12 + m + (d / 30);
    totalMonths += Math.max(0, months);
  });

  const years = totalMonths / 12;
  return `${years.toFixed(1)}+`;
};

// Education data - Reverse Chronological Order
const educationData = [
  {
    id: "01",
    year: "2020 - 2024",
    duration: "4 yrs",
    title: "B.Tech in Computer Science & Engineering",
    institution: "United College of Engineering & Management, Allahabad",
    description: "Graduated with a CGPA of 7.99/10. Earned a Certificate of Excellence in the Computer Science department. Built a strong foundation in data structures, algorithms, and software engineering principles.",
  },
  {
    id: "02",
    year: "2019 - 2020",
    duration: "1 yr",
    title: "Higher Secondary (12th)",
    institution: "Central Board of Secondary Education",
    description: "Completed with 80.4% aggregate. Focused on Physics, Chemistry, Mathematics, and Computer Science.",
  },
  {
    id: "03",
    year: "2017 - 2018",
    duration: "1 yr",
    title: "Secondary (10th)",
    institution: "Central Board of Secondary Education",
    description: "Completed with 75.6% aggregate. Built a strong academic foundation.",
  }
];

const TimelineNode = ({ item, index, isVisible, theme }) => {
  const isSky = theme === "sky";
  const colorText = isSky ? "text-sky-400" : "text-emerald-400";
  const colorBg = isSky ? "bg-sky-500" : "bg-emerald-500";
  const colorBorder = isSky ? "border-sky-400/30" : "border-emerald-400/30";
  const colorGlow = isSky ? "shadow-[0_0_15px_rgba(14,165,233,0.8)]" : "shadow-[0_0_15px_rgba(16,185,129,0.8)]";
  const badgeColors = isSky ? "bg-sky-500/10 text-sky-400 border-sky-500/20" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
  const gradientBg = isSky ? "from-sky-500/5 to-transparent" : "from-emerald-500/5 to-transparent";

  // Live-updating duration for "Present" roles; static for completed ones
  const liveDuration = useLiveDuration(item.year, item.isLive);
  const displayDuration = item.isLive ? liveDuration : (item.duration || calculateExperienceDuration(item.year));

  return (
    <div
      className={`relative flex items-start w-full transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Node Number Label */}
      <div
        className={`absolute left-0 w-[40px] text-center font-bold text-sm md:text-base transition-colors duration-500 ${
          isVisible ? colorText : "text-slate-700"
        }`}
      >
        {item.id}
      </div>

      {/* Timeline Orb */}
      <div className="absolute left-[32px] mt-1.5 flex items-center justify-center">
        <div
          className={`w-4 h-4 rounded-full z-10 transition-all duration-500 flex items-center justify-center ${
            isVisible
              ? `bg-gradient-to-br from-white to-transparent ${colorGlow}`
              : "bg-slate-800 border border-slate-600"
          }`}
        >
          {isVisible && (
            <div className={`w-2 h-2 ${colorBg} rounded-full animate-pulse`} />
          )}
        </div>
        {/* Outer glowing ring */}
        {isVisible && (
          <div className={`absolute w-8 h-8 rounded-full border ${colorBorder} animate-[ping_3s_ease-in-out_infinite] z-0`} />
        )}
      </div>

      {/* Content Card */}
      <div className="ml-[70px] flex-1 pb-10 pr-2">
        <div
          className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
            isVisible ? "shadow-[0_0_20px_rgba(0,0,0,0.2)]" : "shadow-none"
          }`}
        >
          {/* Card subtle glow background */}
          {isVisible && (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientBg} rounded-2xl pointer-events-none`} />
          )}

          {/* Category Badge & Year */}
          <div className="flex flex-wrap items-center gap-3 mb-3 text-xs md:text-sm">
            <span className={`px-3 py-1 rounded-full font-semibold uppercase tracking-wider border ${badgeColors}`}>
              {item.year}
            </span>
            {displayDuration && (
              <span className="text-slate-400 font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                {displayDuration}
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">
            {item.title}
          </h3>
          <h4 className={`text-sm md:text-base font-medium mb-3 ${colorText}`}>
            {item.institution}
          </h4>
          <p className="text-slate-300/80 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const TimelineColumn = ({ title, data, icon: Icon, theme }) => {
  const containerRef = useRef(null);
  const [visibleNodes, setVisibleNodes] = useState(new Set());
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setVisibleNodes((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const nodes = containerRef.current.querySelectorAll(".timeline-node-container");
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
      const maxScroll = scrollHeight - clientHeight;
      
      if (maxScroll <= 0) {
        setLineHeight(100);
        return;
      }
      
      const scrollFraction = scrollTop / maxScroll;
      const startPercentage = (clientHeight * 0.5 / scrollHeight) * 100;
      const percentage = startPercentage + scrollFraction * (100 - startPercentage);
      
      setLineHeight(percentage);
    }
  };

  useEffect(() => {
    handleScroll();
    // Re-calculate on window resize
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const isSky = theme === "sky";
  const gradientLine = isSky ? "from-sky-400 via-cyan-400" : "from-emerald-400 via-teal-400";
  const iconColor = isSky ? "text-sky-400" : "text-emerald-400";

  return (
    <div className="flex flex-col h-[600px] w-full">
      {/* Column Header */}
      <div className="flex items-center gap-3 mb-6 sticky top-0 bg-[#020c14]/90 backdrop-blur-md z-20 py-4 px-2">
        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${iconColor}`}>
           <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      
      {/* Scrollable Timeline Area */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto pr-2 sm:pr-4 custom-scrollbar relative"
        style={{ scrollbarWidth: 'thin' }}
      >
        <div className="relative min-h-full pb-8">
          {/* Background line */}
          <div className="absolute left-[40px] top-2 bottom-2 w-0.5 bg-slate-800/50" />
          
          {/* Animated colored line */}
          <div 
            className={`absolute left-[40px] top-2 w-0.5 transition-all duration-300 ease-out z-0 bg-gradient-to-b ${gradientLine} to-transparent`}
            style={{ height: `${lineHeight}%` }}
          />

          {/* Nodes */}
          <div className="relative z-10 pt-2">
            {data.map((item, index) => (
              <div 
                key={item.id} 
                className="timeline-node-container"
                data-index={index}
              >
                <TimelineNode
                  item={item}
                  index={index}
                  isVisible={visibleNodes.has(index)}
                  theme={theme}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="relative py-20 bg-[#020c14] overflow-hidden min-h-screen" id="Experience">
      {/* Background Starfield/Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] top-1/4 -left-20" />
        <div className="absolute w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] bottom-1/4 -right-20" />
      </div>

      <div className="container mx-auto px-[5%] relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] inline-block mb-4">
            Professional Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            A comprehensive track record of my academic milestones and professional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 w-full max-w-7xl mx-auto">
          {/* Left Column: Education */}
          <TimelineColumn 
            title="My Education" 
            data={educationData} 
            icon={GraduationCap} 
            theme="teal" 
          />
          
          {/* Right Column: Experience */}
          <TimelineColumn 
            title="My Experiences" 
            data={experienceData} 
            icon={Briefcase} 
            theme="sky" 
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
