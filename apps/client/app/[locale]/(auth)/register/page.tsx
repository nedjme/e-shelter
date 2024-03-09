import { RegisterForm } from "@client/components/RegisterForm";
import { Link } from "@client/utils/i18n";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
};

export default function RegisterPage() {
  const t = useTranslations();
  return (
    <div className="container grid flex-col items-center justify-center w-screen h-full">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {t("create an account")}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t("enter your credentials below to create your account")}
          </p>
        </div>
        <RegisterForm />
        <p className="px-8 text-sm text-center text-muted-foreground">
          <Link
            href="/login"
            className="underline hover:text-brand underline-offset-4"
          >
            {t("do you have an account? login")}
          </Link>
          {/* By clicking register, you agree to our{" "}
            <Link
              href="/terms"
              className="underline hover:text-brand underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline hover:text-brand underline-offset-4"
            >
              Privacy Policy
            </Link>
            . */}
        </p>
      </div>
    </div>
  );
}
