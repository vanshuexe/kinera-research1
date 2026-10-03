import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Send } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  initialTopic,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: initialTopic || 'HCP & KOL Recruitment',
    markets: '',
    decisionDescription: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FBF9F4] border border-[#E0DBCF] rounded-2xl max-w-xl w-full p-6 sm:p-8 text-slate-900 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-200/50 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-14 h-14 bg-[#E2ECE8] text-[#1E5648] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-sans-clean font-bold text-slate-900">
              Message Received
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name || 'Partner'}</strong>. A member of the Kinera Research team will review your brief and get back to <strong>{formData.email}</strong> within 2 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#141722] hover:bg-[#252A3B] text-white text-xs font-semibold rounded-full cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[11px] font-bold text-[#B84A39] tracking-wider uppercase font-sans-clean">
                LET'S TALK
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans-clean font-bold text-slate-950 mt-1">
                Let's Get Your Project Started
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Share your brief and we'll build the plan. Tell us what you're recruiting for. We'll come back with a clear plan, timeline and cost, so you know exactly when your respondents will be ready for fieldwork.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Your Name <span className="text-[#B84A39]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D5D0C5] text-xs bg-white focus:outline-none focus:border-slate-800"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Work Email <span className="text-[#B84A39]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D5D0C5] text-xs bg-white focus:outline-none focus:border-slate-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Company / Organization <span className="text-[#B84A39]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Zenvexa Pharmaceuticals"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D5D0C5] text-xs bg-white focus:outline-none focus:border-slate-800"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Who do you need to recruit?
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D5D0C5] text-xs bg-white focus:outline-none focus:border-slate-800"
                >
                  <option value="HCP & KOL Recruitment">HCP &amp; KOL Recruitment</option>
                  <option value="Patient & Caregiver Recruitment">Patient &amp; Caregiver Recruitment</option>
                  <option value="Payer & Consumer Recruitment">Payer &amp; Consumer Recruitment</option>
                  <option value="Fieldwork & Project Support">Fieldwork &amp; Project Support</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                Markets
              </label>
              <input
                type="text"
                placeholder="e.g., US, UK, Germany"
                value={formData.markets}
                onChange={(e) => setFormData({ ...formData, markets: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-[#D5D0C5] text-xs bg-white focus:outline-none focus:border-slate-800"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                Tell us about your study
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tell us who you need to recruit, the methodology and when you need fieldwork to start."
                value={formData.decisionDescription}
                onChange={(e) => setFormData({ ...formData, decisionDescription: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-[#D5D0C5] text-xs bg-white focus:outline-none focus:border-slate-800"
              />
            </div>

            <p className="text-[11px] text-slate-500">We reply within 2 hours.</p>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#B84A39] hover:bg-[#A33D2D] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Share your brief</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
