'use client';

import { MapPin } from 'lucide-react';

export function BrandStorySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 왼쪽 - 이미지 영역 */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <img 
                src="/images/about/cocktail-hero.jpg" 
                alt="Cocktail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* 오른쪽 - 글 영역 */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20">
              <span className="text-sm font-medium text-pink-500 uppercase tracking-wider">Our Story</span>
            </div>
            
            <h2 className="text-5xl font-bold text-white">
              Beyond the <span className="text-pink-500">Ordinary</span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>
                OBar라는 이름은 두 가지 의미를 담고 있습니다. 
                "OH, bar"라는 감탄사와 "Over"라는 초월의 의미가 만나 평범함을 넘은 특별함을 담고 있습니다.
              </p>
              <p>
                우리는 단순히 음료를 보여주는 것이 아니라, 
                각각의 칵테일에 OBar만의 스토리와 감성을 담아냅니다. 
                검은색의 세련됨과 핑크색의 열정이 조화를 이루는 공간에서 당신만의 특별한 순간을 만들어보세요.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span className="text-lg">Visit us for an unforgettable experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}