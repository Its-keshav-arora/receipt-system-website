import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Users, 
  Wifi, 
  Shield, 
  HardDrive, 
  Smartphone, 
  Calculator,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Unlimited Customers",
      description: "No restrictions on the number of customers you can manage. Scale your business easily without worrying about limits."
    },
    {
      icon: Wifi,
      title: "Offline Mode",
      description: "Work without internet connection. All your data is stored locally and syncs automatically when you're back online."
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Allow staff members to manage customers securely with different permission levels. Control who can access what."
    },
    {
      icon: HardDrive,
      title: "Daily Backups",
      description: "Your data is automatically backed up daily to secure cloud storage. Never worry about losing important information."
    },
    {
      icon: Smartphone,
      title: "Multi-Device Support",
      description: "Access your receipt system from mobile phones, tablets, and desktop computers. Everything stays in sync."
    },
    {
      icon: Calculator,
      title: "Auto Calculations",
      description: "Customer balances are updated instantly after payments. No manual calculations or errors."
    }
  ];

  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Powerful Features for <span className="text-primary">Modern</span> Businesses
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to manage your receipt and billing operations efficiently. 
              Our comprehensive feature set is designed for Cable TV operators and subscription businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="hover:shadow-elegant transition-all duration-300 group border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-16">
              Why Choose Our System?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">For Cable TV Operators</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Customer Database Management</h4>
                      <p className="text-muted-foreground">Maintain detailed records of all your subscribers with their package details and payment history.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Package Management</h4>
                      <p className="text-muted-foreground">Easily track different cable packages and their pricing for accurate billing.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Outstanding Balance Tracking</h4>
                      <p className="text-muted-foreground">Keep track of pending payments and send reminders to customers.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">For Subscription Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Recurring Payment Management</h4>
                      <p className="text-muted-foreground">Handle monthly, quarterly, and yearly subscription billing automatically.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Service History</h4>
                      <p className="text-muted-foreground">Maintain complete history of service activations, renewals, and cancellations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Revenue Analytics</h4>
                      <p className="text-muted-foreground">Get insights into your revenue patterns and customer payment behavior.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-xl text-white/90">
              Join hundreds of business owners who have simplified their billing process with our system.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6"
            >
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;