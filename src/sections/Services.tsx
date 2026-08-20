import { Globe, ShoppingCart, Cpu, Layers } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const serviceFamilies = [
    {
      icon: Globe,
      title: 'Business & Corporate Sites',
      badge: 'Fixed Tiered Pricing',
      description:
        'Professional, lead-generating brochure and catalog websites for manufacturers, exporters, clinics, and service companies.',
      priceTag: '₹9,999 – ₹59,999',
      deliverables: [
        '5 to 25 structured pages',
        'Direct WhatsApp & Lead Capture',
        'SEO, Sitemap & Search Console',
        '15 to 90 days post-launch support'
      ],
      ctaText: 'View Packages',
      ctaHref: '#packages',
      highlighted: true,
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Storefronts',
      badge: 'Starting Category',
      description:
        'Conversion-ready online stores with product variations, integrated carts, payment gateways, and order administration.',
      priceTag: '₹49,999+ (Base 50 Products)',
      deliverables: [
        'Shop, Category & Product pages',
        'Payment gateway integration',
        'WhatsApp/Email order notices',
        'Customer account portals'
      ],
      ctaText: 'Scope E-Commerce',
      ctaHref: '#contact',
      highlighted: false,
    },
    {
      icon: Cpu,
      title: 'Custom Web Applications',
      badge: 'Scope-Based Quotation',
      description:
        'Bespoke digital platforms, booking engines, internal CRM/ERP integrations, and customer/employee dashboards.',
      priceTag: '₹99,999+ (Custom Scope)',
      deliverables: [
        'Requirements discovery blueprint',
        'Custom workflow & API integration',
        'Role-based dashboard systems',
        'Tailored delivery & QA milestones'
      ],
      ctaText: 'Request Discovery',
      ctaHref: '#contact',
      highlighted: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#FFFFFF] border-b border-[#D9E1EC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F7FB] border border-[#D9E1EC] text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
            What Pixelara Builds
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
            Service Families Built Around Your Commercial Scale
          </h2>
          <p className="text-base text-[#5B6472] mt-3 leading-relaxed">
            Standard business sites use fixed package pricing, while transaction-heavy storefronts and custom software platforms follow strict scope-based quotations.
          </p>
        </div>

        {/* 3-Column Service Family Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {serviceFamilies.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
