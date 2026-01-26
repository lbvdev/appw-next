"use client";

import { useEffect, useState } from "react";
import gameData from "@/lib/gameExample.json";
import type { GameData } from "@/lib/types/game";

const game = gameData as GameData;
import Skeleton from "@/ui/components/Skeleton";

import textStyles from "@/ui/styles/baseText.module.sass";
import buttonStyles from "@/ui/styles/baseButtons.module.sass";
import divStyles from "@/ui/styles/baseDivs.module.sass";
import styles from "./GameCard.module.sass";

function InfoItem({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <>
            <div className={styles.item}>
                <p className={textStyles.pSmall}>{label}</p>
                <h2 className={textStyles.h2}>{value}</h2>
            </div>
            <hr />
        </>
    );
}

export default function GameCard() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.gameCard}>
            <div className={styles.wrapper}>
                <div className={styles.hero}>
                    <div>
                        <h1 className={textStyles.h1}>Image</h1>
                    </div>
                    <div className={styles.heroNav}>
                        <h1 className={textStyles.h1}>{game.info.title}</h1>
                        <div>
                            <button className={buttonStyles.big}>Copy</button>
                            <button className={buttonStyles.big}>Скачать</button>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <InfoItem label="Платформы" value={<><b>{game.info.platforms}</b></>} />
                    <InfoItem label="Вес игры" value={<><b>256</b> MB</>} />
                </div>
            </div>
            <div className={styles.wrapperPadded}>
                <h2 className={textStyles.h2}>
                    <Skeleton loading={!loaded} length={25}>
                        Lorem ipsum dolor sit amet.
                    </Skeleton>
                </h2>
                <p className={textStyles.p}>
                    <Skeleton loading={!loaded} length={80}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Skeleton>
                </p>
            </div>
        </div>
    )
}