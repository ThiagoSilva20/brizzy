"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import { Header } from "@/app/_components/ajuda-recursos/header"
import { Footer } from "@/app/_components/politicas-sla/footer"
import { FAQItem } from "@/app/_components/ajuda-recursos/faq-item"
import { ResourceCard } from "@/app/_components/ajuda-recursos/resource-card"
import { ContactForm } from "@/app/_components/ajuda-recursos/contact-form"
import { FileText, BookOpen, Video, MessageSquare, HelpCircle } from "lucide-react"

export default function AjudaRecursos() {
  const [activeTab, setActiveTab] = useState("faq")

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200">
      <Header title="Ajuda & Recursos" />

      <main className="flex-1 container mx-auto p-4 md:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
            <TabsTrigger value="recursos">Recursos</TabsTrigger>
            <TabsTrigger value="contato">Contato</TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-6 text-2xl font-bold text-white">Perguntas Frequentes</h2>
              <div className="space-y-1">
                <FAQItem
                  question="Como criar um novo chamado?"
                  answer="Para criar um novo chamado, clique no botão '+' no canto superior direito da tela ou acesse a seção 'Chamados' e clique em 'Novo Chamado'. Preencha o formulário com as informações necessárias e clique em 'Enviar'."
                />
                <FAQItem
                  question="Como acompanhar o status de um chamado?"
                  answer="Você pode acompanhar o status de seus chamados na seção 'Chamados'. Os chamados são organizados por status (Abertos, Pendentes, Resolvidos). Clique em um chamado para ver detalhes e atualizações."
                />
                <FAQItem
                  question="Como alterar minha senha?"
                  answer="Para alterar sua senha, acesse 'Configurações' no menu lateral, selecione a aba 'Segurança' e clique em 'Alterar Senha'. Você precisará informar sua senha atual e a nova senha."
                />
                <FAQItem
                  question="Como adicionar um novo usuário ao sistema?"
                  answer="Para adicionar um novo usuário, você precisa ter permissões de administrador. Acesse 'Usuários' no menu lateral, clique em 'Adicionar Usuário' e preencha as informações necessárias. O novo usuário receberá um email com instruções para acessar o sistema."
                />
                <FAQItem
                  question="Como exportar relatórios?"
                  answer="Para exportar relatórios, acesse a seção 'Relatórios' no menu lateral, selecione o tipo de relatório desejado, defina os filtros e clique em 'Exportar'. Você pode escolher entre os formatos PDF, Excel ou CSV."
                />
                <FAQItem
                  question="O que são SLAs?"
                  answer="SLA (Service Level Agreement) ou Acordo de Nível de Serviço define os tempos de resposta e resolução esperados para cada tipo de chamado. Os SLAs variam de acordo com a prioridade e categoria do chamado. Você pode consultar as políticas de SLA na seção 'Políticas de SLA'."
                />
                <FAQItem
                  question="Como configurar notificações?"
                  answer="Para configurar suas preferências de notificação, acesse 'Configurações' no menu lateral e selecione a aba 'Notificações'. Você pode escolher quais tipos de notificações deseja receber e por quais canais (email, aplicativo)."
                />
                <FAQItem
                  question="Como personalizar a interface?"
                  answer="Para personalizar a interface, acesse 'Configurações' no menu lateral e selecione a aba 'Aparência'. Você pode escolher entre temas claro e escuro, definir a cor de destaque e ajustar outras preferências visuais."
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recursos">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Guia do Usuário"
                description="Manual completo com instruções detalhadas sobre todas as funcionalidades do sistema."
                icon={FileText}
                buttonText="Acessar Guia"
                buttonLink="#"
              />
              <ResourceCard
                title="Base de Conhecimento"
                description="Artigos técnicos, tutoriais e soluções para problemas comuns."
                icon={BookOpen}
                buttonText="Explorar Artigos"
                buttonLink="#"
              />
              <ResourceCard
                title="Vídeos Tutoriais"
                description="Aprenda a utilizar o sistema com vídeos explicativos passo a passo."
                icon={Video}
                buttonText="Assistir Vídeos"
                buttonLink="#"
              />
              <ResourceCard
                title="Comunidade"
                description="Fórum de discussão para trocar experiências e dicas com outros usuários."
                icon={MessageSquare}
                buttonText="Participar"
                buttonLink="#"
              />
              <ResourceCard
                title="Webinars"
                description="Treinamentos online periódicos sobre recursos e melhores práticas."
                icon={Video}
                buttonText="Ver Agenda"
                buttonLink="#"
              />
              <ResourceCard
                title="Suporte Técnico"
                description="Entre em contato com nossa equipe de suporte para resolver problemas técnicos."
                icon={HelpCircle}
                buttonText="Obter Ajuda"
                buttonLink="#"
              />
            </div>
          </TabsContent>

          <TabsContent value="contato">
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-6 text-2xl font-bold text-white">Entre em Contato</h2>
              <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                <ContactForm />
                <div className="space-y-6">
                  <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
                    <h3 className="mb-2 font-medium text-white">Horário de Atendimento</h3>
                    <p className="text-sm text-slate-300">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-sm text-slate-300">Sábado: 9h às 13h</p>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
                    <h3 className="mb-2 font-medium text-white">Contatos Diretos</h3>
                    <p className="text-sm text-slate-300">Email: suporte@brizzydesk.com</p>
                    <p className="text-sm text-slate-300">Telefone: (11) 3456-7890</p>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
                    <h3 className="mb-2 font-medium text-white">Tempo Médio de Resposta</h3>
                    <p className="text-sm text-slate-300">Emails: até 4 horas úteis</p>
                    <p className="text-sm text-slate-300">Formulário de contato: até 2 horas úteis</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer companyName="Brizzy Desk - Helpdesk Enterprise" />
    </div>
  )
}
