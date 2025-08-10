import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const Pricing = () => {
  const features = [
    "Unlimited customer entries",
    "Unlimited receipt printing",
    "Secure data encryption",
    "Excel export and collection history",
    "Multi-device access",
    "Offline mode support",
    "Daily automated backups",
    "24/7 email support",
    "Role-based access control",
    "Thermal printer integration"
  ];

  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Choose the Perfect Plan for Your Business
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              No hidden fees, no complicated tiers. Just straightforward pricing that grows with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-elegant">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">Professional Plan</CardTitle>
                <CardDescription className="text-lg">
                  Everything you need to manage your receipt and billing operations
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Pricing */}
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-foreground">
                      ₹5,000 <span className="text-lg font-normal text-muted-foreground">setup fee</span>
                    </div>
                    <div className="text-2xl font-semibold text-primary">
                      + ₹1,000<span className="text-base font-normal">/month</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    One-time setup fee includes system configuration and training
                  </p>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center pt-8">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:bg-gradient-primary/90 shadow-glow text-lg px-12 py-6"
                  >
                    Subscribe Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Cancel anytime • No long-term contracts • 30-day money-back guarantee
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-16">
              Why Our Pricing Makes Sense
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">₹5K</span>
                  </div>
                  <CardTitle>One-Time Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Includes system configuration, thermal printer setup, data migration, and complete staff training.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">₹1K</span>
                  </div>
                  <CardTitle>Monthly Fee</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Covers hosting, maintenance, updates, backups, and customer support. No additional charges.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">∞</span>
                  </div>
                  <CardTitle>Unlimited Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    No limits on customers, receipts, or transactions. Scale your business without extra costs.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is there a free trial available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We offer a 7-day free trial so you can test all features before committing to the setup fee.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the setup fee?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The setup fee covers system configuration, thermal printer integration, data migration from your existing system, and comprehensive training for you and your staff.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I cancel my subscription anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! There are no long-term contracts. You can cancel your subscription anytime with just one month's notice. Your data will remain accessible for 30 days after cancellation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer a 30-day money-back guarantee. If you're not satisfied with the system within the first month, we'll refund your setup fee and first month's payment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90">
              Join hundreds of satisfied business owners who have streamlined their billing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6"
              >
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;