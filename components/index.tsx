import { useState } from 'react';
// import { PageState, ConfDataContext, UserData } from '@lib/hooks/use-conf-data';
import ConfContainer from './conf-container';
import Hero from './hero';
// import Form from './form';

import LearnMore from './learn-more';

type Props = {
  // defaultUserData: UserData;
  sharePage?: boolean;
  // defaultPageState?: PageState;
};

export default function Conf() {
  return (
    <ConfContainer>
      <Hero />
      {/* <Form /> */}
      {/* <LearnMore /> */}
    </ConfContainer>
  );
}
