import React, { useState } from 'react';
import {
  ArrowUpRight,
  Award,
  Building,
  Check,
  GraduationCap,
  Landmark,
  Maximize2,
  ShieldCheck,
  X,
} from 'lucide-react';
import {
  PROPERTY_GALLERY,
  VERIFIED_PROPERTY_TYPES,
  LEADERSHIP_PROFILE,
  COMPANY_INFO,
  GalleryPlate,
  PageRoute,
} from '../data/judehData';

interface GalleryAndLeadershipProps {
  onNavigate: (page: PageRoute, sectionOrServiceId?: string) => void;
}

export const GalleryAndLeadership: React.FC<GalleryAndLeadershipProps> = ({ onNavigate }) => {
  const [selectedPlate, setSelectedPlate] = useState<GalleryPlate | null>(null);
  const [showAllPropertyTypes, setShowAllPropertyTypes] = useState(false);

  return (
    <>
      {/* =====================================================================
          SECTION 7: VISUALLY STUNNING PROPERTY GALLERY
          (Asymmetric Curated Architectural Plates — Never a Basic 6-Card Grid)
      ====================================================================== */}
      <section
        id="gallery-section"
        aria-label="Commercial & Special-Purpose Property Categories Gallery"
        className="relative bg-white text-black py-24 md:py-36 border-b border-black/15"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Editorial Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-black/15 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1.5px] bg-[#810014]" />
                <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#810014] font-medium">
                  05 / 08 — Asset Class Coverage Across Michigan
                </span>
              </div>

              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.03] tracking-tight text-black">
                From Urban High-Rises to{' '}
                <span className="italic text-[#810014]">Special-Purpose Infrastructure.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="text-sm text-black/70 leading-relaxed">
                Illustrative architectural plates representing the commercial, industrial,
                institutional, and special-purpose property categories valued by Judeh &amp;
                Associates, Inc.
              </p>
            </div>
          </div>

          {/* Asymmetric Editorial Gallery Layout */}
          {/* Row 1: 8-Col Panoramic Landscape + 4-Col Tall Vertical Composition */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {PROPERTY_GALLERY.slice(0, 2).map((plate, idx) => (
              <article
                key={plate.id}
                onClick={() => setSelectedPlate(plate)}
                className={`${plate.colSpanClass} group cursor-pointer flex flex-col justify-between border border-black/15 bg-[#F5F5F5] hover:border-[#810014] transition-colors`}
              >
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={plate.image}
                    alt={plate.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      idx === 0 ? 'h-[360px] sm:h-[460px]' : 'h-[360px] sm:h-[460px]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                  {/* Top Plate Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] bg-[#810014] text-white border border-[#E09900]/60 px-3 py-1">
                      {plate.plateNumber} — {plate.category}
                    </span>
                    <span className="w-9 h-9 bg-black/75 border border-[#E09900]/60 text-[#E09900] flex items-center justify-center group-hover:bg-[#E09900] group-hover:text-black transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Overlay Title on Image Bottom */}
                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <div className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#E09900]">
                      {plate.valuationFocus}
                    </div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-medium mt-1">
                      {plate.title}
                    </h3>
                  </div>
                </div>

                {/* Editorial Caption & Sub-Types */}
                <div className="p-6 sm:p-8 bg-white flex-1 flex flex-col justify-between">
                  <p className="text-sm text-black/75 leading-relaxed">{plate.methodologyNote}</p>

                  <div className="mt-6 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {plate.subTypes.map((st) => (
                        <span
                          key={st}
                          className="font-mono-tech text-[10px] uppercase tracking-[0.12em] bg-[#F5F5F5] border border-black/10 px-2.5 py-1 text-black/80"
                        >
                          {st}
                        </span>
                      ))}
                    </div>

                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#810014] group-hover:text-[#E09900] font-semibold">
                      Inspect Brief →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Row 2: Reversed Asymmetry (5-Col Tall Architectural + 7-Col Panoramic Offset) */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {PROPERTY_GALLERY.slice(2, 4).map((plate) => (
              <article
                key={plate.id}
                onClick={() => setSelectedPlate(plate)}
                className={`${plate.colSpanClass} group cursor-pointer flex flex-col justify-between border border-black/15 bg-white hover:border-[#810014] transition-colors`}
              >
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={plate.image}
                    alt={plate.title}
                    className="w-full h-[340px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] bg-[#0D0D0D]/90 text-[#E09900] border border-[#E09900]/50 px-3 py-1">
                      {plate.plateNumber} — {plate.category}
                    </span>
                    <span className="w-9 h-9 bg-black/75 border border-[#E09900]/60 text-[#E09900] flex items-center justify-center group-hover:bg-[#E09900] group-hover:text-black transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <div className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#E09900]">
                      {plate.valuationFocus}
                    </div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-medium mt-1">
                      {plate.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-black/75 leading-relaxed">{plate.methodologyNote}</p>

                  <div className="mt-6 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {plate.subTypes.map((st) => (
                        <span
                          key={st}
                          className="font-mono-tech text-[10px] uppercase tracking-[0.12em] bg-[#F5F5F5] border border-black/10 px-2.5 py-1 text-black/80"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#810014] group-hover:text-[#E09900] font-semibold">
                      Inspect Brief →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Row 3: Two Offset Editorial Horizontal Plates (6-Col + 6-Col with Burgundy Feature Trim) */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {PROPERTY_GALLERY.slice(4, 6).map((plate, idx) => (
              <article
                key={plate.id}
                onClick={() => setSelectedPlate(plate)}
                className={`${plate.colSpanClass} ${
                  idx === 1 ? 'lg:mt-8' : ''
                } group cursor-pointer border border-black/15 bg-[#0D0D0D] text-white hover:border-[#E09900] transition-colors flex flex-col justify-between`}
              >
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={plate.image}
                    alt={plate.title}
                    className="w-full h-[300px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] bg-[#810014] text-white border border-[#E09900]/60 px-3 py-1">
                      {plate.plateNumber} — {plate.category}
                    </span>
                    <span className="w-9 h-9 bg-black/75 border border-[#E09900]/60 text-[#E09900] flex items-center justify-center group-hover:bg-[#E09900] group-hover:text-black transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#E09900]">
                      {plate.valuationFocus}
                    </div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-white mt-1.5">
                      {plate.title}
                    </h3>
                    <p className="text-sm text-white/75 mt-3 leading-relaxed">
                      {plate.methodologyNote}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-2">
                    {plate.subTypes.map((st) => (
                      <span
                        key={st}
                        className="font-mono-tech text-[10px] uppercase tracking-[0.12em] bg-white/5 border border-white/15 px-2.5 py-1 text-white/85"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Complete 28 Verified Property Categories Index Bar */}
          <div className="mt-16 border border-black/15 bg-[#F5F5F5] p-8 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/15">
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#810014] font-semibold">
                  COMPLETE VERIFIED TAXONOMY // 28 PROPERTY CATEGORIES APPRAISED
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-black mt-1">
                  Comprehensive Commercial, Special-Purpose &amp; Residential Scope
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowAllPropertyTypes(!showAllPropertyTypes)}
                className="self-start md:self-auto px-5 py-2.5 bg-[#810014] text-white font-mono-tech text-xs uppercase tracking-[0.16em] border border-[#810014] hover:bg-black transition-colors"
              >
                {showAllPropertyTypes ? 'Collapse Taxonomy' : 'View All 28 Property Types'}
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {(showAllPropertyTypes
                ? VERIFIED_PROPERTY_TYPES
                : VERIFIED_PROPERTY_TYPES.slice(0, 12)
              ).map((propType) => (
                <div
                  key={propType}
                  className="bg-white border border-black/10 px-3.5 py-2.5 flex items-center gap-2 text-xs sm:text-sm text-black/85"
                >
                  <span className="w-1.5 h-1.5 bg-[#810014] shrink-0" />
                  <span>{propType}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Plate Inspection Modal */}
        {selectedPlate && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPlate(null)}
          >
            <div
              className="bg-[#0D0D0D] border border-[#E09900] max-w-4xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#810014] px-6 py-4 border-b border-[#E09900]/40 flex items-center justify-between">
                <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900]">
                  {selectedPlate.plateNumber} // VALUATION SPECIFICATION BRIEF
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPlate(null)}
                  className="text-white hover:text-[#E09900] p-1"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-6 bg-black">
                  <img
                    src={selectedPlate.image}
                    alt={selectedPlate.title}
                    className="w-full h-72 md:h-full object-cover"
                  />
                </div>
                <div className="md:col-span-6 p-6 sm:p-8 text-white flex flex-col justify-between space-y-6">
                  <div>
                    <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#E09900]">
                      {selectedPlate.category}
                    </div>
                    <h3 className="font-serif-display text-3xl font-medium mt-2">
                      {selectedPlate.title}
                    </h3>
                    <p className="text-xs font-mono-tech text-white/60 mt-2">
                      FOCUS: {selectedPlate.valuationFocus}
                    </p>
                    <p className="text-sm text-white/80 mt-4 leading-relaxed">
                      {selectedPlate.methodologyNote}
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/15">
                      <div className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#E09900] mb-2.5">
                        Sub-Categories Appraised
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedPlate.subTypes.map((st) => (
                          <div key={st} className="flex items-center gap-2 text-xs text-white/85">
                            <Check className="w-3.5 h-3.5 text-[#E09900]" />
                            <span>{st}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-4">
                    <span className="font-mono-tech text-[10px] text-white/50 uppercase">
                      Illustrative Architectural Photography
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPlate(null);
                        onNavigate('contact');
                      }}
                      className="px-5 py-3 bg-[#E09900] text-black font-semibold text-xs uppercase tracking-[0.16em] hover:bg-white transition-colors"
                    >
                      Inquire on Asset Class →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* =====================================================================
          SECTION 8: LEADERSHIP AND CREDIBILITY SECTION
          (Dr. Jumana Judeh, PhD, MAI, CCIM, MCAO — Verified Credentials & Public Record)
      ====================================================================== */}
      <section
        id="leadership-section"
        aria-label="Executive Leadership & Institutional Credibility"
        className="relative bg-[#0D0D0D] text-white py-24 md:py-36 border-b border-[#E09900]/40 overflow-hidden"
      >
        <div className="absolute inset-0 bg-architectural-grid-dark pointer-events-none opacity-50" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-14 border-b border-[#E09900]/35 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1.5px] bg-[#E09900]" />
                <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
                  06 / 08 — Executive Leadership &amp; Public Stewardship
                </span>
              </div>
              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.04] text-white">
                Credibility Earned in the Market,{' '}
                <span className="italic text-[#E09900]">Proven in the Courtroom.</span>
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 bg-[#810014] border border-[#E09900]/60 text-xs font-mono-tech uppercase tracking-[0.18em] text-[#E09900] hover:bg-[#E09900] hover:text-black transition-colors"
            >
              <span>Full Executive Curriculum Vitae</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Main Leadership Spread: 5-Col Architectural & Typographic Monograph + 7-Col Verified Biography & Credentials */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Columns: Architectural Monograph Composition & Designation Seal */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative border border-[#E09900]/60 bg-[#810014] overflow-hidden shadow-2xl">
                {/* Architectural Executive Study Photograph */}
                <div className="relative h-[360px] overflow-hidden bg-black">
                  <img
                    src="/images/leadership-monolith.jpg"
                    alt="Executive advisory boardroom and architectural study overlooking metropolitan skyline"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#810014] via-[#810014]/45 to-transparent" />

                  {/* Tasteful Typographic Monogram & Verified Designation Seal */}
                  <div className="absolute inset-x-6 bottom-6 border border-[#E09900] bg-[#0D0D0D]/95 p-6">
                    <div className="flex items-center justify-between border-b border-[#E09900]/30 pb-3 mb-3">
                      <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#E09900]">
                        PRESIDENT &amp; CEO • CHIEF APPRAISER
                      </span>
                      <span className="font-serif-display text-lg font-semibold text-[#E09900]">
                        23+ YRS
                      </span>
                    </div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-white">
                      {LEADERSHIP_PROFILE.name}
                    </h3>
                    <p className="text-xs text-white/75 mt-1.5 font-mono-tech">
                      CHAIR, STATE OF MICHIGAN BOARD OF REAL ESTATE APPRAISERS
                    </p>
                  </div>
                </div>

                {/* Designation Badges */}
                <div className="p-6 sm:p-8 bg-[#810014] space-y-3">
                  <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900] mb-3">
                    Verified Academic &amp; Professional Designations
                  </div>
                  <div className="divide-y divide-white/15">
                    {LEADERSHIP_PROFILE.designations.map((des) => (
                      <div key={des.code} className="py-2.5 flex items-start gap-3">
                        <span className="font-mono-tech text-xs font-semibold text-[#E09900] w-24 shrink-0">
                          {des.code}
                        </span>
                        <span className="text-xs text-white/90 leading-relaxed">{des.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* WBE & MDOT DBE Certifications Block */}
              <div className="border border-white/15 bg-white/[0.03] p-6 space-y-4">
                <div className="flex items-center gap-2.5 text-[#E09900] font-mono-tech text-xs uppercase tracking-[0.18em]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Firm Certifications</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {COMPANY_INFO.certifications.slice(0, 2).map((cert) => (
                    <div key={cert.code} className="border border-white/10 bg-black/50 p-4">
                      <div className="font-mono-tech text-[10px] text-[#E09900] uppercase tracking-[0.16em]">
                        {cert.code}
                      </div>
                      <div className="font-serif-display text-lg text-white mt-1">{cert.title}</div>
                      <p className="text-xs text-white/65 mt-1 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Editorial Biography, Public Service Milestones & Institutional Roster */}
            <div className="lg:col-span-7 space-y-10">
              {/* Highlight Quote */}
              <blockquote className="border-l-2 border-[#E09900] pl-6 py-1">
                <p className="font-serif-display text-2xl sm:text-3xl italic text-white leading-snug">
                  {LEADERSHIP_PROFILE.summaryQuote}
                </p>
              </blockquote>

              {/* Verified Biography Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed">
                {LEADERSHIP_PROFILE.biography.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Three Pillars of Credentials: Education, Appointments, Honors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/15">
                {/* State Appointments & Public Leadership */}
                <div className="border border-white/15 bg-white/[0.02] p-6">
                  <div className="flex items-center gap-2.5 text-[#E09900] font-mono-tech text-xs uppercase tracking-[0.18em] mb-4">
                    <Landmark className="w-4 h-4" />
                    <span>Gubernatorial &amp; Civic Leadership</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-white/85">
                    {LEADERSHIP_PROFILE.appointmentsAndBoards.slice(0, 5).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#E09900] mt-0.5">■</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Honors, Hall of Fame & Academic Credentials */}
                <div className="border border-white/15 bg-white/[0.02] p-6">
                  <div className="flex items-center gap-2.5 text-[#E09900] font-mono-tech text-xs uppercase tracking-[0.18em] mb-4">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education &amp; Statewide Honors</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-white/85">
                    {LEADERSHIP_PROFILE.education.slice(0, 3).map((edu) => (
                      <li key={edu} className="flex items-start gap-2">
                        <span className="text-[#E09900] mt-0.5">■</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                    {LEADERSHIP_PROFILE.honorsAndAwards.slice(0, 3).map((award) => (
                      <li key={award} className="flex items-start gap-2">
                        <Award className="w-3.5 h-3.5 text-[#E09900] shrink-0 mt-0.5" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verified Public & Institutional Client Roster */}
              <div className="border border-[#E09900]/40 bg-[#810014]/30 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <Building className="w-4 h-4 text-[#E09900]" />
                    <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900]">
                      Verified Public &amp; Institutional Client Roster
                    </span>
                  </div>
                  <span className="font-mono-tech text-[11px] text-white/60">
                    FEDERAL • STATE • MUNICIPAL
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {LEADERSHIP_PROFILE.institutionalClients.map((client) => (
                    <div
                      key={client}
                      className="bg-black/45 border border-white/10 px-3.5 py-2.5 text-xs text-white/90 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#E09900] shrink-0" />
                      <span>{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
