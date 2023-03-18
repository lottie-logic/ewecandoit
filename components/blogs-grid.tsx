import { Blog } from '@lib/types';
import styles from './blogs-grid.module.css';

type Props = {
  data: Blog[];
};

export default function BlogsGrid({ data }: Props) {
  return (
    <>
      <div className={styles.companyRow}>
        <div className={styles.rowHeader}>
          <div className={styles.grid}>
            {data.map(topic => (
              <a
                key={topic.slug}
                className={styles.card}
                // href={topic.link}
                href={`/blog/${topic.slug}`}
                rel="noopener noreferrer"
              >
                <div className={styles.cardBody}>
                  <div>
                    <h2 className={styles.title}>{topic.heading}</h2>
                    <p className={styles.description}>{topic.preview}</p>
                  </div>
                  <p className={styles.link}>
                    Read More
                    <svg
                      className={styles.icon}
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      shapeRendering="geometricPrecision"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14L21 3" />
                    </svg>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
