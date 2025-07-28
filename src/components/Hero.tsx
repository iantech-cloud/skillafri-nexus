import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Digital 
            <span className="block bg-gradient-to-r from-accent to-accent-warm bg-clip-text text-transparent">
              Transformation
            </span>
            & Global Talent
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            SkillAfrica Limited connects businesses and students with top-tier African tech talent, 
            offering comprehensive digital solutions and fostering secure online environments.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-white/90">
              <Globe className="h-6 w-6 text-accent" />
              <span className="font-semibold">Global Reach</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Users className="h-6 w-6 text-accent" />
              <span className="font-semibold">Expert Talent</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Zap className="h-6 w-6 text-accent" />
              <span className="font-semibold">Digital Excellence</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Join Dev Hub
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;