import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Compass,
  ShieldCheck,
} from 'lucide-react';
import {
  COMPANY_INFO,
  CORE_SERVICES,
  VERIFIED_APPRAISAL_PURPOSES,
  VERIFIED_PROPERTY_TYPES,
} from '../data/judehData';

interface ContactPageProps {
  initialContextId?: string;
}

interface FormState {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  clientType: string;
  serviceCategory: string;
  propertyType: string;
  assignmentPurpose: string;
  propertyLocation: string;
  projectNotes: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialContextId }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    clientType: 'Commercial Property Owner / Investor',
    serviceCategory: 'Property Appraisal & Valuation',
    propertyType: 'Commercial Buildings',
    assignmentPurpose: 'Debt Financing & Underwriting',
    propertyLocation: '',
    projectNotes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submittedDossier, setSubmittedDossier] = useState<FormState | null>(null);

  useEffect(() => {
    if (initialContextId) {
      const matchedService = CORE_SERVICES.find((s) => s.id === initialContextId);
      if (matchedService) {
        setFormData((prev) => ({ ...prev, serviceCategory: matchedService.title }));
      }
    }
  }, [initialContextId]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid professional email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a direct telephone number.';
    }
    if (!formData.propertyLocation.trim()) {
      newErrors.propertyLocation = 'Please specify the Michigan city or county of the subject property.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedDossier(formData);
    }
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Page Hero in Deep Burgundy */}
      <section className="relative bg-[#810014] text-white pt-36 pb-20 md:pt-44 md:pb-24 border-b border-[#E09900]/40 overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid-dark pointer-events-none opacity-65" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1.5px] bg-[#E09900]" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E09900]">
              CLIENT INTAKE &amp; CONSULTATION DESK // DEARBORN, MICHIGAN
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.0] tracking-tight text-white">
                Initiate a Valuation{' '}
                <span className="italic text-[#E09900]">Consultation.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-white/85 font-light leading-relaxed">
                Contact Judeh &amp; Associates, Inc. to discuss commercial or residential appraisal
                assignments, litigation support, Michigan Tax Tribunal appeals, or consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact & Intake Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Columns: Verified Dearborn Headquarters & Coverage Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#0D0D0D] text-white border border-[#E09900]/50 p-8 sm:p-10 shadow-2xl space-y-8">
                <div className="border-b border-white/15 pb-5">
                  <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900]">
                    VERIFIED CORPORATE HEADQUARTERS
                  </span>
                  <h2 className="font-serif-display text-3xl font-medium text-white mt-2">
                    {COMPANY_INFO.name}
                  </h2>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#810014] border border-[#E09900]/50 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#E09900]" />
                    </div>
                    <div>
                      <div className="font-mono-tech text-xs uppercase tracking-[0.16em] text-[#E09900]">
                        Office Address
                      </div>
                      <div className="text-base text-white font-medium mt-1">
                        {COMPANY_INFO.address.street}
                      </div>
                      <div className="text-white/80">
                        {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}{' '}
                        {COMPANY_INFO.address.zip}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#810014] border border-[#E09900]/50 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#E09900]" />
                    </div>
                    <div>
                      <div className="font-mono-tech text-xs uppercase tracking-[0.16em] text-[#E09900]">
                        Direct Telephone
                      </div>
                      <a
                        href={COMPANY_INFO.phoneHref}
                        className="text-lg text-white font-medium hover:text-[#E09900] transition-colors block mt-1"
                      >
                        Office: {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#810014] border border-[#E09900]/50 flex items-center justify-center shrink-0">
                      <Printer className="w-4 h-4 text-[#E09900]" />
                    </div>
                    <div>
                      <div className="font-mono-tech text-xs uppercase tracking-[0.16em] text-[#E09900]">
                        Facsimile
                      </div>
                      <div className="text-base text-white/85 mt-1">Fax: {COMPANY_INFO.fax}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#810014] border border-[#E09900]/50 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#E09900]" />
                    </div>
                    <div>
                      <div className="font-mono-tech text-xs uppercase tracking-[0.16em] text-[#E09900]">
                        Electronic Mail
                      </div>
                      <div className="space-y-1 mt-1 font-mono-tech text-xs">
                        <a
                          href={`mailto:${COMPANY_INFO.emails.principal}`}
                          className="block text-white hover:text-[#E09900] transition-colors"
                        >
                          {COMPANY_INFO.emails.principal}
                        </a>
                        <a
                          href={`mailto:${COMPANY_INFO.emails.admin}`}
                          className="block text-white/75 hover:text-[#E09900] transition-colors"
                        >
                          {COMPANY_INFO.emails.admin}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coverage Area Box */}
                <div className="pt-6 border-t border-white/15 space-y-4">
                  <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#E09900]">
                    <Compass className="w-4 h-4" />
                    <span>Michigan Geographic Coverage</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 space-y-2 text-xs">
                    <div>
                      <strong className="text-[#E09900] uppercase font-mono-tech">
                        Commercial &amp; Non-Residential:
                      </strong>
                      <p className="text-white/85 mt-0.5">{COMPANY_INFO.coverage.commercial}</p>
                    </div>
                    <div className="pt-2 border-t border-white/10">
                      <strong className="text-[#E09900] uppercase font-mono-tech">
                        Residential Appraisals:
                      </strong>
                      <p className="text-white/85 mt-0.5">{COMPANY_INFO.coverage.residential}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Callout */}
              <div className="border border-black/15 bg-[#F5F5F5] p-6 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#810014] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#810014] font-semibold">
                    100% Woman-Owned (WBE) &amp; MDOT DBE Certified
                  </div>
                  <p className="text-xs text-black/75 mt-1 leading-relaxed">
                    Qualified for federal, state, MDOT, DNR, and municipal right-of-way and valuation
                    contracts across Michigan.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Interactive Assignment Scope & Consultation Form */}
            <div className="lg:col-span-7">
              {submittedDossier ? (
                <div className="border-2 border-[#810014] bg-[#0D0D0D] text-white p-8 sm:p-12 space-y-8 shadow-2xl">
                  <div className="flex items-start justify-between gap-4 border-b border-[#E09900]/40 pb-6">
                    <div>
                      <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E09900]">
                        CONSULTATION DOSSIER PREPARED
                      </span>
                      <h3 className="font-serif-display text-3xl sm:text-4xl font-medium text-white mt-2">
                        Thank You, {submittedDossier.fullName}.
                      </h3>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-[#E09900] shrink-0" />
                  </div>

                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                    Your consultation specification has been structured in this interactive client
                    presentation demo. You may review your assignment summary below or launch a
                    pre-addressed email directly to{' '}
                    <strong className="text-[#E09900]">{COMPANY_INFO.emails.principal}</strong>.
                  </p>

                  <div className="bg-black border border-white/15 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-tech">
                    <div>
                      <span className="text-white/50 block">PRACTICE AREA:</span>
                      <span className="text-[#E09900]">{submittedDossier.serviceCategory}</span>
                    </div>
                    <div>
                      <span className="text-white/50 block">CLIENT CONSTITUENCY:</span>
                      <span className="text-white">{submittedDossier.clientType}</span>
                    </div>
                    <div>
                      <span className="text-white/50 block">PROPERTY CATEGORY:</span>
                      <span className="text-white">{submittedDossier.propertyType}</span>
                    </div>
                    <div>
                      <span className="text-white/50 block">ASSIGNMENT PURPOSE:</span>
                      <span className="text-white">{submittedDossier.assignmentPurpose}</span>
                    </div>
                    <div>
                      <span className="text-white/50 block">MICHIGAN LOCATION:</span>
                      <span className="text-white">{submittedDossier.propertyLocation}</span>
                    </div>
                    <div>
                      <span className="text-white/50 block">CONTACT:</span>
                      <span className="text-white">
                        {submittedDossier.phone} / {submittedDossier.email}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <a
                      href={`mailto:${COMPANY_INFO.emails.principal}?subject=${encodeURIComponent(
                        `Valuation Inquiry: ${submittedDossier.serviceCategory} (${submittedDossier.propertyLocation})`
                      )}&body=${encodeURIComponent(
                        `Name: ${submittedDossier.fullName}\nOrganization: ${submittedDossier.organization}\nPhone: ${submittedDossier.phone}\nClient Type: ${submittedDossier.clientType}\nPractice Area: ${submittedDossier.serviceCategory}\nProperty Category: ${submittedDossier.propertyType}\nAssignment Purpose: ${submittedDossier.assignmentPurpose}\nLocation: ${submittedDossier.propertyLocation}\n\nNotes:\n${submittedDossier.projectNotes}`
                      )}`}
                      className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#E09900] text-black font-semibold text-xs uppercase tracking-[0.18em] hover:bg-white transition-colors"
                    >
                      <span>Transmit via Direct Email</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedDossier(null)}
                      className="px-6 py-4 border border-white/25 text-white font-mono-tech text-xs uppercase tracking-[0.18em] hover:border-[#E09900] hover:text-[#E09900] transition-colors"
                    >
                      Modify Assignment Parameters
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="border border-black/20 bg-[#F5F5F5] p-8 sm:p-12 space-y-8"
                >
                  <div className="border-b border-black/15 pb-5">
                    <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#810014] font-semibold">
                      CONFIDENTIAL ASSIGNMENT SPECIFICATION
                    </span>
                    <h2 className="font-serif-display text-3xl sm:text-4xl font-medium text-black mt-1">
                      Request an Initial Consultation
                    </h2>
                    <p className="text-xs sm:text-sm text-black/70 mt-1">
                      Provide your contact details and property parameters for a prompt review by our
                      valuation team.
                    </p>
                  </div>

                  {/* Contact Identity Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-black mb-2">
                        Full Name <span className="text-[#810014]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        placeholder="e.g., Jonathan Vance, Esq."
                        className={`w-full bg-white border px-4 py-3 text-sm text-black focus:outline-none ${
                          errors.fullName
                            ? 'border-[#810014] bg-[#810014]/5'
                            : 'border-black/25 focus:border-[#810014]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-[#810014] flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-black mb-2">
                        Firm / Institution / Agency
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => handleChange('organization', e.target.value)}
                        placeholder="Law Firm, Bank, Municipality or Company"
                        className="w-full bg-white border border-black/25 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#810014]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-black mb-2">
                        Professional Email <span className="text-[#810014]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="name@organization.com"
                        className={`w-full bg-white border px-4 py-3 text-sm text-black focus:outline-none ${
                          errors.email
                            ? 'border-[#810014] bg-[#810014]/5'
                            : 'border-black/25 focus:border-[#810014]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-[#810014] flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-black mb-2">
                        Direct Telephone <span className="text-[#810014]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="(313) 000-0000"
                        className={`w-full bg-white border px-4 py-3 text-sm text-black focus:outline-none ${
                          errors.phone
                            ? 'border-[#810014] bg-[#810014]/5'
                            : 'border-black/25 focus:border-[#810014]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-[#810014] flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Assignment Classification Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-black/15">
                    <div>
                      <label className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-black mb-2">
                        Required Practice Area
                      </label>
                      <select
                        value={formData.serviceCategory}
                        onChange={(e) => handleChange('serviceCategory', e.target.value)}
                        className="w-full bg-white border border-black/25 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#810014]"
                      >
                        {CORE_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.number} — {s.title}
                          </option>
                        ))}
                        <option value="Realtors Team — Acquisition / Disposition / Property Mgmt">
                          06 — Realtors Team &amp; Property Management
                        </option>
                        <option value="Motivational Team — Keynote Speaking & Coaching">
                          07 — Motivational Speaking &amp; Leadership Advisory
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-black mb-2">
                        Client Constituency
                      </label>
                      <select
                        value={formData.clientType}
                        onChange={(e) => handleChange('clientType', e.target.value)}
                        className="w-full bg-white border border-black/25 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#810014]"
                      >
                        <option value="Attorney / Legal Counsel">Attorney / Legal Counsel</option>
                        <option value="Bank / Credit Union / Lender">
                          Bank / Credit Union / Lender
                        </option>
                        <option value="Commercial Property Owner / Investor">
                          Commercial Property Owner / Investor
                        </option>
                        <option value="Government / Municipal Agency (MDOT / DNR)">
                          Government / Municipal Agency (MDOT / DNR)
                        </option>
                        <option value="Accountant / CPA / Estate Planner">
                          Accountant / CPA / Estate Planner
                        </option>
                        <option value="Title Claim / Insurance Underwriter">
                          Title Claim / Insurance Underwriter
                        </option>
                        <option value="Residential Homeowner">Residential Homeowner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-black mb-2">
                        Property Category
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => handleChange('propertyType', e.target.value)}
                        className="w-full bg-white border border-black/25 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#810014]"
                      >
                        {VERIFIED_PROPERTY_TYPES.map((pt) => (
                          <option key={pt} value={pt}>
                            {pt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-black mb-2">
                        Purpose of the Assignment
                      </label>
                      <select
                        value={formData.assignmentPurpose}
                        onChange={(e) => handleChange('assignmentPurpose', e.target.value)}
                        className="w-full bg-white border border-black/25 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#810014]"
                      >
                        {VERIFIED_APPRAISAL_PURPOSES.map((purpose) => (
                          <option key={purpose} value={purpose}>
                            {purpose}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location & Notes */}
                  <div className="space-y-6 pt-4 border-t border-black/15">
                    <div>
                      <label className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-black mb-2">
                        Property Location (Michigan City, County or Parcel) <span className="text-[#810014]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.propertyLocation}
                        onChange={(e) => handleChange('propertyLocation', e.target.value)}
                        placeholder="e.g., Dearborn, Wayne County, MI (or Statewide Corridor)"
                        className={`w-full bg-white border px-4 py-3 text-sm text-black focus:outline-none ${
                          errors.propertyLocation
                            ? 'border-[#810014] bg-[#810014]/5'
                            : 'border-black/25 focus:border-[#810014]'
                        }`}
                      />
                      {errors.propertyLocation && (
                        <p className="mt-1.5 text-xs text-[#810014] flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.propertyLocation}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-black mb-2">
                        Assignment Scope, Effective Date &amp; Timeline Notes
                      </label>
                      <textarea
                        rows={4}
                        value={formData.projectNotes}
                        onChange={(e) => handleChange('projectNotes', e.target.value)}
                        placeholder="Describe property characteristics, approximate square footage, court/tribunal deadlines, or specific consulting questions..."
                        className="w-full bg-white border border-black/25 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#810014]"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-mono-tech text-[11px] text-black/60">
                      STRICT CONFIDENTIALITY • USPAP ETHICS RULE COMPLIANT
                    </span>

                    <button
                      type="submit"
                      className="px-8 py-4 bg-[#810014] text-white font-semibold text-xs uppercase tracking-[0.2em] border border-[#810014] hover:bg-black hover:border-black transition-colors flex items-center justify-center gap-3 shadow-lg"
                    >
                      <span>Prepare Consultation Request</span>
                      <ArrowUpRight className="w-4 h-4 text-[#E09900]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
