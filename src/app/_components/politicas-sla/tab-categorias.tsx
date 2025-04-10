import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table"

export function TabCategorias() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Categorias de Chamados</CardTitle>
        <CardDescription>Cada categoria de chamado possui políticas específicas de atendimento.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700">
              <TableHead className="text-slate-300">Categoria</TableHead>
              <TableHead className="text-slate-300">Descrição</TableHead>
              <TableHead className="text-slate-300">Equipe Responsável</TableHead>
              <TableHead className="text-slate-300">SLA Padrão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-slate-700">
              <TableCell className="font-medium">Billing</TableCell>
              <TableCell>Problemas relacionados a cobranças, faturas e pagamentos</TableCell>
              <TableCell>Financeiro</TableCell>
              <TableCell>4 horas</TableCell>
            </TableRow>
            <TableRow className="border-slate-700">
              <TableCell className="font-medium">Account</TableCell>
              <TableCell>Questões de acesso, perfil e configurações de conta</TableCell>
              <TableCell>Suporte Técnico</TableCell>
              <TableCell>2 horas</TableCell>
            </TableRow>
            <TableRow className="border-slate-700">
              <TableCell className="font-medium">Website</TableCell>
              <TableCell>Problemas com o site, formulários e páginas web</TableCell>
              <TableCell>Desenvolvimento Web</TableCell>
              <TableCell>4 horas</TableCell>
            </TableRow>
            <TableRow className="border-slate-700">
              <TableCell className="font-medium">API</TableCell>
              <TableCell>Integrações, endpoints e documentação de API</TableCell>
              <TableCell>Desenvolvimento</TableCell>
              <TableCell>2 horas</TableCell>
            </TableRow>
            <TableRow className="border-slate-700">
              <TableCell className="font-medium">Infraestrutura</TableCell>
              <TableCell>Servidores, rede e problemas de infraestrutura</TableCell>
              <TableCell>Operações</TableCell>
              <TableCell>1 hora</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
