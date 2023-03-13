import { useState } from 'react';
import { PageState, ConfDataContext, UserData } from '@lib/hooks/use-conf-data';
import ConfContainer from './conf-container';
import Hero from './hero';
import Form from './form';

import LearnMore from './learn-more';

type Props = {
  defaultUserData: UserData;
  sharePage?: boolean;
  defaultPageState?: PageState;
};

export default function Conf({ defaultUserData, defaultPageState = 'registration' }: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [pageState, setPageState] = useState<PageState>(defaultPageState);

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState
      }}
    >
      <ConfContainer>
        <Hero />
        <Form />
        <LearnMore />
      </ConfContainer>
    </ConfDataContext.Provider>
  );
}
