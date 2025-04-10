"use client"

import type React from "react"

import { useState } from "react"
import { User, Mail, Phone, Building, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"
import { Button } from "@/app/_components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar"

export function TabPerfil() {
  const [userData, setUserData] = useState({
    name: "Thiago da Silva Machado",
    email: "thiago.machado@exemplo.com",
    phone: "(11) 98765-4321",
    company: "Acme Inc.",
    position: "Gerente de TI",
    location: "São Paulo, SP",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="grid gap-6">
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Informações do Perfil</CardTitle>
          <CardDescription>Atualize suas informações pessoais e de contato.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Alterar Foto
              </Button>
            </div>
            <div className="flex-1 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="name" name="name" value={userData.name} onChange={handleChange} className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={userData.email}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="phone" name="phone" value={userData.phone} onChange={handleChange} className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="company"
                      name="company"
                      value={userData.company}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="position">Cargo</Label>
                  <Input id="position" name="position" value={userData.position} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localização</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="location"
                      name="location"
                      value={userData.location}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
