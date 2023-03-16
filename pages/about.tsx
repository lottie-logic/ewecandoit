import Page from '@components/page';

import Header from '@components/header';

import { META_DESCRIPTION } from '@lib/constants';
import Image from 'next/image';
import ProjectGrid from '@components/project-grid';
import { useContext } from 'react';
import { Context } from './_app';
import TopicGrid from '@components/topic-grid';
import IconGithub from '@components/icons/icon-github';
import IconLinkedin from '@components/icons/icon-linkedin';

export default function About({ data }: any) {
  const meta = {
    title: 'About Lottie',
    description: META_DESCRIPTION,
    projects: 'Some of the coding projects I have worked on',
    topicsDescription: 'The topics I am studying'
  };

  const topics = useContext(Context);

  return (
    <Page meta={meta} fullViewport>
      <Header hero="About me" description={meta.description} />

      <div className=" flex items-center justify-center p-8 w-full">
        <a
          href="https://github.com/lott-e"
          style={{
            display: 'flex',
            width: 'full',

            fontSize: '18px',
            alignItems: 'center',
            justifyItems: 'flex-end'
          }}
        >
          <IconGithub color={'white'} size={80} />
        </a>
        <Image
          className="rounded-full border-4 border-solid border-cyan-200"
          width={240}
          height={240}
          src="https://avatars.githubusercontent.com/u/89790287?v=4"
          alt="me"
        />

        <a
          href="https://www.linkedin.com/in/charlotte-wheeler-4962a5264/"
          style={{
            display: 'flex',
            width: 'full',

            fontSize: '18px',
            alignItems: 'center',
            justifyItems: 'flex-end'
          }}
        >
          <IconLinkedin width={70} />
        </a>
      </div>
      <Header hero="Topics I know" description={meta.topicsDescription} />
      <TopicGrid projects={topics} />
      <Header hero="My Projects" description={meta.projects} />
      <ProjectGrid projects={data} />
    </Page>
  );
}

// type GithubResponse = {
//   data?: { node: { cards: { nodes: { note: string }[] } } };
// };

export async function getStaticProps() {
  const response = await fetch('https://api.github.com/graphql', {
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
  }).then(res => res.json());

  const data = response?.data?.user?.repositories?.edges;
  console.log('data', data);

  return { props: { data: data } };
}
