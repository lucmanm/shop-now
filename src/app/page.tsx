import { ComponentExample } from "@/components/component-example";

export default function Page() {
  return (
    <>
      <ComponentExample />
      <p>{process.env.DB_HOST}</p>
    </>
  );
}
