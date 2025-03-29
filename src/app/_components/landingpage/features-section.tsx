import {
  HelpCircle,
  MessageSquare,
  PhoneCall,
  Settings,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="w-full lg:max-w-screen py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background/80 to-background"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">
              Recursos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Brizzy Desk oferece todas as ferramentas necessárias para
              gerenciar seu suporte técnico de forma eficiente.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <MessageSquare className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Gestão de Chamados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Organize, priorize e acompanhe todos os chamados técnicos em um
                único painel intuitivo.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Portal do Cliente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ofereça aos seus clientes uma interface amigável para abrir e
                acompanhar seus chamados.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Settings className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Automação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Automatize tarefas repetitivas, atribuição de chamados e
                notificações para aumentar a eficiência.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <HelpCircle className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Base de Conhecimento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Crie e compartilhe soluções para problemas comuns, reduzindo o
                tempo de resolução.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <PhoneCall className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Multicanal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Receba chamados por e-mail, chat, telefone ou portal, tudo
                integrado em uma única plataforma.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary mb-2"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
              <CardTitle>Relatórios e Análises</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Obtenha insights valiosos com relatórios detalhados sobre
                desempenho, tempo de resolução e satisfação.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
