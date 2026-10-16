import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Scale,
  Building2,
  FileSpreadsheet,
  Compass,
  ShieldCheck,
  Ruler,
  Camera,
} from 'lucide-react';
import {
  CORE_SERVICES,
  VERIFIED_APPRAISAL_PURPOSES,
  VERIFIED_PROPERTY_TYPES,
  JUDEH_GROUP_DIVISIONS,
  PageRoute,
} from '../data/judehData';

interface ServicesPageProps {
  initialServiceId?: string;
  onNavigate: (page: PageRoute, sectionOrServiceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ initialServiceId, onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId && CORE_SERVICES.some((s) => s.id === initialServiceId)
      ? initialServiceId
      : CORE_SERVICES[0].id
  );

  useEffect(() => {
    if (initialServiceId && CORE_SERVICES.some((s) => s.id === initialServiceId)) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const activeService =
    CORE_SERVICES.find((s) => s.id === selectedServiceId) || CORE_SERVICES[0];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Page Hero Banner in Deep Burgundy */}
      <section className="relative bg-[#810014] text-white pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E09900]/40 overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid-dark pointer-events-none opacity-65" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1.5px] bg-[#E09900]" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
              PRACTICE DIRECTORY // VALUATION, LITIGATION &amp; ADVISORY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.0] tracking-tight text-white">
                Comprehensive Valuation &amp;{' '}
                <span className="italic text-[#E09900]">Consulting Practice.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-white/85 font-light leading-relaxed">
                Complete commercial, industrial, special-purpose, and residential real property
                appraisal and advisory across Michigan—compliant with USPAP, FIRREA, and Federal
                Yellow Book standards.
              </p>
            </div>
          </div>

          {/* Interactive Practice Selector Tabs */}
          <div className="mt-14 pt-8 border-t border-[#E09900]/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {CORE_SERVICES.map((service) => {
              const isActive = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-4 text-left border transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#E09900] text-black border-[#E09900] shadow-xl'
                      : 'bg-black/30 text-white border-white/15 hover:border-[#E09900]/60'
                  }`}
                >
                  <span
                    className={`font-mono-tech text-xs ${
                      isActive ? 'text-[#810014] font-bold' : 'text-[#E09900]'
                    }`}
                  >
                    {service.number} // PRACTICE
                  </span>
                  <span className="font-serif-display text-xl font-medium mt-2 leading-snug">
                    {service.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Service Deep-Dive Dossier */}
      <section className="py-20 md:py-28 border-b border-black/15 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Columns: Practice Specification */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono-tech text-xs uppercase tracking-[0.2em] bg-[#810014] text-[#E09900] px-3.5 py-1.5">
                  PRACTICE AREA {activeService.number}
                </span>
                <span className="font-mono-tech text-xs uppercase tracking-[0.16em] text-black/60">
                  {activeService.highlightMetric}
                </span>
              </div>

              <div>
                <h2 className="font-serif-display text-4xl sm:text-5xl font-medium text-black leading-tight">
                  {activeService.title}
                </h2>
                <p className="font-serif-display text-2xl italic text-[#810014] mt-2">
                  {activeService.subtitle}
                </p>
              </div>

              <p className="text-base sm:text-lg text-black/80 leading-relaxed">
                {activeService.detailedDescription}
              </p>

              {/* Deliverables List */}
              <div className="border border-black/15 bg-[#F5F5F5] p-6 sm:p-8">
                <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#810014] font-semibold pb-4 border-b border-black/15">
                  Verified Scope of Deliverables &amp; Analytical Capabilities
                </h3>
                <div className="mt-5 space-y-3.5">
                  {activeService.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm sm:text-base text-black/85">
                      <CheckCircle2 className="w-5 h-5 text-[#810014] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standards & Constituencies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-black/15 p-6">
                  <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#810014] font-semibold mb-3">
                    Regulatory &amp; Technical Standards
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeService.standards.map((std) => (
                      <span
                        key={std}
                        className="font-mono-tech text-xs bg-[#0D0D0D] text-[#E09900] px-3 py-1.5"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border border-black/15 p-6">
                  <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#810014] font-semibold mb-3">
                    Designed For
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeService.idealFor.map((client) => (
                      <span
                        key={client}
                        className="text-xs bg-[#F5F5F5] border border-black/15 text-black/85 px-3 py-1.5"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Architectural Plate & Direct Consultation Intake */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-black/20 bg-[#0D0D0D] text-white overflow-hidden shadow-2xl">
                <div className="h-[340px] overflow-hidden bg-black relative">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/80 px-5 py-3 border-t border-[#E09900]/40 font-mono-tech text-[11px] text-[#E09900]">
                    {activeService.imageCaption}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <h3 className="font-serif-display text-2xl font-medium text-white">
                    Engage Our {activeService.shortTitle} Team
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    Speak directly with Chief Appraiser Dr. Jumana Judeh, PhD, MAI, CCIM, MCAO or
                    submit your property parameters for a confidential scope and fee proposal.
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', activeService.id)}
                    className="w-full py-4 bg-[#E09900] text-black font-semibold text-xs uppercase tracking-[0.18em] hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Proposal for {activeService.shortTitle}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Pillars of the Commercial Appraisal Process (Verified from judehonline.com/appraisal/) */}
      <section className="py-20 md:py-28 bg-[#0D0D0D] text-white border-b border-[#E09900]/40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mb-14">
            <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
              THE COMMERCIAL REAL ESTATE APPRAISAL PROCESS
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-medium text-white mt-2">
              Three Approaches to Value &amp; On-Site Verification
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#E09900]/35 divide-y md:divide-y-0 md:divide-x divide-white/15 bg-black/50">
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#E09900]">STAGE 01</span>
                <Compass className="w-5 h-5 text-[#E09900]" />
              </div>
              <h3 className="font-serif-display text-2xl font-medium text-white">
                Comprehensive Inspection
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Our appraisers conduct a thorough physical inspection of the property, verifying all
                elements of construction, site utility, and physical condition in an unbiased
                assessment.
              </p>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#E09900]">APPROACH I</span>
                <Building2 className="w-5 h-5 text-[#E09900]" />
              </div>
              <h3 className="font-serif-display text-2xl font-medium text-white">Cost Value</h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Development of replacement cost of existing improvements, to which physical,
                functional, and external depreciation are applied, after which land value as vacant
                is added.
              </p>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#E09900]">APPROACH II</span>
                <Scale className="w-5 h-5 text-[#E09900]" />
              </div>
              <h3 className="font-serif-display text-2xl font-medium text-white">
                Sales Comparison
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Sales of comparable properties in the same or competing markets are analyzed in
                detail, applying pertinent adjustments for elements of comparison to develop a
                reconciled indication.
              </p>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#E09900]">APPROACH III</span>
                <FileSpreadsheet className="w-5 h-5 text-[#E09900]" />
              </div>
              <h3 className="font-serif-display text-2xl font-medium text-white">
                Income &amp; ARGUS DCF
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Existing income streams are compared to competing properties, market rent is
                established, capitalization rates are extracted, and multi-year ARGUS Discounted Cash
                Flows are modeled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Consulting Modules (Verified from judehonline.com/consulting/ & /home/) */}
      <section className="py-20 md:py-28 bg-[#F5F5F5] text-black border-b border-black/15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-black/15 gap-6">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#810014] font-semibold">
                SPECIALIZED CONSULTING &amp; FIELD ADVISORY
              </span>
              <h2 className="font-serif-display text-4xl sm:text-5xl font-medium text-black mt-2">
                Tailored Advisory for Owners, Insurers &amp; Counsel
              </h2>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-black/15 p-8 space-y-3">
              <div className="font-mono-tech text-xs text-[#810014] font-semibold">
                01 // ACQUISITION &amp; DISPOSITION
              </div>
              <h3 className="font-serif-display text-2xl font-medium">
                Pricing for Buying or Selling
              </h3>
              <p className="text-sm text-black/75 leading-relaxed">
                Independent market valuation establishing an acquisition or sale price aligned with
                verifiable submarket transactions before you list or commit capital.
              </p>
            </div>

            <div className="bg-white border border-black/15 p-8 space-y-3">
              <div className="font-mono-tech text-xs text-[#810014] font-semibold">
                02 // LEASE OPTIMIZATION
              </div>
              <h3 className="font-serif-display text-2xl font-medium">Multi-Tenant Market Rent</h3>
              <p className="text-sm text-black/75 leading-relaxed">
                Own a multi-tenant office, retail, or industrial building and need to establish
                competitive market rent? We conduct granular comparable lease and rent studies.
              </p>
            </div>

            <div className="bg-white border border-black/15 p-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#810014] font-semibold">
                  03 // PRECISION CAD / FIELD
                </span>
                <Ruler className="w-4 h-4 text-[#810014]" />
              </div>
              <h3 className="font-serif-display text-2xl font-medium">
                On-Site Building Measurements
              </h3>
              <p className="text-sm text-black/75 leading-relaxed">
                For exact dimensions of your commercial or residential building, our team provides
                professional on-site measuring to establish verified gross and rentable square
                footage.
              </p>
            </div>

            <div className="bg-white border border-black/15 p-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#810014] font-semibold">
                  04 // ABSENTEE &amp; REMOTE OWNERS
                </span>
                <Camera className="w-4 h-4 text-[#810014]" />
              </div>
              <h3 className="font-serif-display text-2xl font-medium">
                Remote Owner Property Inspections
              </h3>
              <p className="text-sm text-black/75 leading-relaxed">
                Live far from your Michigan property and need an independent professional to verify
                its condition? We inspect your asset and deliver a detailed report with photographs.
              </p>
            </div>

            <div className="bg-white border border-black/15 p-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#810014] font-semibold">
                  05 // TITLE CLAIMS
                </span>
                <ShieldCheck className="w-4 h-4 text-[#810014]" />
              </div>
              <h3 className="font-serif-display text-2xl font-medium">
                Establishment of Diminution in Value
              </h3>
              <p className="text-sm text-black/75 leading-relaxed">
                Evaluate reduction in market value caused by title defects, liens, encumbrances,
                unrecorded easements, nuisances, subsidence, or access impairments.
              </p>
            </div>

            <div className="bg-white border border-black/15 p-8 space-y-3">
              <div className="font-mono-tech text-xs text-[#810014] font-semibold">
                06 // INSURANCE CASUALTY
              </div>
              <h3 className="font-serif-display text-2xl font-medium">
                Total Loss &amp; Diminished Value
              </h3>
              <p className="text-sm text-black/75 leading-relaxed">
                Determine the value of property beyond repair using market data, build sheets, and
                comparable sales, or assess post-damage diminished value for insurance recovery.
              </p>
            </div>
          </div>

          {/* Complete Lists of 23 Assignment Purposes & 28 Property Types */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-black/15 p-8">
              <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#810014] font-semibold pb-3 border-b border-black/15">
                All 23 Verified Appraisal Assignment Purposes
              </h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-black/80">
                {VERIFIED_APPRAISAL_PURPOSES.map((p) => (
                  <div key={p} className="flex items-center gap-2 py-1">
                    <span className="w-1.5 h-1.5 bg-[#E09900] shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-black/15 p-8">
              <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#810014] font-semibold pb-3 border-b border-black/15">
                All 28 Verified Property Categories Appraised
              </h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-black/80">
                {VERIFIED_PROPERTY_TYPES.map((pt) => (
                  <div key={pt} className="flex items-center gap-2 py-1">
                    <span className="w-1.5 h-1.5 bg-[#810014] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Judeh Group Divisions Summary */}
          <div className="mt-16 bg-[#810014] text-white border border-[#E09900] p-8 sm:p-12">
            <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900]">
              THE JUDEH GROUP ECOSYSTEM
            </div>
            <h3 className="font-serif-display text-3xl sm:text-4xl font-medium mt-2">
              Integrated Valuation, Brokerage &amp; Leadership Advisory
            </h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/20">
              {JUDEH_GROUP_DIVISIONS.map((div) => (
                <div key={div.id} className="bg-black/25 border border-white/15 p-6">
                  <div className="font-mono-tech text-xs text-[#E09900]">{div.code}</div>
                  <div className="font-serif-display text-2xl font-medium mt-1">{div.name}</div>
                  <p className="text-xs text-white/80 mt-2 leading-relaxed">{div.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
