"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, getFetch, loggerLink } from "@trpc/client";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AppRouter } from "@server/trpc/trpc.router";
import { createTRPCReact } from "@trpc/react-query";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 1000 } },
});

export const trpc = createTRPCReact<AppRouter>();

export const TrpcProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const url = process.env.NEXT_PUBLIC_NESTJS_SERVER
    ? `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/trpc`
    : "http://localhost:4000/trpc/";

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url,
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
            });
          },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </trpc.Provider>
  );
};
