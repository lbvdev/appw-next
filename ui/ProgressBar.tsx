'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import styles from "./ProgressBar.module.sass";

export default function ProgressBar() {
    const pathname = usePathname()
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const link = target.closest('a[href]')
            if (link && link.getAttribute('href')?.startsWith('/')) {
                setIsVisible(true)
                setProgress(0)
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setProgress(70)
                    })
                })
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    useEffect(() => {
        if (isVisible) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setProgress(100)
                })
            })
            const timer = setTimeout(() => setIsVisible(false), 400)
            return () => clearTimeout(timer)
        }
    }, [pathname, isVisible])

    return (
        <div className={`${styles.progressBar} ${isVisible ? styles.visible : ''}`}>
            <div
                className={styles.progressBarFill}
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
