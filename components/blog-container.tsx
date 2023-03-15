import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './stage-container.module.css';

type Props = {
  data: {
    heading: string;
    slug: string;
    main: {
      json: any;
    };
  };
};
export default function BlogContainer({ data }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.blogContainer}>
        <a href="/blog">Go Back</a>
        <div className={styles.blogMain}>
          <h1> {data?.heading}</h1>
          {documentToReactComponents(data?.main?.json)}
        </div>
      </div>
    </div>
  );
}
