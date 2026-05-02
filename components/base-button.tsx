import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"
import { LinkHoverCard } from "./link-hover-card"
import CustomLink from "./custom-link" // ajuste o path conforme seu projeto

interface BaseButtonProps {
  onClick?: () => void
  text: string
  variant?: "dark" | "light"
  href?: string
  onClickDelay?: number
}

export function BaseButton({
  onClick,
  text,
  variant = "dark",
  href,
  onClickDelay,
}: BaseButtonProps) {
  const styles = {
    dark: "bg-neutral-950 text-neutral-50",
    light: "bg-neutral-50 text-neutral-950",
  }

  const inner = (
    <button
      onClick={!href ? onClick : undefined}
      className={`${styles[variant]} group relative inline-flex w-fit cursor-pointer items-center gap-2 overflow-hidden border-l-2 border-neutral-950 px-4 py-3 text-sm font-medium uppercase outline transition`}
    >
      <span>{text}</span>

      <div className="relative h-5 w-5 overflow-hidden">
        <div className="absolute transition-all duration-200 group-hover:translate-x-5 group-hover:-translate-y-5">
          <ArrowUpRightIcon className="h-5 w-5" />
          <ArrowUpRightIcon className="h-5 w-5 -translate-x-5" />
        </div>
      </div>
    </button>
  )

  return (
    <LinkHoverCard label={text} icon="arrow-diagonal">
      {href ? (
        <CustomLink href={href} onClick={onClick} onClickDelay={onClickDelay}>
          {inner}
        </CustomLink>
      ) : (
        inner
      )}
    </LinkHoverCard>
  )
}