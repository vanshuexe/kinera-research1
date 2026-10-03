import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenProject }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FBF9F4] border border-[#E0DBCF] rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-slate-900 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-200/50 transition-colors" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-3 pr-8">
          <span className="text-[11px] font-bold text-[#B84A39] tracking-wider uppercase font-sans-clean">ABOUT KINERA RESEARCH</span>
          <h2 className="text-2xl sm:text-3xl font-sans-clean font-bold text-slate-950">Great Research Starts With the Right Respondent</h2>
        </div>

        <div className="mt-7 space-y-7 text-sm text-slate-600 leading-relaxed">
          <section>
            <h3 className="text-base font-bold text-slate-950 mb-2">Our Story</h3>
            <p>Every research study is only as strong as the people in it. Yet recruitment is often where projects slow down: the wrong profile, a missed session, a timeline that quietly slips.</p>
            <p className="mt-3">Kinera Research was built to fix that. We focus on one part of the research process and do it with care: finding the right healthcare voices, confirming them properly and getting them to the conversation. We believe that when recruitment works, everything after it works better.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-950 mb-3">What We Believe</h3>
            <div className="space-y-3">
              <p><strong className="text-slate-900">Recruitment is part of the research, not a step before it.</strong><br />A mismatched respondent weakens the findings. We treat every profile as if the study depends on it, because it does.</p>
              <p><strong className="text-slate-900">Clear beats fast-sounding.</strong><br />We would rather tell you a realistic timeline upfront than promise one we can't keep.</p>
              <p><strong className="text-slate-900">Respect runs both ways.</strong><br />Doctors, patients and caregivers give their time and experience. We treat them with courtesy and honesty, and that is why they show up.</p>
              <p><strong className="text-slate-900">Your criteria are the brief.</strong><br />We recruit to your screener, not to whoever is easiest to reach.</p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-950 mb-3">How We Show Up</h3>
            <ul className="space-y-2">
              <li><strong className="text-slate-900">Straight answers.</strong> Feasibility, timelines and costs before you commit.</li>
              <li><strong className="text-slate-900">One point of contact.</strong> No handoffs, no repeating yourself.</li>
              <li><strong className="text-slate-900">Careful with data.</strong> Consent, privacy and confidentiality handled properly for every respondent.</li>
              <li><strong className="text-slate-900">No surprises.</strong> Regular updates until the last session is complete.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-950 mb-2">Our Aim</h3>
            <p>To be the recruitment partner that market research teams stop worrying about, so they can focus on the work only they can do.</p>
          </section>
        </div>

        <div className="mt-7 pt-4 border-t border-[#EAE6DC] flex items-center justify-between">
          <button onClick={onClose} className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer">Close</button>
          <button onClick={() => { onClose(); onOpenProject(); }} className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#141722] hover:bg-[#252A3B] transition-colors cursor-pointer flex items-center gap-1.5">
            <span>Share Your Brief</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
