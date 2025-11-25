'use client';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-pink-500/10 via-black to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-white">
            Ready to Experience <span className="text-pink-500">OBar</span>?
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            평범함을 넘어선 특별한 칵테일 경험이 당신을 기다립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors">
              On the top
            </button>
            <button className="px-8 py-3 border border-pink-500 text-pink-500 hover:bg-pink-500/10 font-semibold rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
