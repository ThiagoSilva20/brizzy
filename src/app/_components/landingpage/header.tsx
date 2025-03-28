import { LifeBuoy } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <LifeBuoy className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Brizzy Desk</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Recursos
          </Link>
          <Link
            href="#benefits"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Benefícios
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Preços
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="#demo">Solicitar Demo</Link>
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Entrar
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
