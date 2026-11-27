import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<"div"> {
  speed?: number
  colorFrom?: string
  colorTo?: string
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  ...props
}: AnimatedGradientTextProps) {
  // Tailwind v3 adaptation of the Magic UI component: the gradient is applied
  // with inline styles (the vendored v4 classes bg-linear-to-r / from-(...) do
  // not exist in Tailwind v3). The `animate-gradient` keyframes live in
  // app/globals.css and tailwind.config.js.
  const bgSize = `${speed * 300}%`
  return (
    <span
      style={
        {
          backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo}, ${colorFrom})`,
          backgroundSize: `${bgSize} 100%`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        } as React.CSSProperties
      }
      className={cn(`animate-gradient inline`, className)}
      {...props}
    >
      {children}
    </span>
  )
}
