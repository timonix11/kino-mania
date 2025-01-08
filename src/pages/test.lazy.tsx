import { createLazyFileRoute } from "@tanstack/react-router";
import { Counter } from "../features/counter/counter";

export const Route = createLazyFileRoute("/test")({
  component: () => (
    <div>
      <Counter />
    </div>
  ),
});
