// components/BottomTab.js
import Link from 'next/link';
import styles from './BottomTab.module.css';
import { useRouter } from 'next/router';

const BottomTab = () => {
  const router = useRouter();
  return (
    <div className={styles.bottomTab}>
      <Link href="/kenkoTV" legacyBehavior>
        <a className={`${styles.tabItem} ${router.pathname === '/kenkoTV' ? styles.active : ''}`}>
          健幸TV
        </a>
      </Link>
      <Link href="/shinshinResult" legacyBehavior>
        <a className={`${styles.tabItem} ${router.pathname === '/shinshinResult' ? styles.active : ''}`}>
          心身測定結果画面
        </a>
      </Link>
      <Link href="/survey" legacyBehavior>
        <a className={`${styles.tabItem} ${router.pathname === '/survey' ? styles.active : ''}`}>
          アンケートに回答
        </a>
      </Link>
    </div>
  );
};

export default BottomTab;
