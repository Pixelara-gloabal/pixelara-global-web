export interface PackageItem {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  popular: boolean;
  bestFor: string;
  badge?: string;
  specs: {
    pages: string;
    items: string;
    delivery: string;
    support: string;
  };
  features: string[];
}

export interface CustomFeatureOption {
  id: string;
  name: string;
  category: 'core' | 'commerce' | 'advanced';
  estimatedCost: number;
  description: string;
}

// 2 Core Packages as requested: 1) Essential ₹9,999  2) Customized Scope
export const PACKAGES: PackageItem[] = [
  {
    id: 'essential',
    name: 'Essential Website',
    price: '₹9,999',
    numericPrice: 9999,
    popular: false,
    badge: 'Fixed Turnaround',
    bestFor: 'Turnkey 5-page responsive site for local businesses, startups, and service professionals.',
    specs: {
      pages: '5 Pages',
      items: '5 Products/Services',
      delivery: '5–7 Days Delivery',
      support: '15-Day Support',
    },
    features: [
      'Home, About, Services/Products, Gallery & Contact',
      'Mobile-first responsive UI architecture',
      'Basic SEO setup, SSL & Search Console',
      'Direct WhatsApp inquiry button & Lead Form',
      'Google Maps & social links integration',
      '1 Revision round included',
      '100% Source Code & Asset Transfer',
    ],
  },
  {
    id: 'customized',
    name: 'Customized Solution',
    price: 'Custom Quote',
    numericPrice: 0,
    popular: true,
    badge: 'Build Your Scope',
    bestFor: 'Tailored digital platforms, multi-page export catalogs, E-Commerce stores, or custom web apps.',
    specs: {
      pages: 'Custom (10 to 50+)',
      items: 'Unlimited SKUs',
      delivery: '7–21 Days SLA',
      support: 'Up to 90 Days',
    },
    features: [
      'Fully customized UI/UX design & page layout',
      'Optional E-Commerce store & Payment Gateway (UPI/Razorpay)',
      'CAD / Spec Sheet PDF download engine',
      'Multi-branch locator & appointment booking',
      'Blog architecture & CMS content management',
      'Advanced inquiry workflows & CRM integration',
      'Interactive Custom Builder included below',
    ],
  },
];

// Options for the interactive Custom Package Scope Builder
export const CUSTOM_BUILDER_OPTIONS: CustomFeatureOption[] = [
  { id: 'extra-pages', name: 'Additional Structured Pages', category: 'core', estimatedCost: 1500, description: '₹1,500 per extra page added to scope' },
  { id: 'ecommerce-engine', name: 'E-Commerce Storefront & Cart', category: 'commerce', estimatedCost: 20000, description: 'Product variation catalog, cart & checkout' },
  { id: 'payment-gateway', name: 'UPI & Razorpay Payment Gateway', category: 'commerce', estimatedCost: 5000, description: 'Direct payment processing integration' },
  { id: 'cad-pdf-engine', name: 'CAD & PDF Spec Sheet Catalog', category: 'advanced', estimatedCost: 5000, description: 'Downloadable technical specification sheets for B2B' },
  { id: 'booking-locator', name: 'Doctor / Branch Appointment Locator', category: 'advanced', estimatedCost: 7500, description: 'Interactive appointment scheduling & branch maps' },
  { id: 'multilingual-setup', name: 'Multi-Language Architecture', category: 'advanced', estimatedCost: 7500, description: 'Dual or multi-language site switching' },
  { id: 'blog-cms', name: 'Blog & Content Management Engine', category: 'core', estimatedCost: 3000, description: 'CMS setup for publishing news & articles' },
  { id: 'custom-dashboard', name: 'Role-based Admin Portal', category: 'advanced', estimatedCost: 25000, description: 'Custom administrative backend & user roles' },
];

export const COMMERCIAL_TERMS = {
  fixedUnder20k: 'Under ₹20,000: 50% advance and 50% prior to final launch.',
  customAbove20k: 'Custom Projects: 40% advance milestone, 30% on design sign-off, 30% before deployment.',
  codeOwnership: '100% source code and asset ownership transferred upon completion.',
};