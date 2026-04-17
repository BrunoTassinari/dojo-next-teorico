import { Bell } from "lucide-react";
import HeaderSearchInputSection from "../headerSearchInputSection";
import Navigation from "../navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Button from "./button";

export default function Header() {
  const navigationConfig = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Produtos",
      href: "/products",
    },
  ];

  return (
    <header className="bg-surface-tertiary h-16 flex items-center justify-between px-12">
      <span className="text-blue-200 text-3xl">Alura</span>

      <HeaderSearchInputSection />

      <div className="flex items-center gap-6 justify-end">
        <Navigation navigationConfig={navigationConfig} />
        <div className="flex items-center gap-4">
          <Button>
            <Bell size={14} />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
