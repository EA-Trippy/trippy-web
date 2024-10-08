import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "@/styles/textEditor.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </QueryClientProvider>
    </SessionProvider>
  );
}
