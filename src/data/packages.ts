export interface PackageItem {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  popular: boolean;
  bestFor: string;
  specs: {
    pages: string;
    items: string;
    delivery: string;
    support: string;
  };
  features: string[];
}

export interface AddOnItem {
  id: string;
  name: string;
  price: string;
  billingType: 'one-time' | 'recurring' | 'starting' | 'variable';
  note?: string;
}

export interface CommercialTerms {
  paymentSplitUnder20k: string;
  paymentSplitAbove35k: string;
  exclusions: string[];
  gstPolicy: string;
  pricingCalculationRule: string;
}

// Core standard website packages (Source: 2026 Rate Card)
export const PACKAGES: PackageItem[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: '₹9,999',
    numericPrice: 9999,
    popular: false,
    bestFor: 'Small businesses, individuals, local services and startups',
    specs: {
      pages: '5 Pages',
      items: '5 Products/Services',
      delivery: '5–7 Day Delivery',
      support: '15-Day Support',
    },
    features: [
      'Home, About, Services/Products, Gallery & Contact',
      'Mobile responsive design',
      'Basic SEO setup & SSL deployment',
      'Google Maps integration & social links',
      'WhatsApp button integration',
      'Contact form',
      '1 Revision round',
    ],
  },
  {
    id: 'business',
    name: 'Business Website',
    price: '₹19,999',
    numericPrice: 19999,
    popular: true, // Official "Most Popular" anchor tier
    bestFor: 'Companies that want a professional site and lead generation (Recommended)',
    specs: {
      pages: '10 Pages',
      items: '10 Products/Services',
      delivery: '7–10 Day Delivery',
      support: '30-Day Support',
    },
    features: [
      'Everything in Starter',
      'Product/service detail pages',
      'Portfolio & testimonials showcase',
      'FAQ section & Inquiry form',
      'Sitemap & Google Search Console setup',
      'Basic on-page SEO setup',
      '2 Revision rounds',
      '30-Day bug support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Website',
    price: '₹34,999',
    numericPrice: 34999,
    popular: false,
    bestFor: 'Established companies, manufacturers and exporters',
    specs: {
      pages: '15 Pages',
      items: '25 Products/Services',
      delivery: 'Tailored to Scope',
      support: '60-Day Support',
    },
    features: [
      'Everything in Business',
      'Custom UI design & News/Blog section',
      'Advanced product/service pages',
      'Team, Career, Certifications & Infrastructure pages',
      'Product catalog & PDF downloads',
      'Advanced inquiry form workflows',
      'Google Analytics setup',
      '3 Revision rounds',
    ],
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    price: '₹59,999',
    numericPrice: 59999,
    popular: false,
    bestFor: 'Companies wanting a more serious digital presence',
    specs: {
      pages: '25 Pages',
      items: '40 Products/Services',
      delivery: 'Tailored to Scope',
      support: '90-Day Support',
    },
    features: [
      'Everything in Professional',
      'Custom UI/UX & CMS-driven content dev',
      'Blog & advanced multiple inquiry forms',
      'Multiple conversion CTA sections',
      'Speed optimization & security configuration',
      'Search Console & Analytics tracking',
      '3–4 Revision rounds',
    ],
  },
];

// Complex & custom service categories
export const COMPLEX_SERVICES = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Website',
    startingPrice: '₹49,999+',
    scope: 'Up to 50 base products included; custom scope beyond 50',
    description: 'Full online stores with catalog, cart, and payment gateway.',
    deliverables: [
      'Home, Shop & Category pages',
      'Product variations, cart & checkout',
      'Customer accounts & order management',
      'Payment gateway integration',
      'WhatsApp & email automated notifications',
      'Mobile responsive with basic SEO & analytics',
    ],
  },
  {
    id: 'custom-app',
    name: 'Custom Web Application',
    startingPrice: '₹99,999+',
    scope: 'Scope-based pricing (Final quote after full requirements review)',
    description: 'Booking systems, CRM, ERP, dashboards, portals, and SaaS.',
    deliverables: [
      'Booking & reservation engines',
      'CRM/ERP business platforms',
      'Customer & employee portals',
      'School/hospital management systems',
      'Marketplace & SaaS software builds',
      'Requirements discovery blueprint',
    ],
  },
];

// Complete add-on rate card (Source: Page 5 Pricing Guide)
export const ADD_ON_SERVICES: AddOnItem[] = [
  { id: 'add-page', name: 'Additional Page', price: '₹1,500', billingType: 'one-time' },
  { id: 'add-item', name: 'Additional Product/Service Showcase', price: '₹500', billingType: 'one-time' },
  { id: 'add-revision', name: 'Additional Revision Round', price: '₹2,000', billingType: 'one-time' },
  { id: 'logo-design', name: 'Logo Design', price: '₹2,999', billingType: 'one-time' },
  { id: 'catalog-pdf', name: 'Product Catalog PDF Design', price: '₹4,999', billingType: 'one-time' },
  { id: 'landing-page', name: 'Dedicated Landing Page', price: '₹4,999', billingType: 'one-time' },
  { id: 'blog-setup', name: 'Blog / News Architecture Setup', price: '₹2,999', billingType: 'one-time' },
  { id: 'multilingual', name: 'Additional Language Setup', price: '₹7,500+', billingType: 'starting' },
  { id: 'gbp-setup', name: 'Google Business Profile Setup', price: '₹2,999', billingType: 'one-time' },
  { id: 'content-upload', name: 'Content Upload', price: '₹300 – ₹700', billingType: 'variable', note: 'per item/page' },
  { id: 'custom-api', name: 'Custom API Integration', price: '₹5,000+', billingType: 'starting' },
  { id: 'payment-gateway', name: 'Payment Gateway Integration', price: '₹5,000+', billingType: 'starting' },
  { id: 'booking-system', name: 'Booking / Reservation System', price: '₹10,000+', billingType: 'starting' },
  { id: 'crm-integration', name: 'CRM System Integration', price: '₹10,000+', billingType: 'starting' },
  { id: 'advanced-seo', name: 'Advanced Monthly SEO', price: '₹7,500+/mo', billingType: 'recurring' },
  { id: 'maintenance', name: 'Website Maintenance & Security', price: '₹2,999/mo', billingType: 'recurring' },
];

// Commercial clarity & governance rules
export const COMMERCIAL_RULES: CommercialTerms = {
  paymentSplitUnder20k: '50% advance milestone payment and 50% prior to final deployment.',
  paymentSplitAbove35k: '40% advance milestone, 30% after design sign-off, and 30% prior to deployment.',
  exclusions: [
    'Domain registration and DNS hosting',
    'Premium third-party plugins or external themes',
    'Paid API credits (SMS gateways, specialized mapping, translation APIs)',
    'Third-party cloud infrastructure subscriptions',
  ],
  gstPolicy: 'GST is shown separately on invoices and only charged if Pixelara Global is GST-registered.',
  pricingCalculationRule: 'Total Price = Base Package Price + (Additional Pages × ₹1,500). Never quote a flat rate multiplied by total pages.',
};