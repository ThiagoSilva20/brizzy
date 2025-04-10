import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import LoginForm from "./_components/login-form";
import RegisterForm from "./_components/register-form";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Brizzy Desk</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Simplifique seu suporte técnico com nossa plataforma
          </p>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6 shadow-xl">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Cadastro</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center text-xs text-zinc-500">
          <p>© 2025 Brizzy Desk. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}
