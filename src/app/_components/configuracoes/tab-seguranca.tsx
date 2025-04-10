import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"
import { Button } from "@/app/_components/ui/button"
import { Switch } from "@/app/_components/ui/switch"

export function TabSeguranca() {
  return (
    <div className="grid gap-6">
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Alterar Senha</CardTitle>
          <CardDescription>Atualize sua senha para manter sua conta segura.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Senha Atual</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="new-password">Nova Senha</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
            <Button type="submit">Atualizar Senha</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Autenticação de Dois Fatores</CardTitle>
          <CardDescription>Adicione uma camada extra de segurança à sua conta.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Autenticação por SMS</h3>
                <p className="text-sm text-slate-400">Receba códigos de verificação por SMS.</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Aplicativo Autenticador</h3>
                <p className="text-sm text-slate-400">Use um aplicativo como Google Authenticator.</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Chave de Segurança</h3>
                <p className="text-sm text-slate-400">Use uma chave de segurança física (YubiKey, etc).</p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Sessões Ativas</CardTitle>
          <CardDescription>Gerencie os dispositivos conectados à sua conta.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-800 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Chrome - Windows</h3>
                  <p className="text-sm text-slate-400">São Paulo, Brasil • Ativo agora</p>
                </div>
                <Button variant="destructive" size="sm">
                  Encerrar
                </Button>
              </div>
            </div>
            <div className="rounded-lg border border-slate-800 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">Safari - iPhone</h3>
                  <p className="text-sm text-slate-400">São Paulo, Brasil • Última atividade: 2 horas atrás</p>
                </div>
                <Button variant="destructive" size="sm">
                  Encerrar
                </Button>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Encerrar Todas as Outras Sessões
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
