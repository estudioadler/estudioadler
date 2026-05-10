// scroll-to-top-button.tsx
import { ArrowUpIcon } from "@phosphor-icons/react/dist/ssr"
import { LinkHoverCard } from "./link-hover-card"

interface ScrollToTopButtonProps {
  onClick?: () => void
  variant?: "dark" | "light"
}

const styles = {
  dark: "bg-neutral-950 text-neutral-50",
  light: "bg-neutral-50 text-neutral-950",
}

export function ScrollToTopButton({
  onClick,
  variant = "dark",
}: ScrollToTopButtonProps) {
  return (
    <LinkHoverCard label="Voltar ao topo" icon="arrow-right">
      <button
        onClick={onClick}
        aria-label="Voltar ao topo"
        className={`${styles[variant]} group relative inline-flex cursor-pointer items-center justify-center overflow-hidden border border-neutral-600 size-12 text-sm font-medium transition`}
      >
        <div className="relative size-6 overflow-hidden">
          <ArrowUpIcon className="size-6" weight="light"/>
        </div>
      </button>
    </LinkHoverCard>
  )
}
