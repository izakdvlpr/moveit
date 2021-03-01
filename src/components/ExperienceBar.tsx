import { useContext } from 'react';

import { ChallengesContext } from '@contexts/ChallengesContext';

import styles from '@styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  const precentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel,
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${precentToNextLevel}%` }} />

        {currentExperience > 0 && (
          <span
            className={styles.currentExperience}
            style={{ left: `${precentToNextLevel}%` }}
          >
            {currentExperience} xp
          </span>
        )}
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
