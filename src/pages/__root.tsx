import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { KMHeader } from "../components/km_header";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <KMHeader />
      <div className="w-full h-[calc(100%-56px)] overflow-y-scroll">
        <Outlet />
      </div>
    </React.Fragment>
  ),
});
