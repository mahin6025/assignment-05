import React from 'react';
import { BRAND_GRADIENT, BRAND_TEXT_GRADIENT } from '../theme';
import bannerImg from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50/60 py-12 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Text Column */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Build Your Next <br className="hidden sm:inline" />
                            <span className={BRAND_TEXT_GRADIENT}>
                                Dev Stack Faster
                            </span>
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Discover, evaluate, and assemble production-ready technology combinations tailored for modern, high-performance web applications.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="#technologies"
                                className={`w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white ${BRAND_GRADIENT} hover:opacity-95 rounded-xl shadow-lg hover:shadow-xl transition-all text-center`}
                            >
                                Explore Technologies
                            </a>

                            <a
                                href="#about"
                                className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-700 hover:text-pink-600 bg-white border-2 border-slate-300 hover:border-pink-500 rounded-xl transition-all text-center"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg lg:max-w-none">
                            <img
                                src={bannerImg}
                                alt="Dev Stack Architecture Showcase"
                                className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-slate-200/80"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;