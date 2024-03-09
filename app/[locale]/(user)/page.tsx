"use client";

import { trpc } from "@/utils/trpc";
import { useTranslations } from "next-intl";

type Props = {
  children: React.ReactNode;
};

const Home: React.FC<Props> = ({ children }) => {
  const { data, isLoading, isFetching } = trpc.hello.useQuery({ name: "Bob" });
  const t = useTranslations();

  if (isLoading || isFetching || !data) return <p>Loading...</p>;

  return (
    <>
      <h1>{data.greeting}</h1>
      <h2>{t("greeting")}</h2>
      {children}
    </>
  );
};

export default Home;
