import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, CheckCircle2, Radio, Award, Scale } from 'lucide-react';
import { INSIGHTS_AND_NEWS, InsightEntry, PageRoute } from '../data/judehData';

interface InsightsPageProps {
  onNavigate: (page: PageRoute, sectionOrServiceId?: string) => void;
}

const VERIFIED_NEWS_CHRONICLE = [
  {
    tag: 'STATE APPOINTMENT',
    title: 'Governor Whitmer Makes Appointments to Boards and Commissions',
    description:
      'Dr. Jumana Judeh appointed to the State of Michigan Board of Real Estate Appraisers, serving as Board Chair.',
  },
  {
    tag: 'U.S. CONGRESSIONAL RECOGNITION',
    title: 'Michigan Women’s Historical Center (Hall of Fame) Induction',
    description:
      'Jumana Judeh inducted into the Michigan Women’s Historical Center and recognized by U.S. Senator Debbie Stabenow.',
  },
  {
    tag: 'INDUSTRY PODCAST FEATURE',
    title: 'Exploring Business & Life Podcast — Understanding Commercial Appraisals',
    description:
      'In-depth executive interview with Dr. Jumana Judeh examining the drivers of commercial real estate valuation.',
  },
  {
    tag: 'RE JOURNALS PANEL MODERATOR',
    title: 'Detroit Women in Commercial Real Estate Summit',
    description:
      'Jumana Judeh moderated the commercial property management panel discussion and shared leadership insights.',
  },
  {
    tag: 'INSTITUTE DESIGNATION',
    title: 'Certified Commercial Investment Member (CCIM) Designation',
    description:
      'The CCIM Institute Board officially designates Jumana Judeh as a Certified Commercial Investment Member.',
  },
  {
    tag: 'GLOBAL HONORS',
    title: 'YWCA Women of Achievement Award & PVAC International Keynote',
    description:
      'Honored by the YWCA for personal and professional achievement and named Honorary Member of the Practicing Valuers of India.',
  },
];

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const [activeArticle, setActiveArticle] = useState<InsightEntry>(INSIGHTS_AND_NEWS[0]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Page Hero */}
      <section className="relative bg-[#810014] text-white pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E09900]/40 overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid-dark pointer-events-none opacity-65" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1.5px] bg-[#E09900]" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
              PUBLIC RECORD, VALUATION BRIEFINGS &amp; JUDEH IN THE NEWS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.0] tracking-tight text-white">
                Insights, Briefings &amp;{' '}
                <span className="italic text-[#E09900]">Public Recognition.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-white/85 font-light leading-relaxed">
                Verified valuation briefings, Michigan property tax appeal resources, and public
                milestones from Judeh &amp; Associates, Inc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Briefing Reader & Article Selector */}
      <section className="py-20 md:py-28 border-b border-black/15 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 4 Columns: Briefing Index */}
            <div className="lg:col-span-4 space-y-4">
              <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#810014] font-semibold pb-3 border-b border-black/15">
                Select Editorial Briefing
              </div>
              {INSIGHTS_AND_NEWS.map((item) => {
                const isSelected = item.id === activeArticle.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveArticle(item)}
                    className={`w-full text-left p-5 border transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#810014] text-white border-[#810014] shadow-lg'
                        : 'bg-[#F5F5F5] text-black border-black/15 hover:border-[#810014]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-tech uppercase tracking-[0.16em]">
                      <span className={isSelected ? 'text-[#E09900]' : 'text-[#810014]'}>
                        {item.category}
                      </span>
                      <span className={isSelected ? 'text-white/75' : 'text-black/50'}>
                        {item.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif-display text-xl font-medium mt-2 leading-snug">
                      {item.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Right 8 Columns: Full Briefing View */}
            <article className="lg:col-span-8 border border-black/15 bg-white shadow-sm overflow-hidden">
              <div className="h-[340px] sm:h-[400px] bg-black relative overflow-hidden">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono-tech text-xs uppercase tracking-[0.18em] bg-[#810014] text-[#E09900] border border-[#E09900]/60 px-3.5 py-1">
                    {activeArticle.category}
                  </span>
                  <span className="font-mono-tech text-xs text-white/80">
                    {activeArticle.verifiedContext}
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-12 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.18em] text-[#810014]">
                  <BookOpen className="w-4 h-4" />
                  <span>{activeArticle.readTime}</span>
                </div>

                <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-medium text-black leading-tight">
                  {activeArticle.title}
                </h2>

                <p className="font-serif-display text-2xl italic text-black/75">
                  {activeArticle.subtitle}
                </p>

                <div className="space-y-4 text-base sm:text-lg text-black/80 leading-relaxed pt-2">
                  {activeArticle.fullContent.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="bg-[#F5F5F5] border-l-4 border-[#810014] p-6 space-y-3 mt-6">
                  <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#810014] font-semibold">
                    Verified Key Highlights
                  </div>
                  {activeArticle.keyTakeaways.map((kt) => (
                    <div key={kt} className="flex items-start gap-2.5 text-sm text-black/85">
                      <CheckCircle2 className="w-4 h-4 text-[#810014] shrink-0 mt-0.5" />
                      <span>{kt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-black/15 flex items-center justify-between">
                  <span className="font-mono-tech text-xs text-black/60">
                    JUDEH &amp; ASSOCIATES ADVISORY DESK
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#810014] text-white font-mono-tech text-xs uppercase tracking-[0.18em] hover:bg-black transition-colors"
                  >
                    <span>Discuss This Subject With Our Team</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E09900]" />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Verified "Judeh in the News" Chronicle */}
      <section className="py-20 md:py-28 bg-[#0D0D0D] text-white border-b border-[#E09900]/40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="pb-12 border-b border-white/15 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
                JUDEH IN THE NEWS // VERIFIED PUBLIC ARCHIVE
              </span>
              <h2 className="font-serif-display text-4xl sm:text-5xl font-medium text-white mt-2">
                Statewide &amp; National Recognition
              </h2>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERIFIED_NEWS_CHRONICLE.map((news, idx) => (
              <div
                key={news.title}
                className="border border-white/15 bg-white/[0.02] p-7 flex flex-col justify-between hover:border-[#E09900] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-tech text-[#E09900] mb-3">
                    <span>{news.tag}</span>
                    <span>0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl font-medium text-white leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-sm text-white/75 mt-3 leading-relaxed">{news.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-white/55">
                  <span>VERIFIED RECORD</span>
                  {idx % 2 === 0 ? (
                    <Award className="w-4 h-4 text-[#E09900]" />
                  ) : idx === 3 ? (
                    <Radio className="w-4 h-4 text-[#E09900]" />
                  ) : (
                    <Scale className="w-4 h-4 text-[#E09900]" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
