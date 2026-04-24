"use client";

import { useTransitionRouter } from "@/hooks/useTransitionRouter";
import { ComponentProps } from "react";

type TransitionLinkProps = ComponentProps<"a"> & {
  href: string;
};

/**
 * TransitionLink
 *
 * Substitui o <Link> do Next.js para rotas internas que devem
 * usar a transição column wipe.
 */
export default function TransitionLink({
  href,
  children,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useTransitionRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}