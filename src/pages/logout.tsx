import { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [])

  return <></>;
}
