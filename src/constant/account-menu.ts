import {
  CircleDollarSign,
  CreditCard,
  Heart,
  LucideIcon,
  MapPinned,
  Star,
  UserRoundPen,
} from "lucide-react";

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

export const accountMenu: NavProps["links"] = [
  {
    title: "orders",
    description:
      "Track your order, check order status, retum yow product or buy the product again.",
    icon: CircleDollarSign,
    label: "",
    variant: "default",
  },
  {
    title: "address",
    description:
      "Modify your addresses or add the new ad&ess for orders and gifts.",
    icon: MapPinned,
    label: "",
    variant: "ghost",
  },
  {
    title: "wishlist",
    description:
      "See the items saved to your wishlist. Move them to cart or remove from wishlist",
    icon: Heart,
    label: "",
    variant: "ghost",
  },
  {
    title: "profile details",
    description: "View, update account information- Change account password.",
    icon: UserRoundPen,
    label: "",
    variant: "ghost",
  },
  {
    title: "review",
    description: "View the vyevious reviews you have submitted.",
    icon: Star,
    label: "",
    variant: "ghost",
  },
  {
    title: "payment options",
    description: "Manage your saved cards. View your balance.",
    icon: CreditCard,
    label: "",
    variant: "ghost",
  },
];
