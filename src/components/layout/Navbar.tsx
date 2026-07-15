"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Buy", href: "/buy" },
    { name: "Rent", href: "/rent" },
    { name: "Commercial", href: "/commercial" },
    { name: "New Projects", href: "/projects" },
    { name: "Agents", href: "/agents" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-3 items-center">
        {/* Left side: Contact Agent */}
        <div className="hidden lg:flex items-center justify-start gap-3">
          <Button asChild variant={isScrolled ? "ghost" : "secondary"} className="font-medium">
            <Link href="/agents">Contact Agent</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="font-medium text-primary border-primary/30 hover:bg-primary/5">
            <Link href="/listings/new">List Property</Link>
          </Button>
        </div>

        {/* Center Logo */}
        <div className="flex justify-start lg:justify-center items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-heading font-bold text-2xl group-hover:bg-secondary transition-colors">
              P
            </div>
            <span className={`font-heading font-bold text-3xl uppercase tracking-wider ${isScrolled ? "text-foreground" : "text-foreground lg:text-white"}`}>
              PROPIX
            </span>
          </Link>
        </div>

        {/* Right side: Actions */}
        <div className="hidden lg:flex items-center justify-end gap-3">
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-white border-0 font-medium">
            <Link href="/valuation">Book Free Valuation</Link>
          </Button>
          <div className="h-6 w-px bg-border mx-2" />
          <Button asChild variant="default" className="bg-primary hover:bg-secondary text-white rounded-full px-6 font-medium">
            <Link href="/auth">
              <User className="w-4 h-4 mr-2" />
              Login / Signup
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex justify-end lg:hidden">
          <button
            className={`p-2 rounded-md ${isScrolled ? "text-foreground" : "text-foreground md:text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground font-medium py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full mt-4 bg-primary hover:bg-secondary text-white">Login / Register</Button>
        </div>
      )}
    </nav>
  );
}
