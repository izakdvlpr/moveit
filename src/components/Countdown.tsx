import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import UseAnimations from 'react-useanimations';

import radioButton from 'react-useanimations/lib/radioButton';
import * as Icons from 'react-icons/io';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;  

  const minutesParsed = String(minutes).padStart(2, '0').split('');
  const secondsParsed = String(seconds).padStart(2, '0').split('');

  const [minuteLeft, minuteRight] = minutesParsed;
  const [secondLeft, secondRight] = secondsParsed;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <Head>
        {isActive && (
          <title>
            ({minuteLeft + minuteRight}:{secondLeft + secondRight}) | Move.it
          </title>
        )}
      </Head>

      <div className={styles.countdownContainer}>
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

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <UseAnimations
            animation={radioButton}
            autoplay
            size={36}
            strokeColor="var(--green)"
          />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo <Icons.IoMdClose size={25} />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo <Icons.IoMdPlay size={16} />
            </button>
          )}
        </>
      )}
    </div>
  );
}
