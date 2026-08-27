import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { StoryBooking } from './components/StoryBooking';
import { InquiriesDashboard } from './components/InquiriesDashboard';
import { StaffLogin } from './components/StaffLogin';
import { EnquiryModal } from './components/EnquiryModal';
import {
  canAccessInquiries,
  clearSession,
  loadSession,
  type AuthSession,
} from './lib/auth';

type View = 'home' | 'staff-login' | 'inquiries';

function pathToView(session: AuthSession | null): View {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash === 'inquiries' || hash === 'owner' || hash === 'staff') {
    if (session && canAccessInquiries(session.role)) return 'inquiries';
    return 'staff-login';
  }
  return 'home';
}

export default function App() {
  const [session, setSession] = useState<AuthSession | null>(() => loadSession());
  const [view, setView] = useState<View>(() => pathToView(loadSession()));
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingVehicleId, setBookingVehicleId] = useState<string | undefined>();
  const [bookingTourId, setBookingTourId] = useState<string | undefined>();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryTopic, setEnquiryTopic] = useState('Iceland Limousine Concierge');

  useEffect(() => {
    const onHash = () => {
      const next = pathToView(session);
      setView(next);
      if (window.location.hash.replace(/^#\/?/, '') === 'book') {
        setBookingOpen(true);
      }
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [session]);

  const openBooking = (opts?: { vehicleId?: string; tourId?: string }) => {
    setBookingVehicleId(opts?.vehicleId);
    setBookingTourId(opts?.tourId);
    setBookingOpen(true);
    window.location.hash = '#/book';
  };

  const closeBooking = () => {
    setBookingOpen(false);
    if (window.location.hash.includes('book')) {
      window.location.hash = '';
    }
  };

  const goStaffArea = () => {
    if (session && canAccessInquiries(session.role)) {
      setView('inquiries');
      window.location.hash = '#/inquiries';
    } else {
      setView('staff-login');
      window.location.hash = '#/staff';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (next: AuthSession) => {
    setSession(next);
    setView('inquiries');
    window.location.hash = '#/inquiries';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    clearSession();
    setSession(null);
    setView('staff-login');
    window.location.hash = '#/staff';
  };

  const showChrome = view === 'home';

  return (
    <div className="min-h-screen bg-[#080B0E] text-[#F3F4F6] flex flex-col justify-between selection:bg-[#C5A880] selection:text-[#080B0E]">
      {showChrome && (
        <Navigation
          onOpenBooking={() => openBooking()}
          onOpenEnquiry={(topic) => {
            setEnquiryTopic(topic || 'Iceland Limousine Concierge');
            setEnquiryOpen(true);
          }}
          onOpenStaff={goStaffArea}
          staffSignedIn={Boolean(session && canAccessInquiries(session.role))}
          onGoHome={goHome}
        />
      )}

      <main className="flex-1">
        {view === 'home' && (
          <HomeView
            onOpenBooking={openBooking}
            onOpenEnquiry={(topic) => {
              setEnquiryTopic(topic || 'Iceland Limousine Concierge');
              setEnquiryOpen(true);
            }}
          />
        )}
        {view === 'staff-login' && (
          <StaffLogin onSuccess={handleLoginSuccess} onCancel={goHome} />
        )}
        {view === 'inquiries' && session && canAccessInquiries(session.role) && (
          <InquiriesDashboard
            session={session}
            onBack={goHome}
            onLogout={handleLogout}
          />
        )}
      </main>

      {showChrome && (
        <Footer
          onOpenBooking={() => openBooking()}
          onOpenEnquiry={(topic) => {
            setEnquiryTopic(topic || 'Iceland Limousine Concierge');
            setEnquiryOpen(true);
          }}
          onOpenStaff={goStaffArea}
        />
      )}

      {bookingOpen && (
        <StoryBooking
          initialVehicleId={bookingVehicleId}
          initialTourId={bookingTourId}
          onClose={closeBooking}
          onComplete={closeBooking}
        />
      )}

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultTopic={enquiryTopic}
        brandLabel="ICELAND LIMOUSINE · CONCIERGE"
      />
    </div>
  );
}
