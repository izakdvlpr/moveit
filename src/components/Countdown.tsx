import { useContext } from 'react';
import Head from 'next/head';
import UseAnimations from 'react-useanimations';

import radioButton from 'react-useanimations/lib/radioButton';
import * as Icons from 'react-icons/io';

import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    hasFinished,
    isActive,
    minutes,
    seconds,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
