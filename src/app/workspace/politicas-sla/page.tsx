"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import { Header } from "@/app/_components/politicas-sla/header"
import { Footer } from "@/app/_components/politicas-sla/footer"
import { TabGeral } from "@/app/_components/politicas-sla/tab-geral"
import { TabPrioridades } from "@/app/_components/politicas-sla/tab-prioridades"
import { TabCategorias } from "@/app/_components/politicas-sla/tab-categorias"
import { TabRelatorios } from "@/app/_components/politicas-sla/tab-relatorios"

export default function PoliticasSLA() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200">
      <Header title="Políticas de SLA" />

      <main className="flex-1 container mx-auto p-4 md:p-6">
        <Tabs defaultValue="geral" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="geral">Geral</TabsTrigger>
            <TabsTrigger value="prioridades">Prioridades</TabsTrigger>
            <TabsTrigger value="categorias">Categorias</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="geral">
            <TabGeral />
          </TabsContent>

          <TabsContent value="prioridades">
            <TabPrioridades />
          </TabsContent>

          <TabsContent value="categorias">
            <TabCategorias />
          </TabsContent>

          <TabsContent value="relatorios">
            <TabRelatorios />
          </TabsContent>
        </Tabs>
      </main>

      <Footer companyName="Brizzy Desk - Helpdesk Enterprise" />
    </div>
  )
}
