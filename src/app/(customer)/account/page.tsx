import { accountMenu } from "@/constant/account-menu";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export default async function Page() {
   const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        redirect("/auth/login")
    }

    console.log(session.user.name);


  return (
    <section className="mx-auto grid gap-4 lg:container max-sm:grid-cols-1 max-sm:gap-3 max-sm:p-3 md:grid-cols-3">
      {accountMenu.map((data, idx) => (
        <div
          key={idx}
          className="relative h-36 overflow-hidden rounded-md border p-6 text-sm shadow-sm max-sm:h-24 max-sm:text-xs hover:shadow-md transition-shadow hover:cursor-pointer hover:bg-blue-50/50"
        >
          <div>
            <div className="font-semibold capitalize">{data.title}</div>
            <div className="">{data.description}</div>
          </div>
          <data.icon className="absolute -right-10 -top-10 -z-10 size-56 -rotate-45 text-blue-600/20 max-sm:h-24" />
        </div>
      ))}
    </section>
  );
}
