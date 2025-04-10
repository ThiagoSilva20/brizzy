"use client"

import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/_components/ui/dropdown-menu"
import { Filter, Search, MoreHorizontal, ArrowUpDown, CheckCircle, Calendar } from "lucide-react"
import { Badge } from "@/app/_components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"
import { PageHeader } from "../page-header"

// Dados de exemplo para os chamados resolvidos
const resolvedTicketsData = [
  {
    id: "TKT-7886",
    title: "Need to update billing information",
    status: "resolved",
    priority: "medium",
    category: "Billing",
    assignee: "Alex Rivera",
    createdAt: "2025-04-07T14:25:00",
    updatedAt: "2025-04-08T09:15:00",
    resolvedAt: "2025-04-08T09:15:00",
    resolution: "Updated billing details in system",
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
    resolvedAt: "2025-04-07T16:30:00",
    resolution: "Fixed file upload permissions",
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
    resolvedAt: "2025-04-07T08:20:00",
    resolution: "Fixed server validation error",
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
    resolvedAt: "2025-04-06T16:45:00",
    resolution: "Subscription cancelled and refund processed",
  },
]

export default function ResolvedTicketsPage() {
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
  const filteredTickets = resolvedTicketsData.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.assignee.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.resolution.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="p-6">
      <PageHeader title="Chamados Resolvidos" description="Visualize todos os chamados que foram resolvidos." />

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
          <Select defaultValue="week">
            <SelectTrigger className="w-[180px] bg-[#0e0e18] border-[#1e1e2d]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent className="bg-[#0e0e18] border-[#1e1e2d]">
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="week">Esta Semana</SelectItem>
              <SelectItem value="month">Este Mês</SelectItem>
              <SelectItem value="all">Todos</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-[#0e0e18] border-[#1e1e2d]">
            <Calendar className="h-4 w-4 mr-2" />
            Exportar
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
              <TableHead>Categoria</TableHead>
              <TableHead>Responsável</TableHead>
              <TableHead>Resolução</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Resolvido em
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
                  <TableCell>{ticket.category}</TableCell>
                  <TableCell>{ticket.assignee}</TableCell>
                  <TableCell className="max-w-[200px] truncate" title={ticket.resolution}>
                    {ticket.resolution}
                  </TableCell>
                  <TableCell>{formatDate(ticket.resolvedAt)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-[#0e0e18] border-[#1e1e2d]">
                        <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Reabrir Chamado</DropdownMenuItem>
                        <DropdownMenuItem>Criar Similar</DropdownMenuItem>
                        <DropdownMenuItem>Exportar PDF</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  Nenhum chamado resolvido encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Status Badge */}
      <div className="mt-6 flex items-center gap-2">
        <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30 flex w-fit items-center gap-1">
          <CheckCircle className="h-3 w-3" />
          <span>Status: Resolvido</span>
        </Badge>
        <span className="text-sm text-gray-400">Total: {filteredTickets.length} chamados resolvidos</span>
      </div>
    </div>
  )
}
