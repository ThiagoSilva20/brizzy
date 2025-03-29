import { BoxesIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-md p-1 size-9 justify-center flex items-center">
            <BoxesIcon className="size-6 text-white" />
          </div>
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
          <Button variant="outline" size="sm" className="hidden md:flex">
            Entrar
          </Button>
          <Button>
            <Link href="#demo">Solicitar Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
