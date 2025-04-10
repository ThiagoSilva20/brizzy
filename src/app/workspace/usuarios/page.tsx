"use client"

import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/_components/ui/dropdown-menu"
import { Filter, Search, Plus, MoreHorizontal, ArrowUpDown, CheckCircle, XCircle, Mail, Shield } from "lucide-react"
import { Badge } from "@/app/_components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"
import { PageHeader } from "./page-header"

// Dados de exemplo para os usuários
const usersData = [
  {
    id: "USR-001",
    name: "Alex Rivera",
    email: "alex.rivera@example.com",
    role: "admin",
    status: "active",
    department: "IT Support",
    lastLogin: "2025-04-09T08:30:00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-002",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "agent",
    status: "active",
    department: "Customer Support",
    lastLogin: "2025-04-09T09:15:00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-003",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "agent",
    status: "active",
    department: "Billing Support",
    lastLogin: "2025-04-08T16:45:00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-004",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    role: "agent",
    status: "active",
    department: "Technical Support",
    lastLogin: "2025-04-09T07:20:00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-005",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "agent",
    status: "active",
    department: "Mobile Support",
    lastLogin: "2025-04-08T14:10:00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-006",
    name: "Taylor Swift",
    email: "taylor.swift@example.com",
    role: "supervisor",
    status: "active",
    department: "Customer Support",
    lastLogin: "2025-04-09T08:00:00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-007",
    name: "Morgan Freeman",
    email: "morgan.freeman@example.com",
    role: "agent",
    status: "inactive",
    department: "Technical Support",
    lastLogin: "2025-04-01T10:30:00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-008",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "agent",
    status: "inactive",
    department: "API Support",
    lastLogin: "2025-03-28T09:45:00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function AllUsersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Formatar data para exibição
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  // Filtrar usuários com base na pesquisa
  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Obter iniciais do nome
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <div className="p-6">
      <PageHeader title="Todos os Usuários" description="Visualize e gerencie todos os usuários do sistema." />

      {/* Filtros e Ações */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-1 gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Buscar usuários..."
              className="pl-8 bg-[#0e0e18] border-[#1e1e2d]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="bg-[#0e0e18] border-[#1e1e2d]">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] bg-[#0e0e18] border-[#1e1e2d]">
              <SelectValue placeholder="Função" />
            </SelectTrigger>
            <SelectContent className="bg-[#0e0e18] border-[#1e1e2d]">
              <SelectItem value="all">Todas as Funções</SelectItem>
              <SelectItem value="admin">Administrador</SelectItem>
              <SelectItem value="supervisor">Supervisor</SelectItem>
              <SelectItem value="agent">Agente</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo Usuário
          </Button>
        </div>
      </div>

      {/* Tabela de Usuários */}
      <div className="rounded-md border border-[#1e1e2d] overflow-hidden">
        <Table>
          <TableHeader className="bg-[#0e0e18]">
            <TableRow className="hover:bg-[#1e1e2d]/50 border-[#1e1e2d]">
              <TableHead className="w-[50px]"></TableHead>
              <TableHead className="w-[200px]">
                <div className="flex items-center">
                  Nome
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Departamento</TableHead>
              <TableHead>Função</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Último Login
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-[#1e1e2d]/50 border-[#1e1e2d]">
                  <TableCell>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>
                    <RoleBadge role={user.role} />
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={user.status} />
                  </TableCell>
                  <TableCell>{formatDate(user.lastLogin)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-[#0e0e18] border-[#1e1e2d]">
                        <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Enviar Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>Redefinir Senha</DropdownMenuItem>
                        {user.status === "active" ? (
                          <DropdownMenuItem className="text-red-500">Desativar</DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-green-500">Ativar</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  Nenhum usuário encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Paginação */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-400">
          Mostrando {filteredUsers.length} de {usersData.length} usuários
        </div>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" className="bg-[#0e0e18] border-[#1e1e2d]">
            Anterior
          </Button>
          <Button variant="outline" size="sm" className="bg-[#1e1e2d]">
            1
          </Button>
          <Button variant="outline" size="sm" className="bg-[#0e0e18] border-[#1e1e2d]">
            Próximo
          </Button>
        </div>
      </div>
    </div>
  )
}

// Componente para exibir o status do usuário
function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "active":
      return (
        <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30 flex w-fit items-center gap-1">
          <CheckCircle className="h-3 w-3" />
          <span>Ativo</span>
        </Badge>
      )
    case "inactive":
      return (
        <Badge className="bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 flex w-fit items-center gap-1">
          <XCircle className="h-3 w-3" />
          <span>Inativo</span>
        </Badge>
      )
    default:
      return <Badge>{status}</Badge>
  }
}

// Componente para exibir a função do usuário
function RoleBadge({ role }: { role: string }) {
  switch (role) {
    case "admin":
      return (
        <Badge variant="outline" className="border-purple-500 text-purple-500 flex w-fit items-center gap-1">
          <Shield className="h-3 w-3" />
          <span>Admin</span>
        </Badge>
      )
    case "supervisor":
      return (
        <Badge variant="outline" className="border-blue-500 text-blue-500 flex w-fit items-center gap-1">
          <Shield className="h-3 w-3" />
          <span>Supervisor</span>
        </Badge>
      )
    case "agent":
      return (
        <Badge variant="outline" className="border-gray-400 text-gray-400 flex w-fit items-center gap-1">
          <span>Agente</span>
        </Badge>
      )
    default:
      return <Badge variant="outline">{role}</Badge>
  }
}
