import Image from "next/image";

import textStyles from "@/ui/styles/baseText.module.sass";
import buttonStyles from "@/ui/styles/baseButtons.module.sass";
import styles from "@/ui/loginPage.module.sass";

export function LoginSection() {
    return (
        <section className={styles.section}>
            <h1 className={textStyles.h1Accent}>Добро пожаловать</h1>
            <button className={buttonStyles.buttonFluffy}>
                Войти
            </button>
        </section>
    )
}

export function LoginBanner() {
    return (
        <div className={styles.banner}>
            <Image
            className={styles.image}
            src="/images/hero.svg"
            alt="Динозавр и машинка"
            width={480}
            height={314}
            />
            <h1 className={textStyles.h1}>
                <span className={textStyles.h1Accent}>appw -</span> это про <span className={textStyles.h1Accent}>ваши</span> игры и приложениями
            </h1>
        </div>
    )
}