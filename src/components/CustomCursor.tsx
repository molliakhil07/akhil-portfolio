import { useEffect, useRef, useState } from "react"

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const ringRef = useRef<HTMLDivElement>(null)

  const mousePosition = useRef({
    x: 0,
    y: 0,
  })

  const ringPosition = useRef({
    x: 0,
    y: 0,
  })

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      }

      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const animateRing = () => {
      const current = ringPosition.current
      const target = mousePosition.current

      current.x += (target.x - current.x) * 0.08
      current.y += (target.y - current.y) * 0.08

      if (ringRef.current) {
        ringRef.current.style.left = `${current.x}px`
        ringRef.current.style.top = `${current.y}px`
      }

      requestAnimationFrame(animateRing)
    }

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseover", handleMouseOver)

    const animation = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseover", handleMouseOver)
      cancelAnimationFrame(animation)
    }
  }, [])

  return (
    <>
      <div
        className={`custom-cursor-dot ${
          isHovering ? "cursor-hover" : ""
        }`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <div
        ref={ringRef}
        className={`custom-cursor-ring ${
          isHovering ? "cursor-hover" : ""
        }`}
      />
    </>
  )
}

export default CustomCursor