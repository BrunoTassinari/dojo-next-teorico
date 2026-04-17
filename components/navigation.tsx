import Link from "next/link";

//props = deixa o componente dinamico
// label, href

interface NavigationProps {
  navigationConfig: {
    label: string;
    href: string;
  }[];
}

export default function Navigation(props: NavigationProps) {
  return (
    <nav className=" text-text-subtle-2 text-sm flex gap-4">
      {props.navigationConfig.map((config) => (
        <Link key={config.href} href={config.href}>
          {config.label}
        </Link>
      ))}
    </nav>
  );
}
