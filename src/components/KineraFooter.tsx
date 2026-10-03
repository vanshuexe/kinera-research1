import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface KineraFooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenSolution: (solutionId: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const KineraFooter: React.FC<KineraFooterProps> = ({
  onNavigate,
  onOpenSolution,
  onOpenAbout,
  onOpenContact,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#121625] text-slate-300 pt-16 pb-12 border-t border-slate-800 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full border border-slate-400 flex items-center justify-center text-white font-sans-clean font-bold text-xs">
                K
              </div>
              <span className="font-sans-clean text-lg font-bold tracking-tight text-white">
                kinera
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs font-normal">
              Full-picture research and analytics for teams making high-stakes decisions in health and consumer markets.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-sans-clean">
              SOLUTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => onOpenSolution('primary-market-research')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  HCP & KOL Recruitment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenSolution('analytics-data-strategy')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Patient & Caregiver Recruitment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenSolution('kol-expert-identification')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Payer & Consumer Recruitment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenSolution('brand-message-tracking')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Fieldwork & Project Support
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-sans-clean">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button 
                  onClick={onOpenAbout} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('insights')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Insights
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenContact} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-sans-clean">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => setLegalModal('Privacy Policy')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModal('Terms of Use')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModal('Cookie Policy')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Stay In The Loop Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-sans-clean">
              STAY IN THE LOOP
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Occasional notes on research and category trends. No spam.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex rounded-lg overflow-hidden border border-slate-700 bg-slate-900/90 focus-within:border-slate-500">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs text-white bg-transparent focus:outline-none placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-xs font-semibold text-white bg-[#B84A39] hover:bg-[#A33D2D] transition-colors cursor-pointer shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : 'Sign up'}
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 block animate-in fade-in">
                  You are on the list!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <p>© 2026 Kinera Research. All rights reserved. — Dummy site for design review only.</p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#linkedin" className="hover:text-white transition-colors">in</a>
              <a href="#twitter" className="hover:text-white transition-colors">X</a>
              <a href="#instagram" className="hover:text-white transition-colors">ig</a>
            </div>
          </div>

          <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
            DUMMY SITE · PLACEHOLDER CONTENT
          </div>
        </div>

      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#151928] border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-300 shadow-2xl relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-white mb-3 font-sans-clean">
              {legalModal}
            </h3>
            <div className="space-y-2 text-xs text-slate-400 max-h-64 overflow-y-auto pr-2">
              {legalModal === 'Privacy Policy' && (
                <>
                  <p><strong className="text-white">1. Who we are</strong><br />Kinera Research provides healthcare market research and expert recruitment services. We act as a data controller for the personal data described in this policy, and as a data processor where we handle data on behalf of our clients.</p>
                  <p><strong className="text-white">2. Our commitment</strong><br />We are committed to complying with the EU GDPR, the UK GDPR, India's Digital Personal Data Protection Act, 2023 and other applicable data protection laws. Our information security controls are aligned with ISO/IEC 27001.</p>
                  <p><strong className="text-white">3. Data we collect</strong><br />Identity and contact details; professional details such as specialty, qualifications, institution, experience and licensing; research participation data; payment details required for honoraria; and technical data such as IP address, browser and device information.</p>
                  <p><strong className="text-white">4. Why we use your data and our legal basis</strong><br />We use data to recruit and screen professionals, schedule and conduct research, process honoraria, keep records accurate, prevent fraud and send future-study updates where you have opted in. The relevant basis may be consent, contract, legal obligation or legitimate interests.</p>
                  <p><strong className="text-white">5. Your rights</strong><br />You may request access, correction, deletion, restriction, portability, object to processing and withdraw consent at any time. You may also complain to your local data protection authority.</p>
                </>
              )}
              {legalModal === 'Terms of Use' && (
                <>
                  <p><strong className="text-white">1. Acceptance</strong><br />By accessing or using the Kinera Research website and services, you agree to these Terms.</p>
                  <p><strong className="text-white">2. Our services</strong><br />We provide healthcare research recruitment and related consulting services. Website content is for general information and does not constitute medical, legal or investment advice.</p>
                  <p><strong className="text-white">3. Eligibility and accurate information</strong><br />You must be at least 18 years old and provide accurate, current information. Healthcare professionals must truthfully represent their credentials and experience when taking part in studies.</p>
                  <p><strong className="text-white">4. Acceptable use</strong><br />You agree not to misrepresent your identity or qualifications, attempt unauthorised access, copy or scrape our content without permission, or use the site for unlawful or harmful purposes.</p>
                  <p><strong className="text-white">5. Honoraria</strong><br />Where a study offers an honorarium, it is paid after successful completion and verification, in line with the terms stated for that study and applicable tax and compliance rules.</p>
                  <p><strong className="text-white">6. Intellectual property</strong><br />All website content, branding and materials are owned by or licensed to Kinera Research and are protected by intellectual property law.</p>
                  <p><strong className="text-white">7. Limitation of liability</strong><br />To the extent permitted by law, we are not liable for indirect or consequential losses arising from use of the site. Nothing in these Terms limits liability that cannot be limited by law.</p>
                  <p><strong className="text-white">8. Governing law</strong><br />These Terms are governed by the laws of India, and the courts of Pune, Maharashtra have jurisdiction, subject to any mandatory consumer rights.</p>
                  <p><strong className="text-white">9. Changes and contact</strong><br />We may update these Terms from time to time. Continued use of the website after an update means you accept the revised Terms.</p>
                </>
              )}
              {legalModal === 'Cookie Policy' && (
                <>
                  <p><strong className="text-white">1. Your consent</strong><br />In line with GDPR and ePrivacy rules, we place non-essential cookies only after you give consent through our cookie banner. You can accept all, reject all or choose categories, and change your choice at any time through Cookie Settings.</p>
                  <p><strong className="text-white">2. Managing cookies in your browser</strong><br />You can block or delete cookies in your browser settings. Blocking strictly necessary cookies may affect how the site works.</p>
                  <p><strong className="text-white">3. Third-party cookies</strong><br />Some cookies may be set by third-party providers, such as analytics tools. These providers process data under their own privacy policies and our agreements with them.</p>
                </>
              )}
            </div>
            <div className="mt-5 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
