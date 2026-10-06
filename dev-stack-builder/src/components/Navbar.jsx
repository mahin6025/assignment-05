import React, { useState } from 'react';
import { BRAND_TEXT_GRADIENT, BRAND_GRADIENT } from '../theme';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Technologies', href: '#technologies' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Mobile Left: Hamburger Icon */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-700 hover:text-pink-600 focus:outline-none p-2"
                            aria-label="Toggle Navigation"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop & Mobile Center: Brand Logo + Dev Stack Name */}
                    <a href="#home" className="flex items-center gap-2 font-extrabold text-xl">
                        <div className={`w-8 h-8 rounded-lg ${BRAND_GRADIENT} flex items-center justify-center text-white shadow-sm`}>
                            ⚡
                        </div>
                        <span className={BRAND_TEXT_GRADIENT}>Dev Stack</span>
                    </a>

                    {/* Desktop Center: Nav Links */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveTab(link.name)}
                                className={`text-sm font-medium transition-colors ${activeTab === link.name
                                    ? 'text-pink-600 border-b-2 border-pink-500 pb-1'
                                    : 'text-slate-600 hover:text-pink-600'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop & Mobile Right: Action Buttons */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button className="text-sm font-semibold text-slate-700 hover:text-pink-600 px-2 sm:px-3 py-2 transition-colors">
                            Sign In
                        </button>
                        <button className={`text-sm font-semibold text-white ${BRAND_GRADIENT} hover:opacity-90 px-4 py-2 rounded-full shadow-md transition-all`}>
                            Sign Up
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Drawer Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => {
                                setActiveTab(link.name);
                                setIsMenuOpen(false);
                            }}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === link.name
                                ? 'bg-pink-50 text-pink-600'
                                : 'text-slate-700 hover:bg-slate-100'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;