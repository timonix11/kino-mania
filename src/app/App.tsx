import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./themeProvider";
import { routeTree } from "../routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
