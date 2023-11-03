import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import React from "react";

const DEFAULT_CACHE_TIME = 5 * 60 * 1000;
const DEFAULT_STALE_TIME = 30 * 1000;

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

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PersistQueryClientProvider
      persistOptions={{ persister }}
      client={queryClient}
    >
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </PersistQueryClientProvider>
  );
};

export default ReactQueryProvider;
