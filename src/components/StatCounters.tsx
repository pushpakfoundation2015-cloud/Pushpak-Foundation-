import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { GraduationCap, Scissors, HeartPulse, Sparkles } from 'lucide-react';

interface StatCountersProps {
  lang: Language;
}

interface StatItem {
  key: string;
  target: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

export const StatCounters: React.FC<StatCountersProps> = ({ lang }) => {
  const t = translations[lang];

  const stats: StatItem[] = [
    {
      key: 'students',
      target: 5000,
      suffix: '+',
      label: t.statStudents,
      icon: <GraduationCap className="h-7 w-7 text-amber-500" />
    },
    {
      key: 'women',
      target: 1200,
      suffix: '+',
      label: t.statWomen,
      icon: <Scissors className="h-7 w-7 text-amber-500" />
    },
    {
      key: 'camps',
      target: 35,
      suffix: '+',
      label: t.statCamps,
      icon: <HeartPulse className="h-7 w-7 text-amber-500" />
    },
    {
      key: 'years',
      target: 11,
      suffix: '+',
      label: t.statYears,
      icon: <Sparkles className="h-7 w-7 text-amber-500 animate-spin-slow" />
    }
  ];

  const [counts, setCounts] = useState<Record<string, number>>({
    students: 0,
    women: 0,
    camps: 0,
    years: 0
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds animation duration
    const steps = 40;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      setCounts(() => {
        const nextCounts: Record<string, number> = {};
        stats.forEach((stat) => {
          const increment = stat.target / steps;
          const val = Math.min(Math.round(increment * stepCount), stat.target);
          nextCounts[stat.key] = val;
        });
        return nextCounts;
      });

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [lang]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat) => (
        <div
          key={stat.key}
          className="relative overflow-hidden group bg-white/70 dark:bg-[#0E1E31]/70 backdrop-blur-md rounded-2xl p-6 border border-amber-500/20 shadow-lg hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
        >
          {/* Subtle colored background hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon container */}
            <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>

            {/* Counter Number */}
            <div className="text-3xl md:text-4xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600 dark:from-white dark:to-amber-300">
              {counts[stat.key].toLocaleString()}{stat.suffix}
            </div>

            {/* Label */}
            <div className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-2 font-sans">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
