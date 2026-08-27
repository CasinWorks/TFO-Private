import React, { useState } from 'react';
import { X, Send, ShieldCheck, Phone, Mail, CheckCircle2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultTopic
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(defaultTopic || 'Runway to Road VIP Service');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0C1017] border border-white/15 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 border border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#080B0F] border-b border-white/10 p-6">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A880] block">
            24/7 VIP CONCIERGE &amp; FLIGHT DESK
          </span>
          <h3 className="font-serif-luxury text-2xl text-white mt-1">
            Direct Concierge Dispatch
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Dedicated private aviation and luxury chauffeur specialists on duty in Reykjavík &amp; London.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#C5A880]/20 border border-[#C5A880] flex items-center justify-center mx-auto text-[#C5A880]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif-luxury text-2xl text-white">
              Inquiry Dispatched Successfully
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your confidential inquiry has been routed to our Senior Duty Concierge and Aviation Flight Dispatch. We will contact you at <strong className="text-white">{email || phone}</strong> within 30 minutes.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#C5A880] hover:bg-[#d6ba94] text-[#080B0E] font-bold text-xs uppercase tracking-widest px-8 py-3 rounded transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="space-y-1">
              <label className="text-slate-300 font-medium">Topic / Service *</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-[#141A24] border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A880]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Your Name *</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Lord Alexander Sterling"
                  className="w-full bg-[#141A24] border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Contact Phone *</label>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+354 588 5522"
                  className="w-full bg-[#141A24] border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A880]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-medium">Email Address *</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vip@domain.com"
                className="w-full bg-[#141A24] border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A880]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-medium">Journey Details &amp; Specific Timing</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Dates, number of guests, flight numbers, aircraft type, special requirements..."
                className="w-full bg-[#141A24] border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A880]"
              />
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>Strict Non-Disclosure Protocol</span>
              </div>

              <button
                type="submit"
                className="bg-[#C5A880] hover:bg-[#d6ba94] text-[#080B0E] font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded transition-all flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Request</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
