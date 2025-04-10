"use client";
import * as React from "react";
import {
  BoxesIcon,
  Clock,
  HelpCircle,
  Home,
  Settings,
  Ticket,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/app/_components/ui/sidebar";

export function AppSidebar() {
  const [isUsersDropdownOpen, setIsUsersDropdownOpen] = React.useState(false);
  const [isChamadosDropdownOpen, setIsChamadosDropdownOpen] = React.useState(false);

  return (
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/workspace" className="flex items-center">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#5b21b6] text-white">
                  <BoxesIcon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">BRIZZY DESK</span>
                  <span className="text-xs">Helpdesk Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive>
              <a href="/workspace">
                <Home className="h-4 w-4" />
                <span>Painel</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setIsChamadosDropdownOpen(!isChamadosDropdownOpen)}
            >
              <Ticket className="h-4 w-4" />
              <span>Chamados</span>
            </SidebarMenuButton>
            {isChamadosDropdownOpen && (
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="/workspace/chamados/all">Todos os Chamados</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="/workspace/chamados/abertos">Abertos</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="/workspace/chamados/pendentes">Pendentes</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="/workspace/chamados/resolvidos">Resolvidos</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            )}
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setIsUsersDropdownOpen(!isUsersDropdownOpen)}
            >
              <Users className="h-4 w-4" />
              <span>Usuários</span>
            </SidebarMenuButton>
            {isUsersDropdownOpen && (
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="/workspace/usuarios">Todos os Usuários</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="/workspace/usuarios/ativos">Ativos</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="/workspace/usuarios/inativos">Inativos</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            )}
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/workspace/politicas-sla">
                <Clock className="h-4 w-4" />
                <span>Políticas de SLA</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/workspace/ajuda-recursos">
                <HelpCircle className="h-4 w-4" />
                <span>Ajuda & Recursos</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/workspace/configuracoes">
                <Settings className="h-4 w-4" />
                <span>Configurações</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}