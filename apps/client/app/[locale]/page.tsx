"use client";

import { trpc } from "@client/utils/trpc";
import { useTranslations } from "next-intl";
import LanguagePicker from '@client/components/LanguagePicker'


const Home = () => {
  const { data, isLoading, isFetching } = trpc.hello.useQuery({ name: "Bob" });
  const t = useTranslations("Home");

  if (isLoading || isFetching || !data ) return <p>Loading...</p>;

  return (
    <div className="text-xl font-bold flex w-[100vw] h-[100vh] justify-center items-center flex-col">
      <LanguagePicker />
      <h1>{data.greeting}</h1>
      <h2>{t("greeting")}</h2>
    </div>
  );
};

export default Home;
