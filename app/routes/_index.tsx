import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Random Stack" },
    {
      name: "description",
      content: "Build your next website with a random stack!",
    },
  ];
};

export default function Index() {
  return <div>Home</div>;
}
