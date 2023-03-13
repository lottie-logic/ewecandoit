import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import cn from 'classnames';
import styles from './stage-container.module.css';
import styleUtils from './utils.module.css';
import Sidebar from './hms/sidebar';

type Props = {
  data: {
    title: string;
    slug: string;
    image: string;
    description: string;
    mainContent: {
      json: any;
    };
    questions: {
      json: any;
    };
    books: {
      json: any;
    };
    resources: {
      json: any;
    };
  };
};
export default function StageContainer({ data }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.streamContainer}>
        <div className={cn(styles.stream, styleUtils.appear, styleUtils['appear-first'])}>
          <h1> {data.title}</h1>
          {documentToReactComponents(data?.mainContent?.json)}
        </div>
      </div>

      <Sidebar data={data} />
    </div>
  );
}
