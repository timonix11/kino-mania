import { Outlet, createRootRoute } from "@tanstack/react-router";
import { KMHeader } from "../components/km_header";
import React from "react";

export const Route = createRootRoute({
  component: () => {
    return (
      <React.Fragment>
        <KMHeader />
        <div className="w-full h-[calc(100%-56px)] overflow-y-auto">
          <Outlet />
        </div>
      </React.Fragment>
    );
  },
});
