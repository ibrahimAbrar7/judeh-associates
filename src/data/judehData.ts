export type PageRoute = 'home' | 'services' | 'about' | 'insights' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  summary: string;
  detailedDescription: string;
  image: string;
  imageCaption: string;
  standards: string[];
  deliverables: string[];
  idealFor: string[];
  highlightMetric: string;
}

export interface AudienceItem {
  id: string;
  index: string;
  title: string;
  roleTag: string;
  summary: string;
  capabilities: string[];
  relatedServiceId: string;
  featuredScale?: 'large' | 'standard';
}

export interface GalleryPlate {
  id: string;
  plateNumber: string;
  title: string;
  category: string;
  aspectClass: 'panoramic' | 'vertical' | 'editorial-wide' | 'square-architectural';
  colSpanClass: string;
  image: string;
  valuationFocus: string;
  methodologyNote: string;
  subTypes: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyElements: string[];
  deliverableOutcome: string;
}

export interface InsightEntry {
  id: string;
  category: 'REGULATORY & LEADERSHIP' | 'VALUATION METHODOLOGY' | 'PUBLIC RECOGNITION' | 'TAX APPEAL RESOURCE';
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  featured?: boolean;
  readTime: string;
  verifiedContext: string;
  fullContent: string[];
  keyTakeaways: string[];
}

export const COMPANY_INFO = {
  name: 'Judeh & Associates, Inc.',
  groupName: 'The Judeh Group',
  tagline: 'Commercial Real Estate Valuation, Litigation Advisory & Consulting',
  groupExperience: '30+ Years',
  firmTenure: '23+ Years',
  address: {
    street: '22952 Outer Drive',
    city: 'Dearborn',
    state: 'Michigan',
    zip: '48124',
    full: '22952 Outer Drive, Dearborn, Michigan 48124',
    coordinates: '42.2964° N, 83.2372° W',
  },
  phone: '(313) 277-1986',
  phoneHref: 'tel:+13132771986',
  fax: '(313) 277-8634',
  emails: {
    principal: 'JumanaJ@JudehOnLine.com',
    admin: 'Admin@JudehOnLine.com',
  },
  coverage: {
    commercial: 'Entire State of Michigan (Including the Upper Peninsula)',
    residential: 'Wayne, Oakland, Macomb & Washtenaw Counties (Southeast Michigan)',
  },
  certifications: [
    {
      code: 'WBE — 100% WOMAN-OWNED',
      title: 'Certified Woman-Owned Business',
      description: 'Judeh & Associates, Inc. is a 100% certified woman-owned real estate valuation and consulting firm.',
    },
    {
      code: 'MDOT — DBE CERTIFIED',
      title: 'Disadvantaged Business Enterprise (DBE)',
      description: 'Certified participant in the Michigan Department of Transportation (MDOT) Disadvantaged Business Enterprise Program for federally funded infrastructure and right-of-way contracts.',
    },
    {
      code: 'USPAP / FIRREA / YELLOW BOOK',
      title: 'Federal & Statutory Valuation Standards',
      description: 'Compliant with Uniform Standards of Professional Appraisal Practice (USPAP), FIRREA lending mandates, and Uniform Appraisal Standards for Federal Land Acquisitions (Yellow Book).',
    },
  ],
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'property-appraisal',
    number: '01',
    title: 'Property Appraisal & Valuation',
    shortTitle: 'Appraisal & Valuation',
    subtitle: 'Defensible Commercial, Industrial, Multi-Family & Institutional Valuations',
    summary:
      'Independent, USPAP- and FIRREA-compliant real property valuations across the entire State of Michigan, integrating rigorous Cost, Sales Comparison, and Income (ARGUS DCF) methodologies.',
    detailedDescription:
      'Judeh & Associates provides complete commercial and residential appraisal services designed to position lenders, institutions, property owners, and public agencies for critical financial decisions. From neighborhood commercial assets to multi-million-square-foot industrial facilities, luxury hotels, ports, and proposed construction, every assignment is anchored in verified market evidence and comprehensive physical inspection.',
    image: '/images/service-appraisal.jpg',
    imageCaption: 'PLATE I — Class-A Commercial & Institutional Valuation Practice (Illustrative Architecture)',
    standards: ['USPAP Compliant', 'FIRREA Compliant', 'ARGUS DCF Modeling', 'Statewide Michigan Coverage'],
    deliverables: [
      'Comprehensive On-Site Property & Construction Inspection',
      'Cost Approach with Replacement Cost & Accrued Depreciation Analysis',
      'Sales Comparison Reconciliation Across Competing Submarkets',
      'Income Capitalization & Multi-Tenant ARGUS Discounted Cash Flow (DCF)',
      'Retroactive, Proposed Construction & Going-Concern Valuations',
    ],
    idealFor: ['Commercial Banks & Credit Unions', 'Institutional Investors', 'Corporate Real Estate Owners', 'Public Authorities'],
    highlightMetric: 'Statewide Commercial Coverage — Lower & Upper Peninsula',
  },
  {
    id: 'real-estate-consulting',
    number: '02',
    title: 'Real Estate Consulting & Advisory',
    shortTitle: 'Real Estate Consulting',
    subtitle: 'Strategic Market Feasibility, Lease Analysis, Title Claims & Portfolio Advisory',
    summary:
      'Bespoke analytical advisory for acquisition pricing, multi-tenant market rent studies, useful life determinations, title diminution claims, and remote owner condition inspections.',
    detailedDescription:
      'Beyond statutory appraisal reports, Judeh & Associates serves as an independent strategic advisor throughout the property lifecycle. We assist owners, investors, accountants, and insurers with acquisition and disposition pricing, multi-tenant rent structuring, exact on-site building measurements, title defect diminution-in-value studies, and total loss or diminished value insurance analyses.',
    image: '/images/editorial-intro.jpg',
    imageCaption: 'PLATE II — Strategic Advisory, Feasibility & Portfolio Analysis (Illustrative Architecture)',
    standards: ['ARGUS Enterprise / DCF', 'Market Rent Studies', 'Title & Insurance Diminution', 'BOMA / On-Site Measurement'],
    deliverables: [
      'Acquisition & Disposition Pricing Strategy Aligned with Market Conditions',
      'Multi-Tenant Market Rent & Lease Rate Optimization Studies',
      'Feasibility Studies, Useful Life Determination & Corporate Tax Planning',
      'Title Claim Diminution in Value (Liens, Encumbrances, Access Impairment)',
      'On-Site Building Measurements & Photographic Condition Reports for Remote Owners',
    ],
    idealFor: ['Private & Institutional Investors', 'CPAs & Tax Advisors', 'Title Insurers & Underwriters', 'Out-of-State Property Owners'],
    highlightMetric: 'Full-Lifecycle Analytical Decision Support',
  },
  {
    id: 'litigation-support',
    number: '03',
    title: 'Litigation Support & Expert Witness',
    shortTitle: 'Litigation & Expert Witness',
    subtitle: 'Court-Tested Testimony, Eminent Domain Takings & Forensic Appraisal Review',
    summary:
      'Seasoned expert witness testimony before the Michigan Tax Tribunal, Circuit Court, District Court, and American Arbitration Association, alongside cross-examination preparation.',
    detailedDescription:
      'Led by Chief Appraiser Dr. Jumana Judeh, PhD, MAI, CCIM, MCAO, our litigation practice is recognized across Michigan for credible valuation testimony that withstands rigorous cross-examination. We regularly perform partial and full taking valuations for MDOT, DNR, and county road commissions, and led the residential review appraisal team for the $2.0 billion Gordie Howe International Bridge acquisition project.',
    image: '/images/service-litigation.jpg',
    imageCaption: 'PLATE III — Judicial Testimony, Condemnation & Forensic Review (Illustrative Architecture)',
    standards: ['Yellow Book Certified', 'MDOT & DNR Approved', 'Court & Arbitration Testimony', 'Forensic Review'],
    deliverables: [
      'Expert Witness Testimony in Circuit Court, District Court, MTT & AAA Arbitration',
      'Eminent Domain, Condemnation & Partial / Full Takings (MDOT / DNR Compliant)',
      'Forensic Appraisal Reviews & Opposing Counsel Cross-Examination Development',
      'Bankruptcy, Foreclosure, Probate, Partnership Dispute & Marital Dissolution Valuations',
      'Insurance Total Loss & Post-Disaster Diminished Value Appraisals',
    ],
    idealFor: ['Litigation & Condemnation Attorneys', 'MDOT, DNR & Road Commissions', 'Federal & Municipal Agencies', 'Fiduciaries & Trustees'],
    highlightMetric: 'Lead Review Team — $2.0B Gordie Howe Bridge Parcel Acquisitions',
  },
  {
    id: 'property-tax-appeals',
    number: '04',
    title: 'Property Tax Appeals',
    shortTitle: 'Property Tax Appeals',
    subtitle: 'Independent Assessment Review & Michigan Tax Tribunal Representation',
    summary:
      'Thorough, independent evaluation of property tax assessments and expert representation before the March Board of Review and the Michigan Tax Tribunal (MTT).',
    detailedDescription:
      'Property tax statutes in Michigan are intricate, and comparable buildings frequently carry vastly disparate tax liabilities. Judeh & Associates conducts independent assessment level reviews to determine whether your taxable and state equalized values align with true cash value, guiding commercial and residential owners from initial value consultation through Michigan Tax Tribunal evidentiary hearings.',
    image: '/images/gallery-multifamily.jpg',
    imageCaption: 'PLATE IV — Ad Valorem Tax Assessment & Tribunal Advocacy (Illustrative Architecture)',
    standards: ['Michigan Tax Tribunal (MTT)', 'March Board of Review', 'MCAO Certified Leadership', 'Evidentiary Trial Prep'],
    deliverables: [
      'Independent Assessment Level & True Cash Value Audit',
      'Commercial, Industrial & Retail Property Tax Appeal Valuations',
      'March Board of Review Petition & Small Claims Representation',
      'Michigan Tax Tribunal (MTT) Expert Testimony & Evidentiary Review',
      'Opposing Assessment Audit & Cross-Examination Strategy',
    ],
    idealFor: ['Commercial & Industrial Owners', 'Retail & Hospitality Operators', 'Multi-Family Portfolios', ' Southeast MI Homeowners'],
    highlightMetric: 'Regular Expert Witness Before the Michigan Tax Tribunal',
  },
  {
    id: 'specialized-valuation',
    number: '05',
    title: 'Specialized Valuation & Group Divisions',
    shortTitle: 'Specialized Valuation & Divisions',
    subtitle: 'Special-Purpose Assets, Realtors Transaction Team & Executive Leadership Advisory',
    summary:
      'Valuation of complex special-purpose properties—ports, marinas, hotels, medical centers, schools, and religious institutions—supported by The Judeh Group’s Realtors and Motivational divisions.',
    detailedDescription:
      'Special-purpose and going-concern properties require specialized analytical frameworks beyond conventional comparable sales. Judeh & Associates brings deep experience valuing ports, luxury hotels, schools, churches, marinas, truck terminals, and medical complexes. Through The Judeh Group, clients also access our dedicated Realtors Team for acquisition/disposition execution and property management, as well as Dr. Judeh’s executive leadership and motivational speaking programs.',
    image: '/images/service-industrial.jpg',
    imageCaption: 'PLATE V — Special-Purpose Infrastructure, Industrial & Group Advisory (Illustrative Architecture)',
    standards: ['Going-Concern Valuation', 'Special-Purpose Assets', 'Realtors & Property Mgmt', 'Executive Keynote Advisory'],
    deliverables: [
      'Special-Purpose & Going-Concern Valuation (Hotels, Marinas, Ports, Schools, Churches)',
      'Heavy Industrial, Truck Terminals, Parking Structures & Proposed Developments',
      'IRS-Compliant Charitable Contribution, Donation & Estate Valuations',
      'The Judeh Group Realtors Team: Commercial Acquisition, Disposition & Property Management',
      'The Judeh Group Motivational Team: Leadership, Entrepreneurial & Corporate Keynotes',
    ],
    idealFor: ['Special-Purpose Asset Owners', 'Municipal & Port Authorities', 'Healthcare & Educational Systems', 'Corporate & Industry Conferences'],
    highlightMetric: '28+ Distinct Commercial & Special-Purpose Property Categories',
  },
];

export const WHO_WE_SERVE: AudienceItem[] = [
  {
    id: 'attorneys',
    index: '01',
    title: 'Attorneys & Legal Counsel',
    roleTag: 'LITIGATION, EMINENT DOMAIN & PROBATE',
    summary:
      'Court-tested valuation reports and authoritative expert testimony engineered to withstand rigorous cross-examination in state, federal, and tribunal proceedings.',
    capabilities: [
      'Proven Expert Testimony (MTT, Circuit & District Courts, AAA)',
      'Condemnation, Eminent Domain & Partial/Full Takings',
      'Forensic Appraisal Reviews & Cross-Examination Consultation',
      'Probate, Bankruptcy, Divorce & Partnership Dispute Valuations',
    ],
    relatedServiceId: 'litigation-support',
    featuredScale: 'large',
  },
  {
    id: 'lenders',
    index: '02',
    title: 'Banks, Credit Unions & Lenders',
    roleTag: 'UNDERWRITING, FIRREA & COLLATERAL REVIEW',
    summary:
      'USPAP- and FIRREA-compliant commercial and residential appraisals, independent desk/field reviews, and ARGUS discounted cash flow modeling for sound credit decisions.',
    capabilities: [
      'USPAP & FIRREA Compliant Fee Appraisal Assignments',
      'Liquidation, Disposition & Foreclosure Valuation',
      'Leased Fee Analysis & ARGUS Discounted Cash Flow (DCF)',
      'Independent Third-Party Appraisal Reviews',
    ],
    relatedServiceId: 'property-appraisal',
    featuredScale: 'large',
  },
  {
    id: 'government',
    index: '03',
    title: 'Government & Public Agencies',
    roleTag: 'MDOT, DNR, FEDERAL & MUNICIPAL',
    summary:
      'Yellow Book, MDOT, and DNR compliant valuation and review services for major infrastructure corridors, municipal authorities, and federal agencies.',
    capabilities: [
      'MDOT & MDNR Approved Partial and Full Takings Appraisals',
      'Uniform Appraisal Standards for Federal Land Acquisitions (Yellow Book)',
      'Right-of-Way, Easement & Corridor Acquisition Review',
      '100% Woman-Owned (WBE) & MDOT Certified DBE Partner',
    ],
    relatedServiceId: 'litigation-support',
    featuredScale: 'standard',
  },
  {
    id: 'investors-owners',
    index: '04',
    title: 'Commercial Owners, Investors & Developers',
    roleTag: 'ACQUISITION, FEASIBILITY & TAX APPEALS',
    summary:
      'Market-grounded intelligence for acquisition pricing, proposed construction feasibility, multi-tenant rent optimization, and property tax reduction.',
    capabilities: [
      'Portfolio Analysis for Potential Property Tax Savings & MTT Appeals',
      'Feasibility Studies & Proposed Construction Valuation',
      'Multi-Tenant Market Rent Studies & On-Site Building Measurements',
      'Remote Owner Property Inspections & Full-Service Property Management',
    ],
    relatedServiceId: 'real-estate-consulting',
    featuredScale: 'standard',
  },
  {
    id: 'accountants',
    index: '05',
    title: 'Accountants, CPAs & Estate Planners',
    roleTag: 'TAX PLANNING, RETROSPECTIVE & IRS COMPLIANCE',
    summary:
      'Defensible date-of-death, retrospective, useful life, and IRS-compliant charitable contribution valuations supporting complex corporate and estate filings.',
    capabilities: [
      'Retrospective & Date-of-Passing Estate / Probate Valuations',
      'Useful Life Determination & Cost Segregation Support',
      'Corporate Tax Planning & Lease/Market Rent Analysis',
      'IRS-Guideline Compliant Charitable Contribution & Donation Appraisals',
    ],
    relatedServiceId: 'property-appraisal',
    featuredScale: 'standard',
  },
  {
    id: 'title-insurance',
    index: '06',
    title: 'Title Claims & Insurance Underwriters',
    roleTag: 'DIMINUTION IN VALUE & CASUALTY LOSS',
    summary:
      'Specialized forensic valuation quantifying market value reduction from title defects, easements, access impairments, or catastrophic property damage.',
    capabilities: [
      'Establishment of Diminution in Value from Title Defects & Liens',
      'Easement, Encumbrance, Subsidence & Access Impairment Analysis',
      'Total Loss Valuations Using Market Data & Comparable Sales',
      'Pre-Disaster & Post-Casualty Diminished Value Appraisals',
    ],
    relatedServiceId: 'real-estate-consulting',
    featuredScale: 'standard',
  },
];

export const PROPERTY_GALLERY: GalleryPlate[] = [
  {
    id: 'plate-office',
    plateNumber: 'PLATE 01 / VI',
    title: 'Class-A Commercial & Corporate Office Towers',
    category: 'OFFICE & CORPORATE HEADQUARTERS',
    aspectClass: 'panoramic',
    colSpanClass: 'lg:col-span-8',
    image: '/images/hero-architecture.jpg',
    valuationFocus: 'Leased Fee, Multi-Tenant ARGUS DCF & Capitalization Rate Extraction',
    methodologyNote:
      'Comprehensive evaluation of existing lease rolls, tenant credit profiles, expense recovery structures, and competing submarket absorption across Michigan metropolitan business districts.',
    subTypes: ['High-Rise & Mid-Rise Office', 'Single-Tenant Net Lease', 'Professional & Financial Plazas', 'Proposed Commercial Construction'],
  },
  {
    id: 'plate-industrial',
    plateNumber: 'PLATE 02 / VI',
    title: 'Heavy Industrial, Logistics & Infrastructure Corridors',
    category: 'INDUSTRIAL & RIGHT-OF-WAY',
    aspectClass: 'vertical',
    colSpanClass: 'lg:col-span-4',
    image: '/images/service-industrial.jpg',
    valuationFocus: 'Multi-Million Sq. Ft. Facilities, Ports, Truck Terminals & Eminent Domain',
    methodologyNote:
      'Appraisal of complex light and heavy manufacturing plants, intermodal truck terminals, port facilities, and right-of-way infrastructure takings under USPAP and Yellow Book standards.',
    subTypes: ['Light & Heavy Industrial', 'Truck Terminals & Stops', 'Ports & Marinas', 'Eminent Domain & Easements'],
  },
  {
    id: 'plate-multifamily',
    plateNumber: 'PLATE 03 / VI',
    title: 'Multi-Family Residential, Mixed-Use & Retail Centers',
    category: 'MULTIFAMILY & RETAIL',
    aspectClass: 'vertical',
    colSpanClass: 'lg:col-span-5',
    image: '/images/gallery-multifamily.jpg',
    valuationFocus: 'Market Rent Studies, Strip Centers, Big-Box Retail & Apartment Portfolios',
    methodologyNote:
      'Detailed unit-mix rent comparables, vacancy and collection loss modeling, and ad valorem tax appeal audits for urban mixed-use developments and regional retail corridors.',
    subTypes: ['Apartment Buildings', 'Mixed-Use Developments', 'Strip Centers & Big Box', 'Restaurants, Lounges & Grocery'],
  },
  {
    id: 'plate-hospitality',
    plateNumber: 'PLATE 04 / VI',
    title: 'Luxury Hospitality, Banquet & Going-Concern Properties',
    category: 'HOSPITALITY & SPECIAL PURPOSE',
    aspectClass: 'panoramic',
    colSpanClass: 'lg:col-span-7',
    image: '/images/gallery-hospitality.jpg',
    valuationFocus: 'Going-Concern Allocation: Real Property, FF&E & Intangible Enterprise Value',
    methodologyNote:
      'Specialized valuation of luxury hotels, motels, banquet halls, and entertainment venues, isolating real property value from furniture, fixtures, equipment, and business going-concern.',
    subTypes: ['Luxury Hotels & Motels', 'Banquet Halls & Event Venues', 'Community Centers & Union Halls', 'Bowling Alleys & Recreation'],
  },
  {
    id: 'plate-medical',
    plateNumber: 'PLATE 05 / VI',
    title: 'Medical Complexes, Educational & Institutional Facilities',
    category: 'MEDICAL & INSTITUTIONAL',
    aspectClass: 'editorial-wide',
    colSpanClass: 'lg:col-span-6',
    image: '/images/gallery-medical.jpg',
    valuationFocus: 'Specialized Build-Outs, Cost Approach Depreciation & Adaptive Reuse',
    methodologyNote:
      'Precision valuation of medical office buildings, veterinary clinics, charter and public schools, and religious institutions requiring specialized replacement cost and functional obsolescence modeling.',
    subTypes: ['Medical Office Buildings', 'Schools & Educational Campuses', 'Churches & Religious Facilities', 'Veterinary & Specialized Clinics'],
  },
  {
    id: 'plate-civic',
    plateNumber: 'PLATE 06 / VI',
    title: 'Automotive, Service Commercial & Vacant Development Land',
    category: 'AUTOMOTIVE, LAND & SPECIALTY',
    aspectClass: 'editorial-wide',
    colSpanClass: 'lg:col-span-6',
    image: '/images/service-appraisal.jpg',
    valuationFocus: 'Highest & Best Use Analysis, Land Valuation & Specialty Commercial Assets',
    methodologyNote:
      'From Southeast Michigan automotive service facilities, collision shops, car washes, and gasoline stations to vacant commercial land and parking structures.',
    subTypes: ['Collision Shops, Garages & Car Washes', 'Gasoline Stations & C-Stores', 'Parking Structures', 'Vacant Land & Assemblages'],
  },
];

export const VERIFIED_PROPERTY_TYPES: string[] = [
  'Apartment Buildings',
  'Banquet Halls',
  'Big Box Retail',
  'Bowling Alleys',
  'Car Washes',
  'Churches & Religious Facilities',
  'Collision Shops & Garages',
  'Commercial Buildings',
  'Community Centers & Union Halls',
  'Easements & Rights-of-Way',
  'Eminent Domain Parcels',
  'Gasoline Stations',
  'Hotels & Luxury Motels',
  'Light & Heavy Industrial',
  'Liquor & Grocery Stores',
  'Marinas & Port Facilities',
  'Medical Office Buildings',
  'Mixed-Use Developments',
  'Office Buildings',
  'Parking Structures',
  'Proposed Construction',
  'Residential Properties',
  'Restaurants & Lounges',
  'Schools & Educational Facilities',
  'Strip Shopping Centers',
  'Truck Stops & Terminals',
  'Vacant Land',
  'Veterinary Clinics',
];

export const VERIFIED_APPRAISAL_PURPOSES: string[] = [
  'Debt Financing & Underwriting',
  'Litigation & Expert Testimony',
  'Eminent Domain & Condemnation',
  'Partial or Full Takings (MDOT / DNR)',
  'Easement Valuation',
  'Property Tax Assessment Appeal (MTT)',
  'Probate & Estate Planning',
  'Useful Life Determination',
  'Retrospective Valuation',
  'Corporate Tax Planning',
  'Proposed Construction',
  'Acquisition or Sale Pricing',
  'Partnership Dispute Resolution',
  'Charitable Contributions & Donations (IRS)',
  'Tax Preparation',
  'Marital Dissolution / Divorce',
  'Feasibility & Market Studies',
  'Bankruptcy & Foreclosure',
  'Lease & Market Rent Analysis',
  'Expansion or Downsizing',
  'Life Estate Valuation',
  'Title Claim Diminution in Value',
  'Insurance Total Loss & Diminished Value',
];

export const METHODOLOGY_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand the Assignment & Statutory Scope',
    subtitle: 'SCOPING, INTENDED USE & REGULATORY FRAMEWORK',
    description:
      'Every engagement begins by establishing the precise purpose of the assignment—whether debt financing, eminent domain taking, Michigan Tax Tribunal appeal, probate, or retrospective litigation—and aligning the scope of work with USPAP, FIRREA, or Federal Yellow Book requirements.',
    keyElements: [
      'Identification of Property Rights Appraised (Fee Simple, Leased Fee, Leasehold, or Partial Taking)',
      'Determination of Effective Date of Value (Current, Retrospective, or Prospective Proposed Construction)',
      'Compliance Alignment: USPAP, FIRREA, MDOT/DNR, IRS, or Yellow Book Standards',
    ],
    deliverableOutcome: 'Defined Assignment Charter & Regulatory Scope Protocol',
  },
  {
    number: '02',
    title: 'Comprehensive Inspection & Market Analysis',
    subtitle: 'ON-SITE VERIFICATION & SUBMARKET FUNDAMENTALS',
    description:
      'Our qualified appraisers conduct an unbiased, thorough physical inspection of the subject property to verify all elements of construction, building dimensions, site improvements, and physical condition alongside macroeconomic and local submarket supply-demand dynamics.',
    keyElements: [
      'Unbiased On-Site Verification of Construction Quality, Condition & Functional Utility',
      'Highest and Best Use Analysis (As Vacant and As Improved)',
      'Submarket Supply, Absorption, Vacancy & Competing Property Research Across Michigan',
    ],
    deliverableOutcome: 'Verified Property Dossier & Highest-and-Best-Use Determination',
  },
  {
    number: '03',
    title: 'Apply Appropriate Valuation Approaches',
    subtitle: 'COST, SALES COMPARISON & INCOME (ARGUS DCF) MODELING',
    description:
      'We develop the pertinent valuation methodologies dictated by the asset class and assignment scope—reconciling the Cost Approach, Sales Comparison Approach, and Income Capitalization Approach (including multi-year ARGUS Discounted Cash Flow modeling).',
    keyElements: [
      'Cost Approach: Replacement cost of existing improvements less accrued depreciation, plus land value as vacant',
      'Sales Comparison Approach: Detailed analysis of comparable sales with quantitative and qualitative market adjustments',
      'Income Approach: Market rent study, direct capitalization rate extraction, and ARGUS DCF lease modeling',
    ],
    deliverableOutcome: 'Triangulated Multi-Approach Valuation Model',
  },
  {
    number: '04',
    title: 'Deliver Defensible Insight & Testimony',
    subtitle: 'FINAL RECONCILIATION, REPORT DELIVERY & COURTROOM ADVOCACY',
    description:
      'The competing value indications are reconciled into a clear, well-supported conclusion of value. Whether delivered as a comprehensive appraisal report for a lending committee or defended under cross-examination in Circuit Court or the Michigan Tax Tribunal, our work stands on evidentiary rigor.',
    keyElements: [
      'Final Value Reconciliation Supported by Verified Primary Market Evidence',
      'Peer-Reviewed Narrative Appraisal Report or Restricted Advisory Brief',
      'Expert Witness Testimony, Evidentiary Review & Cross-Examination Support When Required',
    ],
    deliverableOutcome: 'Court- & Committee-Ready Valuation Report & Executive Advisory',
  },
];

export const LEADERSHIP_PROFILE = {
  name: 'Jumana Judeh, PhD, MAI, CCIM, MCAO',
  title: 'President & CEO | Chief Appraiser & Motivational Speaker',
  tenure: 'Leading Judeh & Associates for Over 23 Years (30+ Years Group Experience)',
  summaryQuote:
    '“We understand what creates property value, how such value is influenced, and how the characteristics of a property are affected by market conditions.”',
  biography: [
    'Dr. Jumana Judeh has led Judeh & Associates, Inc. from a startup into one of the most respected commercial real estate appraisal and consulting firms in Southeast Michigan for over 23 years. Her appraisal portfolio spans small commercial properties to multi-million-square-foot industrial facilities, luxury hotels, ports, schools, multi-tenant investment properties, churches, proposed construction, and complex retroactive valuations.',
    'During the Great Recession, Dr. Judeh served on an advisory team assisting the Michigan State Legislature in rewriting state compliance policies for loan underwriting and testified before the Senate Banking Committee. She also served on the Detroit Housing Task Force, providing authoritative consulting on housing values, foreclosures, and urban abandonment.',
    'Recognized for her command of real estate litigation and eminent domain, Dr. Judeh testifies regularly as an expert witness before the Michigan Tax Tribunal, Circuit Court, District Court, and the American Arbitration Association, and assists legal counsel in developing cross-examinations. She regularly performs partial and full taking assignments for MDOT, DNR, and county road commissions, and led the team that performed the review appraising on the residential parcels for the $2.0 billion Gordie Howe International Bridge acquisition project.',
    'An accomplished educator and global speaker, Dr. Judeh serves as an adjunct management instructor at Henry Ford College and was invited as the keynote speaker at the annual conference for the Practicing Valuers of India (PVAC), where she was named an honorary member.',
  ],
  designations: [
    { code: 'PhD', label: 'Doctor of Philosophy, Industrial Engineering (Global Executive Track) — Wayne State University' },
    { code: 'MAI', label: 'Designated Member — Appraisal Institute (MAI)' },
    { code: 'CCIM', label: 'Certified Commercial Investment Member — CCIM Institute / National Association of Realtors' },
    { code: 'MCAO', label: 'Michigan Certified Assessing Officer' },
    { code: 'YELLOW BOOK', label: 'Uniform Appraisal Standards for Federal Land Acquisitions Certified' },
    { code: 'IRWA', label: 'Member — International Right of Way Association' },
  ],
  education: [
    'Ph.D., Industrial Engineering (Global Executive Track) — Wayne State University',
    'Master of Arts, Industrial Relations — Wayne State University',
    'Bachelor of Science, General Management — Purdue University',
    'Uniform Standards for Federal Land Acquisition (Yellow Book)',
  ],
  appointmentsAndBoards: [
    'Chair, State of Michigan Board of Real Estate Appraisers (Appointed by the Governor)',
    'Past President — CREW Detroit (Commercial Real Estate Women)',
    'Advisory Team to Michigan State Legislature on Loan Underwriting Compliance & Senate Banking Committee Witness',
    'Detroit Housing Task Force Consultant (Housing Values, Foreclosures & Abandonment)',
    'Past Board of Directors — Detroit Regional Chamber',
    'Past Board of Directors (Property Committee) — Girl Scouts of Michigan',
    'Past Advisor to the Board — Vista Maria',
    'Honorary Member & Keynote Speaker — Practicing Valuers Association of India (PVAC)',
  ],
  honorsAndAwards: [
    'Michigan Women’s Hall of Fame Inductee (U.S. Congressional Recognition by Senator Debbie Stabenow)',
    'Outstanding Leadership Recognition — Michigan Senate',
    'Business Woman of the Year / Women of Achievement Honoree — YWCA',
    'Diversity Business Leader Honoree',
    'Distinguished Alumni — WMHS',
  ],
  institutionalClients: [
    'Michigan Department of Transportation (MDOT)',
    'Michigan Department of Natural Resources (DNR)',
    'U.S. Department of the Treasury',
    'U.S. Marshals Service',
    'U.S. Army Corps of Engineers',
    'State of Michigan',
    'Detroit Public Schools',
    'Detroit Building Authority',
    'Detroit Transportation Corporation (People Mover)',
    'Southeast Michigan Transportation Authority',
    'Numerous Michigan Municipalities & County Road Commissions',
    'Leading Commercial Banks, Credit Unions & Law Firms',
  ],
};

export const INSIGHTS_AND_NEWS: InsightEntry[] = [
  {
    id: 'gordie-howe-eminent-domain',
    category: 'VALUATION METHODOLOGY',
    title: 'Complex Right-of-Way, Eminent Domain & Infrastructure Review Appraising',
    subtitle: 'Lessons from Partial/Full Takings and Major Cross-Border Infrastructure Assignments',
    summary:
      'An editorial examination of statutory valuation protocols under Uniform Appraisal Standards for Federal Land Acquisitions (Yellow Book) and MDOT/DNR eminent domain proceedings—highlighted by Judeh & Associates’ leadership on the residential parcel review appraisals for the $2.0 billion Gordie Howe International Bridge project.',
    image: '/images/service-industrial.jpg',
    featured: true,
    readTime: '5 MIN BRIEFING',
    verifiedContext: 'Verified Firm Milestone & Public Infrastructure Practice',
    fullContent: [
      'Large-scale public infrastructure corridors, highway expansions, and international border crossings require an extraordinary degree of valuation precision. When public agencies exercise eminent domain through partial or full takings, the appraisal must protect both constitutional just compensation for the property owner and fiscal accountability for the public.',
      'Judeh & Associates regularly performs partial and full taking valuations for the Michigan Department of Transportation (MDOT), the Michigan Department of Natural Resources (DNR), and county road commissions. Notably, Dr. Jumana Judeh led the team that performed the review appraising on the residential parcels for the $2.0 billion Gordie Howe International Bridge acquisition project.',
      'In partial taking assignments, valuation extends beyond the land or improvements directly acquired. Appraisers must rigorously evaluate "before and after" market value, severance damages to the remainder parcel, changes in highest and best use, access impairments, and temporary construction easements under Yellow Book and state statutory frameworks.',
    ],
    keyTakeaways: [
      'Compliance with Uniform Appraisal Standards for Federal Land Acquisitions (Yellow Book) and MDOT/DNR protocols.',
      'Forensic review appraisal leadership demonstrated on the $2.0B Gordie Howe International Bridge residential parcel acquisitions.',
      'Defensible "Before and After" valuation methodology prepared for condemnation proceedings and expert testimony.',
    ],
  },
  {
    id: 'governor-appointment-board',
    category: 'REGULATORY & LEADERSHIP',
    title: 'Gubernatorial Appointment: Chair of the Michigan Board of Real Estate Appraisers',
    subtitle: 'Public Service, Appraisal Standards & Regulatory Stewardship in Michigan',
    summary:
      'Governor Gretchen Whitmer appointed Dr. Jumana Judeh to the State of Michigan Board of Real Estate Appraisers, where Dr. Judeh has served as Chair—reinforcing a career-long commitment to ethical standards and statutory compliance.',
    image: '/images/service-litigation.jpg',
    readTime: '3 MIN BRIEFING',
    verifiedContext: 'Judeh in the News — State of Michigan Executive Appointment',
    fullContent: [
      'The Michigan Board of Real Estate Appraisers works with the Department of Licensing and Regulatory Affairs (LARA) to oversee licensure requirements, continuing education standards, and professional conduct for real estate appraisers across the State of Michigan.',
      'Appointed by the Governor and serving as Chair of the Board, Dr. Jumana Judeh brings over two decades of front-line commercial valuation, litigation testimony, and academic instruction to state regulatory governance.',
      'This appointment complements Dr. Judeh’s earlier legislative advisory work during the Great Recession, when she served on an advising team assisting the Michigan State Legislature in rewriting loan underwriting compliance policies and testified before the Michigan Senate Banking Committee.',
    ],
    keyTakeaways: [
      'Gubernatorial appointment and Chairmanship of the State of Michigan Board of Real Estate Appraisers.',
      'Prior legislative testimony before the Michigan Senate Banking Committee on loan underwriting compliance.',
      'Service on the Detroit Housing Task Force advising on housing values, foreclosures, and abandonment.',
    ],
  },
  {
    id: 'tax-appeal-methodology-guide',
    category: 'TAX APPEAL RESOURCE',
    title: 'Michigan Property Tax Appeals: Challenging Excessive Assessments at the MTT',
    subtitle: 'How Independent Market Valuation Resolves Assessment Disparities for Commercial & Residential Owners',
    summary:
      'Property tax laws in Michigan are complex, and two nearly identical commercial buildings frequently carry dramatically different tax liabilities. Learn how independent true cash value analysis and Michigan Tax Tribunal testimony protect property owners.',
    image: '/images/gallery-multifamily.jpg',
    readTime: '4 MIN BRIEFING',
    verifiedContext: 'Verified Judeh Tax Appeal Team Resource Guide',
    fullContent: [
      'Many commercial, industrial, and residential property owners in Michigan pay more than their fair share of property taxes simply because municipal mass assessments fail to capture property-specific obsolescence, vacancy, or true market rent conditions.',
      'The Judeh Tax Appeal Team conducts a thorough, independent review of your current and proposed assessment levels (State Equalized Value and Taxable Value) to establish whether the municipality’s valuation is aligned with verifiable market evidence.',
      'When an assessment is overstated, our experts assist clients through the procedural requirements of the March Board of Review and provide seasoned expert witness testimony, opposing evidentiary review, and cross-examination strategy before the Michigan Tax Tribunal (MTT).',
    ],
    keyTakeaways: [
      'Independent audit of True Cash Value, State Equalized Value (SEV), and Taxable Value.',
      'Representation and valuation evidence for both March Board of Review and Michigan Tax Tribunal (MTT) filings.',
      'Led by an MAI, CCIM, and MCAO (Michigan Certified Assessing Officer) designated Chief Appraiser.',
    ],
  },
  {
    id: 'congressional-hall-of-fame',
    category: 'PUBLIC RECOGNITION',
    title: 'Michigan Women’s Hall of Fame Induction & U.S. Congressional Recognition',
    subtitle: 'Honoring Commercial Real Estate Leadership, Mentorship & Civic Impact',
    summary:
      'Dr. Jumana Judeh was inducted into the Michigan Women’s Historical Center (Hall of Fame), recognized by U.S. Senator Debbie Stabenow, honored by the YWCA as a Woman of Achievement, and designated a CCIM Member.',
    image: '/images/leadership-monolith.jpg',
    readTime: '3 MIN BRIEFING',
    verifiedContext: 'Judeh in the News — Congressional & Statewide Honors',
    fullContent: [
      'Throughout the growth of Judeh & Associates, Inc., Dr. Jumana Judeh has combined technical excellence in commercial real estate valuation with dedicated civic leadership and mentorship across Michigan and internationally.',
      'Dr. Judeh was inducted into the Michigan Women’s Hall of Fame (Michigan Women’s Historical Center) with U.S. Congressional Recognition presented by U.S. Senator Debbie Stabenow. She has also received the YWCA Women of Achievement / Business Woman of the Year award, Outstanding Leadership recognition from the Michigan Senate, and served as Past President of CREW Detroit.',
      'In addition to moderating the Detroit Women in Commercial Real Estate Summit panels and appearing on the Exploring Business & Life Podcast on "Understanding Commercial Appraisals," Dr. Judeh actively mentors young college women entering the corporate world.',
    ],
    keyTakeaways: [
      'Inducted into the Michigan Women’s Hall of Fame with U.S. Congressional Recognition.',
      'CCIM Designation, MAI Designation, and Past President of CREW Detroit.',
      'Featured speaker on "Understanding Commercial Appraisals" and international keynote lecturer.',
    ],
  },
];

export const JUDEH_GROUP_DIVISIONS = [
  {
    id: 'valuation-team',
    code: 'DIVISION I',
    name: 'Valuation Team',
    headline: 'Commercial & Residential Real Property Appraisal',
    description:
      'We understand what creates property value, how such value is influenced, and how the characteristics of a property are affected by market conditions. Serving lenders, attorneys, government agencies, and private owners across Michigan.',
    ctaLabel: 'Explore Valuation Services',
    targetRoute: 'services' as PageRoute,
  },
  {
    id: 'realtors-team',
    code: 'DIVISION II',
    name: 'Realtors Team',
    headline: 'Transaction Advisory & Property Management',
    description:
      'Work with an experienced professional team across commercial, industrial, office, vacant land, and retail property. Offering purchasing assistance, selling assistance, and cost-saving property management.',
    ctaLabel: 'Inquire With Realtors Team',
    targetRoute: 'contact' as PageRoute,
  },
  {
    id: 'motivational-team',
    code: 'DIVISION III',
    name: 'Motivational Team',
    headline: 'Executive Leadership, Coaching & Keynote Speaking',
    description:
      '“Master the tools you need to persuade, inspire and connect.” Equip your organization with speaking engagements and success consulting on leadership, networking, and entrepreneurial resilience led by Dr. Jumana Judeh.',
    ctaLabel: 'Book Speaking Engagement',
    targetRoute: 'about' as PageRoute,
  },
];
