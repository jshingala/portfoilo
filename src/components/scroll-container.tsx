'use client'

import { createContext, useContext, useRef, type RefObject } from 'react'

// Provides the scroll container ref to any child that needs it for useScroll hooks.
// Keeping window.scrollY = 0 prevents Spline's built-in scroll animation from firing.
const ScrollCtx = createContext<RefObject<HTMLDivElement | null>>({ current: null })

export function ScrollContainer({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <ScrollCtx.Provider value={ref}>
      <div
        ref={ref}
        id="page-scroll"
        style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}
      >
        {children}
      </div>
    </ScrollCtx.Provider>
  )
}

export function useScrollRef() {
  return useContext(ScrollCtx)
}
