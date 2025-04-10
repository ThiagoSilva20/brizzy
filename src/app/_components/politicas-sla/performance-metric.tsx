interface PerformanceMetricProps {
    title: string
    value: string
    percentage: number
    description: string
    color?: string
  }
  
  export function PerformanceMetric({
    title,
    value,
    percentage,
    description,
    color = "bg-emerald-500",
  }: PerformanceMetricProps) {
    return (
      <div className="bg-slate-800 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-white">{title}</h3>
          <span className={`${color.replace("bg-", "text-")} font-medium`}>{value}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
        <p className="text-xs text-slate-400 mt-2">{description}</p>
      </div>
    )
  }
  