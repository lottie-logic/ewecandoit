import { SkipNavContent } from '@reach/skip-nav';
import Page from '@components/page';
import { META_DESCRIPTION } from '@lib/constants';
import Hero from '@components/hero';

export default function Conf() {
  const META = {
    title: 'ewecandoit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={META} fullViewport>
      <SkipNavContent />
      <Hero />
    </Page>
  );
}
