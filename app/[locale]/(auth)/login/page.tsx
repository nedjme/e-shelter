import { Metadata } from "next";
import { Link } from "@/utils/i18n";
import { LoginForm } from "@/components/LoginForm";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  const t = useTranslations();
  return (
    <div className="container flex flex-col items-center justify-center w-screen h-full">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {t("welcome back")}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t("enter your credentials to sign in to your account")}
          </p>
        </div>
        <LoginForm />
        <p className="px-8 text-sm text-center text-muted-foreground">
          <Link
            href="/register"
            className="underline hover:text-brand underline-offset-4"
          >
            {t("don't you have an account? register")}
          </Link>
        </p>
      </div>
    </div>
  );
}
