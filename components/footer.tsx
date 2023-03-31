import cn from 'classnames';
import styles from './footer.module.css';
import { SITE_NAME } from '@lib/constants';

export function HostedByVercel() {
  return (
    <a
      href="https://vercel.com"
      className={cn(styles['footer-link'], styles['footer-logo'])}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles['secondary-text']}>Created by </div>
      {/* <VercelLogo color="white" /> */}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className={cn(styles.footer)}>
      <div className={styles['footer-legal']}>
        <div className={styles['footer-hostedby']}>
          <HostedByVercel />
          <div className={styles['footer-separator']} />
        </div>
        <div className={styles['footer-copyright']}>
          Copyright © {`${new Date().getFullYear()} `} || `${SITE_NAME}. All rights reserved.
        </div>
        <div className={styles['footer-center-group']}>
          <p className={styles['footer-paragraph']}>
            <a href="/" className={styles['footer-link']} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </p>
          <div className={styles['footer-separator']} />
          <p className={styles['footer-paragraph']}>
            <a href="/" className={styles['footer-link']} target="_blank" rel="noopener noreferrer">
              Code of Conduct
            </a>
          </p>

          <>
            <div className={styles['footer-separator']} />
            <p className={styles['footer-paragraph']}>
              <a
                href="/"
                className={styles['footer-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                Legal
              </a>
            </p>
          </>
        </div>
      </div>
    </footer>
  );
}
