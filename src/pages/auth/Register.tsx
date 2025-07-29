import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Code, GraduationCap, ArrowRight } from "lucide-react";

const Register = () => {
  const userTypes = [
    {
      type: "Client",
      description: "Post projects and hire talented African developers",
      icon: Users,
      link: "/auth/register/client",
      color: "bg-blue-500"
    },
    {
      type: "Freelancer",
      description: "Showcase your skills and work on exciting projects",
      icon: Code,
      link: "/auth/register/freelancer",
      color: "bg-green-500"
    },
    {
      type: "Student",
      description: "Get academic support and tutoring services",
      icon: GraduationCap,
      link: "/auth/register/student",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/5 flex items-center justify-center p-4 pt-20">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Join SkillAfrica Limited
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose how you'd like to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((userType) => {
            const Icon = userType.icon;
            return (
              <Card key={userType.type} className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${userType.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {userType.type}
                </h3>
                <p className="text-muted-foreground mb-8">
                  {userType.description}
                </p>
                <Button asChild variant="hero" className="w-full" size="lg">
                  <Link to={userType.link}>
                    Join as {userType.type}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary hover:underline font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;