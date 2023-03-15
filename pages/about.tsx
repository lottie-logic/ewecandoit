import Page from '@components/page';

import Header from '@components/header';

import { META_DESCRIPTION } from '@lib/constants';
import Image from 'next/image';

export default function About() {
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
      </div>
      {/* socials heres */}
    </Page>
  );
}
