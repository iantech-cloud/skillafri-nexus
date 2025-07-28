import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock,
  ArrowRight,
  Search,
  Filter,
  TrendingUp
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of African Tech Talent in Global Markets",
    excerpt: "Exploring how African developers are reshaping the global tech landscape and driving innovation across industries.",
    author: "Sarah Kiprotich",
    date: "2024-01-28",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    featured: true
  };

  const blogPosts = [
    {
      title: "Building Secure Web Applications: Best Practices for 2024",
      excerpt: "Essential security practices every developer should implement to protect web applications from modern threats.",
      author: "James Mwangi",
      date: "2024-01-25",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop"
    },
    {
      title: "Remote Collaboration: How African Developers Excel Globally",
      excerpt: "Strategies and tools that enable seamless collaboration between African talent and international teams.",
      author: "Grace Ochieng",
      date: "2024-01-22",
      readTime: "5 min read",
      category: "Remote Work",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop"
    },
    {
      title: "Academic Excellence: Supporting International Students in Tech",
      excerpt: "How personalized tutoring is helping students worldwide succeed in computer science and engineering programs.",
      author: "David Kimani",
      date: "2024-01-20",
      readTime: "4 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    },
    {
      title: "The Rise of No-Code Solutions in African Startups",
      excerpt: "How no-code platforms are empowering entrepreneurs across Africa to build digital solutions faster.",
      author: "Mary Wanjiku",
      date: "2024-01-18",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "SEO Strategies That Work: Lessons from 100+ African Websites",
      excerpt: "Data-driven insights from optimizing websites across different African markets and industries.",
      author: "Peter Kariuki",
      date: "2024-01-15",
      readTime: "6 min read",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop"
    },
    {
      title: "Building Your First Django REST API: A Complete Guide",
      excerpt: "Step-by-step tutorial for creating robust APIs with Django REST Framework, perfect for beginners.",
      author: "Samuel Ndung'u",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    "All Posts",
    "Industry Insights", 
    "Cybersecurity",
    "Remote Work",
    "Education",
    "Technology",
    "Digital Marketing",
    "Tutorial"
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Industry Insights": "bg-primary/10 text-primary",
      "Cybersecurity": "bg-destructive/10 text-destructive",
      "Remote Work": "bg-success/10 text-success",
      "Education": "bg-accent/10 text-accent-foreground",
      "Technology": "bg-primary/10 text-primary",
      "Digital Marketing": "bg-accent-warm/10 text-accent-foreground",
      "Tutorial": "bg-success/10 text-success"
    };
    return colors[category] || "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              SkillAfrica <span className="bg-gradient-hero bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and thought leadership from the world of African tech talent and digital innovation
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button variant="outline" className="sm:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our latest insights and analysis</p>
          </div>

          <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div 
                className="h-64 lg:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredPost.image})` }}
              >
                <div className="h-full bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className={getCategoryColor(featuredPost.category)}>
                    {featuredPost.category}
                  </Badge>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Browse by Category</h2>
            <p className="text-muted-foreground">Find articles that interest you</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="hover:scale-105 transition-transform duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Recent Articles</h2>
            <p className="text-muted-foreground">Stay updated with our latest insights and tutorials</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className="h-full bg-gradient-to-t from-black/30 to-transparent flex items-end p-4">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full group-hover:translate-x-1 transition-transform">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <TrendingUp className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Get the latest insights, tutorials, and industry news delivered to your inbox
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="accent" className="px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/70 mt-3">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;