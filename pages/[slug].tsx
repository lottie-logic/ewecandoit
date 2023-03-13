import Page from '@components/page';
import StageContainer from '@components/stage-container';
import { META_DESCRIPTION } from '@lib/constants';

//runs during build time and generates the paths
export async function getStaticPaths() {
  const query = `query {
    roadmapCollection {
    items {
      slug

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

  const slugs = response.data.roadmapCollection.items.map(({ slug }: any) => {
    return { params: { slug } };
  });

  return {
    paths: slugs,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const variables = { slug: params.slug };
  const query = `query getRoadmaps($slug: String!) {
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
        resources {
          json
        }
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
      body: JSON.stringify({ query, variables })
    }
  ).then(response => response.json());
  return {
    props: {
      roadmap: response.data.roadmapCollection.items[0]
    }
  };
}

export default function Roadmap({ roadmap }: any) {
  const meta = {
    title: 'Roadmap',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <StageContainer data={roadmap} />
    </Page>
  );
}
