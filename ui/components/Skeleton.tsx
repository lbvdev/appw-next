import { Children, type ReactNode } from "react";
import styles from "./Skeleton.module.sass";

function buildSkeletonWords(length: number) {
    let remaining = Math.max(0, Math.floor(length));
    const words: number[] = [];
    const pattern = [5, 1, 8, 3, 6, 2, 4];
    let i = 0;
  
    while (remaining > 0) {
      let wordLen = Math.min(pattern[i % pattern.length], remaining);
      if (wordLen === 1 && words[words.length - 1] === 1 && remaining > 1) {
        wordLen = 2;
      }
      words.push(wordLen);
      remaining -= wordLen;
      i += 1;
    }
  
    return words;
  }
  
type SkeletonProps = {
  length?: number;
  loading?: boolean;
  children?: ReactNode;
};

export default function Skeleton({
  length = 10,
  loading,
  children,
}: SkeletonProps) {
  const words = buildSkeletonWords(length);
  const hasChildren = Children.count(children) > 0;
  const isLoading = loading ?? !hasChildren;

  return (
    <span className={`${styles.root} ${isLoading ? styles.loading : styles.loaded}`}>
      <span className={styles.skeletonOverlay} aria-hidden={!isLoading}>
        <span className={styles.skeleton}>
          {words.map((len, i) => (
            <span
              key={i}
              className={styles.skeletonWord}
              style={{ width: `${len}ch` }}
            />
          ))}
        </span>
      </span>
      {hasChildren && <span className={styles.content}>{children}</span>}
    </span>
  );
}