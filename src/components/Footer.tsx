import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Printer, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES, JUDEH_GROUP_DIVISIONS, PageRoute } from '../data/judehData';

interface FooterProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, sectionOrServiceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate }) => {
  return (
    <div className="relative overflow-hidden">
      {/* SECTION 11: ICONIC FINAL CALL TO ACTION */}
      {currentPage !== 'contact' && (
        <section
          aria-label="Schedule a Valuation Consultation"
          className="relative bg-[#810014] text-white border-t border-[#E09900]/40 overflow-hidden"
        >
          {/* Subtle Architectural Drafting Lines */}
          <div className="absolute inset-0 bg-architectural-grid-dark pointer-events-none opacity-60" />

          {/* Fine Gold Architectural Framing Lines */}
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 relative z-10">
            <div className="relative border border-[#E09900]/35 bg-black/25 p-8 sm:p-12 md:p-16 lg:p-20">
              {/* Corner Gold Accents */}
              <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#E09900]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#E09900]" />
              <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#E09900]" />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#E09900]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-[1px] bg-[#E09900]" />
                    <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
                      Confidential Valuation &amp; Advisory Inquiry
                    </span>
                  </div>

                  <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.04] tracking-tight text-white">
                    Every Property Has a Story.
                    <span className="block italic text-[#E09900] mt-1">
                      Let’s Understand Its Value.
                    </span>
                  </h2>

                  <p className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed font-light">
                    Whether your assignment requires a USPAP- and FIRREA-compliant commercial
                    appraisal, eminent domain representation, a Michigan Tax Tribunal appeal, or
                    strategic portfolio consulting, our valuation team delivers defensible clarity.
                  </p>
                </div>

                {/* Single Commanding Gold Action */}
                <div className="lg:col-span-4 flex flex-col lg:items-end justify-end">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-5 bg-[#E09900] text-black px-8 py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] border border-[#E09900] hover:bg-white hover:border-white transition-all duration-300 shadow-2xl"
                  >
                    <span>Initiate a Valuation Consultation</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>

                  <div className="mt-5 flex items-center gap-3 font-mono-tech text-xs text-white/75">
                    <span>DIRECT DESK:</span>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="text-[#E09900] hover:underline font-medium"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 12: ARCHITECTURAL FOOTER */}
      <footer className="bg-[#0D0D0D] text-white border-t border-[#E09900]/35">
        {/* Top Metadata Strip */}
        <div className="bg-[#810014]/45 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech">
            <div className="flex items-center gap-3 text-white/90">
              <ShieldCheck className="w-4 h-4 text-[#E09900]" />
              <span>100% CERTIFIED WOMAN-OWNED BUSINESS (WBE) • MDOT CERTIFIED DBE</span>
            </div>
            <div className="text-white/70">
              <span>DEARBORN, MICHIGAN • COORDINATES: </span>
              <span className="text-[#E09900]">{COMPANY_INFO.address.coordinates}</span>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
            {/* Column 1: Brand Identity & Leadership Authority (4 cols) */}
            <div className="lg:col-span-4 space-y-6 pr-0 lg:pr-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#E09900] bg-[#810014] flex items-center justify-center">
                  <span className="font-serif-display text-xl font-semibold text-[#E09900]">
                    J<span className="text-white">&amp;</span>A
                  </span>
                </div>
                <div>
                  <div className="font-serif-display text-xl font-semibold tracking-[0.18em] uppercase text-white">
                    Judeh <span className="text-[#E09900]">&amp;</span> Associates
                  </div>
                  <div className="font-mono-tech text-[10px] tracking-[0.22em] text-white/60 uppercase mt-0.5">
                    Incorporated • The Judeh Group
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed">
                With over 30 years of group experience in property valuation, commercial realty, and
                advisory—and more than 23 years as one of Southeast Michigan’s premier appraisal
                firms—Judeh &amp; Associates delivers credible, timely, and court-tested real
                property insight.
              </p>

              <div className="pt-2 space-y-2 border-t border-white/10">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#E09900]">
                  Principal &amp; Chief Appraiser
                </p>
                <p className="font-serif-display text-lg text-white">
                  Jumana Judeh, PhD, MAI, CCIM, MCAO
                </p>
                <p className="text-xs text-white/60">
                  Chair, State of Michigan Board of Real Estate Appraisers (Governor Appointed) •
                  Michigan Women’s Hall of Fame
                </p>
              </div>
            </div>

            {/* Column 2: Core Valuation Services (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900] pb-2 border-b border-[#E09900]/30">
                Valuation &amp; Practice Areas
              </h3>
              <ul className="space-y-3 pt-1">
                {CORE_SERVICES.map((service) => (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => onNavigate('services', service.id)}
                      className="text-left text-sm text-white/75 hover:text-[#E09900] transition-colors flex items-center gap-2 group"
                    >
                      <span className="font-mono-tech text-[11px] text-[#E09900]/70 group-hover:text-[#E09900]">
                        {service.number}
                      </span>
                      <span>{service.shortTitle}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: The Judeh Group Divisions & Navigation (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900] pb-2 border-b border-[#E09900]/30">
                The Judeh Group
              </h3>
              <ul className="space-y-3 pt-1">
                {JUDEH_GROUP_DIVISIONS.map((div) => (
                  <li key={div.id}>
                    <button
                      type="button"
                      onClick={() => onNavigate(div.targetRoute)}
                      className="text-left text-sm text-white/75 hover:text-[#E09900] transition-colors block"
                    >
                      {div.name}
                    </button>
                  </li>
                ))}
                <li className="pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => onNavigate('about')}
                    className="text-left text-sm text-white/75 hover:text-[#E09900] transition-colors block"
                  >
                    Leadership &amp; Credentials
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('insights')}
                    className="text-left text-sm text-white/75 hover:text-[#E09900] transition-colors block"
                  >
                    Judeh in the News
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="text-left text-sm text-white/75 hover:text-[#E09900] transition-colors block"
                  >
                    Schedule Consultation
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Verified Headquarters & Michigan Coverage (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900] pb-2 border-b border-[#E09900]/30">
                Headquarters &amp; Coverage
              </h3>
              <div className="space-y-3 pt-1 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E09900] shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-white">Dearborn Office</div>
                    <div className="text-white/70">{COMPANY_INFO.address.street}</div>
                    <div className="text-white/70">
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}{' '}
                      {COMPANY_INFO.address.zip}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#E09900] shrink-0" />
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="hover:text-[#E09900] transition-colors"
                  >
                    Office: {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Printer className="w-4 h-4 text-[#E09900] shrink-0" />
                  <span className="text-white/70">Fax: {COMPANY_INFO.fax}</span>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#E09900] shrink-0 mt-1" />
                  <div className="space-y-1 text-xs font-mono-tech">
                    <a
                      href={`mailto:${COMPANY_INFO.emails.principal}`}
                      className="block hover:text-[#E09900] transition-colors"
                    >
                      {COMPANY_INFO.emails.principal}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.emails.admin}`}
                      className="block text-white/65 hover:text-[#E09900] transition-colors"
                    >
                      {COMPANY_INFO.emails.admin}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs text-white/65 space-y-1.5">
                <div>
                  <span className="text-[#E09900] font-mono-tech uppercase">Commercial: </span>
                  Statewide Michigan &amp; Upper Peninsula
                </div>
                <div>
                  <span className="text-[#E09900] font-mono-tech uppercase">Residential: </span>
                  Wayne, Oakland, Macomb &amp; Washtenaw
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/55 font-mono-tech">
            <div>
              © {new Date().getFullYear()} {COMPANY_INFO.name} All Rights Reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <span>MAI • CCIM • MCAO • IRWA</span>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="text-[#E09900] hover:underline"
              >
                CLIENT INTAKE DESK →
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
