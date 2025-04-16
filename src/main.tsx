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
import AppZustand from "./AppZustand.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import AppSetState from "./AppSetState.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <hr />
    <AppZustand />
    <hr />
    <AppContext />
    <hr />
    <AppReducer />
    <hr />
    <QueryClientProvider client={queryClient}>
      <AppQuery />
      <hr />
      <AppQueryHook />
    </QueryClientProvider>
    <AppProps />
    <hr />
    <AppAxios />
    <hr />
    <AppProps />
    <hr />
    <AppSetState />
  </StrictMode>
);
