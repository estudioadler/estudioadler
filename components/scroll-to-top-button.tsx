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

export function ScrollToTopButton({ onClick, variant = "dark" }: ScrollToTopButtonProps) {
  return (
    <LinkHoverCard label="Voltar ao topo" icon="arrow-right">
      <button
        onClick={onClick}
        aria-label="Voltar ao topo"
        className={`${styles[variant]} cursor-pointer group relative inline-flex items-center justify-center overflow-hidden outline p-3 text-sm font-medium transition`}
      >
        <div className="relative h-5 w-5 overflow-hidden">
          <div className="absolute transition-all duration-200 group-hover:-translate-y-8">
            <ArrowUpIcon className="h-5 w-5" />
            <ArrowUpIcon className="h-5 w-5 translate-y-3" />
          </div>
        </div>
      </button>
    </LinkHoverCard>
  )
}