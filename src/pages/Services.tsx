import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import { 
  Code, 
  Shield, 
  Search, 
  Globe,
  Server,
  Smartphone,
  Database,
  Zap
} from "lucide-react";

const Services = () => {
  const webServices = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Full-stack web applications built with modern technologies like Python, React, and WordPress.",
      features: [
        "React & Next.js Frontend Development",
        "Python Backend (Django/Flask)",
        "WordPress Custom Solutions",
        "API Development & Integration"
      ]
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first, responsive designs that work seamlessly across all devices and screen sizes.",
      features: [
        "Mobile-First Design Approach",
        "Cross-Browser Compatibility",
        "Performance Optimization",
        "User Experience (UX) Design"
      ]
    },
    {
      icon: Search,
      title: "Technical SEO",
      description: "Advanced SEO implementation to improve your website's visibility and search engine rankings.",
      features: [
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Core Web Vitals Optimization",
        "Schema Markup Implementation"
      ]
    },
    {
      icon: Server,
      title: "Web Hosting & Domains",
      description: "High-performance hosting solutions with domain registration and management services.",
      features: [
        "High-Performance Hosting",
        "Domain Registration & Management",
        "SSL Certificate Setup",
        "CDN Configuration"
      ]
    }
  ];

  const securityServices = [
    {
      icon: Shield,
      title: "Security Audits",
      description: "Comprehensive security assessments to identify vulnerabilities and strengthen your defenses.",
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Risk Analysis",
        "Compliance Reporting"
      ],
      accent: true
    },
    {
      icon: Database,
      title: "Malware Protection",
      description: "Advanced malware detection, removal, and prevention systems to keep your site secure.",
      features: [
        "Malware Scanning & Removal",
        "Real-time Threat Detection",
        "Automated Security Updates",
        "Backup & Recovery Solutions"
      ]
    },
    {
      icon: Globe,
      title: "SSL & Firewall",
      description: "Enterprise-grade SSL certificates and firewall protection for secure data transmission.",
      features: [
        "SSL Certificate Management",
        "Web Application Firewall",
        "DDoS Protection",
        "Secure Data Encryption"
      ]
    },
    {
      icon: Zap,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and incident response to protect your digital assets.",
      features: [
        "24/7 Security Monitoring",
        "Incident Response Team",
        "Security Alert System",
        "Regular Security Reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Digital <span className="bg-gradient-hero bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Comprehensive web development and cybersecurity services to power your digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">Start Your Project</Button>
            <Button variant="outline" size="lg">View Portfolio</Button>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Web Development & Digital Presence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end web development solutions built with cutting-edge technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cybersecurity Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Robust security solutions to protect your digital assets and ensure business continuity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
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

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Built on modern, reliable technologies for maximum performance and security
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Python', 'WordPress', 'Next.js', 'Django', 'Flask', 'PostgreSQL', 'CPanel'].map((tech, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">{tech}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">Get Started Today</Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;