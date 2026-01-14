"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

interface NavLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
    className?: string;
    activeClassName?: string;
    // Support 'to' prop for compatibility if needed, though href is preferred
    to?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ className, activeClassName, href, to, ...props }, ref) => {
        const pathname = usePathname();
        const destination = href || to || "";
        const isActive = pathname === destination || pathname?.startsWith(`${destination}/`);

        return (
            <Link
                ref={ref}
                href={destination}
                className={cn(className, isActive && activeClassName)}
                {...props}
            />
        );
    },
);

NavLink.displayName = "NavLink";

export { NavLink };
