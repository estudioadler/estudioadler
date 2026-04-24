interface HeadingTitleProps {
  children: React.ReactNode
}

export default function HeadingTitle({ children }: HeadingTitleProps) {
  return (
    <h2 className="w-full max-w-lg text-3xl md:text-4xl leading-8 font-normal uppercase">
      {children}
    </h2>
  )
}
