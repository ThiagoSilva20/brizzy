interface FooterProps {
    companyName: string
    year?: number
  }
  
  export function Footer({ companyName, year = 2025 }: FooterProps) {
    return (
      <footer className="border-t border-slate-800 p-4 text-center text-sm text-slate-400">
        <p>
          © {year} {companyName}. Todos os direitos reservados.
        </p>
      </footer>
    )
  }
  