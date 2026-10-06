import React from 'react';
import { BRAND_GRADIENT, BRAND_TEXT_GRADIENT } from '../theme';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800">

                    {/* Brand Block */}
                    <div className="md:col-span-2">
                        <a href="#home" className="flex items-center gap-2 font-extrabold text-2xl">
                            <div className={`w-8 h-8 rounded-lg ${BRAND_GRADIENT} flex items-center justify-center text-white text-sm`}>
                                ⚡
                            </div>
                            <span className={BRAND_TEXT_GRADIENT}>Dev Stack</span>
                        </a>
                        <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">
                            Simplify tech stack selection and empower your development workflow with vetted modern technologies.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-4 mt-6 text-slate-400">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        </div>
                    </div>

                    {/* Link Groups */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#technologies" className="hover:text-white transition-colors">Technologies</a></li>
                            <li><a href="#features" className="hover:text-white transition-colors">Stack Builder</a></li>
                            <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>© 2026 Dev Stack Builder. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy</a>
                        <a href="#terms" className="hover:text-slate-400 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;