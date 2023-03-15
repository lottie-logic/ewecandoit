import { SkipNavContent } from '@reach/skip-nav';

import Page from '@components/page';
import ConfContent from '@components/index';
import { META_DESCRIPTION } from '@lib/constants';

export default function Conf() {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />

      <ConfContent />
    </Page>
  );
}
