import { Button } from "@/components/ui/button";
import { 
  Target, 
  Rocket, 
  MapPin, 
  TrendingUp,
  CheckCircle
} from "lucide-react";

const VisionSection = () => {
  const visionPoints = [
    "Premier global platform for African tech talent",
    "Comprehensive digital solutions and academic support",
    "Vibrant, secure online environment",
    "Dual focus on local Kenyan and international markets"
  ];

  const markets = [
    { name: "Kenya", flag: "🇰🇪", status: "Local Market" },
    { name: "USA", flag: "🇺🇸", status: "International" },
    { name: "UK", flag: "🇬🇧", status: "International" },
    { name: "Dubai", flag: "🇦🇪", status: "International" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Vision Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our <span className="bg-gradient-hero bg-clip-text text-transparent">Vision</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-foreground">SkillAfrica Limited</strong>, a proud subsidiary of 
              <strong className="text-primary"> HustleHub Africa</strong>, is set to become the premier 
              global platform connecting businesses and students with top-tier African tech talent.
            </p>

            {/* Vision Points */}
            <div className="space-y-4 mb-10">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <Rocket className="mr-2 h-5 w-5" />
                Join Our Mission
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Markets & Growth */}
          <div className="space-y-8">
            {/* Market Coverage */}
            <div className="p-8 bg-card rounded-2xl shadow-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Global Market Coverage</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {markets.map((market, index) => (
                  <div key={index} className="p-4 bg-secondary/50 rounded-xl border border-border hover:shadow-card transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{market.flag}</span>
                      <div>
                        <h4 className="font-semibold text-foreground">{market.name}</h4>
                        <p className="text-xs text-muted-foreground">{market.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Metrics */}
            <div className="p-8 bg-gradient-card rounded-2xl shadow-elegant border border-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Expansive Growth & Impact</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Platform Commission</span>
                  <span className="text-2xl font-bold text-accent">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Talent Coverage</span>
                  <span className="text-2xl font-bold text-success">Africa-Wide</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Service Areas</span>
                  <span className="text-2xl font-bold text-primary">4 Core</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;