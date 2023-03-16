import Link from 'next/link';
// // import Image from 'next/image';
// import { Speaker } from '@lib/types';
import styles from './project-grid.module.css';

type Props = {
  node: { slug: string; name: string; title: string };
};

export default function ProjectGrid({ projects }: any) {
  return (
    <div className={styles.grid}>
      {projects.map((p: Props) => (
        <Link key={p.node.name} href={`/projects/${p.node.name}`}>
          <a role="button" tabIndex={0} className={styles.card}>
            <div className={styles.imageWrapper}>
              {/* <Image
                alt={speaker.name}
                src={speaker.image.url}
                className={styles.image}
                loading="lazy"
                quality="50"
                title={speaker.name}
                placeholder={speaker.image.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={speaker.image.blurDataURL}
                width={300}
                height={300}
              /> */}
            </div>
            <div className={styles.cardBody}>
              <div>
                <h2 className={styles.name}>{p.node.name}</h2>
                <p className={styles.title}>
                  {/* {`${p.name} @ `} */}
                  {/* <span className={styles.company}>{p.company}</span> */}
                </p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
