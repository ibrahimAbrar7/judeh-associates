import React, { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  FileCheck2,
  MapPin,
  X,
} from 'lucide-react';
import {
  METHODOLOGY_STEPS,
  VERIFIED_APPRAISAL_PURPOSES,
  INSIGHTS_AND_NEWS,
  JUDEH_GROUP_DIVISIONS,
  COMPANY_INFO,
  InsightEntry,
  PageRoute,
} from '../data/judehData';

interface MethodologyAndInsightsProps {
  onNavigate: (page: PageRoute, sectionOrServiceId?: string) => void;
}

export const MethodologyAndInsights: React.FC<MethodologyAndInsightsProps> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [selectedInsight, setSelectedInsight] = useState<InsightEntry | null>(null);

  const featuredInsight = INSIGHTS_AND_NEWS[0];
  const supportingInsights = INSIGHTS_AND_NEWS.slice(1);

  return (
    <>
      {/* =====================================================================
          SECTION 9: THE VALUATION METHODOLOGY VISUAL STORY
          (01 — 04 Sequence + Three Approaches to Value + 23 Verified Purposes)
      ====================================================================== */}
      <section
        id="methodology-section"
        aria-label="How We Approach Valuation and Consulting Assignments"
        className="relative bg-white text-black py-24 md:py-36 border-b border-black/15"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-black/15 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1.5px] bg-[#810014]" />
                <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#810014] font-medium">
                  07 / 08 — Analytical Process &amp; Valuation Methodology
                </span>
              </div>
              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.04] text-black">
                Disciplined Inquiry.{' '}
                <span className="italic text-[#810014]">Defensible Conclusions.</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-base text-black/75 leading-relaxed">
                Every appraisal and consulting engagement follows a structured analytical sequence—from
                on-site construction verification to reconciling the Cost, Sales Comparison, and
                Income (ARGUS DCF) approaches.
              </p>
            </div>
          </div>

          {/* 12-Column Timeline & Methodology Architecture */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 8 Columns: Vertical Gold-Spined Numbered Editorial Sequence */}
            <div className="lg:col-span-8 relative">
              {/* Vertical Gold Spine Line */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute top-6 bottom-6 left-[27px] w-[2px] bg-black/10"
              >
                <div
                  className="w-full bg-[#E09900] transition-all duration-500"
                  style={{ height: `${((activeStepIndex + 1) / METHODOLOGY_STEPS.length) * 100}%` }}
                />
              </div>

              <div className="space-y-6">
                {METHODOLOGY_STEPS.map((step, index) => {
                  const isActive = index === activeStepIndex;
                  return (
                    <div
                      key={step.number}
                      onMouseEnter={() => setActiveStepIndex(index)}
                      onClick={() => setActiveStepIndex(index)}
                      className={`relative sm:pl-20 cursor-pointer transition-all duration-300`}
                    >
                      {/* Step Node Indicator on Vertical Gold Spine */}
                      <div
                        className={`hidden sm:flex absolute left-0 top-6 w-14 h-14 border items-center justify-center font-mono-tech text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? 'bg-[#810014] border-[#E09900] text-[#E09900] shadow-lg'
                            : 'bg-white border-black/20 text-black/60 hover:border-[#810014]'
                        }`}
                      >
                        {step.number}
                      </div>

                      {/* Editorial Step Card */}
                      <div
                        className={`border p-6 sm:p-8 transition-all duration-300 ${
                          isActive
                            ? 'border-[#810014] bg-[#F5F5F5] shadow-xl'
                            : 'border-black/15 bg-white hover:border-black/35'
                        }`}
                      >
                        {/* Top Gold Highlight Bar */}
                        <div
                          className={`h-[2px] bg-[#E09900] -mt-6 sm:-mt-8 -mx-6 sm:-mx-8 mb-6 transition-transform duration-500 origin-left ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />

                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#810014] font-semibold">
                            <span className="sm:hidden mr-2">{step.number} —</span>
                            {step.subtitle}
                          </span>
                          <span className="font-mono-tech text-[11px] uppercase tracking-[0.14em] bg-white border border-black/15 px-2.5 py-0.5 text-black/70">
                            PHASE {step.number} OF 04
                          </span>
                        </div>

                        <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-black">
                          {step.number} — {step.title}
                        </h3>

                        <p className="mt-3 text-sm sm:text-base text-black/75 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Key Elements & Outcome */}
                        <div className="mt-5 pt-5 border-t border-black/10 space-y-2.5">
                          {step.keyElements.map((el) => (
                            <div
                              key={el}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-black/85"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#810014] shrink-0 mt-0.5" />
                              <span>{el}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 pt-3 border-t border-black/10 flex items-center justify-between text-xs font-mono-tech">
                          <span className="text-black/55 uppercase">OUTCOME DELIVERABLE:</span>
                          <span className="text-[#810014] font-semibold">
                            {step.deliverableOutcome}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 4 Columns: Verified Appraisal Assignment Purposes Matrix & Statewide Coverage */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              {/* Purpose of the Appraisal Assignment Ledger */}
              <div className="bg-[#810014] text-white border border-[#E09900] p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center gap-2.5 text-[#E09900] font-mono-tech text-xs uppercase tracking-[0.2em] pb-4 border-b border-[#E09900]/30">
                  <FileCheck2 className="w-4 h-4" />
                  <span>23 Verified Assignment Purposes</span>
                </div>

                <h3 className="font-serif-display text-2xl font-medium text-white mt-4">
                  Statutory &amp; Financial Assignment Scope
                </h3>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Judeh &amp; Associates tailors each valuation report to the specific legal,
                  financial, or regulatory purpose of the assignment:
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2 max-h-[380px] overflow-y-auto pr-1">
                  {VERIFIED_APPRAISAL_PURPOSES.map((purpose, idx) => (
                    <div
                      key={purpose}
                      className="px-3 py-2 bg-black/30 border border-white/10 flex items-center justify-between text-xs text-white/90"
                    >
                      <span>{purpose}</span>
                      <span className="font-mono-tech text-[10px] text-[#E09900]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="mt-6 w-full py-3.5 bg-[#E09900] text-black font-semibold text-xs uppercase tracking-[0.18em] hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <span>Discuss Your Assignment Scope</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Geographic Coverage Dossier */}
              <div className="border border-black/20 bg-[#0D0D0D] text-white p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[#E09900] font-mono-tech text-xs uppercase tracking-[0.2em] mb-3">
                  <Compass className="w-4 h-4" />
                  <span>Areas We Serve</span>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-[#E09900] pl-4">
                    <div className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#E09900]">
                      Non-Residential / Commercial
                    </div>
                    <div className="font-serif-display text-xl text-white mt-0.5">
                      Entire State of Michigan
                    </div>
                    <p className="text-xs text-white/70 mt-1 leading-relaxed">
                      Including the Upper Peninsula. Our commercial appraisers travel the highways
                      and byways across all 83 Michigan counties.
                    </p>
                  </div>

                  <div className="border-l-2 border-white/30 pl-4">
                    <div className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-white/80">
                      Residential Appraisal Services
                    </div>
                    <div className="font-serif-display text-xl text-white mt-0.5">
                      Four-County Southeast MI Core
                    </div>
                    <p className="text-xs text-white/70 mt-1 leading-relaxed">
                      Dedicated coverage across Wayne, Oakland, Macomb, and Washtenaw counties.
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/15 flex items-center gap-2 text-xs font-mono-tech text-white/75">
                  <MapPin className="w-3.5 h-3.5 text-[#E09900]" />
                  <span>HQ: {COMPANY_INFO.address.full}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10: DISTINCTIVE INSIGHTS & RECOGNITION SECTION
          ("Judeh in the News & Valuation Perspectives" — Editorial Asymmetric Spread)
      ====================================================================== */}
      <section
        id="insights-section"
        aria-label="Insights, Valuation Guides & Judeh in the News"
        className="relative bg-[#F5F5F5] text-black py-24 md:py-36 border-b border-black/15"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Editorial Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-14 border-b border-black/15 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1.5px] bg-[#810014]" />
                <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#810014] font-medium">
                  08 / 08 — Judeh in the News &amp; Valuation Briefings
                </span>
              </div>
              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.04] text-black">
                Valuation Perspectives &amp;{' '}
                <span className="italic text-[#810014]">Public Record.</span>
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('insights')}
              className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white font-mono-tech text-xs uppercase tracking-[0.18em] hover:bg-[#810014] transition-colors"
            >
              <span>View Complete Insights Archive</span>
              <ArrowUpRight className="w-4 h-4 text-[#E09900]" />
            </button>
          </div>

          {/* Asymmetric Editorial Publication Layout: 7-Col Featured Lead Story + 5-Col Supporting Entries */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left 7 Columns: Featured Lead Monograph */}
            <article
              onClick={() => setSelectedInsight(featuredInsight)}
              className="lg:col-span-7 group cursor-pointer border border-black/15 bg-white hover:border-[#810014] transition-colors flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="relative h-[340px] sm:h-[420px] overflow-hidden bg-black">
                  <img
                    src={featuredInsight.image}
                    alt={featuredInsight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] bg-[#810014] text-white border border-[#E09900]/60 px-3 py-1">
                      FEATURED BRIEF // {featuredInsight.category}
                    </span>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.16em] bg-black/80 text-[#E09900] px-3 py-1">
                      {featuredInsight.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#810014] font-semibold">
                    {featuredInsight.verifiedContext}
                  </div>

                  <h3 className="font-serif-display text-3xl sm:text-4xl font-medium text-black group-hover:text-[#810014] transition-colors mt-2 leading-tight">
                    {featuredInsight.title}
                  </h3>

                  <p className="mt-4 text-base text-black/75 leading-relaxed">
                    {featuredInsight.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-black/10 space-y-2">
                    {featuredInsight.keyTakeaways.map((takeaway) => (
                      <div
                        key={takeaway}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-black/80"
                      >
                        <span className="w-1.5 h-1.5 bg-[#E09900] mt-2 shrink-0" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 sm:px-10 py-5 bg-[#0D0D0D] text-white border-t border-black/15 flex items-center justify-between">
                <span className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#E09900]">
                  Read Full Editorial Briefing
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#E09900] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </article>

            {/* Right 5 Columns: Stacked Supporting Verified News & Resource Entries */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {supportingInsights.map((entry) => (
                <article
                  key={entry.id}
                  onClick={() => setSelectedInsight(entry)}
                  className="group cursor-pointer border border-black/15 bg-white hover:bg-[#810014] hover:text-white hover:border-[#810014] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between flex-1 relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E09900] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#810014] group-hover:text-[#E09900] font-semibold">
                        {entry.category}
                      </span>
                      <span className="font-mono-tech text-[10px] text-black/50 group-hover:text-white/70">
                        {entry.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-2xl font-medium text-black group-hover:text-white leading-snug">
                      {entry.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-black/70 group-hover:text-white/85 leading-relaxed line-clamp-3">
                      {entry.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-black/10 group-hover:border-white/20 flex items-center justify-between text-xs font-mono-tech">
                    <span className="text-black/60 group-hover:text-[#E09900]">
                      {entry.verifiedContext}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#810014] group-hover:text-[#E09900] font-semibold">
                      <span>Read</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* The Judeh Group Three Divisions Architectural Strip */}
          <div className="mt-20 border border-black/20 bg-[#0D0D0D] text-white">
            <div className="bg-[#810014] px-6 sm:px-10 py-4 border-b border-[#E09900]/40 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
                THE JUDEH GROUP // THREE INTEGRATED PRACTICE DIVISIONS
              </span>
              <span className="font-mono-tech text-xs text-white/80">
                OVER 30 YEARS OF CLIENT SUCCESS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {JUDEH_GROUP_DIVISIONS.map((div) => (
                <div
                  key={div.id}
                  className="p-8 sm:p-10 flex flex-col justify-between hover:bg-white/[0.03] transition-colors"
                >
                  <div>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#E09900]">
                      {div.code}
                    </span>
                    <h3 className="font-serif-display text-3xl font-medium text-white mt-2">
                      {div.name}
                    </h3>
                    <p className="font-mono-tech text-xs text-white/70 mt-1">{div.headline}</p>
                    <p className="text-sm text-white/75 mt-4 leading-relaxed">{div.description}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate(div.targetRoute)}
                    className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between font-mono-tech text-xs uppercase tracking-[0.18em] text-[#E09900] hover:text-white transition-colors"
                  >
                    <span>{div.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Briefing Modal */}
        {selectedInsight && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedInsight(null)}
          >
            <div
              className="bg-white border-2 border-[#810014] max-w-3xl w-full overflow-hidden shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#810014] text-white px-6 sm:px-8 py-4 border-b border-[#E09900]/40 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#E09900]">
                  <BookOpen className="w-4 h-4" />
                  <span>{selectedInsight.category}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedInsight(null)}
                  className="text-white hover:text-[#E09900] p-1"
                  aria-label="Close briefing reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-10 space-y-6 max-h-[80vh] overflow-y-auto">
                <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#810014]">
                  {selectedInsight.verifiedContext}
                </div>
                <h3 className="font-serif-display text-3xl sm:text-4xl font-medium text-black leading-tight">
                  {selectedInsight.title}
                </h3>
                <p className="font-serif-display text-xl italic text-black/75">
                  {selectedInsight.subtitle}
                </p>

                <div className="h-56 sm:h-64 bg-black overflow-hidden border border-black/15">
                  <img
                    src={selectedInsight.image}
                    alt={selectedInsight.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-base text-black/80 leading-relaxed">
                  {selectedInsight.fullContent.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="bg-[#F5F5F5] border-l-4 border-[#810014] p-5 space-y-2.5">
                  <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#810014] font-semibold">
                    Key Analytical Takeaways
                  </div>
                  {selectedInsight.keyTakeaways.map((kt) => (
                    <div key={kt} className="flex items-start gap-2.5 text-xs sm:text-sm text-black/85">
                      <span className="text-[#E09900] font-bold">■</span>
                      <span>{kt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-black/15 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedInsight(null)}
                    className="font-mono-tech text-xs uppercase tracking-[0.18em] text-black/60 hover:text-black"
                  >
                    ← Return to Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedInsight(null);
                      onNavigate('contact');
                    }}
                    className="px-6 py-3 bg-[#810014] text-white font-mono-tech text-xs uppercase tracking-[0.18em] hover:bg-black transition-colors"
                  >
                    Schedule Consultation on This Topic →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
