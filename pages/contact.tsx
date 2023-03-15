import Page from '@components/page';

import Header from '@components/header';

import { META_DESCRIPTION } from '@lib/constants';

export default function Jobs() {
  const meta = {
    title: 'Career Fair - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Header hero="Contact" description={''} />
    </Page>
  );
}
