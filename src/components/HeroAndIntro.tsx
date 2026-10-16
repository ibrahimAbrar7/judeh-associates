import React from 'react';
import { ArrowUpRight, ArrowDown, Shield, Building2, Scale, Award } from 'lucide-react';
import { PageRoute } from '../data/judehData';

interface HeroAndIntroProps {
  onNavigate: (page: PageRoute, sectionOrServiceId?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroAndIntro: React.FC<HeroAndIntroProps> = ({
  onNavigate,
  onScrollToSection,
}) => {
  return (
    <>
      {/* =====================================================================
          SECTION 3: FULL-SCREEN CINEMATIC HERO
      ====================================================================== */}
      <section
        aria-label="Judeh & Associates Commercial Real Estate Valuation Hero"
        className="relative min-h-screen w-full bg-[#0D0D0D] text-white overflow-hidden flex flex-col justify-between pt-28 pb-12 lg:pt-36 lg:pb-16"
      >
        {/* Background Architectural Photograph with Coordinated Entrance Reveal */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-architecture.jpg"
            alt="Soaring contemporary commercial glass and limestone high-rise architecture at twilight"
            className="w-full h-full object-cover object-center animate-hero-image"
             fetchPriority="high"
          />
          {/* Asymmetric Burgundy & Obsidian Scrim for Editorial Contrast while Keeping Right-Side Architecture Vivid */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(102deg, rgba(129, 0, 20, 0.94) 0%, rgba(13, 13, 13, 0.84) 48%, rgba(13, 13, 13, 0.35) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/50" />
        </div>

        {/* Architectural Framing Hairlines */}
        <div className="hidden lg:block absolute inset-y-0 left-12 w-[1px] bg-white/10 z-10 pointer-events-none" />
        <div className="hidden lg:block absolute inset-y-0 right-12 w-[1px] bg-white/10 z-10 pointer-events-none" />

        {/* Main Hero Content Grid */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-16 my-auto pt-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            {/* Left 8 Columns: Asymmetric Editorial Headline & Actions */}
            <div className="lg:col-span-8">
              {/* Section Coordinate & Verification Tag */}
              <div className="animate-fade-up-1 flex flex-wrap items-center gap-3 mb-6">
                <span className="font-mono-tech text-xs uppercase tracking-[0.24em] text-[#E09900]">
                  01 / 08 — Commercial Valuation &amp; Advisory
                </span>
                <span className="w-8 h-[1px] bg-[#E09900]/60" />
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-white/80 bg-[#810014] border border-[#E09900]/40 px-3 py-1">
                  Dearborn &amp; Statewide Michigan
                </span>
              </div>

              {/* Oversized Display Headline */}
              <h1 className="animate-fade-up-2 font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-medium leading-[1.0] sm:leading-[0.98] tracking-[-0.02em] text-white">
                Clarity in <span className="italic text-[#E09900]">Value.</span>
                <span className="block mt-2">
                  Confidence in Every <span className="italic font-normal">Decision.</span>
                </span>
              </h1>

              {/* Animated Gold Datum Line */}
              <div className="my-8 max-w-xl">
                <div className="h-[1.5px] w-full bg-[#E09900] animate-gold-rule" />
              </div>

              {/* Supporting Statement */}
              <p className="animate-fade-up-3 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl font-light leading-relaxed">
                For over 30 years, <strong className="font-medium text-white">The Judeh Group</strong>{' '}
                and <strong className="font-medium text-white">Judeh &amp; Associates, Inc.</strong>{' '}
                have delivered authoritative commercial property appraisal, real estate consulting,
                eminent domain valuation, and expert witness testimony for institutions, legal
                counsel, government agencies, and property owners across Michigan.
              </p>

              {/* Two Prominent Actions */}
              <div className="animate-fade-up-4 mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
                <button
                  type="button"
                  onClick={() => onScrollToSection('expertise-section')}
                  className="group inline-flex items-center justify-center gap-4 bg-[#E09900] text-black px-8 py-4.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] border border-[#E09900] hover:bg-[#810014] hover:text-white hover:border-[#E09900] transition-all duration-300 shadow-xl"
                >
                  <span>Explore Our Expertise</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center justify-center gap-4 bg-[#810014]/85 backdrop-blur-sm text-white px-8 py-4.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] border border-[#E09900]/60 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E09900] group-hover:text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Right 4 Columns: Architectural Burgundy Ledger Box */}
            <div className="lg:col-span-4 animate-fade-up-4">
              <div className="bg-[#810014]/90 backdrop-blur-md border border-[#E09900]/50 p-6 sm:p-8 relative">
                <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#E09900]" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#E09900]" />

                <div className="flex items-center justify-between border-b border-[#E09900]/30 pb-4 mb-5">
                  <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#E09900]">
                    Firm Credentials Dossier
                  </span>
                  <span className="font-mono-tech text-[11px] text-white/75">EST. 30+ YRS</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <Award className="w-4 h-4 text-[#E09900] shrink-0 mt-1" />
                    <div>
                      <div className="font-serif-display text-lg font-medium text-white leading-snug">
                        Jumana Judeh, PhD, MAI, CCIM, MCAO
                      </div>
                      <p className="text-xs text-white/75 mt-0.5">
                        President &amp; Chief Appraiser • Chair, State of Michigan Board of Real
                        Estate Appraisers
                      </p>
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/15" />

                  <div className="flex items-start gap-3.5">
                    <Scale className="w-4 h-4 text-[#E09900] shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E09900]">
                        Court-Tested Authority
                      </div>
                      <p className="text-xs text-white/80 mt-0.5">
                        Expert witness before the Michigan Tax Tribunal, Circuit &amp; District
                        Courts, AAA, and Lead Review Team on the $2.0B Gordie Howe Bridge parcels.
                      </p>
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/15" />

                  <div className="flex items-start gap-3.5">
                    <Building2 className="w-4 h-4 text-[#E09900] shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E09900]">
                        100% Woman-Owned (WBE) &amp; MDOT DBE
                      </div>
                      <p className="text-xs text-white/80 mt-0.5">
                        USPAP, FIRREA &amp; Federal Yellow Book compliant across all 83 Michigan
                        counties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Metadata & Restrained Scroll Cue */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-16 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-white/75">
            <span>
              <strong className="text-[#E09900]">COMMERCIAL COVERAGE:</strong> STATE OF MICHIGAN +
              UPPER PENINSULA
            </span>
            <span>
              <strong className="text-[#E09900]">RESIDENTIAL CORE:</strong> WAYNE • OAKLAND • MACOMB
              • WASHTENAW
            </span>
          </div>

          <button
            type="button"
            onClick={() => onScrollToSection('intro-section')}
            className="group inline-flex items-center gap-3 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-white/80 hover:text-[#E09900] transition-colors"
          >
            <span>Scroll to Explore</span>
            <span className="relative w-5 h-8 border border-[#E09900]/60 flex items-center justify-center overflow-hidden">
              <ArrowDown className="w-3 h-3 text-[#E09900] animate-scroll-cue" />
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: EDITORIAL INTRODUCTION SPREAD
          ("Property Value Is More Than a Number.")
      ====================================================================== */}
      <section
        id="intro-section"
        aria-label="Editorial Introduction: Property Value Is More Than a Number"
        className="relative bg-white text-black py-24 md:py-36 border-b border-black/10 overflow-hidden"
      >
        {/* Subtle Architectural Grid Lines on White */}
        <div className="absolute inset-0 bg-architectural-grid-light pointer-events-none" />

        {/* Oversized Typographic Watermark Behind Composition */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-10 left-8 font-serif-display text-[220px] leading-none font-semibold text-black/[0.035] select-none pointer-events-none"
        >
          1993—2026
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Top Editorial Coordinate Strip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-14 border-b border-black/15 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#810014]" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#810014] font-medium">
                02 / 08 — The Philosophy of Valuation
              </span>
            </div>
            <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-black/60">
              JUDEH &amp; ASSOCIATES, INC. • DEARBORN, MICHIGAN
            </div>
          </div>

          {/* Asymmetric 12-Column Editorial Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
            {/* Left 6 Columns: Monumental Statement & Editorial Narrative */}
            <div className="lg:col-span-6 lg:pr-6">
              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight text-black">
                Property Value Is More Than a{' '}
                <span className="italic text-[#810014] underline decoration-[#E09900] decoration-1 underline-offset-8">
                  Number.
                </span>
              </h2>

              <div className="mt-8 pl-6 border-l-2 border-[#E09900] space-y-5">
                <p className="font-serif-display text-2xl sm:text-3xl italic text-black/90 leading-snug">
                  “We understand what creates property value, how such value is influenced, and how
                  the characteristics of a property are affected by market conditions.”
                </p>
                <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#810014]">
                  — The Judeh Valuation Mandate
                </p>
              </div>

              <div className="mt-8 space-y-5 text-base sm:text-lg text-black/75 leading-relaxed">
                <p>
                  Behind every commercial asset, industrial facility, infrastructure corridor, or
                  development parcel stands a high-stakes financial or legal decision. A defensible
                  valuation is not merely an arithmetic output—it is an evidentiary narrative built
                  on physical inspection, market economics, statutory compliance, and seasoned
                  analytical judgment.
                </p>
                <p>
                  Recognized as one of Southeast Michigan’s premier real property appraisal and
                  consulting firms for over 23 years—and backed by over 30 years of multidisciplinary
                  experience across <strong className="text-black font-semibold">The Judeh Group</strong>—our
                  team equips lenders, legal counsel, government authorities, accountants, and
                  investors with clarity that withstands market volatility and judicial scrutiny.
                </p>
              </div>

              {/* Three Architectural Pillar Callouts */}
              <div className="mt-12 pt-8 border-t border-black/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900] font-semibold">
                    01 // EVIDENTIARY
                  </div>
                  <div className="font-serif-display text-2xl font-semibold text-[#810014] mt-1">
                    USPAP &amp; FIRREA
                  </div>
                  <p className="text-xs text-black/65 mt-1 leading-relaxed">
                    Strict adherence to federal lending, IRS, and Yellow Book land acquisition
                    standards.
                  </p>
                </div>

                <div className="sm:border-l sm:border-black/15 sm:pl-6">
                  <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900] font-semibold">
                    02 // ANALYTICAL
                  </div>
                  <div className="font-serif-display text-2xl font-semibold text-[#810014] mt-1">
                    ARGUS &amp; DCF
                  </div>
                  <p className="text-xs text-black/65 mt-1 leading-relaxed">
                    Institutional discounted cash flow modeling, capitalization extraction, and
                    market rent studies.
                  </p>
                </div>

                <div className="sm:border-l sm:border-black/15 sm:pl-6">
                  <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900] font-semibold">
                    03 // AUTHORITATIVE
                  </div>
                  <div className="font-serif-display text-2xl font-semibold text-[#810014] mt-1">
                    Court-Tested
                  </div>
                  <p className="text-xs text-black/65 mt-1 leading-relaxed">
                    Regular expert witness testimony in Circuit Court, District Court, AAA, and the
                    Michigan Tax Tribunal.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Asymmetric Overlapping Architectural Composition */}
            <div className="lg:col-span-6 relative">
              {/* Structural Burgundy Offset Backdrop Panel */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-6 -right-6 bottom-12 left-12 bg-[#810014] border border-[#E09900]"
              />

              {/* Primary Architectural Photograph */}
              <div className="relative z-10 border border-black/20 bg-black overflow-hidden shadow-2xl">
                <img
                  src="/images/editorial-intro.jpg"
                  alt="Upward architectural study of modern limestone and bronze glass commercial headquarters"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                {/* Subtle bottom caption bar */}
                <div className="bg-[#0D0D0D] text-white px-6 py-4 border-t border-[#E09900]/40 flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-[#E09900]">ARCH. STUDY I — COMMERCIAL &amp; INSTITUTIONAL</span>
                  <span className="text-white/70">ILLUSTRATIVE ARCHITECTURE</span>
                </div>
              </div>

              {/* Overlapping Burgundy & Gold Editorial Monograph Card */}
              <div className="relative z-20 -mt-10 sm:-mt-16 ml-4 sm:ml-10 mr-4 sm:mr-8 bg-[#810014] text-white p-6 sm:p-8 border border-[#E09900] shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#E09900] block">
                      The Judeh Group Architecture
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-white mt-1">
                      Three Integrated Advisory Teams
                    </h3>
                  </div>
                  <Shield className="w-6 h-6 text-[#E09900] shrink-0" />
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/20 text-xs">
                  <div>
                    <div className="font-mono-tech text-[#E09900] uppercase">01. Valuation</div>
                    <p className="text-white/85 mt-1">
                      Commercial, industrial, residential &amp; special-purpose appraisals.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono-tech text-[#E09900] uppercase">02. Realtors</div>
                    <p className="text-white/85 mt-1">
                      Commercial acquisition, disposition &amp; property management.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono-tech text-[#E09900] uppercase">03. Motivational</div>
                    <p className="text-white/85 mt-1">
                      Executive leadership, coaching &amp; global keynote speaking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
