import { useRouter } from 'next/router';

import { FaGithub, FaArrowRight } from 'react-icons/fa';

import styles from '../styles/components/LoginForm.module.css';

export function LoginForm() {
  const router = useRouter();   

  function handleRedirectToUser() {
    router.push('/')
  }

  return (
    <div className={styles.loginFormContainer}>
      <img src="/logo-full.svg" alt="Logo" />

      <header>
        <span>Bem-vindo</span>
        <p>
          <FaGithub size={50} />
          Faça login no seu Github para começar
        </p>
      </header>

      <div className={styles.loginFormInput}>
        <input type="text" placeholder="Digite seu username" />

        <button type="submit" onClick={handleRedirectToUser}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
