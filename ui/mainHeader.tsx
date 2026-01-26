'use client'

import { useState, useEffect, useRef } from "react";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { useMenu } from "@/lib/hooks/useMenu";

import Image from "next/image";
import Icon from "./components/Icon";
import Link from "./components/Link";

import buttonStyles from "@/ui/styles/baseButtons.module.sass";
import baseElements from "@/ui/styles/baseElements.module.sass";
import styles from "./MainHeader.module.sass";

export default function MainHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    useClickOutside(`.${styles.menuWrapper}`, () => setIsMenuOpen(false), isMenuOpen)
    useMenu(menuRef, isMenuOpen, styles.open)

    return (
        <>
        <div className={styles.margin}></div>
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <Link 
                href="/" 
                className={styles.logo}
            >
                <Image src="/images/logo.svg" alt="Appw" width={58} height={31} />
            </Link>
            <nav className={styles.nav}>
                <button className={buttonStyles.defaultRectangleHeader}>
                    <Icon name="plus" />
                </button>
                <Link href="/login" className={buttonStyles.defaultHeader}>
                    <Icon name="user" />
                    Войти
                </Link>
                <div className={styles.menuWrapper}>
                    <button className={buttonStyles.circle} onClick={toggleMenu}>
                        <Icon name="menu" />
                    </button>
                    <div ref={menuRef} className={styles.menu}>
                        <div><Link href="/me" className={buttonStyles.default}>
                            <Icon name="user" />
                            Аккаунт
                        </Link></div>
                        <div><Link href="/graphs" className={buttonStyles.default}>
                            <Icon name="graph" />
                            Graphs
                        </Link></div>
                        <div><Link href="/faq" className={buttonStyles.default}>
                            <Icon name="question" />
                            FAQ и прочее
                        </Link></div>
                        <div><Link href="/faq" className={buttonStyles.default}>
                            <Icon name="bug" />
                            Сообщить об ошибке
                        </Link></div>
                        <hr className={baseElements.hDivider} />
                        <div><Link href="https://github.com/lbvdev/appw" className={buttonStyles.defaultMuted}>
                            Alpha
                            <span className={baseElements.muted}>v0.01</span>
                        </Link></div>
                        <div><Link href="https://lbvo.ru" className={buttonStyles.defaultMuted}>
                            Made by LBV_DEV
                        </Link></div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}