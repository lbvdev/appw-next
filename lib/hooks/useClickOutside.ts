import { useEffect } from 'react'

export function useClickOutside(
    selector: string,
    callback: () => void,
    isActive: boolean
) {
    useEffect(() => {
        if (!isActive) return

        let mouseDownInElement = false

        const handleMouseDown = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            mouseDownInElement = !!target.closest(selector)
        }

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (!target.closest(selector) && !mouseDownInElement) {
                callback()
            }
            mouseDownInElement = false
        }

        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('click', handleClickOutside)
        }
    }, [selector, callback, isActive])
}
