import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroAndIntro } from './components/HeroAndIntro';
import { ExpertiseAndAudiences } from './components/ExpertiseAndAudiences';
import { GalleryAndLeadership } from './components/GalleryAndLeadership';
import { MethodologyAndInsights } from './components/MethodologyAndInsights';
import { Footer } from './components/Footer';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { PageRoute } from './data/judehData';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [contextId, setContextId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageRoute, sectionOrServiceId?: string) => {
    setCurrentPage(page);
    setContextId(sectionOrServiceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#810014] selection:text-[#E09900] overflow-x-hidden">
      {/* Persistent Overlay / Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <HeroAndIntro
              onNavigate={handleNavigate}
              onScrollToSection={handleScrollToSection}
            />
            <ExpertiseAndAudiences onNavigate={handleNavigate} />
            <GalleryAndLeadership onNavigate={handleNavigate} />
            <MethodologyAndInsights onNavigate={handleNavigate} />
          </>
        )}

        {currentPage === 'services' && (
          <ServicesPage initialServiceId={contextId} onNavigate={handleNavigate} />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'insights' && <InsightsPage onNavigate={handleNavigate} />}

        {currentPage === 'contact' && <ContactPage initialContextId={contextId} />}
      </main>

      {/* Iconic Final CTA & Architectural Footer */}
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
