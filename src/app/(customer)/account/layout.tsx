import { accountMenu } from "@/constant/account-menu";
import { Nav } from "./sidebar";

export default async function AccountRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <section className="container mx-auto grid grid-cols-12 gap-6 p-4">
      <div className="col-span-3 rounded-md max-sm:hidden">
        <Nav isCollapsed={false} links={accountMenu} />
      </div>
      <div className="col-span-9 max-sm:col-span-12">{children}</div>
    </section>
  );
}
