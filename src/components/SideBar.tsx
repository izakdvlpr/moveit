import Link from 'next/link';

import { useRouter } from 'next/router';

import { BiHome, BiMedal, BiLogOut } from 'react-icons/bi';

import styles from '@styles/components/SideBar.module.css';

export function SideBar() {
  const router = useRouter();

  const isActive = (validPath: string) => {
    return router.pathname == validPath
      ? styles.sideBarActive
      : styles.sideBarNotActive;
  };

  return (
    <div className={styles.sideBarContainer}>
      <Link href="/">
        <img src="/logo.svg" alt="Logo" />
      </Link>

      <ul>
        <li className={isActive('/')}>
          <Link href="/">
            <BiHome />
          </Link>
        </li>
        <li className={isActive('/leaderboard')}>
          <Link href="/leaderboard">
            <BiMedal />
          </Link>
        </li>
      </ul>

      <Link href="/logout">
        <BiLogOut />
      </Link>
    </div>
  );
}
