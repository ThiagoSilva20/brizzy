"use client"
import { Bell, ChevronDown, Search } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Input } from "@/app/_components/ui/input";
import { SidebarTrigger } from "@/app/_components/ui/sidebar";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

type UserProps = {
  user: Session["user"] | null;
};

export function DashboardHeader({ user }: UserProps) {
  // Função para gerar iniciais do nome do usuário
  const getInitials = (name: string | null | undefined): string => {
    if (!name) return "U";
    return name.charAt(0).toUpperCase();
  };

  // Verificando se há uma URL de imagem válida
  const userImage = user?.image && user.image !== "" ? user.image : undefined;
  const userName = user?.name || "Usuário";

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <SidebarTrigger />
      <div className="relative hidden md:flex md:grow">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Pesquisar tickets, clientes..."
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
        />
      </div>
      <div className="ml-auto flex items-center gap-4">
        <Button variant="outline" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notificações</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 rounded-full p-1 px-2"
            >
              <Avatar className="h-8 w-8">
                {userImage ? (
                  <AvatarImage 
                    src={userImage} 
                    alt={`Avatar de ${userName}`}
                    onError={(e) => {
                      // Tratar erro de carregamento da imagem
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : null}
                <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
              </Avatar>
              <div className="hidden flex-col items-start text-left md:flex">
                <span className="text-sm font-medium">{userName}</span>
                {user?.email && (
                  <span className="text-xs text-muted-foreground">{user.email}</span>
                )}
              </div>
              <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="/workspace/configuracoes">Configurações</a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}