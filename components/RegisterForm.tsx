"use client";
import * as React from "react";

import * as z from "zod";
import { cn } from "@/utils/shadcnui";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validations/auth";
import { buttonVariants } from "@/components/ui/button";

interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof registerSchema>;

export function RegisterForm({ className, ...props }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();

  const t = useTranslations();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = {
      ok: true,
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/dashboard",
    };

    setIsLoading(false);

    // if (!signInResult?.ok) {
    //   return toast({
    //     title: "Something went wrong.",
    //     description: "Your sign in request failed. Please try again.",
    //     variant: "destructive",
    //   });
    // }

    // return toast({
    //   title: "Check your email",
    //   description: "We sent you a login link. Be sure to check your spam too.",
    // });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                {t("first name")}
              </Label>
              <Input
                id="firstName"
                placeholder={t("first name")}
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                {...register("firstName")}
              />
              {errors?.firstName && (
                <p className="px-1 text-xs text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                {t("last name")}
              </Label>
              <Input
                id="lastName"
                placeholder={t("last name")}
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                {...register("lastName")}
              />
              {errors?.lastName && (
                <p className="px-1 text-xs text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              {t("email")}
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              {t("password")}
            </Label>
            <Input
              id="password"
              placeholder={t("password")}
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password")}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              {t("confirm password")}
            </Label>
            <Input
              id="passwordConfirmation"
              placeholder={t("confirm password")}
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("passwordConfirmation")}
            />
            {errors?.passwordConfirmation && (
              <p className="px-1 text-xs text-red-600">
                {errors.passwordConfirmation.message}
              </p>
            )}
          </div>
          <button
            className={cn(buttonVariants(), "bg-[#2c3c54]")}
            disabled={isLoading}
          >
            {isLoading && <Loader className="w-4 h-4 mr-2 animate-spin" />}
            {t("register")}
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
    </div>
  );
}
