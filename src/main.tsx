import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppContext from "./AppContext.tsx";
import AppReducer from "./AppReducer.tsx";
import AppProps from "./AppProps.tsx";
import AppQuery from "./AppQuery.tsx";
import AppAxios from "./AppAxios.tsx";
import AppQueryHook from "./AppQueryHook.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProps />
    <hr />
    <AppAxios />
    <hr />
    <QueryClientProvider client={queryClient}>
      <AppQuery />
      <hr />
      <AppQueryHook />
    </QueryClientProvider>
    <hr />
    <AppReducer />
    <hr />
    <AppContext />
  </StrictMode>
);
