import styles from './navBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Context } from 'pages/_app';
import { useContext } from 'react';

type Props = {
  slug: string;
  title: string;
};

export default function NavBar() {
  const topics = useContext(Context);

  const router = useRouter();

  return (
    <>
      <div className={styles.navBarBox}>
        <ul className={styles.navLane}>
          {topics && (
            <>
              {topics?.map((i: Props) => (
                <Link key={i?.slug} href={`/${i?.slug}`}>
                  <h3
                    className={
                      router.asPath.substring(1) == i?.slug ? styles.isCurrent : styles.navLink
                    }
                  >
                    {i?.title}
                  </h3>
                </Link>
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
}
