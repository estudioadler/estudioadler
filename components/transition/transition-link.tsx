"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, MouseEvent, ReactNode, forwardRef } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ href, children, className, style, onClick }, ref) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = useCallback(
      (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Mesma rota → fecha o menu (se aberto) e não faz nada mais
        const destPathname = href.split("?")[0].split("#")[0];
        if (destPathname === pathname) {
          onClick?.();
          return;
        }

        onClick?.();

        const transitionIn = (
          window as Window & {
            __pixelTransitionIn?: (callback: () => void) => void;
          }
        ).__pixelTransitionIn;

        if (!transitionIn) {
          router.push(href);
          return;
        }

        transitionIn(() => {
          router.push(href);
        });
      },
      [href, pathname, router, onClick]
    );

    return (
      <a href={href} onClick={handleClick} className={className} style={style} ref={ref}>
        {children}
      </a>
    );
  }
);

TransitionLink.displayName = "TransitionLink";
export default TransitionLink;