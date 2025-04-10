import type { LucideIcon } from "lucide-react"
import { Button } from "@/app/_components/ui/button"

interface ResourceCardProps {
  title: string
  description: string
  icon: LucideIcon
  buttonText: string
  buttonLink: string
}

export function ResourceCard({ title, description, icon: Icon, buttonText, buttonLink }: ResourceCardProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800">
        <Icon className="h-6 w-6 text-emerald-500" />
      </div>
      <h3 className="mb-2 text-xl font-medium text-white">{title}</h3>
      <p className="mb-4 text-slate-300">{description}</p>
      <Button asChild variant="outline" className="w-full">
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </Button>
    </div>
  )
}
