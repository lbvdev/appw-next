import Image from "next/image";
import Icon from "./Icon";

import textStyles from "@/ui/styles/baseText.module.sass";
import buttonStyles from "@/ui/styles/baseButtons.module.sass";
import styles from "./sectionHero.module.sass";

export default function SectionHero() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src="/images/hero.svg"
          alt="Динозавр и машинка"
          width={480}
          height={314}
        />
      </div>
      <h1 className={textStyles.h1Center}>
        <span className={textStyles.h1Accent}>appw -</span> это про обмен{" "}
        <span className={textStyles.h1Accent}>вашими</span>
        <br />
        играми и приложениями
      </h1>
      <p className={textStyles.pSmallCenter}>
        Наш сервис абсолютно бесплатен, вы можете поддержать нас донатом,
        а также выставить свое приложение на продажу, комиссия равна 10%
      </p>
      <div className="flex gap-2">
        <button className={buttonStyles.buttonFluffy}>
          <Icon name="search" type="black" />
          Искать
        </button>
        <a href="/login" className={buttonStyles.buttonFluffyOutline}>
          Войти или создать аккаунт
        </a>
      </div>
    </section>
  );
}
