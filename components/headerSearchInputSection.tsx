import { Search } from "lucide-react";
import Button from "./ui/button";

export default function HeaderSearchInputSection() {
  return (
    <div className="flex justify-between bg-surface-brand items-center gap-4 py-2 rounded-full">
      <span className="pl-4 text-text-disabled text-base">O que você quer aprender?</span>
      <div className="flex items-center gap-3 pr-2">
        <Button className="bg-[linear-gradient(91deg,#292B2E_0.88%,#37393F_99.18%)] py-3 px-3 hover:bg-surface-interactive/60">
          <Search size={12} />
        </Button>
        <Button className="bg-[linear-gradient(91deg,#292B2E_0.88%,#37393F_99.18%)] hover:bg-surface-interactive/60 px-4 py-2 text-text-body">
          <span className="text-sm">Pesquisar com IA</span>
        </Button>
      </div>
    </div>
  );
}
