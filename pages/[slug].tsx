import Page from '@components/page';
import RoadmapContainer from '@components/roadmap-container';
import { META_DESCRIPTION } from '@lib/constants';

export async function getStaticPaths() {
  const QUERY = `query {
    roadmapCollection {
    items {
      slug
    }
  }
}`;

  const RESPONSE = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ query: QUERY })
    }
  ).then(RESPONSE => RESPONSE.json());
  const slugs = RESPONSE.data.roadmapCollection.items.map(({ slug }: any) => {
    return { params: { slug } };
  });

  return {
    paths: slugs,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const VARIABLES = { slug: params.slug };
  const QUERY = `query getRoadmaps($slug: String!) {
    roadmapCollection(where: {slug : $slug}) {
       items {
        title
        mainContent {
          json
        }
        questions {
          json 
        }
        books {
          json
        }
        courses {
          json
        }
        resources {
          json
        }
      }
        }
    }`;

  const RESPONSE = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ query: QUERY, variables: VARIABLES })
    }
  ).then(RESPONSE => RESPONSE.json());
  return {
    props: {
      roadmap: RESPONSE.data.roadmapCollection.items[0]
    }
  };
}

export default function Roadmap({ roadmap }: any) {
  const META = {
    title: 'Roadmap',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={META} fullViewport>
      <RoadmapContainer data={roadmap} />
    </Page>
  );
}
