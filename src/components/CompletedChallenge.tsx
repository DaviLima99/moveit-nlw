import { useContext } from "react";
import { ChallengeContext } from "../context/ChallengeContext";
import styles from "../styles/components/CompletedChallenge.module.css";

export function CompletedChallenge() {
  const { challengeCompleted } = useContext(ChallengeContext);

  return(
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{ challengeCompleted }</span>
    </div>
  );
}