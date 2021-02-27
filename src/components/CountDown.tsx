import { useContext, useEffect, useState } from "react";
import { ChallengeContext } from "../context/ChallengeContext";
import { CountDownContex } from "../context/CountDownContext";
import styles from "../styles/components/CountDown.module.css";

export function CountDown() {
  const { 
    minutes,
    seconds, 
    hasFineshed, 
    active, 
    startCountDown,
    resetCountDown
  } = useContext(CountDownContex);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  return(
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFineshed ? 
        (
          <button disabled  className={`${styles.startCountDownButton} `}> 
            Ciclo encerrado
          </button>
        ) :
          <>
            {
              active ? 
              (
                <button 
                  type="button" 
                  onClick={resetCountDown} 
                  className={`${styles.startCountDownButton}
                  ${styles.startCountDownButtonActive}`}
                  > 
                    Abandonar ciclo
                </button>
              )
              :
              (
                <button 
                  type="button"
                  onClick={startCountDown}
                  className={styles.startCountDownButton}
                  > 
                    Iniciar um ciclo
                </button>
              )
            }
          </>
      }



    </div>
  );
}