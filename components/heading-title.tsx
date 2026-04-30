interface HeadingTitleProps {
  children: React.ReactNode
  className?: string
}

export default function HeadingTitle({ children, className }: HeadingTitleProps) {
  return (
    <h2 className={`w-full max-w-lg text-3xl md:text-4xl leading-8 font-normal uppercase ${className || ''}`}>
      {children}
    </h2>
  )
}
