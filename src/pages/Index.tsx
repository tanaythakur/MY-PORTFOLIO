import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperimentsSection } from "@/components/experiments-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main>
        <div className="page-border theme-green">
          <HeroSection />
        </div>
        <div className="page-border theme-blue">
          <AboutSection />
        </div>
        <div className="page-border theme-red">
          <ProjectsSection />
        </div>
        <div className="page-border theme-yellow">
          <ExperimentsSection />
        </div>
        <div className="page-border theme-purple">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
