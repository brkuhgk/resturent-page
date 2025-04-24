import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Chola Highlands</h3>
            <p className="text-foreground/70 mb-4">
              Authentic Indian cuisine prepared with traditional recipes and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Contact Us</h4>
            <address className="not-italic text-foreground/70 space-y-2">
              <p>138-140 Duke Street</p>
              <p>EH6 8HR</p>
              <p>Edinburgh</p>
              <a
                href="https://maps.app.goo.gl/8GhT1oKay7BpEg2M9?g_st=iwb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View on Google Maps
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">
            &copy; {currentYear} Chola Highlands. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
