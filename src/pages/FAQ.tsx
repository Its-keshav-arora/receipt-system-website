import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need the internet to use the app?",
      answer: "No, you can use the app offline. All your data is stored locally on your device and will automatically sync when you reconnect to the internet. This ensures you can continue working even during internet outages."
    },
    {
      question: "Can I print receipts on any printer?",
      answer: "Yes, the system supports various printer types. However, thermal printers provide the best speed, quality, and cost-effectiveness for receipt printing. We can help you choose and set up the right printer for your business."
    },
    {
      question: "Is my data safe and secure?",
      answer: "Absolutely! We use bank-level encryption to protect your data. All user credentials are encrypted before storage, and we use secure SSL connections for all data transmission. We never misuse, sell, or share your customer data with third parties."
    },
    {
      question: "Can I export my customer list and payment data?",
      answer: "Yes, you can export your data anytime in Excel format. The export includes customer details sorted by outstanding balance, payment history, and collection reports filtered by date range. This helps with backup and external analysis."
    },
    {
      question: "Can multiple people use the same account?",
      answer: "Yes, our system supports role-based access control. You can give different permission levels to your staff members - some can only view data, others can process payments, and you maintain full administrative control."
    },
    {
      question: "What happens if I forget my password?",
      answer: "You can reset your password using the 'Forgot Password' feature. We'll send a secure reset link to your registered email address. For additional security, we also provide backup recovery options during setup."
    },
    {
      question: "How does the thermal printer integration work?",
      answer: "Our system directly communicates with thermal printers through USB or Bluetooth connection. Once configured, receipts print automatically with customer details, payment amount, outstanding balance, and business information. Setup takes just a few minutes."
    },
    {
      question: "Can I customize the receipt format?",
      answer: "Yes, you can customize receipt headers with your business name, address, contact details, and logo. You can also add custom messages or terms and conditions to the receipts."
    },
    {
      question: "What kind of customer support do you provide?",
      answer: "We provide comprehensive support including initial setup assistance, staff training, ongoing technical support via phone and email, and regular system updates. Our team responds to support requests within 24 hours."
    },
    {
      question: "Is there a limit on the number of customers I can add?",
      answer: "No, there are absolutely no limits on the number of customers, receipts, or transactions you can process. Whether you have 50 customers or 50,000, the system performance remains consistent."
    },
    {
      question: "Can I access the system from multiple devices?",
      answer: "Yes, you can access your account from mobile phones, tablets, and desktop computers. All your data stays synchronized across devices, so you can work from anywhere."
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "Your data remains accessible for 30 days after cancellation, giving you time to export all information. We also provide a complete data export in Excel format before account closure. After 30 days, data is permanently deleted for security."
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
              <HelpCircle className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Got Questions? We've Got <span className="text-primary">Answers!</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find quick answers to common questions about our receipt and billing system. 
              Can't find what you're looking for? Feel free to contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant border-2 border-primary/10">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">Still Have Questions?</CardTitle>
                <CardDescription className="text-lg">
                  Our support team is here to help you get the most out of your receipt system.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Quick Support</h3>
                    <p className="text-muted-foreground">
                      Get immediate help via phone or email. Our team responds within 24 hours.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Free Consultation</h3>
                    <p className="text-muted-foreground">
                      Schedule a free consultation to discuss your specific business needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:bg-gradient-primary/90 shadow-glow text-lg px-8 py-6"
                  >
                    Contact Support <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
                  >
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Quick Tips for New Users
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Getting Started</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Start with a small customer list to get familiar</li>
                    <li>• Test thermal printer connection before going live</li>
                    <li>• Import your existing customer data from Excel</li>
                    <li>• Train your staff on basic operations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Take daily backups of your data</li>
                    <li>• Use consistent naming for customer entries</li>
                    <li>• Process payments immediately when received</li>
                    <li>• Review outstanding balances weekly</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;