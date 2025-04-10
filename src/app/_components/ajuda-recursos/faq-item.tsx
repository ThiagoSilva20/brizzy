"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-800 last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
      </button>
      {isOpen && <div className="pb-4 text-slate-300">{answer}</div>}
    </div>
  )
}

