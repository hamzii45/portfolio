import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, Globe } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>CLIENT REVIEWS & FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Trusted by International Clients on Fiverr & Upwork
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-sans">
            100+ projects completed with 5-star ratings across US, UK, Saudi Arabia, Europe, and Asia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-slate-950 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30 flex items-center gap-1">
                    <span>{test.flag}</span>
                    <span>{test.country}</span>
                  </span>
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans italic mb-6">
                  "{test.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-100 font-sans flex items-center gap-1.5">
                    <span>{test.clientName}</span>
                    {test.verifiedBuyer && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" title="Verified Buyer" />
                    )}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {test.clientRole} • <span className="text-cyan-400">{test.companyOrPlatform}</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  {test.projectScope}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
