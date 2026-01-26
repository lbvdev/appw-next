"use client";

import { useEffect, useState } from "react";
import gameData from "@/lib/gameExample.json";
import textStyles from "@/ui/styles/baseText.module.sass";
import Skeleton from "@/ui/components/Skeleton";

export default function GamePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-12 pt-32">
      <h1 className={textStyles.h1}>{gameData.info.title}</h1>
      <h2 className={textStyles.h2}>{gameData.info.developer}</h2>
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
      <h2 className={textStyles.h2}>Lorem ipsum dolor sit amet.</h2>
      <p className={textStyles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  );
}
