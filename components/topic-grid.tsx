import Link from 'next/link';
import Image from 'next/image';
import styles from './project-grid.module.css';

type Props = {
  slug: string;
  name: string;
  image: string;
  title: string;
};
export default function TopicGrid({ projects }: any) {
  return (
    <div className={styles.topicGrid}>
      {projects.map((p: Props) => (
        <Link key={p.slug} href={`/${p.slug}`}>
          <a role="button" tabIndex={0} className={styles.topicCard}>
            <div className={styles.topicImageWrapper}>
              <Image
                alt={p.title}
                src={p.image}
                className={styles.topicImage}
                loading="lazy"
                quality="50"
                title={p.title}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.cardBody}>
              <div>
                <h2 className={styles.topicName}>{p.title}</h2>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
