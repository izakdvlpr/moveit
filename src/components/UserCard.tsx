import UseAnimations from 'react-useanimations';
import arrowUp from 'react-useanimations/lib/arrowUp';

import styles from '@styles/components/UserCard.module.css';

interface User {
  position: number;
  avatar_url: string;
  username: string;
  level: number;
  challengesCompleted: number;
  currentExperience: number;
}

export function UserCard({
  position,
  avatar_url,
  username,
  level,
  challengesCompleted,
  currentExperience,
}: User) {
  return (
    <div className={styles.userCardContainer}>
      <div className={styles.userCardPosition}>{position}</div>

      <div className={styles.userCardStatistics}>
        <div className={styles.userCardInformation}>
          <img src={avatar_url} alt="Avatar" />

          <div>
            <strong>{username}</strong>

            <div>
              <UseAnimations
                animation={arrowUp}
                size={30}
                strokeColor="var(--green)"
              />

              <p>Level {level}</p>
            </div>
          </div>
        </div>

        <div className={styles.userCardChallenges}>
          <span>{challengesCompleted}</span> completados
        </div>

        <div className={styles.userCardExperience}>
          <span>{currentExperience}</span> xp
        </div>
      </div>
    </div>
  );
}
