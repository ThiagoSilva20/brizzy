"use client"

import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/_components/ui/dropdown-menu"
import { Filter, Search, MoreHorizontal, ArrowUpDown, Clock } from "lucide-react"
import { Badge } from "@/app/_components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"
import { PageHeader } from "../page-header"

// Dados de exemplo para os chamados pendentes
const pendingTicketsData = [
  {
    id: "TKT-7888",
    title: "How to reset user password?",
    status: "pending",
    priority: "low",
    category: "Account",
    assignee: "Emily Rodriguez",
    createdAt: "2025-04-08T08:20:00",
    updatedAt: "2025-04-08T15:45:00",
    waitingFor: "Customer response",
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
    waitingFor: "Product team review",
  },
  {
    id: "TKT-7880",
    title: "Integration with third-party API",
    status: "pending",
    priority: "medium",
    category: "Integration",
    assignee: "John Doe",
    createdAt: "2025-04-06T09:15:00",
    updatedAt: "2025-04-07T14:30:00",
    waitingFor: "Developer availability",
  },
]

export default function PendingTicketsPage() {
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
  const filteredTickets = pendingTicketsData.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.assignee.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="p-6">
      <PageHeader
        title="Chamados Pendentes"
        description="Visualize e gerencie todos os chamados pendentes de resolução."
      />

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
              <SelectValue placeholder="Aguardando" />
            </SelectTrigger>
            <SelectContent className="bg-[#0e0e18] border-[#1e1e2d]">
              <SelectItem value="all">Todos os Motivos</SelectItem>
              <SelectItem value="customer">Resposta do Cliente</SelectItem>
              <SelectItem value="team">Revisão da Equipe</SelectItem>
              <SelectItem value="developer">Disponibilidade do Desenvolvedor</SelectItem>
            </SelectContent>
          </Select>
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
              <TableHead>Aguardando</TableHead>
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
                  <TableCell>{ticket.waitingFor}</TableCell>
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
                        <DropdownMenuItem>Enviar Lembrete</DropdownMenuItem>
                        <DropdownMenuItem>Marcar como Aberto</DropdownMenuItem>
                        <DropdownMenuItem>Marcar como Resolvido</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  Nenhum chamado pendente encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Status Badge */}
      <div className="mt-6 flex items-center gap-2">
        <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 flex w-fit items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>Status: Pendente</span>
        </Badge>
        <span className="text-sm text-gray-400">Total: {filteredTickets.length} chamados pendentes</span>
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
