import Image from "next/image";
import Input from "@/ui/components/Input"

import textStyles from "@/ui/styles/baseText.module.sass";
import buttonStyles from "@/ui/styles/baseButtons.module.sass";
import styles from "@/ui/LoginPage.module.sass";

export function LoginSection() {
    return (
        <section className={styles.section}>
            <div className="flex flex-col gap-4">
                <h1 className={textStyles.h1Accent}>Добро пожаловать</h1>
                <p className={textStyles.pSmall}>Создайте или войдите в аккаунт чтобы добавлять свои игры, комментировать и оставлять отзывы!</p>
            </div>
            <div className="flex flex-col gap-4">
                <Input
                name="email"
                label="Емейл"
                placeholder="yourmail@mail.com"
                type="email"></Input>
                <Input
                name="username"
                label="Имя пользователя"
                placeholder="username"
                type="email"></Input>   
                <Input
                name="password"
                label="Придумайте пароль"
                placeholder="securepassword"
                type="password"></Input>
            </div>
            <button className={buttonStyles.fluffy}>
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