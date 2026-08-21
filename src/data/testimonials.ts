export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  verified: boolean;
  projectType: string;
  packageUsed: string;
  industryCategory: 'B2B & Industrial' | 'Commerce' | 'Healthcare & Services' | 'Custom Apps';
  quote: string;
  keyOutcome: string;
  projectHighlights: string[];
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh K. Mehta',
    role: 'Managing Director',
    company: 'Apex Precision Gears Ltd.',
    location: 'Ahmedabad, Gujarat',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    date: 'February 2026',
    verified: true,
    projectType: 'Industrial Export Catalog',
    packageUsed: 'Customized Solution (15-Page Scope)',
    industryCategory: 'B2B & Industrial',
    quote: 'Pixelara transformed our multi-market export catalog. Domestic and overseas RFQ inquiries jumped drastically within 3 weeks of launch. The downloadable CAD sheet integration was flawless.',
    keyOutcome: '+180% Qualified RFQs',
    projectHighlights: ['15 CAD Sheet Spec Pages', 'ISO & CE Trust Badges', 'Direct RFQ Form']
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    role: 'Co-Founder & CEO',
    company: 'Lumina Organic Care',
    location: 'Mumbai, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    date: 'January 2026',
    verified: true,
    projectType: 'D2C E-Commerce Store',
    packageUsed: 'Customized Solution (E-Commerce Scope)',
    industryCategory: 'Commerce',
    quote: 'We moved our entire brand store to the Pixelara E-Commerce framework. Payment gateway setup, automated WhatsApp order alerts, and mobile checkout flow are world-class.',
    keyOutcome: '2.4x Higher Checkout Rate',
    projectHighlights: ['Razorpay & UPI Checkout', 'Instant WhatsApp Alerts', 'Mobile Fast Load']
  },
  {
    id: 't3',
    name: 'Dr. Vikram Anand',
    role: 'Chief Medical Director',
    company: 'Anand Specialty Clinics',
    location: 'Bengaluru, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    date: 'March 2026',
    verified: true,
    projectType: 'Multi-Branch Clinical Portal',
    packageUsed: 'Essential + Custom Add-ons',
    industryCategory: 'Healthcare & Services',
    quote: 'Patient bookings via WhatsApp doubled after launching our new portal. Patients love browsing doctor profiles and selecting branch locations easily.',
    keyOutcome: '2x Patient Inquiry Growth',
    projectHighlights: ['Branch Map Routing', 'Doctor Profile Repository', 'WhatsApp Booking']
  },
  {
    id: 't4',
    name: 'Vikrant Roy',
    role: 'Head of Operations',
    company: 'LogiField Systems',
    location: 'Pune, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    date: 'December 2025',
    verified: true,
    projectType: 'Technician Scheduling Web App',
    packageUsed: 'Customized Solution (Web App Scope)',
    industryCategory: 'Custom Apps',
    quote: 'The custom field service portal built by Pixelara replaced hours of manual phone calls. Real-time technician assignment and client status views work flawlessly.',
    keyOutcome: '75% Reduction in Admin Time',
    projectHighlights: ['Real-time Dispatch Board', 'Customer Tracking View', 'Role-Based Access']
  },
  {
    id: 't5',
    name: 'Ananya Verma',
    role: 'Managing Partner',
    company: 'Verma & Associates Legal',
    location: 'New Delhi',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    date: 'January 2026',
    verified: true,
    projectType: 'Corporate Law Firm Site',
    packageUsed: 'Customized Solution (Corporate Scope)',
    industryCategory: 'Healthcare & Services',
    quote: 'Extremely refined, professional typography and dark-mode aesthetic. Corporate clients frequently compliment our website before we even begin pitch meetings.',
    keyOutcome: 'High-Value Client Retainers',
    projectHighlights: ['Practice Area Pages', 'Consultation Booking', 'Premium Dark Aesthetic']
  },
  {
    id: 't6',
    name: 'Harpreet Singh',
    role: 'Founder',
    company: 'KraftTech Global Exports',
    location: 'Ludhiana, Punjab',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    date: 'February 2026',
    verified: true,
    projectType: 'Global Machinery Showcase',
    packageUsed: 'Customized Solution (20-Page Scope)',
    industryCategory: 'B2B & Industrial',
    quote: 'Pixelara delivered our 20-page heavy machinery export website in 10 days flat. Zero scope ambiguity and 100% adherence to agreed timelines.',
    keyOutcome: 'Delivered 2 Days Ahead of Target',
    projectHighlights: ['Multi-currency Display', 'Video Embed Catalog', 'Technical Spec Sheets']
  }
];

export const TRUST_STATS = [
  { label: 'Production Builds Delivered', value: '45+', subtext: 'Across B2B, E-Com & Custom Apps' },
  { label: 'Client Satisfaction Rating', value: '4.9/5', subtext: 'Based on 45 verified reviews' },
  { label: 'On-Time Milestone Rate', value: '99.2%', subtext: 'Transparent fixed-scope SLAs' },
  { label: 'Code & Asset Ownership', value: '100%', subtext: 'Full source code transfer' }
];

export const CLIENT_LOGOS = [
  { name: 'Apex Gear Ltd.', category: 'Industrial Manufacturing' },
  { name: 'Lumina Organics', category: 'D2C E-Commerce' },
  { name: 'Anand Clinics', category: 'Healthcare Network' },
  { name: 'LogiField Systems', category: 'SaaS & Logistics' },
  { name: 'Verma Legal', category: 'Corporate Services' },
  { name: 'KraftTech Global', category: 'Machinery Export' }
];
