"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex h-screen w-5/12 flex-col items-center justify-center">
        <div className="flex h-1/2 w-11/12 flex-col gap-8">
          <Image
            src="/logo/logo.png"
            alt=""
            width={500}
            height={750}
            className="h-40 w-max object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold">
              Acessar Escritório Adapta
            </span>
            <span className="w-1/2 text-xl">
              Gestão inteligente para uma logística moderna, tudo o que você
              precisa para rendimento{" "}
              <span className="text-primary">{""} #AdaptSe</span>
            </span>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-2/3 flex-col gap-8"
          >
            <div className="relative">
              <Label htmlFor="email" className="border-default-900 text-lg">
                Email
              </Label>
              <Input
                removeWrapper
                id="email"
                placeholder=""
                className={cn("peer border-zinc-200 text-base")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email" className="border-default-900 text-lg">
                Senha
              </Label>
              <div className="relative">
                <Input
                  type={passwordType}
                  id="password"
                  className="peer border-zinc-200 text-base"
                />

                <div
                  className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer opacity-50 ltr:right-4 rtl:left-4"
                  onClick={togglePasswordType}
                >
                  {passwordType === "password" ? (
                    <Eye className="text-default-400 h-5 w-5" />
                  ) : (
                    <EyeOff className="text-default-400 h-5 w-5" />
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-1 items-center gap-1.5">
                  <Checkbox
                    size="sm"
                    className="border-primary data-[state=checked]:bg-primary mt-[1px] data-[state=checked]:text-white"
                    id="isRemembered"
                  />
                  <Label
                    htmlFor="isRemembered"
                    className="text-default-700 cursor-pointer text-base whitespace-nowrap"
                  >
                    Lembrar de mim
                  </Label>
                </div>
                <Link
                  href="#"
                  className="text-primary hover:text-primary/90 flex-none font-bold"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <button
              onClick={() => router.push("/register/branches")}
              className="bg-primary h-12 w-full cursor-pointer rounded-lg font-semibold text-white"
            >
              Entrar Agora
            </button>
            <span className="mx-auto">
              Novo aqui no Adapta?
              <span className="text-primary cursor-pointer font-semibold">
                {""} Conheça o Grupo Agora
              </span>
            </span>
          </form>
        </div>
      </div>
      <div className="bg-primary relative flex h-screen w-7/12 items-center justify-center p-8">
        <Image
          src="/static/login-bg.png"
          alt=""
          width={1000}
          height={1500}
          quality={100}
          className="h-full w-full rounded-2xl object-cover"
        />
        <Image
          src="/logo/logo.png"
          alt=""
          width={500}
          height={750}
          className="absolute right-20 bottom-20 z-10 h-80 w-max object-contain opacity-20"
        />
      </div>
    </div>
  );
}
