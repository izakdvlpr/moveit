import { useContext } from 'react';
import UseAnimations from 'react-useanimations';
import arrowUp from 'react-useanimations/lib/arrowUp';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/zevdvlpr.png" alt="Zev" />

      <div>
        <strong>Zev</strong>

        <p>
          <UseAnimations
            animation={arrowUp}
            size={30}
            strokeColor="var(--green)"
          />
          Level {level}
        </p>
      </div>
    </div>
  );
}
