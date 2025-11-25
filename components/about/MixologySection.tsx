'use client';

import { Wine, Sparkles, Clock } from 'lucide-react';

export function MixologySection() {
  const features = [
    {
      icon: Wine,
      title: "Premium Ingredients",
      description: "엄선된 최고급 재료만을 사용하여 완벽한 한 잔을 만들어냅니다."
    },
    {
      icon: Sparkles,
      title: "Signature Creations",
      description: "숙련된 믹솔로지스트가 창조하는 독창적인 시그니처 칵테일을 경험하세요."
    },
    {
      icon: Clock,
      title: "Timeless Atmosphere",
      description: "세련되고 감각적인 공간에서 특별한 순간을 만들어보세요."
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl font-bold text-white">
              The Art of <span className="text-pink-500">Mixology</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              OBar는 세련된 디자인과 분위기 속에 다양한 종류의 칵테일을 제공해드립니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 rounded-2xl bg-black border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative space-y-4">
                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}