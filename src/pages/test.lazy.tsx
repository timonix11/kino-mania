import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/test")({
  component: () => (
    <div>
      <h1>Test</h1>
    </div>
  ),
});
