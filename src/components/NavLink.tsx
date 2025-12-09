"use client";
import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavLinkCompatProps {
  href: string;
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(({ className, activeClassName, href, ...props }, ref) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link ref={ref} href={href} className={cn(className, active && activeClassName)} {...props} />
  );
});

NavLink.displayName = "NavLink";

export { NavLink };
