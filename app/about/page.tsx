import { HeroSection } from '@/components/about/HeroSection';
import { MixologySection } from '@/components/about/MixologySection';
import { BrandStorySection } from '@/components/about/BrandStorySection';
import { CTASection } from '@/components/about/CTASection';

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MixologySection />
      <BrandStorySection />
      <CTASection />
    </>
  );
}