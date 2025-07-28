import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Clock, 
  BookOpen,
  Award,
  Globe,
  Calculator,
  Code,
  Laptop,
  FileText,
  Video,
  MessageCircle
} from "lucide-react";

const AcademicSupport = () => {
  const subjects = [
    {
      name: "Computer Science",
      icon: Code,
      topics: ["Data Structures", "Algorithms", "Software Engineering", "Database Design"],
      tutors: 25,
      rating: 4.9
    },
    {
      name: "Information Technology",
      icon: Laptop,
      topics: ["Network Security", "System Administration", "Cloud Computing", "IT Management"],
      tutors: 20,
      rating: 4.8
    },
    {
      name: "Web Development",
      icon: Globe,
      topics: ["HTML/CSS", "JavaScript", "React", "Backend Development"],
      tutors: 30,
      rating: 4.9
    },
    {
      name: "Data Science",
      icon: Calculator,
      topics: ["Statistics", "Machine Learning", "Python", "Data Analysis"],
      tutors: 18,
      rating: 4.7
    },
    {
      name: "Programming",
      icon: FileText,
      topics: ["Java", "Python", "C++", "Mobile Development"],
      tutors: 35,
      rating: 4.8
    },
    {
      name: "Digital Media",
      icon: Video,
      topics: ["UI/UX Design", "Digital Marketing", "Content Creation", "Graphics Design"],
      tutors: 15,
      rating: 4.9
    }
  ];

  const services = [
    {
      title: "Assignment Assistance",
      description: "Get expert help with your technical assignments and projects",
      features: [
        "Step-by-step guidance",
        "Code review and debugging",
        "Explanation of concepts",
        "Quality assurance"
      ],
      icon: FileText
    },
    {
      title: "One-on-One Tutoring",
      description: "Personalized tutoring sessions with expert African tutors",
      features: [
        "Customized learning plans",
        "Flexible scheduling",
        "Interactive sessions",
        "Progress tracking"
      ],
      icon: Users,
      accent: true
    },
    {
      title: "Project Guidance",
      description: "Complete support for capstone projects and research work",
      features: [
        "Project planning",
        "Research methodology",
        "Implementation support",
        "Documentation help"
      ],
      icon: BookOpen
    }
  ];

  const globalCoverage = [
    { country: "United States", flag: "🇺🇸", students: "2,500+", universities: "150+" },
    { country: "United Kingdom", flag: "🇬🇧", students: "1,800+", universities: "80+" },
    { country: "Dubai/UAE", flag: "🇦🇪", students: "900+", universities: "25+" },
    { country: "Other Countries", flag: "🌍", students: "1,200+", universities: "100+" }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-success/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Global <span className="bg-gradient-hero bg-clip-text text-transparent">Academic Support</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with expert African tutors for specialized assignment assistance and 
              personalized guidance in tech-related fields across USA, UK, and Dubai.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">72h</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <GraduationCap className="mr-2 h-5 w-5" />
                Get Academic Help
              </Button>
              <Button variant="outline" size="lg">
                Find a Tutor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global Coverage
            </h2>
            <p className="text-lg text-muted-foreground">
              Supporting students across multiple countries and universities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalCoverage.map((location, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-border">
                <div className="text-4xl mb-4">{location.flag}</div>
                <h3 className="font-bold text-foreground mb-3">{location.country}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Students:</span>
                    <span className="font-semibold text-success">{location.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Universities:</span>
                    <span className="font-semibold text-primary">{location.universities}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Subject Areas
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized support across various tech-related disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 group border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <subject.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {subject.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{subject.tutors} tutors</span>
                      <span>•</span>
                      <span>{subject.rating}★</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full mt-6 group-hover:scale-105 transition-transform duration-300">
                  Find Tutors
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive academic support tailored to your learning needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`p-8 transition-all duration-300 hover:shadow-elegant ${
                service.accent ? 'border-accent/30 bg-gradient-card' : 'border-border'
              }`}>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                    service.accent ? 'bg-gradient-accent' : 'bg-gradient-primary'
                  }`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="text-left space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          service.accent ? 'bg-accent' : 'bg-primary'
                        }`}></div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={service.accent ? "accent" : "default"} 
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple process to get the academic support you need
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Submit Request</h3>
              <p className="text-muted-foreground text-sm">
                Share your assignment details and requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Match Tutor</h3>
              <p className="text-muted-foreground text-sm">
                Get matched with the perfect tutor for your subject
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Get Support</h3>
              <p className="text-muted-foreground text-sm">
                Receive personalized guidance and assistance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-xl mb-6">
                4
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Succeed</h3>
              <p className="text-muted-foreground text-sm">
                Achieve your academic goals with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-success text-success-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-xl text-success-foreground/90 mb-8">
            Join thousands of students who have achieved academic success with our expert tutors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-success hover:bg-white/90">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Learning Today
            </Button>
            <Button variant="outline" size="lg" className="border-success-foreground/30 text-success-foreground hover:bg-success-foreground/10">
              Browse Tutors
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicSupport;