"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import { Header } from "@/app/_components/configuracoes/header"
import { Footer } from "@/app/_components/politicas-sla/footer"
import { TabPerfil } from "@/app/_components/configuracoes/tab-perfil"
import { TabSeguranca } from "@/app/_components/configuracoes/tab-seguranca"
import { TabNotificacoes } from "@/app/_components/configuracoes/tab-notificacoes"
import { toast } from "sonner"


export default function Configuracoes() {
  const [activeTab, setActiveTab] = useState("perfil")

  const handleSave = () => {
    toast("Configurações salvas", {
      description: "Suas alterações foram salvas com sucesso.",
      action: {
        label: "Ok",
        onClick: () => console.log("Toast fechado")
      },
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200">
      <Header title="Configurações" onSave={handleSave} />

      <main className="flex-1 container mx-auto p-4 md:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="perfil">Perfil</TabsTrigger>
            <TabsTrigger value="seguranca">Segurança</TabsTrigger>
            <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          </TabsList>

          <TabsContent value="perfil">
            <TabPerfil />
          </TabsContent>

          <TabsContent value="seguranca">
            <TabSeguranca />
          </TabsContent>

          <TabsContent value="notificacoes">
            <TabNotificacoes />
          </TabsContent>
        </Tabs>
      </main>

      <Footer companyName="Brizzy Desk - Helpdesk Enterprise" />
    </div>
  )
}