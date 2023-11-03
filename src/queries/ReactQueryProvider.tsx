import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const DEFAULT_CACHE_TIME = 5 * 60 * 1000;
const DEFAULT_STALE_TIME = 1 * 60 * 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: DEFAULT_CACHE_TIME,
      staleTime: DEFAULT_STALE_TIME,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      retry: false,
    },
  },
});

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
