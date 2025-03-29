import { Check } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="w-full lg:max-w-screen py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background/80 to-background"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Preços
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Planos para empresas de todos os tamanhos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Escolha o plano que melhor atende às necessidades da sua empresa.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Básico</CardTitle>
              <CardDescription>Para pequenas equipes</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                R$99
                <span className="ml-1 text-xl font-normal text-muted-foreground">
                  /mês
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Até 3 agentes</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Gestão de chamados</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Portal do cliente</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>E-mail e chat</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Relatórios básicos</span>
                </li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button className="w-full">Começar agora</Button>
            </div>
          </Card>
          <Card className="flex flex-col border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Profissional</CardTitle>
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-xs text-primary-foreground">
                  Popular
                </div>
              </div>
              <CardDescription>Para equipes em crescimento</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                R$199
                <span className="ml-1 text-xl font-normal text-muted-foreground">
                  /mês
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Até 10 agentes</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Tudo do plano Básico</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Automação de fluxos</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Base de conhecimento</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Integração com telefonia</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Relatórios avançados</span>
                </li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button className="w-full">Começar agora</Button>
            </div>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Empresarial</CardTitle>
              <CardDescription>Para grandes organizações</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                R$399
                <span className="ml-1 text-xl font-normal text-muted-foreground">
                  /mês
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Agentes ilimitados</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Tudo do plano Profissional</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>SLA personalizado</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>API completa</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Integrações avançadas</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Suporte prioritário 24/7</span>
                </li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button className="w-full">Começar agora</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
