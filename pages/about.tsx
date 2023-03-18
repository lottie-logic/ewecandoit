import Page from '@components/page';
import Header from '@components/header';
import ProjectGrid from '@components/project-grid';
import TopicGrid from '@components/topic-grid';
import IconGithub from '@components/icons/icon-github';
import IconLinkedin from '@components/icons/icon-linkedin';
import { META_DESCRIPTION } from '@lib/constants';
import Image from 'next/image';
import { useContext } from 'react';
import { Context } from './_app';

export default function About({ data }: any) {
  const topics = useContext(Context);
  const meta = {
    title: 'About Lottie',
    description: META_DESCRIPTION,
    projects: 'Some of the coding projects I have worked on',
    topicsDescription: 'The topics I am studying'
  };
  return (
    <Page meta={meta} fullViewport>
      <Header hero="About me" description={meta.description} />
      <div className=" flex items-center justify-center p-8 w-full">
        <IconGithub color={'white'} size={80} />
        <Image
          className="rounded-full border-4 border-solid border-cyan-200"
          width={240}
          height={240}
          src="https://avatars.githubusercontent.com/u/89790287?v=4"
          alt="me"
        />
        <IconLinkedin width={70} />
      </div>
      <Header hero="Topics I know" description={meta.topicsDescription} />
      <TopicGrid projects={topics} />
      <Header hero="My Projects" description={meta.projects} />
      <ProjectGrid projects={data} />
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
