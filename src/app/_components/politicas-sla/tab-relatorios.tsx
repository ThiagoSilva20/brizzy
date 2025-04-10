import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table"
import { PerformanceMetric } from "./performance-metric"

export function TabRelatorios() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Relatórios de Desempenho</CardTitle>
          <CardDescription>Monitoramento contínuo do cumprimento dos SLAs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <PerformanceMetric
              title="Tempo Médio de Resposta"
              value="25 min"
              percentage={85}
              description="85% dentro do SLA"
            />
            <PerformanceMetric
              title="Tempo Médio de Resolução"
              value="3.2 horas"
              percentage={92}
              description="92% dentro do SLA"
            />
            <PerformanceMetric
              title="Taxa de Resolução no Primeiro Contato"
              value="68%"
              percentage={68}
              description="Meta: 75%"
              color="bg-yellow-500"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Penalidades por Descumprimento</CardTitle>
          <CardDescription>Compensações aplicáveis em caso de não cumprimento dos SLAs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Violação</TableHead>
                <TableHead className="text-slate-300">Compensação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-slate-700">
                <TableCell>SLA não cumprido em chamado crítico</TableCell>
                <TableCell>5% de desconto na próxima fatura</TableCell>
              </TableRow>
              <TableRow className="border-slate-700">
                <TableCell>SLA não cumprido em chamado de alta prioridade</TableCell>
                <TableCell>3% de desconto na próxima fatura</TableCell>
              </TableRow>
              <TableRow className="border-slate-700">
                <TableCell>Disponibilidade mensal abaixo de 99.9%</TableCell>
                <TableCell>10% de desconto na próxima fatura</TableCell>
              </TableRow>
              <TableRow className="border-slate-700">
                <TableCell>Disponibilidade mensal abaixo de 99%</TableCell>
                <TableCell>25% de desconto na próxima fatura</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="border-t border-slate-800 pt-4">
          <p className="text-xs text-slate-400">
            As compensações são aplicadas automaticamente e creditadas na fatura do mês subsequente à ocorrência.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
