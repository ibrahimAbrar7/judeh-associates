import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { CORE_SERVICES, WHO_WE_SERVE, PageRoute } from '../data/judehData';

interface ExpertiseAndAudiencesProps {
  onNavigate: (page: PageRoute, sectionOrServiceId?: string) => void;
}

export const ExpertiseAndAudiences: React.FC<ExpertiseAndAudiencesProps> = ({ onNavigate }) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const activeService = CORE_SERVICES[activeServiceIndex];

  return (
    <>
      {/* =====================================================================
          SECTION 5: SIGNATURE EXPERTISE EXPERIENCE (DEEP BURGUNDY CHAMBER)
      ====================================================================== */}
      <section
        id="expertise-section"
        aria-label="Signature Expertise Built Around Every Property Decision"
        className="relative bg-[#810014] text-white py-24 md:py-36 border-b border-[#E09900]/40 overflow-hidden"
      >
        {/* Subtle Gold Architectural Drafting Grid */}
        <div className="absolute inset-0 bg-architectural-grid-dark pointer-events-none opacity-70" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#E09900]/35 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[1.5px] bg-[#E09900]" />
                <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
                  03 / 08 — Core Valuation &amp; Advisory Practice
                </span>
              </div>

              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.03] tracking-tight text-white">
                Expertise Built Around{' '}
                <span className="italic text-[#E09900]">Every Property Decision.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col lg:items-end justify-end">
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-5 lg:text-right">
                Select or hover across our five verified practice pillars to inspect deliverables,
                statutory standards, and valuation methodologies.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#E09900] hover:text-white transition-colors"
              >
                <span>Open Complete Practice Directory</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Split Ledger: 7 Columns Numbered Rows + 5 Columns Synchronized Architectural Viewport */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 7 Columns: Interactive Numbered Service Rows */}
            <div className="lg:col-span-7 divide-y divide-white/15 border-t border-b border-white/15">
              {CORE_SERVICES.map((service, index) => {
                const isSelected = index === activeServiceIndex;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveServiceIndex(index)}
                    onClick={() => setActiveServiceIndex(index)}
                    className={`group relative transition-colors duration-300 cursor-pointer ${
                      isSelected ? 'bg-black/35' : 'hover:bg-black/20'
                    }`}
                  >
                    {/* Animated Gold Top Rule that Extends Across Selected Service Row */}
                    <div
                      className={`h-[2px] bg-[#E09900] transition-transform duration-500 origin-left ${
                        isSelected ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />

                    <div className="p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          <span
                            className={`font-mono-tech text-sm sm:text-base transition-all duration-300 ${
                              isSelected
                                ? 'text-[#E09900] font-semibold translate-x-1'
                                : 'text-white/50 group-hover:text-[#E09900]'
                            }`}
                          >
                            {service.number}
                          </span>

                          <div>
                            <h3
                              className={`font-serif-display text-2xl sm:text-3xl md:text-4xl font-medium transition-all duration-300 ${
                                isSelected
                                  ? 'text-white translate-x-1'
                                  : 'text-white/85 group-hover:text-white group-hover:translate-x-1'
                              }`}
                            >
                              {service.title}
                            </h3>
                            <p className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#E09900] mt-1.5">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('services', service.id);
                          }}
                          aria-label={`Explore ${service.title}`}
                          className={`w-10 h-10 border flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isSelected
                              ? 'bg-[#E09900] border-[#E09900] text-black'
                              : 'border-white/25 text-white group-hover:border-[#E09900] group-hover:text-[#E09900]'
                          }`}
                        >
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>

                      {/* Concise Description & Expandable Deliverables on Active Row */}
                      <div className="mt-4 pl-0 sm:pl-10">
                        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                          {service.summary}
                        </p>

                        {isSelected && (
                          <div className="mt-6 pt-5 border-t border-white/15 space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {service.standards.map((std) => (
                                <span
                                  key={std}
                                  className="font-mono-tech text-[11px] uppercase tracking-[0.14em] bg-[#810014] border border-[#E09900]/50 text-[#E09900] px-2.5 py-1"
                                >
                                  {std}
                                </span>
                              ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                              {service.deliverables.slice(0, 4).map((deliv) => (
                                <div
                                  key={deliv}
                                  className="flex items-start gap-2 text-xs text-white/85"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E09900] shrink-0 mt-0.5" />
                                  <span>{deliv}</span>
                                </div>
                              ))}
                            </div>

                            {/* Mobile Inline Image Preview (Visible on screens < lg) */}
                            <div className="lg:hidden mt-4 border border-[#E09900]/40 bg-black overflow-hidden">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-52 object-cover"
                              />
                              <div className="p-3 bg-[#0D0D0D] text-[11px] font-mono-tech text-[#E09900]">
                                {service.highlightMetric}
                              </div>
                            </div>

                            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onNavigate('services', service.id);
                                }}
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E09900] hover:underline"
                              >
                                <span>Examine Full Service Scope</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </button>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onNavigate('contact', service.id);
                                }}
                                className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.16em] text-white/80 hover:text-[#E09900]"
                              >
                                <span>Request Assignment Quote →</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right 5 Columns: Sticky Architectural Image & Dossier Panel (Desktop) */}
            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
              <div className="border border-[#E09900]/60 bg-[#0D0D0D] shadow-2xl overflow-hidden">
                {/* Top Bar */}
                <div className="px-6 py-3.5 bg-black border-b border-[#E09900]/30 flex items-center justify-between font-mono-tech text-xs">
                  <span className="text-[#E09900]">
                    PRACTICE DOSSIER // {activeService.number} OF 05
                  </span>
                  <span className="text-white/60">USPAP • FIRREA</span>
                </div>

                {/* Synchronized Architectural Photograph with Crossfade */}
                <div className="relative h-[380px] overflow-hidden bg-black">
                  {CORE_SERVICES.map((srv, idx) => (
                    <img
                      key={srv.id}
                      src={srv.image}
                      alt={srv.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        idx === activeServiceIndex
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] bg-[#810014] text-white border border-[#E09900]/60 px-3 py-1">
                      {activeService.highlightMetric}
                    </span>
                  </div>
                </div>

                {/* Dossier Details */}
                <div className="p-7 space-y-5">
                  <div>
                    <div className="font-mono-tech text-[11px] text-white/60">
                      {activeService.imageCaption}
                    </div>
                    <h4 className="font-serif-display text-2xl font-medium text-white mt-2">
                      {activeService.title}
                    </h4>
                    <p className="text-sm text-white/75 mt-2 leading-relaxed">
                      {activeService.detailedDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/15">
                    <div className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#E09900] mb-2.5">
                      Primary Client Constituencies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeService.idealFor.map((client) => (
                        <span
                          key={client}
                          className="text-xs text-white/85 bg-white/5 border border-white/15 px-3 py-1"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate('services', activeService.id)}
                      className="flex-1 py-3.5 px-5 bg-[#E09900] text-black font-semibold text-xs uppercase tracking-[0.18em] hover:bg-white transition-colors flex items-center justify-center gap-2"
                    >
                      <span>View Practice Specifications</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: HIGH-IMPACT "WHO WE SERVE" SECTION
          (Asymmetric Architectural Matrix — Never Repetitive Rounded Cards)
      ====================================================================== */}
      <section
        id="clients-section"
        aria-label="Who We Serve — Client Constituencies"
        className="relative bg-[#F5F5F5] text-black py-24 md:py-36 border-b border-black/15"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Header Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-black/15 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1.5px] bg-[#810014]" />
                <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#810014] font-medium">
                  04 / 08 — Institutional, Legal &amp; Private Constituencies
                </span>
              </div>

              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-tight text-black">
                Trusted by Decision-Makers{' '}
                <span className="italic text-[#810014]">Across Six Sectors.</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-base text-black/75 leading-relaxed">
                Each valuation assignment carries distinct statutory, financial, or evidentiary
                requirements. We tailor our analytical scope to the exact legal, lending, accounting,
                or investment mandate of our client.
              </p>
            </div>
          </div>

          {/* Top Row: Two Featured 6-Column Executive Blocks (Attorneys & Lenders) */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 border border-black/15 bg-white">
            {WHO_WE_SERVE.slice(0, 2).map((audience, idx) => (
              <div
                key={audience.id}
                className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between relative group transition-colors duration-300 hover:bg-[#810014] hover:text-white ${
                  idx === 0 ? 'border-b lg:border-b-0 lg:border-r border-black/15' : ''
                }`}
              >
                {/* Top Gold Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E09900] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#810014] group-hover:text-[#E09900] font-semibold">
                      CONSTITUENCY {audience.index} // {audience.roleTag}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#E09900]" />
                  </div>

                  <h3 className="font-serif-display text-3xl sm:text-4xl font-medium text-black group-hover:text-white transition-colors">
                    {audience.title}
                  </h3>

                  <p className="mt-4 text-base text-black/75 group-hover:text-white/85 leading-relaxed">
                    {audience.summary}
                  </p>

                  <div className="mt-8 pt-6 border-t border-black/10 group-hover:border-white/20 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {audience.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 bg-[#E09900] mt-2 shrink-0" />
                        <span className="text-black/85 group-hover:text-white/90">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-5 border-t border-black/10 group-hover:border-white/20 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate('services', audience.relatedServiceId)}
                    className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#810014] group-hover:text-[#E09900] font-semibold"
                  >
                    <span>Explore Dedicated Practice</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('contact', audience.id)}
                    className="font-mono-tech text-xs uppercase tracking-[0.14em] text-black/60 group-hover:text-white/80 hover:underline"
                  >
                    Consult →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row: Four Asymmetric Columns for Government, Investors/Owners, Accountants, and Title/Insurance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-x border-b border-black/15 bg-white divide-y md:divide-y-0 md:divide-x divide-black/15">
            {WHO_WE_SERVE.slice(2).map((audience) => (
              <div
                key={audience.id}
                className="p-7 sm:p-8 flex flex-col justify-between group hover:bg-[#0D0D0D] hover:text-white transition-colors duration-300 relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E09900] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  <div className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#810014] group-hover:text-[#E09900] font-semibold">
                    {audience.index} // {audience.roleTag}
                  </div>

                  <h3 className="font-serif-display text-2xl sm:text-[26px] font-medium text-black group-hover:text-white mt-3 leading-snug">
                    {audience.title}
                  </h3>

                  <p className="mt-3 text-sm text-black/70 group-hover:text-white/80 leading-relaxed">
                    {audience.summary}
                  </p>

                  <ul className="mt-6 pt-5 border-t border-black/10 group-hover:border-white/15 space-y-2.5">
                    {audience.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="text-xs text-black/80 group-hover:text-white/85 flex items-start gap-2"
                      >
                        <span className="text-[#E09900] font-bold">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-black/10 group-hover:border-white/15">
                  <button
                    type="button"
                    onClick={() => onNavigate('services', audience.relatedServiceId)}
                    className="w-full flex items-center justify-between font-mono-tech text-xs uppercase tracking-[0.16em] text-[#810014] group-hover:text-[#E09900] font-medium"
                  >
                    <span>View Capabilities</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
