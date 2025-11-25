'use client';

import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* 이미지 overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cocktail-hero.jpg')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      {/* body */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 완쪽 - 글 영역 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="flex items-center gap-2 text-pink-500 mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wider uppercase">Premium Cocktail Website</span>
                </div>
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="text-white">O</span>
                <span className="text-pink-500">Bar</span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-2xl text-gray-300 font-light">
                  Oh, Bar!
                </p>
                <p className="text-2xl text-gray-300 font-light">
                  Over the ordinary
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Obar는 당신이 원하는 칵테일을 모두 가지고 있습니다.
              감각적인 분위기 속에서 나만의 칵테일을 찾아보세요.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={'/dashboard'} className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors">
                Go Dashboard
              </Link>
              <button className="px-8 py-3 border border-pink-500 text-pink-500 hover:bg-pink-500/10 font-semibold rounded-lg transition-colors">
                Reserve Now
              </button>
            </div>
          </div>

          {/* 오른쪽 - 이미지 영역 */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full" />
              <img 
                src="/images/about/cocktail-neon.jpg" 
                alt="Cocktail Neon Sign"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-pink-500/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 스티커 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-pink-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}