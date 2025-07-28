import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Globe,
  Code,
  Shield,
  Users,
  GraduationCap
} from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Web Development", icon: Code },
    { name: "Cybersecurity", icon: Shield },
    { name: "Dev Hub", icon: Users },
    { name: "Academic Support", icon: GraduationCap }
  ];

  const quickLinks = [
    "About Us",
    "Services",
    "Dev Portal",
    "Blog",
    "Contact",
    "Privacy Policy",
    "Terms of Service"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">SkillAfrica Limited</h3>
              <p className="text-primary-foreground/80 text-sm">
                A subsidiary of HustleHub Africa
              </p>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-md">
              Empowering digital transformation and connecting global businesses with 
              top-tier African tech talent through comprehensive solutions and secure platforms.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">hello@skillafrica.online</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors duration-300 cursor-pointer">
                  <service.icon className="h-4 w-4" />
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <div key={index} className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 cursor-pointer">
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 SkillAfrica Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-primary-foreground/70 text-sm">Powered by HustleHub Africa</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-success animate-pulse delay-100"></div>
              <div className="w-2 h-2 rounded-full bg-accent-warm animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;