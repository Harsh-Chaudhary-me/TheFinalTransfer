import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/60 backdrop-blur-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-serif font-semibold text-lg text-foreground block leading-tight">
                The Final Transfer
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Digital Legacy
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              Security
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* FIX: Desktop CTA Buttons (These were the ones not working) */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="glow-primary">
                Initiate Protocol
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-80 pb-6" : "max-h-0"
        )}>
          <nav className="flex flex-col gap-2 pt-4">
            <a 
              href="#features" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-xl hover:bg-secondary/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-xl hover:bg-secondary/50"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#security" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-xl hover:bg-secondary/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Security
            </a>
            <div className="flex gap-3 pt-4 px-4">
             <Link to="/auth" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              
              <Link to="/auth" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full">
                  Initiate Protocol
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}