import ServiceCard from "./ServiceCard";
import { 
  Code, 
  Shield, 
  Users, 
  GraduationCap, 
  Globe,
  Zap
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development & Digital Presence",
      description: "Comprehensive digital solutions from custom web development to technical SEO implementation.",
      features: [
        "Custom Web & Software Development (Python, React, WordPress)",
        "Technical SEO Implementation & Optimization",
        "Domain Registration & High-Performance Hosting",
        "Responsive Design & Mobile Optimization"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Robust security solutions to protect your digital assets and ensure business continuity.",
      features: [
        "Website Security Audits & Vulnerability Assessment",
        "Malware Removal & Prevention Systems",
        "SSL Certificate Management & Implementation",
        "Firewall Setup & DDoS Protection"
      ],
      accent: true
    },
    {
      icon: Users,
      title: "Developer Talent Hub",
      description: "Connect with vetted African freelancers through our curated marketplace platform.",
      features: [
        "Curated Marketplace of Vetted Developers",
        "Project-based Work (Easy, Medium, Hard)",
        "Technical & Non-Technical Specialists",
        "Premium Features for Enhanced Opportunities"
      ]
    },
    {
      icon: GraduationCap,
      title: "Global Academic Support",
      description: "Specialized tutoring and assignment assistance for university students worldwide.",
      features: [
        "Expert African Tutors in Tech Fields",
        "Assignment Assistance & Guidance",
        "Personalized Learning Support",
        "Global Coverage (USA, UK, Dubai)"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core <span className="bg-gradient-hero bg-clip-text text-transparent">Offerings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to empower your business and connect you with exceptional African talent
          </p>
          
          {/* Key Metrics */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 p-8 bg-card rounded-2xl shadow-card border border-border max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <p className="text-sm text-muted-foreground">Global Markets</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-6 w-6 text-accent" />
                <span className="text-2xl font-bold text-accent">25%</span>
              </div>
              <p className="text-sm text-muted-foreground">Commission Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="h-6 w-6 text-success" />
                <span className="text-2xl font-bold text-success">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Vetted Talent</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              accent={service.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;