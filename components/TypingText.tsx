"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  text: string
  speed?: number // ms per character
  className?: string
}

export function TypingText({ text, speed = 60, className = "" }: TypingTextProps) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    setDisplayed("")
    let i = 0
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i])
      i++
      if (i >= text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return <span className={className}>{displayed}<span className="animate-pulse">|</span></span>
} 