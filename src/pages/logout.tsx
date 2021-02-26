import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  router.push('/login');

  return <></>;
}
