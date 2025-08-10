import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Users, 
  CreditCard, 
  Printer, 
  FileSpreadsheet, 
  Clock, 
  Shield,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-receipt-printing.jpg";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Customer Management",
      description: "Add, edit, and delete customer details with ease."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Confirm payments before updating balances."
    },
    {
      icon: Printer,
      title: "Receipt Printing",
      description: "Thermal printer integration for instant receipts."
    },
    {
      icon: FileSpreadsheet,
      title: "Data Export",
      description: "Download Excel files sorted by outstanding balance."
    },
    {
      icon: Clock,
      title: "Collection History",
      description: "Track and export payments by date range."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Encrypted credentials and secure data handling."
    }
  ];

  const testimonials = [
    {
      quote: "This app cut my collection time in half. Everything is so easy to manage.",
      author: "Rajesh K.",
      rating: 5
    },
    {
      quote: "Thermal printing and balance tracking in one place. Exactly what I needed.",
      author: "Anil P.",
      rating: 5
    },
    {
      quote: "Worth every penny! I don't need Excel or manual registers anymore.",
      author: "Priya M.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Smart Receipts. <br />
                <span className="text-secondary">Faster Payments.</span> <br />
                Happier Customers.
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Manage payments, track balances, and print receipts instantly – all in one powerful app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-glow"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                >
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Smart Receipt System - Mobile phone printing thermal receipt"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Built for Speed, Accuracy, and Simplicity
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our Receipt System is built for speed, accuracy, and simplicity. Whether you manage 50 customers or 5,000, 
              we make sure every payment is logged, balances are updated instantly, and receipts are printed in seconds.
            </p>
            <p className="text-lg text-muted-foreground">
              Perfect for <span className="font-semibold text-primary">Cable TV Operators</span>, 
              <span className="font-semibold text-secondary"> Internet Service Providers</span>, 
              and any subscription-based business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to manage your billing efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from real business owners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer className="text-muted-foreground font-semibold">
                    – {testimonial.author}
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Start managing your receipts like a pro
            </h2>
            <p className="text-xl text-white/90">
              Try now for just ₹5000 setup + ₹1000/month
            </p>
            <div className="flex items-center justify-center gap-4 text-white/90">
              <CheckCircle className="h-5 w-5" />
              <span>No long-term contracts</span>
              <CheckCircle className="h-5 w-5" />
              <span>Cancel anytime</span>
              <CheckCircle className="h-5 w-5" />
              <span>24/7 support</span>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6"
            >
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;