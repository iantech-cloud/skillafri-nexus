import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <div className="text-center max-w-md">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to exploring our platform.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 p-6 bg-card rounded-xl border border-border">
          <h3 className="font-semibold text-foreground mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Button variant="ghost" size="sm" asChild className="justify-start">
              <a href="/services">Services</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="justify-start">
              <a href="/dev-hub">Dev Hub</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="justify-start">
              <a href="/academic-support">Academic Support</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="justify-start">
              <a href="/blog">Blog</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;