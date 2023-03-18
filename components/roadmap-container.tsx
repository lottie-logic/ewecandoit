import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import cn from 'classnames';
import styles from './roadmap-container.module.css';
import styleUtils from './utils.module.css';
import Sidebar from './hms/sidebar';
import { Data } from '@lib/types';

type Props = {
  data: Data;
};
export default function RoadmapContainer({ data }: Props) {
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
