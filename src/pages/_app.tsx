import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/global.css';

export default function App({ Component, pageProps }) {  
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}
