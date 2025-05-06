import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import PartnersSection from '@/components/sections/partners-section';
import BlogPreviewSection from '@/components/sections/blog-preview-section';
import CustomerReviewsSection from '@/components/sections/customer-reviews-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PartnersSection />
      <BlogPreviewSection />
      <CustomerReviewsSection />
      <ContactSection />
    </div>
  );
}
