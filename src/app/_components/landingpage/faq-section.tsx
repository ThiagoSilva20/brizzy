import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const FaqSection = () => {
  return (
    <section
      id="faq"
      className="w-full lg:max-w-screen py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Perguntas Frequentes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Respostas para as dúvidas mais comuns sobre o Brizzy Desk.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>
                Quanto tempo leva para implementar o Brizzy Desk?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A implementação do Brizzy Desk é rápida e simples. Para a
                maioria das empresas, o processo completo leva de 1 a 3 semanas,
                dependendo da complexidade das integrações necessárias e do
                volume de dados a serem migrados.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                O Brizzy Desk pode ser personalizado para meu negócio?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sim, o Brizzy Desk é altamente personalizável. Você pode adaptar
                fluxos de trabalho, campos, formulários e relatórios para
                atender às necessidades específicas do seu negócio,
                independentemente do setor.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Posso migrar de outro sistema para o Brizzy Desk?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Absolutamente. Nossa equipe de implementação oferece suporte
                completo para migração de dados de outros sistemas de help desk.
                Mantemos seu histórico de chamados e informações de clientes
                intactos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>O Brizzy Desk oferece suporte em português?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sim, o Brizzy Desk é totalmente localizado para o português
                brasileiro, incluindo a interface, documentação e suporte
                técnico. Também oferecemos suporte em outros idiomas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
