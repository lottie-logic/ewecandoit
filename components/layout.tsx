import Image from 'next/image';

import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';
import { NAVIGATION } from '@lib/constants';
import styles from './layout.module.css';
// import Logo from './icons/icon-logo';
import MobileMenu from './mobile-menu';
// import Footer from './footer';
import React from 'react';
import Button from './button';
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
  // const disableCta = ['/schedule', '/speakers', '/expo', '/jobs'];
  return (
    <>
      <div className={styles.background}>
        {!hideNav && (
          <header className={cn(styles.header)}>
            <div className={styles['header-logos']}>
              <MobileMenu key={router.asPath} />
              <Link href="/">
                {/* eslint-disable-next-line */}
                <a className={styles.logo}>
                  <Image
                    className={styles.logoGif}
                    height={50}
                    width={50}
                    alt="sheep"
                    src="/logo.gif"
                  />
                  <p className={styles.logoText}>ewecandoit</p>
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

            <div className={cn(styles['header-right'])}>
              <Button />
            </div>
          </header>
        )}
        <NavBar />
        <div className={styles.page}>
          <main className={styles.main} style={layoutStyles}>
            <SkipNavContent />
            <div className={cn(styles.full, className)}>{children}</div>
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
