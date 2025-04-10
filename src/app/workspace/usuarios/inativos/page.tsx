"use client"

import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/_components/ui/dropdown-menu"
import { Filter, Search, MoreHorizontal, ArrowUpDown, XCircle, Mail, Shield, Calendar } from "lucide-react"
import { Badge } from "@/app/_components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"
import { PageHeader } from "../page-header"

// Dados de exemplo para os usuários inativos
const inactiveUsersData = [
  {
    id: "USR-007",
    name: "Morgan Freeman",
    email: "morgan.freeman@example.com",
    role: "agent",
    status: "inactive",
    department: "Technical Support",
    lastLogin: "2025-04-01T10:30:00",
    inactiveSince: "2025-04-02T00:00:00",
    reason: "Férias",
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
    inactiveSince: "2025-03-30T00:00:00",
    reason: "Licença médica",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-009",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "supervisor",
    status: "inactive",
    department: "Customer Support",
    lastLogin: "2025-03-15T14:20:00",
    inactiveSince: "2025-03-20T00:00:00",
    reason: "Desligamento",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR-010",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    role: "agent",
    status: "inactive",
    department: "Billing Support",
    lastLogin: "2025-03-10T11:30:00",
    inactiveSince: "2025-03-12T00:00:00",
    reason: "Conta expirada",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function InactiveUsersPage() {
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
  const filteredUsers = inactiveUsersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.reason.toLowerCase().includes(searchQuery.toLowerCase()),
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
      <PageHeader title="Usuários Inativos" description="Visualize e gerencie todos os usuários inativos do sistema." />

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
              <SelectValue placeholder="Motivo" />
            </SelectTrigger>
            <SelectContent className="bg-[#0e0e18] border-[#1e1e2d]">
              <SelectItem value="all">Todos os Motivos</SelectItem>
              <SelectItem value="vacation">Férias</SelectItem>
              <SelectItem value="medical">Licença médica</SelectItem>
              <SelectItem value="terminated">Desligamento</SelectItem>
              <SelectItem value="expired">Conta expirada</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-[#0e0e18] border-[#1e1e2d]">
            <Calendar className="h-4 w-4 mr-2" />
            Exportar
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
              <TableHead>Motivo</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Inativo Desde
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
                  <TableCell>{user.reason}</TableCell>
                  <TableCell>{formatDate(user.inactiveSince)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-[#0e0e18] border-[#1e1e2d]">
                        <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Enviar Email
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-green-500">Reativar</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">Excluir</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  Nenhum usuário inativo encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Status Badge */}
      <div className="mt-6 flex items-center gap-2">
        <Badge className="bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 flex w-fit items-center gap-1">
          <XCircle className="h-3 w-3" />
          <span>Status: Inativo</span>
        </Badge>
        <span className="text-sm text-gray-400">Total: {filteredUsers.length} usuários inativos</span>
      </div>
    </div>
  )
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
