import { useState, useRef, useEffect } from 'react'

export default function Hamburger() {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const navMenuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpened(!isOpened)
  }

  useEffect(() => {
    const handleCloseNav = (event: MouseEvent) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false)
      }
    }

    document.addEventListener('mousedown', handleCloseNav)
    return () => {
      document.removeEventListener('mousedown', handleCloseNav)
    }
  }, [])

  return (
    <div className="md:hidden text-display">
      <button
        onClick={toggleMenu}
        id="hamburger"
        className="focus:outline-none"
      >
        &#9776;
      </button>
      {isOpened && (
        <div
          className="isolation absolute inset-0 bg-black bg-opacity-50 w-fit ml-auto rounded-l-3xl rounded-bl-3xl"
          ref={navMenuRef}
        >
          <ul className="flex flex-col gap-16 text-display w-full items-end h-full bg-opacity-20 justify-center text-3xl px-16">
            <li className="hover:-translate-y-[0.1rem] transition-transform">
              <a href="/tech">Tech</a>
            </li>
            <li className="hover:-translate-y-[0.1rem] transition-transform">
              <a href="/life">Life</a>
            </li>
            <li className="hover:-translate-y-[0.1rem] transition-transform">
              <a href="/about">About</a>
            </li>
            <li className="text-subtitle">
              <a href="/portfolio">Portfolio</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
