import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VisionSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
