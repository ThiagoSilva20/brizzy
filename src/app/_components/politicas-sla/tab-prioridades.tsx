import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table"
import { Badge } from "@/app/_components/ui/badge"

export function TabPrioridades() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Níveis de Prioridade</CardTitle>
        <CardDescription>
          Os tempos de resposta e resolução variam de acordo com a prioridade do chamado.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700">
              <TableHead className="text-slate-300">Prioridade</TableHead>
              <TableHead className="text-slate-300">Descrição</TableHead>
              <TableHead className="text-slate-300">Tempo de Resposta</TableHead>
              <TableHead className="text-slate-300">Tempo de Resolução</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-slate-700">
              <TableCell>
                <Badge className="bg-red-600 hover:bg-red-700">Crítica</Badge>
              </TableCell>
              <TableCell>Sistema completamente indisponível ou com falha grave afetando operações críticas</TableCell>
              <TableCell>15 minutos</TableCell>
              <TableCell>2 horas</TableCell>
            </TableRow>
            <TableRow className="border-slate-700">
              <TableCell>
                <Badge className="bg-orange-500 hover:bg-orange-600">Alta</Badge>
              </TableCell>
              <TableCell>Funcionalidade importante com falha, afetando significativamente as operações</TableCell>
              <TableCell>30 minutos</TableCell>
              <TableCell>4 horas</TableCell>
            </TableRow>
            <TableRow className="border-slate-700">
              <TableCell>
                <Badge className="bg-yellow-500 hover:bg-yellow-600">Média</Badge>
              </TableCell>
              <TableCell>
                Problema que afeta funcionalidades não críticas ou com solução alternativa disponível
              </TableCell>
              <TableCell>2 horas</TableCell>
              <TableCell>8 horas</TableCell>
            </TableRow>
            <TableRow className="border-slate-700">
              <TableCell>
                <Badge className="bg-blue-500 hover:bg-blue-600">Baixa</Badge>
              </TableCell>
              <TableCell>Dúvidas, melhorias ou problemas menores que não afetam operações</TableCell>
              <TableCell>4 horas</TableCell>
              <TableCell>24 horas</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
