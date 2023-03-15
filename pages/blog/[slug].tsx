import BlogContainer from '@components/blog-container';
// import BlogSidebar from '@components/hms/sidebar/blog-sidebar';
import Page from '@components/page';
import { META_DESCRIPTION } from '@lib/constants';

//runs during build time and generates the paths
export async function getStaticPaths() {
  const query = `query {
    blogPostCollection {
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

  const slugs = response.data.blogPostCollection.items.map(({ slug }: any) => {
    return { params: { slug } };
  });

  return {
    paths: slugs,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const variables = { slug: params.slug };
  const query = `query getBlogs($slug: String!) {
    blogPostCollection(where: {slug : $slug}) {
       items {
        heading
        main {
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
      blog: response.data.blogPostCollection.items[0]
    }
  };
}

export default function Blog({ blog }: any) {
  const meta = {
    title: 'Blog',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <BlogContainer data={blog} />
      {/* <BlogSidebar data={ blog} /> */}
    </Page>
  );
}
