"use client";

import { trpc } from "@client/utils/trpc";
import { useTranslations } from "next-intl";
import LanguagePicker from "@client/components/LanguagePicker";

type Props = {
  children: React.ReactNode;
};

const Home: React.FC<Props> = ({ children }) => {
  const { data, isLoading, isFetching } = trpc.hello.useQuery({ name: "Bob" });
  const t = useTranslations("Home");

  if (isLoading || isFetching || !data) return <p>Loading...</p>;

  return (
    <>
      <LanguagePicker />
      <h1>{data.greeting}</h1>
      <h2>{t("greeting")}</h2>
    </>
  );
};

export default Home;
