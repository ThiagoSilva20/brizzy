"use client"

import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/_components/ui/dropdown-menu"
import { Filter, Search, Plus, MoreHorizontal, ArrowUpDown, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Badge } from "@/app/_components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"
import { PageHeader } from "./page-header"

// Dados de exemplo para os chamados
const ticketsData = [
  {
    id: "TKT-7890",
    title: "Cannot access admin dashboard",
    status: "open",
    priority: "high",
    category: "Access",
    assignee: "Sarah Johnson",
    createdAt: "2025-04-08T10:30:00",
    updatedAt: "2025-04-09T08:15:00",
  },
  {
    id: "TKT-7889",
    title: "Payment gateway integration issue",
    status: "open",
    priority: "medium",
    category: "Integration",
    assignee: "Michael Chen",
    createdAt: "2025-04-08T09:45:00",
    updatedAt: "2025-04-09T07:30:00",
  },
  {
    id: "TKT-7888",
    title: "How to reset user password?",
    status: "pending",
    priority: "low",
    category: "Account",
    assignee: "Emily Rodriguez",
    createdAt: "2025-04-08T08:20:00",
    updatedAt: "2025-04-08T15:45:00",
  },
  {
    id: "TKT-7887",
    title: "Mobile app crashes on startup",
    status: "open",
    priority: "medium",
    category: "Mobile",
    assignee: "David Kim",
    createdAt: "2025-04-07T16:10:00",
    updatedAt: "2025-04-08T11:30:00",
  },
  {
    id: "TKT-7886",
    title: "Need to update billing information",
    status: "resolved",
    priority: "medium",
    category: "Billing",
    assignee: "Alex Rivera",
    createdAt: "2025-04-07T14:25:00",
    updatedAt: "2025-04-08T09:15:00",
  },
  {
    id: "TKT-7885",
    title: "Feature request: Dark mode",
    status: "pending",
    priority: "low",
    category: "Feature",
    assignee: "Taylor Swift",
    createdAt: "2025-04-07T11:40:00",
    updatedAt: "2025-04-08T10:20:00",
  },
  {
    id: "TKT-7884",
    title: "Cannot upload profile picture",
    status: "resolved",
    priority: "low",
    category: "Account",
    assignee: "Morgan Freeman",
    createdAt: "2025-04-07T10:15:00",
    updatedAt: "2025-04-07T16:30:00",
  },
  {
    id: "TKT-7883",
    title: "API rate limit exceeded",
    status: "open",
    priority: "high",
    category: "API",
    assignee: "John Doe",
    createdAt: "2025-04-06T15:50:00",
    updatedAt: "2025-04-07T09:45:00",
  },
  {
    id: "TKT-7882",
    title: "Error 500 when submitting form",
    status: "resolved",
    priority: "high",
    category: "Website",
    assignee: "Sarah Johnson",
    createdAt: "2025-04-06T14:30:00",
    updatedAt: "2025-04-07T08:20:00",
  },
  {
    id: "TKT-7881",
    title: "Need to cancel subscription",
    status: "resolved",
    priority: "medium",
    category: "Billing",
    assignee: "Michael Chen",
    createdAt: "2025-04-06T11:20:00",
    updatedAt: "2025-04-06T16:45:00",
  },
]

export default function AllTicketsPage() {
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

  // Filtrar chamados com base na pesquisa
  const filteredTickets = ticketsData.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.assignee.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="p-6">
      <PageHeader title="Todos os Chamados" description="Visualize e gerencie todos os chamados do sistema." />

      {/* Filtros e Ações */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-1 gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Buscar chamados..."
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
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-[#0e0e18] border-[#1e1e2d]">
              <SelectItem value="all">Todos os Status</SelectItem>
              <SelectItem value="open">Aberto</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="resolved">Resolvido</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo Chamado
          </Button>
        </div>
      </div>

      {/* Tabela de Chamados */}
      <div className="rounded-md border border-[#1e1e2d] overflow-hidden">
        <Table>
          <TableHeader className="bg-[#0e0e18]">
            <TableRow className="hover:bg-[#1e1e2d]/50 border-[#1e1e2d]">
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead className="w-[300px]">
                <div className="flex items-center">
                  Título
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Prioridade</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Responsável</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Atualizado
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket) => (
                <TableRow key={ticket.id} className="hover:bg-[#1e1e2d]/50 border-[#1e1e2d]">
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.title}</TableCell>
                  <TableCell>
                    <StatusBadge status={ticket.status} />
                  </TableCell>
                  <TableCell>
                    <PriorityBadge priority={ticket.priority} />
                  </TableCell>
                  <TableCell>{ticket.category}</TableCell>
                  <TableCell>{ticket.assignee}</TableCell>
                  <TableCell>{formatDate(ticket.updatedAt)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-[#0e0e18] border-[#1e1e2d]">
                        <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Atribuir</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">Excluir</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  Nenhum chamado encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Paginação */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-400">
          Mostrando {filteredTickets.length} de {ticketsData.length} chamados
        </div>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" className="bg-[#0e0e18] border-[#1e1e2d]">
            Anterior
          </Button>
          <Button variant="outline" size="sm" className="bg-[#1e1e2d]">
            1
          </Button>
          <Button variant="outline" size="sm" className="bg-[#0e0e18] border-[#1e1e2d]">
            2
          </Button>
          <Button variant="outline" size="sm" className="bg-[#0e0e18] border-[#1e1e2d]">
            3
          </Button>
          <Button variant="outline" size="sm" className="bg-[#0e0e18] border-[#1e1e2d]">
            Próximo
          </Button>
        </div>
      </div>
    </div>
  )
}

// Componente para exibir o status do chamado
function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "open":
      return (
        <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 flex w-fit items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          <span>Aberto</span>
        </Badge>
      )
    case "pending":
      return (
        <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 flex w-fit items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>Pendente</span>
        </Badge>
      )
    case "resolved":
      return (
        <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30 flex w-fit items-center gap-1">
          <CheckCircle className="h-3 w-3" />
          <span>Resolvido</span>
        </Badge>
      )
    default:
      return <Badge>{status}</Badge>
  }
}

// Componente para exibir a prioridade do chamado
function PriorityBadge({ priority }: { priority: string }) {
  switch (priority) {
    case "high":
      return (
        <Badge variant="outline" className="border-red-500 text-red-500 flex w-fit items-center gap-1">
          Alta
        </Badge>
      )
    case "medium":
      return (
        <Badge variant="outline" className="border-amber-500 text-amber-500 flex w-fit items-center gap-1">
          Média
        </Badge>
      )
    case "low":
      return (
        <Badge variant="outline" className="border-green-500 text-green-500 flex w-fit items-center gap-1">
          Baixa
        </Badge>
      )
    default:
      return <Badge variant="outline">{priority}</Badge>
  }
}
