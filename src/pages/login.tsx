import Head from 'next/head';

import styles from '@styles/pages/Login.module.css';

import { LoginForm } from '@components/LoginForm';

export default function Login() {
  return (
    <div className={styles.loginBody}>
      <div className={styles.loginContainer}>
        <Head>
          <title>Login | Move.it</title>
        </Head>

        <section>
          <div className={styles.loginSymbol}>
            <img src="/logo-linear.svg" alt="Symbol" />
          </div>

          <div>
            <LoginForm />
          </div>
        </section>
      </div>
    </div>
  );
}
