import { Button } from "@/app/_components/ui/button"

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="border-b border-slate-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Exportar
          </Button>
          <Button size="sm">Atualizar</Button>
        </div>
      </div>
    </header>
  )
}
