"use client";

import type React from "react";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { Eye, Mail, Lock } from "lucide-react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const handleGoogleSignin = async () => {
    try{
      await signIn("google", {callbackUrl: "/workspace"});


    }catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
    }
  }


  return (
    <div className="space-y-4">
      {/* <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Senha</Label>
          <a href="#" className="text-xs text-purple-400 hover:underline">
            Esqueceu a senha?
          </a>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input id="password" placeholder="••••••••" className="pl-10" />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 text-zinc-500 hover:text-zinc-400"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="text-sm font-normal">
          Lembrar de mim
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700"
 
      >
        Entrar
      </Button>*/}
      <Button onClick={handleGoogleSignin} className="w-full bg-purple-600 hover:bg-purple-700">
        Entrar com o Google
      </Button> 
{/* 
      <div className="text-center text-sm text-zinc-500">
        Não tem uma conta?{" "}
        <a href="#" className="text-purple-400 hover:underline">
          Cadastre-se
        </a>
      </div> */}
    </div>
  );
}
