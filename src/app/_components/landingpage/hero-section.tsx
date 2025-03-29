import Image from "next/image";

import { Button } from "../ui/button";
import { Play } from "lucide-react";
import Link from "next/link";
import GridLayout from "../ui/grid-layout";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 lg:max-w-screen w-full px-6 overflow-hidden bg-background">
      <GridLayout
        crosshairs={{
          topLeft: true,
          bottomRight: true,
        }}
        lineVariant="none"
        className="mt-10 p-6"
      >
        <div className="text-center mb-16 z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Simplifique seu suporte técnico com
            <br />
            Brizzy Desk
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Plataforma completa de Help Desk para gerenciar chamados técnicos,
            automatizar processos e melhorar a satisfação dos clientes.
          </p>
          <div className="flex gap-4 justify-center">
            <Button>
              <Link href="#demo" className="flex items-center z-20">
                Solicitar Demo
                <Play className="size-4 ml-1" />
              </Link>
            </Button>
            <Button
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100"
            >
              <Link href="#features" className="z-20">
                Saiba Mais
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20image.jpg-mE5vAT4d864MlVhdkcrk1Vn2WcNONq.jpeg"
            alt="Background Gradient"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 flex items-end justify-center pb-16">
            <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl w-[90%] h-[70%] flex">
              <div className="flex-1 pr-2">
                <Image
                  src="/brizzy.png"
                  alt="Browser Preview"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="flex-1 pl-2">
                <Image
                  src="/brizzy.png"
                  alt="Code Editor"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </GridLayout>
    </section>
  );
};

export default HeroSection;
