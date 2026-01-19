'use client'

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

import { useClickOutside } from "@/lib/hooks/useClickOutside";
import buttonStyles from "@/ui/styles/baseButtons.module.sass";
import baseElements from "@/ui/styles/baseElements.module.sass";
import styles from "./mainHeader.module.sass";

export default function MainHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    useClickOutside(`.${styles.menuWrapper}`, () => setIsMenuOpen(false), isMenuOpen)

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <Link href="/" className={styles.logo}>
                <Image src="/images/logo.svg" alt="Appw" width={100} height={100} />
            </Link>
            <div className="flex gap-1 items-center">
                <button className={buttonStyles.buttonDefaultRectangleHeader}>
                    <Icon name="plus" />
                </button>
                <a href="/login" className={buttonStyles.buttonDefaultHeader}>
                    <Icon name="user" />
                    Войти
                </a>
                <div className={styles.menuWrapper}>
                    <button className={buttonStyles.buttonCircle} onClick={toggleMenu}>
                        <Icon name="menu" />
                    </button>
                    <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                        <div><a href="/account" className={buttonStyles.buttonDefault}>
                            <Icon name="user" />
                            Аккаунт
                        </a></div>
                        <div><a href="/graphs" className={buttonStyles.buttonDefault}>
                            Graphs
                        </a></div>
                        <div><a href="/faq" className={buttonStyles.buttonDefault}>
                            FAQ и прочее
                        </a></div>
                        <div><a href="/faq" className={buttonStyles.buttonDefault}>
                            Сообщить об ошибке
                        </a></div>
                        <hr className={baseElements.hDivider} />
                        <div><a href="https://github.com/lbvdev/appw" className={buttonStyles.buttonDefaultMuted}>
                            Alpha
                            <span className={baseElements.muted}>v0.01</span>
                        </a></div>
                        <div><a href="https://lbvo.ru" className={buttonStyles.buttonDefaultMuted}>
                            Made by LBV_DEV
                        </a></div>
                    </div>
                </div>
            </div>
        </header>
    )
}