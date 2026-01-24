import { useEffect, RefObject } from 'react'

export function useMenu<T extends HTMLElement>(
    ref: RefObject<T | null>,
    isOpen: boolean,
    openClass: string
) {
    useEffect(() => {
        if (!ref.current) return
        if (isOpen) {
            ref.current.classList.add(openClass)
            ref.current.removeAttribute('inert')
        } else {
            ref.current.classList.remove(openClass)
            ref.current.setAttribute('inert', '')
        }
    }, [ref, isOpen, openClass])
}
