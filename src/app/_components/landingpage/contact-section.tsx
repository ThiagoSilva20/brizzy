import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="lg:max-w-5xl mx-auto w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background/80 to-background"
    >
      <div className="grid items-center justify-center gap-4 text-center w-full px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Pronto para transformar seu suporte técnico?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comece hoje mesmo com o Brizzy Desk e veja a diferença em seu
            atendimento.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link
            href="#demo"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Solicitar Demo
          </Link>
          <Link
            href="#pricing"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Ver Planos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
