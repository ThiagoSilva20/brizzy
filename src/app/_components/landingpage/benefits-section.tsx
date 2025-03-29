import { Check } from "lucide-react";
import Image from "next/image";

const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="lg:max-w-7xl w-full mx-auto py-12 md:py-24 lg:py-32"
    >
      <div className="px-6 w-full">
        <div className="flex items-center justify-around flex-col lg:flex-row">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Benefícios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Por que escolher o Brizzy Desk?
            </h2>
            <ul className="grid gap-6">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Aumente a produtividade</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduza o tempo gasto em tarefas administrativas e foque no
                    que realmente importa.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">
                    Melhore a satisfação do cliente
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Resolva problemas mais rapidamente e mantenha seus clientes
                    informados em cada etapa.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Reduza custos operacionais</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatize processos e otimize a alocação de recursos para
                    economizar tempo e dinheiro.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">
                    Tome decisões baseadas em dados
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Utilize relatórios e análises para identificar tendências e
                    melhorar continuamente.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=600&width=600"
              width={600}
              height={600}
              alt="Benefícios do Brizzy Desk"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
