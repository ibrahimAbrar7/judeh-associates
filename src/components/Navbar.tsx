import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowUpRight, Phone, MapPin, Menu, X } from 'lucide-react';
import { CORE_SERVICES, COMPANY_INFO, PageRoute } from '../data/judehData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, sectionOrServiceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (page: PageRoute, targetId?: string) => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    onNavigate(page, targetId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#810014]/95 backdrop-blur-md border-b border-[#E09900]/30 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#000000]/80 via-[#000000]/40 to-transparent border-b border-white/15 py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Refined Architectural Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-4 text-left focus:outline-none"
          aria-label="Judeh & Associates, Inc. — Return to Home"
        >
          {/* Architectural Monogram Emblem */}
          <div className="relative w-10 h-10 border border-[#E09900] flex items-center justify-center bg-[#810014]/80 transition-transform duration-500 group-hover:bg-[#E09900]">
            <span className="font-serif-display text-xl font-semibold tracking-wider text-[#E09900] group-hover:text-black transition-colors duration-300">
              J<span className="text-white group-hover:text-black">&amp;</span>A
            </span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E09900]" />
          </div>

          <div className="flex flex-col">
            <span className="font-serif-display text-base sm:text-xl lg:text-2xl font-semibold tracking-[0.12em] sm:tracking-[0.18em] text-white uppercase leading-none">
              Judeh <span className="text-[#E09900]">&amp;</span> Associates
            </span>
            <span className="font-mono-tech text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.24em] text-white/75 uppercase mt-1.5">
              Valuation &amp; Advisory • Est. 30+ Yrs
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5" aria-label="Primary Navigation">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`relative py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
              currentPage === 'home' ? 'text-[#E09900]' : 'text-white/90 hover:text-[#E09900]'
            }`}
          >
            Home
            {currentPage === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E09900]" />
            )}
          </button>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                if (servicesOpen) {
                  handleNavClick('services');
                } else {
                  setServicesOpen(true);
                }
              }}
              aria-expanded={servicesOpen}
              className={`relative py-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                currentPage === 'services' || servicesOpen
                  ? 'text-[#E09900]'
                  : 'text-white/90 hover:text-[#E09900]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#E09900] transition-transform duration-300 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              />
              {currentPage === 'services' && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E09900]" />
              )}
            </button>

            {/* Architectural Dropdown Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[680px] transition-all duration-300 origin-top ${
                servicesOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="bg-[#0D0D0D] border border-[#E09900]/40 shadow-2xl">
                {/* Top Header Bar inside Dropdown */}
                <div className="bg-[#810014] px-6 py-3.5 border-b border-[#E09900]/30 flex items-center justify-between">
                  <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#E09900]">
                    01 — 05 // Core Practice Areas
                  </span>
                  <button
                    type="button"
                    onClick={() => handleNavClick('services')}
                    className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-white hover:text-[#E09900] flex items-center gap-1 transition-colors"
                  >
                    <span>View Full Practice Directory</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E09900]" />
                  </button>
                </div>

                {/* Service Links Grid */}
                <div className="divide-y divide-white/10">
                  {CORE_SERVICES.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleNavClick('services', service.id)}
                      className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-[#810014]/35 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <span className="font-mono-tech text-xs text-[#E09900] pt-0.5">
                          {service.number}
                        </span>
                        <div>
                          <div className="font-serif-display text-lg font-medium text-white group-hover:text-[#E09900] transition-colors">
                            {service.title}
                          </div>
                          <p className="text-xs text-white/65 mt-0.5 line-clamp-1">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#E09900] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </button>
                  ))}
                </div>

                {/* Bottom Footer Bar inside Dropdown */}
                <div className="px-6 py-3 bg-black border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-white/60">
                  <span>USPAP • FIRREA • YELLOW BOOK COMPLIANT</span>
                  <span className="text-[#E09900]">{COMPANY_INFO.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className={`relative py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
              currentPage === 'about' ? 'text-[#E09900]' : 'text-white/90 hover:text-[#E09900]'
            }`}
          >
            About
            {currentPage === 'about' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E09900]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('insights')}
            className={`relative py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
              currentPage === 'insights' ? 'text-[#E09900]' : 'text-white/90 hover:text-[#E09900]'
            }`}
          >
            Insights
            {currentPage === 'insights' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E09900]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className={`relative py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
              currentPage === 'contact' ? 'text-[#E09900]' : 'text-white/90 hover:text-[#E09900]'
            }`}
          >
            Contact
            {currentPage === 'contact' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E09900]" />
            )}
          </button>
        </nav>

        {/* Right Actions: Direct Phone & Gold Consultation Button */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={COMPANY_INFO.phoneHref}
            className="hidden xl:flex font-mono-tech text-xs tracking-wider text-white/80 hover:text-[#E09900] transition-colors flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#E09900]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="group relative inline-flex items-center gap-2.5 bg-[#E09900] text-black px-3 xl:px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] border border-[#E09900] hover:bg-white hover:border-white transition-all duration-300"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-[#E09900]/60 bg-[#810014]/90 text-white hover:text-[#E09900] focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#E09900]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Full-Screen Architectural Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[69px] bg-[#810014] border-t border-[#E09900]/30 z-50 overflow-y-auto flex flex-col justify-between p-6 sm:p-10">
          <div className="space-y-8">
            <div className="border-b border-[#E09900]/30 pb-6">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#E09900] mb-4">
                Navigation Directory
              </p>
              <div className="flex flex-col space-y-4">
                {(
                  [
                    { id: 'home', label: '01 / Home Overview' },
                    { id: 'services', label: '02 / Expertise & Services' },
                    { id: 'about', label: '03 / About' },
                    { id: 'insights', label: '04 / Insights & News' },
                  ] as { id: PageRoute; label: string }[]
                ).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left font-serif-display text-2xl sm:text-3xl font-medium tracking-wide transition-colors ${
                      currentPage === item.id ? 'text-[#E09900]' : 'text-white hover:text-[#E09900]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Practice Links on Mobile */}
            <div>
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#E09900] mb-4">
                Core Valuation Practices
              </p>
              <div className="grid grid-cols-1 gap-3">
                {CORE_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleNavClick('services', service.id)}
                    className="text-left py-2.5 px-4 bg-black/30 border border-white/10 hover:border-[#E09900] flex items-center justify-between text-white"
                  >
                    <span className="text-sm font-medium">
                      <span className="font-mono-tech text-[#E09900] mr-2.5">{service.number}</span>
                      {service.shortTitle}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#E09900]" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E09900]/30 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/80 font-mono-tech">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E09900]" />
                {COMPANY_INFO.address.full}
              </span>
              <a href={COMPANY_INFO.phoneHref} className="text-[#E09900] font-semibold">
                {COMPANY_INFO.phone}
              </a>
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="w-full py-4 bg-[#E09900] text-black font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <span>Discuss Your Requirements</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
