import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}
export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "cursor-pointer rounded-full bg-surface-brand px-2 py-2 text-white hover:bg-surface-brand/60",
        className,
      )}
    >
      {children}
    </button>
  );
}
