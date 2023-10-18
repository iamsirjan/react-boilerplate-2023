import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 30 * 1000,
    },
  },
});

const Provider = ({ children }: IProvider) => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster position="bottom-right" />
          <HelmetProvider>{children}</HelmetProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default Provider;

interface IProvider {
  children: React.ReactNode;
}
