import Page from '@components/page';
import styles from '../../components/roadmap-container.module.css';

// import ProjectGrid from '@components/project-grid';
// import TopicGrid from '@components/topic-grid';

import { META_DESCRIPTION } from '@lib/constants';
import ProjectSidebar from '@components/hms/sidebar/project-sidebar';
import AboutMe from './about';

export default function About({ data }: any) {
  const meta = {
    title: 'About Lottie',
    description: META_DESCRIPTION,
    projects: 'Some of the coding projects I have worked on',
    topicsDescription: 'The topics I am studying'
  };
  return (
    <Page meta={meta} fullViewport>
      <div className={styles.container}>
        <div className={styles.streamContainer}>
          <AboutMe />
        </div>
        <ProjectSidebar data={data} />
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const RESPONSE = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      query: `{ user(login:"lott-e"){
        repositories (first:25){
          totalCount
          edges {
            node {
              ... on Repository {
                id
                name
                url
              }
            }
        }
        }
      }}`
    })
  }).then(RESPONSE => RESPONSE.json());
  const data = RESPONSE?.data?.user?.repositories?.edges;
  return { props: { data: data } };
}
