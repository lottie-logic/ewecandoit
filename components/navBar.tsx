import styles from './navBar.module.css';
import Link from 'next/link';
import { Data } from '@lib/types';
import { useRouter } from 'next/router';
type Props = {
  data: Data[];
};

export default function NavBar() {
  const router = useRouter();
  const data = [
    { title: 'Javascript', slug: 'javascript' },
    { title: 'React', slug: 'react' },
    { title: 'NextJS', slug: 'next-js' },
    { title: 'Typescript', slug: 'typescript' },
    { title: 'APIs', slug: 'api' },
    { title: 'GraphQL', slug: 'graphql' },
    { title: 'BASH', slug: 'bash' },
    { title: 'Node.JS', slug: 'node-js' },
    { title: 'SQL', slug: 'sql' },
    { title: 'noSQL', slug: 'nosql' },
    { title: 'Dev Ops', slug: 'dev-ops' },
    { title: 'Cloud Serverless', slug: 'cloud' },
    { title: 'AWS', slug: 'aws' },
    { title: 'Architecture', slug: 'software-architect' },
    { title: 'UI / UX', slug: 'ui-ux' },
    { title: 'Cyber Security', slug: 'cybersecurity' },
    { title: 'Computer Science', slug: 'computer-science' },
    { title: 'Git', slug: 'git' },
    { title: 'Programming Principles', slug: 'programming-principles' },
    { title: 'HTML5', slug: 'html5' },
    { title: 'CSS / SCSS', slug: 'css-scss' }
  ];
  // let isCurrent = router

  let pathName = router.asPath.substring(1);

  console.log('pathName === ${i.slug} ', pathName === 'react');

  const completedClass = router.asPath.substring(1) == 'react' ? styles.isCurrent : styles.navLink;

  return (
    <>
      <div className={styles.navBarBox}>
        <ul className={styles.navLane}>
          {data?.map(i => (
            <Link key={i.slug} href={`/${i.slug}`}>
              <h3
                className={router.asPath.substring(1) == i.slug ? styles.isCurrent : styles.navLink}
              >
                {i.title}
              </h3>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
