import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '@components/page';
import ConfContent from '@components/index';
import { META_DESCRIPTION } from '@lib/constants';
import Layout from '@components/layout';

// export async function getStaticProps() {
//   // const variables = { slug: params.slug };
//   const query = `query  {
//     roadmapCollection {
//        items {
//         title
//         slug

//       }
//         }
//     }`;

//   const response = await fetch(
//     `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
//       },
//       body: JSON.stringify({ query })
//     }
//   ).then(response => response.json());
//   return {
//     props: {
//       data: response.data.roadmapCollection.items
//     }
//   };
// }
export default function Conf({ data }: any) {
  console.log('data', data);
  const { query } = useRouter();
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString()
  };

  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />

      <ConfContent
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
      />
    </Page>
  );
}
