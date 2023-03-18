import BlogContainer from '@components/blog-container';
// import BlogSidebar from '@components/hms/sidebar/blog-sidebar';
import Page from '@components/page';
import { META_DESCRIPTION } from '@lib/constants';

//runs during build time and generates the paths
export async function getStaticPaths() {
  const QUERY = `query {
    blogPostCollection {
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
      body: JSON.stringify({ QUERY })
    }
  ).then(RESPONSE => RESPONSE.json());

  const slugs = RESPONSE.data.blogPostCollection.items.map(({ slug }: any) => {
    return { params: { slug } };
  });

  return {
    paths: slugs,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const VARIABLES = { slug: params.slug };
  const QUERY = `query getBlogs($slug: String!) {
    blogPostCollection(where: {slug : $slug}) {
       items {
        heading
        main {
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
      body: JSON.stringify({ QUERY, VARIABLES })
    }
  ).then(RESPONSE => RESPONSE.json());
  return {
    props: {
      blog: RESPONSE.data.blogPostCollection.items[0]
    }
  };
}

export default function Blog({ blog }: any) {
  const META = {
    title: 'Blog',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={META} fullViewport>
      <BlogContainer data={blog} />
      {/* <BlogSidebar data={ blog} /> */}
    </Page>
  );
}
