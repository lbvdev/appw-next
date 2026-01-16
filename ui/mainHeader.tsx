'use client'

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import Icon from "./icon";

import buttonStyles from "@/ui/styles/baseButtons.module.sass";
import styles from "./mainHeader.module.sass";

export default function MainHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <Link href="/" className={styles.logo}>
                <Image src="/images/logo.svg" alt="Appw" width={100} height={100} />
            </Link>
            <div className="flex gap-1 items-center">
                <button className={buttonStyles.buttonDefaultRectangleHeader}>
                    <Icon name="plus" />
                </button>
                <button className={buttonStyles.buttonDefaultHeader}>
                    <Icon name="user" />
                    Войти
                </button>
                <button className={buttonStyles.buttonCircle}>
                    <Icon name="menu" />
                </button>
            </div>
        </header>
    )
}