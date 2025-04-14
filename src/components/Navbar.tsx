import React, { useState } from 'react';
import { Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/30">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Left Section: Logo, Name, and Social Media Links */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="src/assets/chola_highlands_logo_Svg.svg" alt="Logo" className="h-10 w-10" />
            <span className="font-display font-bold text-2xl text-red-600">Chola Highlander</span>
          </Link>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-red-500 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-red-500 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-red-500 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Center Section: Empty (Logo moved to the left) */}
        <div className="absolute left-1/2 transform -translate-x-1/2"></div>

        {/* Right Section: Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" isActive={location.pathname === '/'}>Home</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button className="bg-red-700 hover:bg-red-800 text-white">Order Takeout</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6 text-red-500" /> : <Menu className="h-6 w-6 text-red-500" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 transform bg-black border-r border-red-900/30 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
          "pt-16"
        )}
      >
        <div className="flex flex-col p-8 space-y-6">
          <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)} isActive={location.pathname === '/'}>Home</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          
          {/* Social Media Links - Mobile */}
          <div className="flex gap-6 py-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-red-500 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-red-500 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-red-500 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          
          <Button className="w-full bg-red-700 hover:bg-red-800 text-white mt-4">Order Takeout</Button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, isActive = false }: { href: string; children: React.ReactNode; isActive?: boolean }) => {
  const isExternal = href.startsWith('#');
  
  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(
          "text-gray-300 hover:text-red-500 transition-colors font-medium text-sm",
          isActive && "text-red-500 font-semibold"
        )}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      to={href}
      className={cn(
        "text-gray-300 hover:text-red-500 transition-colors font-medium text-sm",
        isActive && "text-red-500 font-semibold"
      )}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, onClick, children, isActive = false }: { 
  href: string; 
  onClick?: () => void; 
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  const isExternal = href.startsWith('#');
  
  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(
          "text-gray-300 hover:text-red-500 transition-colors font-medium text-lg",
          isActive && "text-red-500 font-semibold"
        )}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "text-gray-300 hover:text-red-500 transition-colors font-medium text-lg",
        isActive && "text-red-500 font-semibold"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;