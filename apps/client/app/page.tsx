"use client";

import { trpc } from "@client/utils/trpc";

const Home = () => {
  const { data, isLoading, isFetching } = trpc.hello.useQuery({ name: "Bob" });

  if (isLoading || isFetching || !data) return <p>Loading...</p>;

  return (
    <div className="text-xl font-bold">
      <h1>{data.greeting}</h1>
    </div>
  );
};

export default Home;
