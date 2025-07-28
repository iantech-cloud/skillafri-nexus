import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Star, 
  Award, 
  TrendingUp,
  Code,
  Palette,
  Search,
  Database,
  Smartphone,
  Globe,
  DollarSign,
  Clock
} from "lucide-react";

const DevHub = () => {
  const talents = [
    {
      name: "Full-Stack Developers",
      icon: Code,
      skills: ["React", "Python", "Node.js", "Django"],
      projects: 150,
      rating: 4.9
    },
    {
      name: "UI/UX Designers",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      projects: 120,
      rating: 4.8
    },
    {
      name: "SEO Specialists",
      icon: Search,
      skills: ["Technical SEO", "Analytics", "Content Strategy"],
      projects: 90,
      rating: 4.9
    },
    {
      name: "Mobile Developers",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android"],
      projects: 80,
      rating: 4.7
    },
    {
      name: "DevOps Engineers",
      icon: Database,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      projects: 70,
      rating: 4.8
    },
    {
      name: "Web Developers",
      icon: Globe,
      skills: ["WordPress", "Shopify", "HTML/CSS", "JavaScript"],
      projects: 200,
      rating: 4.9
    }
  ];

  const projectCategories = [
    {
      category: "Easy Projects",
      description: "Simple tasks perfect for getting started",
      price: "$50 - $500",
      timeframe: "1-3 days",
      examples: ["Landing pages", "WordPress setup", "Basic UI fixes", "Content updates"]
    },
    {
      category: "Medium Projects", 
      description: "Moderate complexity requiring specialized skills",
      price: "$500 - $2,500",
      timeframe: "1-2 weeks",
      examples: ["Custom web apps", "E-commerce sites", "API integration", "Mobile apps"]
    },
    {
      category: "Hard Projects",
      description: "Complex solutions requiring expert-level skills",
      price: "$2,500+",
      timeframe: "2+ weeks",
      examples: ["Enterprise platforms", "Advanced integrations", "Custom software", "Large-scale systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Developer <span className="bg-gradient-hero bg-clip-text text-transparent">Talent Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with vetted African freelancers and access top-tier talent for your projects. 
              From simple tasks to complex enterprise solutions.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Vetted Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Platform Fee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Find Talent
              </Button>
              <Button variant="outline" size="lg">
                Join as Freelancer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Available Talent Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our curated pool of African tech professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talents.map((talent, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 group border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <talent.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {talent.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span>{talent.rating}</span>
                      <span>•</span>
                      <span>{talent.projects} projects</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full mt-6 group-hover:scale-105 transition-transform duration-300">
                  View Professionals
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Projects organized by complexity and scope to match your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <Card key={index} className={`p-8 border-2 transition-all duration-300 hover:shadow-elegant ${
                index === 1 ? 'border-accent/30 bg-gradient-card' : 'border-border'
              }`}>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                    index === 1 ? 'bg-gradient-accent' : 'bg-gradient-primary'
                  }`}>
                    {index === 0 && <Award className="h-8 w-8 text-white" />}
                    {index === 1 && <TrendingUp className="h-8 w-8 text-white" />}
                    {index === 2 && <Star className="h-8 w-8 text-white" />}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {category.category}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center gap-2">
                      <DollarSign className="h-4 w-4 text-success" />
                      <span className="font-semibold text-success">{category.price}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{category.timeframe}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    <h4 className="font-semibold text-foreground">Examples:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex}>• {example}</li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant={index === 1 ? "accent" : "default"} 
                    className="w-full"
                  >
                    Browse Projects
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple process to connect with the right talent for your project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Post Your Project</h3>
              <p className="text-muted-foreground">
                Describe your project requirements and set your budget
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Review Proposals</h3>
              <p className="text-muted-foreground">
                Receive proposals from qualified freelancers and choose the best fit
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Get Results</h3>
              <p className="text-muted-foreground">
                Work with your chosen freelancer and receive high-quality results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of businesses that trust our platform for their development needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Post a Project
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Browse Talent
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevHub;