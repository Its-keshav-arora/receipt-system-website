import { Link } from "react-router-dom";
import { Receipt, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Receipt className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                Smart Receipt
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional billing system for Cable TV operators and subscription businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link 
                to="/contact" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link 
                to="/faq" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <Link 
                to="/privacy" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📱 +91 9356316091</p>
              <p>📧 keshav11y@gmail.com</p>
              <p>🔗 LinkedIn: keshavarora2006</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © {currentYear} Smart Receipt System – All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500" /> for business owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;