import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import Logout from "@/components/logout";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    description?: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <div
        data-collapsed={isCollapsed}
        className="group flex h-full flex-col rounded-md border px-1 py-2 capitalize"
      >
        {/* MAIN LINKS */}
        <nav className="grid gap-1 px-1 flex-1 group-data-[collapsed=true]:justify-center group-data-[collapsed=true]:px-2">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className={cn(
                      buttonVariants({ variant: link.variant, size: "icon" }),
                      "h-9 w-9",
                      link.variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:text-white",
                    )}
                  >
                    <link.icon className="size-5" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  {link.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={index}
                href={`/account/${link.title.toLowerCase()}`}
                className={cn(
                  buttonVariants({ variant: link.variant, size: "sm" }),
                  "justify-start"
                )}
              >
                <link.icon className="mr-2 size-5" />
                {link.title}
              </Link>
            )
          )}
        </nav>

        {/* LOGOUT AT BOTTOM */}
        <Logout/>
      </div>
    </TooltipProvider>
  );
}

