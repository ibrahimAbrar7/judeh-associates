import React from 'react';
import {
  Award,
  Building,
  GraduationCap,
  Landmark,
  Mic,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { COMPANY_INFO, LEADERSHIP_PROFILE, PageRoute } from '../data/judehData';

interface AboutPageProps {
  onNavigate: (page: PageRoute, sectionOrServiceId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Page Hero in Deep Burgundy */}
      <section className="relative bg-[#810014] text-white pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E09900]/40 overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid-dark pointer-events-none opacity-65" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1.5px] bg-[#E09900]" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
              FIRM MONOGRAPH &amp; EXECUTIVE LEADERSHIP
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.0] tracking-tight text-white">
                Over Three Decades of{' '}
                <span className="italic text-[#E09900]">Valuation Authority.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-white/85 font-light leading-relaxed">
                Recognized as one of the premier real property appraisal and consulting firms in
                Southeast Michigan, delivering credible, timely, and court-tested advisory across
                all 83 Michigan counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Heritage & Certifications */}
      <section className="py-20 md:py-28 border-b border-black/15 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#810014] font-semibold">
                ABOUT JUDEH &amp; ASSOCIATES, INC.
              </span>
              <h2 className="font-serif-display text-4xl sm:text-5xl font-medium text-black leading-tight">
                Independent Real Property Valuation Built for High-Stakes Decisions
              </h2>
              <p className="text-base sm:text-lg text-black/80 leading-relaxed">
                The Judeh Group brings over 30 years of experience in valuation, commercial realty,
                and executive advisory. For more than 23 years, Judeh &amp; Associates, Inc. has
                grown from a startup into a thriving appraisal and consulting practice trusted by
                federal agencies, state departments, major financial institutions, law firms, and
                commercial property owners.
              </p>
              <p className="text-base sm:text-lg text-black/80 leading-relaxed">
                Our portfolio spans small commercial properties to multi-million-square-foot
                industrial facilities, luxury hotels, ports, schools, multi-tenant investment
                properties, churches, proposed construction, and complex retroactive valuations.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {COMPANY_INFO.certifications.map((cert) => (
                <div
                  key={cert.code}
                  className="border border-black/15 bg-[#F5F5F5] p-6 relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-tech text-xs text-[#810014] font-semibold">
                      {cert.code}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#E09900]" />
                  </div>
                  <h3 className="font-serif-display text-2xl font-medium text-black">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/75 mt-1.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Executive Curriculum Vitae: Dr. Jumana Judeh */}
      <section className="py-20 md:py-28 bg-[#0D0D0D] text-white border-b border-[#E09900]/40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="border-b border-[#E09900]/35 pb-10 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
                PRESIDENT &amp; CEO • CHIEF APPRAISER
              </span>
              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium text-white mt-2">
                {LEADERSHIP_PROFILE.name}
              </h2>
            </div>
            <span className="font-mono-tech text-xs uppercase tracking-[0.18em] bg-[#810014] border border-[#E09900] px-4 py-2 text-[#E09900]">
              PhD • MAI • CCIM • MCAO • IRWA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Biography & Public Testimony Narrative */}
            <div className="lg:col-span-7 space-y-5 text-base text-white/85 leading-relaxed">
              {LEADERSHIP_PROFILE.biography.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {/* Motivational & Global Speaking Highlight */}
              <div className="mt-8 border border-[#E09900]/50 bg-[#810014]/40 p-8 space-y-4">
                <div className="flex items-center gap-2.5 text-[#E09900] font-mono-tech text-xs uppercase tracking-[0.2em]">
                  <Mic className="w-4 h-4" />
                  <span>Global Lecturer, Educator &amp; Motivational Speaker</span>
                </div>
                <blockquote className="font-serif-display text-2xl italic text-white">
                  “Master the tools you need to persuade, inspire and connect. Overcoming any
                  challenge life throws your way is the easy part—the hard part is convincing
                  yourself that you can succeed and that you deserve success.”
                </blockquote>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  In addition to serving as an adjunct management instructor at Henry Ford College
                  and keynote speaker for the Practicing Valuers of India (PVAC), Dr. Judeh leads
                  The Judeh Motivational Team and mentors young college women entering the corporate
                  world.
                </p>
              </div>
            </div>

            {/* Structured CV Ledger */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex items-center gap-2.5 text-[#E09900] font-mono-tech text-xs uppercase tracking-[0.18em] mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education, Licenses &amp; Certifications</span>
                </div>
                <ul className="space-y-3 text-sm text-white/85">
                  {LEADERSHIP_PROFILE.education.map((edu) => (
                    <li key={edu} className="flex items-start gap-2.5">
                      <span className="text-[#E09900] mt-1">■</span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex items-center gap-2.5 text-[#E09900] font-mono-tech text-xs uppercase tracking-[0.18em] mb-4">
                  <Landmark className="w-4 h-4" />
                  <span>State Appointments &amp; Board Leadership</span>
                </div>
                <ul className="space-y-3 text-sm text-white/85">
                  {LEADERSHIP_PROFILE.appointmentsAndBoards.map((board) => (
                    <li key={board} className="flex items-start gap-2.5">
                      <span className="text-[#E09900] mt-1">■</span>
                      <span>{board}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex items-center gap-2.5 text-[#E09900] font-mono-tech text-xs uppercase tracking-[0.18em] mb-4">
                  <Award className="w-4 h-4" />
                  <span>Honors &amp; Hall of Fame Recognition</span>
                </div>
                <ul className="space-y-3 text-sm text-white/85">
                  {LEADERSHIP_PROFILE.honorsAndAwards.map((award) => (
                    <li key={award} className="flex items-start gap-2.5">
                      <span className="text-[#E09900] mt-1">■</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Public & Institutional Clients Grid */}
          <div className="mt-16 pt-12 border-t border-white/15">
            <div className="flex items-center gap-2.5 text-[#E09900] font-mono-tech text-xs uppercase tracking-[0.2em] mb-6">
              <Building className="w-4 h-4" />
              <span>Representative Government, Municipal &amp; Institutional Clients</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {LEADERSHIP_PROFILE.institutionalClients.map((client) => (
                <div
                  key={client}
                  className="bg-black border border-white/15 px-4 py-3 text-xs sm:text-sm text-white/90 flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 bg-[#E09900] shrink-0" />
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-end">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E09900] text-black font-semibold text-xs uppercase tracking-[0.18em] hover:bg-white transition-colors"
            >
              <span>Consult Directly With Our Leadership Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
