"use client"

import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/_components/ui/dropdown-menu"
import { Filter, Search, Plus, MoreHorizontal, ArrowUpDown, AlertCircle } from "lucide-react"
import { Badge } from "@/app/_components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"
import { PageHeader } from "../page-header"

// Dados de exemplo para os chamados abertos
const openTicketsData = [
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
    id: "TKT-7883",
    title: "API rate limit exceeded",
    status: "open",
    priority: "high",
    category: "API",
    assignee: "John Doe",
    createdAt: "2025-04-06T15:50:00",
    updatedAt: "2025-04-07T09:45:00",
  },
]

export default function OpenTicketsPage() {
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
  const filteredTickets = openTicketsData.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.assignee.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="p-6">
      <PageHeader title="Chamados Abertos" description="Visualize e gerencie todos os chamados abertos." />

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
          <Select defaultValue="high">
            <SelectTrigger className="w-[180px] bg-[#0e0e18] border-[#1e1e2d]">
              <SelectValue placeholder="Prioridade" />
            </SelectTrigger>
            <SelectContent className="bg-[#0e0e18] border-[#1e1e2d]">
              <SelectItem value="all">Todas as Prioridades</SelectItem>
              <SelectItem value="high">Alta</SelectItem>
              <SelectItem value="medium">Média</SelectItem>
              <SelectItem value="low">Baixa</SelectItem>
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
                        <DropdownMenuItem>Marcar como Pendente</DropdownMenuItem>
                        <DropdownMenuItem>Marcar como Resolvido</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  Nenhum chamado aberto encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Status Badge */}
      <div className="mt-6 flex items-center gap-2">
        <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 flex w-fit items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          <span>Status: Aberto</span>
        </Badge>
        <span className="text-sm text-gray-400">Total: {filteredTickets.length} chamados abertos</span>
      </div>
    </div>
  )
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
