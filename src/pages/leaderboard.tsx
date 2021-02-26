import Head from 'next/head';

import { UserCard } from '../components/UserCard';

import styles from '../styles/pages/Leaderboard.module.css';

export default function Leaderboard() {
  return (
    <div className={styles.leaderBoardContainer}>
      <Head>
        <title>Leaderboard | Move.it</title>
      </Head>

      <section>
        <h1>Leaderboard</h1>

        <header>
          <strong style={{ width: '15%' }}>Posição</strong>
          <strong style={{ width: '45%' }}>Usuário</strong>
          <strong style={{ width: '20%' }}>Desafios</strong>
          <strong style={{ width: '20%' }}>Experiência</strong>
        </header>
        
        {Array.from(Array(15).keys()).map((_, i) => (
          <UserCard
            key={i}
            position={i + 1}
            avatar_url="https://github.com/zevdvlpr.png"
            username="Zev"
            level={15}
            challengesCompleted={30}
            currentExperience={15503}
          />
        ))}
      </section>
    </div>
  );
}
