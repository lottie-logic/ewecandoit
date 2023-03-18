import Page from '@components/page';
import { Blog } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';
import BlogsGrid from '@components/blogs-grid';
import Header from '@components/header';

type Props = {
  data: Blog[];
};

export default function BlogPage({ data }: Props) {
  const META = {
    title: 'Blog',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={META} fullViewport>
      <Header hero="Blog" description={''} />
      <BlogsGrid data={data} />
    </Page>
  );
}

export async function getStaticProps() {
  const query = `query  {
    blogPostCollection {
       items {
        heading
        slug
        preview
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
  return {
    props: {
      data: response.data.blogPostCollection.items
    }
  };
}
