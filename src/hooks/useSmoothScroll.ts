'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useSmoothScroll() {
  const router = useRouter()

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash && target.origin === window.location.origin) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          })
          // Update the URL without a page reload
          router.push(target.hash, { scroll: false })
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [router])
}