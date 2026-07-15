import Link from "next/link";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-heading font-bold text-2xl">
                P
              </div>
              <span className="font-heading font-bold text-2xl uppercase tracking-wider text-white">
                PROPIX
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium real estate marketplace for Sri Lanka. Discover luxury apartments, commercial spaces, and dream homes powered by AI recommendations.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/buy" className="hover:text-primary transition-colors">Buy Property</Link></li>
              <li><Link href="/rent" className="hover:text-primary transition-colors">Rent Property</Link></li>
              <li><Link href="/commercial" className="hover:text-primary transition-colors">Commercial</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">New Projects</Link></li>
              <li><Link href="/agents" className="hover:text-primary transition-colors">Find an Agent</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Level 35, West Tower, World Trade Center, Colombo 01, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@propix.lk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest property news and investment opportunities.</p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-primary"
              />
              <Button type="submit" className="bg-primary hover:bg-secondary text-white">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Propix. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
