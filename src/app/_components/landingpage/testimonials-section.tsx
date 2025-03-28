import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const TestimonialsSection = () => {
  return (
    <section className="w-full lg:max-w-screen py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <Tabs defaultValue="testimonials" className="w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                O que nossos clientes dizem
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Empresas de diversos setores confiam no Brizzy Desk para
                gerenciar seu suporte técnico.
              </p>
            </div>
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="testimonials">Depoimentos</TabsTrigger>
              <TabsTrigger value="case-studies">Casos de Uso</TabsTrigger>
              <TabsTrigger value="stats">Estatísticas</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="testimonials" className="mt-6 space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">Ana Silva</CardTitle>
                      <CardDescription>Gerente de TI, TechCorp</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "O Brizzy Desk transformou nossa operação de suporte.
                    Reduzimos o tempo de resolução em 40% e melhoramos
                    significativamente a satisfação dos clientes."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">Carlos Mendes</CardTitle>
                      <CardDescription>
                        Diretor de Operações, LogisTech
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "A automação do Brizzy Desk nos permitiu escalar nosso
                    suporte sem aumentar a equipe. A plataforma é intuitiva e
                    extremamente poderosa."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">Mariana Costa</CardTitle>
                      <CardDescription>CEO, FinancePro</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "Implementamos o Brizzy Desk há 6 meses e já vimos um ROI
                    impressionante. A base de conhecimento reduziu chamados
                    repetitivos em 60%."
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="case-studies" className="mt-6 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>TechCorp: Transformação Digital</CardTitle>
                  <CardDescription>
                    Empresa de tecnologia com 500 funcionários
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A TechCorp implementou o Brizzy Desk para centralizar o
                    suporte técnico interno e externo. Resultados: redução de
                    40% no tempo de resolução, aumento de 35% na satisfação do
                    cliente e economia de 25% nos custos operacionais.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>HealthPlus: Suporte 24/7</CardTitle>
                  <CardDescription>
                    Rede de clínicas com atendimento contínuo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A HealthPlus precisava de um sistema de suporte que
                    funcionasse 24/7 para sua infraestrutura crítica. Com o
                    Brizzy Desk, conseguiram reduzir o tempo de inatividade em
                    80% e melhorar a coordenação entre equipes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="stats" className="mt-6 space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold">98%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Taxa de satisfação dos clientes após implementação
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold">45%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Redução média no tempo de resolução de chamados
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold">30%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Economia média em custos operacionais
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold">1000+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Empresas utilizando o Brizzy Desk
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestimonialsSection;
