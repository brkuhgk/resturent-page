
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">SpiceHaven</h3>
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
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#menu" className="text-foreground/70 hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#special" className="text-foreground/70 hover:text-primary transition-colors">Specials</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Contact Us</h4>
            <address className="not-italic text-foreground/70 space-y-2">
              <p>123 Spice Avenue</p>
              <p>Flavortown, CA 90210</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@spicehaven.com</p>
            </address>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Opening Hours</h4>
            <ul className="text-foreground/70 space-y-2">
              <li>Monday - Friday: 11:30 AM - 10:00 PM</li>
              <li>Saturday - Sunday: 12:00 PM - 11:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">
            &copy; {currentYear} SpiceHaven. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
