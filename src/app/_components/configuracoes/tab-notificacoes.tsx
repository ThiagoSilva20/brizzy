import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { Switch } from "@/app/_components/ui/switch"
import { Label } from "@/app/_components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/app/_components/ui/radio-group"

export function TabNotificacoes() {
  return (
    <div className="grid gap-6">
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Preferências de Notificação</CardTitle>
          <CardDescription>Controle quais notificações você deseja receber.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium text-white">Notificações de Chamados</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="new-ticket" className="flex-1">
                    Novos chamados
                    <span className="block text-sm font-normal text-slate-400">
                      Receba notificações quando novos chamados forem criados.
                    </span>
                  </Label>
                  <Switch id="new-ticket" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="ticket-update" className="flex-1">
                    Atualizações de chamados
                    <span className="block text-sm font-normal text-slate-400">
                      Receba notificações quando houver atualizações em chamados.
                    </span>
                  </Label>
                  <Switch id="ticket-update" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="ticket-resolved" className="flex-1">
                    Chamados resolvidos
                    <span className="block text-sm font-normal text-slate-400">
                      Receba notificações quando chamados forem resolvidos.
                    </span>
                  </Label>
                  <Switch id="ticket-resolved" defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-white">Notificações do Sistema</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="system-updates" className="flex-1">
                    Atualizações do sistema
                    <span className="block text-sm font-normal text-slate-400">
                      Receba notificações sobre atualizações e manutenções do sistema.
                    </span>
                  </Label>
                  <Switch id="system-updates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="security-alerts" className="flex-1">
                    Alertas de segurança
                    <span className="block text-sm font-normal text-slate-400">
                      Receba notificações sobre eventos de segurança importantes.
                    </span>
                  </Label>
                  <Switch id="security-alerts" defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-white">Método de Entrega</h3>
              <RadioGroup defaultValue="all">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">Email e aplicativo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email">Apenas email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="app" id="app" />
                  <Label htmlFor="app">Apenas aplicativo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none">Desativar todas as notificações</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
