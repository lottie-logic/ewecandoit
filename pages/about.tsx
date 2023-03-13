import { GetStaticProps } from 'next';

import Page from '@components/page';
import JobsGrid from '@components/jobs-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllJobs } from '@lib/cms-api';
import { Data } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';
import Image from 'next/image';

type Props = {
  data: Data[];
};

export default function About({ data }: Props) {
  const meta = {
    title: 'About Lottie',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Header hero="About me" description={meta.description} />

      <div className=" flex  p-8 w-full">
        <Image
          className="rounded-full border-4 border-solid border-cyan-200"
          width={240}
          height={240}
          src="https://avatars.githubusercontent.com/u/89790287?v=4"
          alt="me"
        />
        {/* <p className="w-full ml-12"> Hey! I'm Lottie</p> */}
      </div>
      {/* socials heres */}
      {/* <JobsGrid data={data} /> */}
      {/* <JobsGrid data={gitHubRepos} /> */}
    </Page>
  );
}

// export const getServerSideProps = async () => {
export const getStaticProps = async () => {
  const query = `query {
    roadmapCollection {
      items {
        slug
        title
        image
      }
    }
  }`;

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ query })
    }
  ).then(response => response.json());

  const data = response.data.roadmapCollection.items;

  return {
    props: {
      data: data
    }
    // revalidate: 60
  };
};
