
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl text-primary">SpiceHaven</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#special">Specials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button className="bg-primary hover:bg-primary/90 text-white">Reservations</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 transform bg-background border-r border-border md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
          "pt-16"
        )}
      >
        <div className="flex flex-col p-8 space-y-6">
          <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</MobileNavLink>
          <MobileNavLink href="#special" onClick={() => setIsMenuOpen(false)}>Specials</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">Reservations</Button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-foreground hover:text-primary transition-colors font-medium text-lg"
    >
      {children}
    </a>
  );
};

export default Navbar;
