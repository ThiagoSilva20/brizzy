"use client"

import { Button } from "@/app/_components/ui/button"

interface HeaderProps {
  title: string
  onSave?: () => void
}

export function Header({ title, onSave }: HeaderProps) {
  return (
    <header className="border-b border-slate-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        {onSave && (
          <div className="flex items-center gap-2">
            <Button onClick={onSave}>Salvar Alterações</Button>
          </div>
        )}
      </div>
    </header>
  )
}
