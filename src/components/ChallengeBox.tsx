
import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import { CountDownContex } from '../context/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountDown } = useContext(CountDownContex);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return(
    <div className={styles.challengBoxContainer}>

      {activeChallenge ?
        (
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt=""/>

              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <button 
                type="button" 
                className={styles.buttonFailed} 
                onClick={handleChallengeFailed}
              >
                Falhei
              </button>
              <button 
                type="button" 
                className={styles.buttonSucceeded} 
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
          </div>
        )
        :
        (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt=""/>
              Avance de level completando desafios
            </p>
          </div>
        )
      }
    </div>
  );
}