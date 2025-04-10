"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"
import { Textarea } from "@/app/_components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar o formulário
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu.email@exemplo.com"
            required
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="subject">Assunto</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Assunto da mensagem"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Categoria</Label>
          <Select value={formData.category} onValueChange={handleSelectChange}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technical">Suporte Técnico</SelectItem>
              <SelectItem value="billing">Faturamento</SelectItem>
              <SelectItem value="account">Conta</SelectItem>
              <SelectItem value="feature">Sugestão de Recurso</SelectItem>
              <SelectItem value="other">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Descreva sua dúvida ou problema em detalhes..."
          className="min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Enviar Mensagem
      </Button>
    </form>
  )
}
