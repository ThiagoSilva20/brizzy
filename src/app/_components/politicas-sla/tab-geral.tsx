import { Clock, AlertCircle, CheckCircle, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table"
import { MetricCard } from "./metric-card"

export function TabGeral() {
  return (
    <div className="grid gap-6">
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Visão Geral das Políticas de SLA</CardTitle>
          <CardDescription>
            Nossos acordos de nível de serviço definem os tempos de resposta e resolução esperados para cada tipo de
            chamado.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              icon={Clock}
              title="Tempo de Resposta"
              description="Tempo máximo para primeiro contato com o cliente"
            />
            <MetricCard
              icon={CheckCircle}
              title="Tempo de Resolução"
              description="Tempo máximo para solucionar o problema reportado"
            />
            <MetricCard
              icon={AlertCircle}
              title="Escalação"
              description="Processo para encaminhar chamados não resolvidos"
            />
            <MetricCard icon={BarChart} title="Métricas" description="Indicadores de desempenho do atendimento" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Horário de Atendimento</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Tipo de Suporte</TableHead>
                <TableHead className="text-slate-300">Dias</TableHead>
                <TableHead className="text-slate-300">Horário</TableHead>
                <TableHead className="text-slate-300">Observações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-slate-700">
                <TableCell className="font-medium">Suporte Padrão</TableCell>
                <TableCell>Segunda a Sexta</TableCell>
                <TableCell>08:00 - 18:00</TableCell>
                <TableCell>Exceto feriados nacionais</TableCell>
              </TableRow>
              <TableRow className="border-slate-700">
                <TableCell className="font-medium">Suporte Estendido</TableCell>
                <TableCell>Segunda a Sexta</TableCell>
                <TableCell>08:00 - 22:00</TableCell>
                <TableCell>Contratação adicional</TableCell>
              </TableRow>
              <TableRow className="border-slate-700">
                <TableCell className="font-medium">Suporte 24/7</TableCell>
                <TableCell>Todos os dias</TableCell>
                <TableCell>24 horas</TableCell>
                <TableCell>Apenas para clientes Enterprise</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
