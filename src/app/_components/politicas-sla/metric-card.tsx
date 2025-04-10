import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
}

export function MetricCard({ icon: Icon, title, description, iconColor = "text-emerald-500" }: MetricCardProps) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg flex flex-col items-center text-center">
      <Icon className={`h-8 w-8 mb-2 ${iconColor}`} />
      <h3 className="font-medium text-white">{title}</h3>
      <p className="text-sm text-slate-400 mt-1">{description}</p>
    </div>
  )
}
