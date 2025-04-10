import type React from "react"
import { Button } from "@/app/_components/ui/button"
import { RefreshCcw } from "lucide-react"

interface PageHeaderProps {
  title: string
  description?: string
  actions?: React.ReactNode
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p className="text-gray-400">{description}</p>}
      </div>
      <div className="flex gap-2">
        {actions || (
          <Button variant="outline" size="sm" className="gap-1">
            <RefreshCcw size={16} />
            <span>Atualizar</span>
          </Button>
        )}
      </div>
    </div>
  )
}
