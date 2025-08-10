import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, Database, Mail } from "lucide-react";

const Privacy = () => {
  const privacyFeatures = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All user credentials and sensitive data are encrypted using industry-standard encryption before storage."
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "All communication between the app and server is secured with SSL encryption protocols."
    },
    {
      icon: Eye,
      title: "No Data Misuse",
      description: "We never sell, share, or use your customer data for advertising or unrelated purposes."
    },
    {
      icon: Database,
      title: "Secure Storage",
      description: "Your data is stored on secure servers with regular backups and security monitoring."
    }
  ];

  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Privacy & Security</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Your Data is <span className="text-primary">Safe</span> with Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Smart Receipt System, we are committed to protecting your privacy and ensuring your data is secure. 
              Learn about our data practices and security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              How We Protect Your Data
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {privacyFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">
                  Privacy Policy
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8 text-foreground">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">1. Information We Collect</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>User Credentials:</strong> We collect and store your login credentials (username and password) 
                      which are encrypted before storage to ensure maximum security.
                    </p>
                    <p>
                      <strong>Customer Data:</strong> Any customer information you import or enter into the system 
                      (names, contact details, payment records, and balances) is stored securely and used solely 
                      for app functionality.
                    </p>
                    <p>
                      <strong>Usage Data:</strong> We may collect anonymous usage statistics to improve our service, 
                      but this data cannot be used to identify you or your customers.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">2. Data Security</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Encryption:</strong> All user credentials are encrypted using industry-standard 
                      encryption algorithms before being stored in our database.
                    </p>
                    <p>
                      <strong>Secure Transmission:</strong> All communication between your device and our servers 
                      is protected using SSL encryption to prevent unauthorized access during data transmission.
                    </p>
                    <p>
                      <strong>Access Control:</strong> We implement strict access controls to ensure that only 
                      authorized personnel can access server infrastructure, and even then, encrypted data 
                      remains protected.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">3. Data Usage</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Sole Purpose:</strong> Your data is used exclusively for providing app functionality. 
                      We never use your customer data for marketing, advertising, or any unrelated purposes.
                    </p>
                    <p>
                      <strong>No Third-Party Sharing:</strong> We do not sell, rent, or share your customer data 
                      with third parties, except when required by law or for essential service provision 
                      (such as secure payment processing).
                    </p>
                    <p>
                      <strong>Data Retention:</strong> Your data is retained for as long as your account is active. 
                      Upon account cancellation, data is kept for 30 days for recovery purposes, then permanently deleted.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">4. Age Policy</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      There are no age restrictions for using our receipt and billing application. 
                      However, business registration and payment processing may require users to be 
                      of legal age in their jurisdiction.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">5. Third-Party Services</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may integrate with secure third-party services for essential functionality such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Payment gateways for processing subscription payments</li>
                      <li>Cloud storage providers for secure data backup</li>
                      <li>Email services for system notifications and support</li>
                    </ul>
                    <p>
                      These services are carefully selected based on their security standards and privacy practices. 
                      We only share the minimum necessary information required for service functionality.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">6. Your Rights</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access and export all your data at any time</li>
                      <li>Request deletion of your account and associated data</li>
                      <li>Update or correct any information in your account</li>
                      <li>Receive a copy of all data we have about you</li>
                      <li>Opt out of any non-essential communications</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">7. Updates to This Policy</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may update this privacy policy from time to time to reflect changes in our practices 
                      or legal requirements. Any updates will be posted on this page with a new "last updated" date.
                    </p>
                    <p>
                      For significant changes, we will notify you via email or through the application. 
                      Continued use of the service after changes indicates acceptance of the updated policy.
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Contact for Privacy Concerns</h3>
                  <div className="bg-gradient-subtle p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this privacy policy or concerns about how we handle your data, 
                      please don't hesitate to contact us:
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Mail className="h-5 w-5" />
                      <span>keshav11y@gmail.com</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      We typically respond to privacy inquiries within 48 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-foreground">
              Your Trust is Our Priority
            </h2>
            <p className="text-xl text-muted-foreground">
              We understand that your customer data is the foundation of your business. 
              That's why we've built our system with privacy and security as core principles, 
              not afterthoughts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Transparency</h3>
                <p className="text-muted-foreground">
                  We're completely transparent about what data we collect and how we use it.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Security First</h3>
                <p className="text-muted-foreground">
                  Every feature is designed with security and privacy considerations from the ground up.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Your Control</h3>
                <p className="text-muted-foreground">
                  You maintain complete control over your data with easy export and deletion options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;