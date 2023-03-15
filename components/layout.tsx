import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';
import { NAVIGATION } from '@lib/constants';
import styles from './layout.module.css';
import MobileMenu from './mobile-menu';
import React from 'react';
import NavBar from './navBar';

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
  isLive?: boolean;
};

export default function Layout({ children, className, hideNav, layoutStyles }: Props) {
  const router = useRouter();
  const activeRoute = router.asPath;

  return (
    <>
      <div className={styles.background}>
        {!hideNav && (
          <header className={cn(styles.header)}>
            <div className={styles['header-logos']}>
              <MobileMenu key={router.asPath} />
              <Link href="/">
                <a className={styles.logo}>
                  <>
                    <Image
                      className={styles.logoGif}
                      height={50}
                      width={50}
                      alt="sheep"
                      src="/logo.gif"
                    />

                    {/* eslint-disable-next-line */}
                    <p className={styles.logoText}>ewecandoit</p>
                  </>
                </a>
              </Link>
            </div>

            <div className={styles.tabs}>
              {NAVIGATION.map(({ name, route }) => (
                <a
                  key={name}
                  href={route}
                  className={cn(styles.tab, {
                    [styles['tab-active']]: activeRoute.startsWith(route)
                  })}
                >
                  {name}
                </a>
              ))}
            </div>

            <div />
          </header>
        )}
        <NavBar />
        <div className={styles.page}>
          <main className={styles.main} style={layoutStyles}>
            <SkipNavContent />
            <div className={cn(styles.full, className)}>{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
