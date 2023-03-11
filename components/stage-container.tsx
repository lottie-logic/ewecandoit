/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import useSWR from 'swr';
import cn from 'classnames';
import { Stage } from '@lib/types';
import useLoginStatus from '@lib/hooks/use-login-status';
import styles from './stage-container.module.css';
import styleUtils from './utils.module.css';
import ConfEntry from './conf-entry';
import Room from './hms/Room';
import Sidebar from './hms/sidebar';
import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';
import ScheduleSidebar from './schedule-sidebar';

type Props = {
  stage: Stage;
  allStages: Stage[];
};

export default function StageContainer() {
  // const response = useSWR('/api/stages', {
  //   initialData: allStages,
  //   refreshInterval: 5000
  // });
  // const updatedStages = response.data || [];
  // const updatedStage = updatedStages.find((s: Stage) => s.slug === stage.slug) || stage;
  // const { loginStatus, mutate } = useLoginStatus();
  // const isConnected = useHMSStore(selectIsConnectedToRoom);
  return (
    <div className={styles.container}>
      {/* <div className={`${styles.streamContainer} ${isConnected ? '' : styles.streamYt}`}> */}
      <div className={`${styles.streamContainer} ${styles.streamYt}`}>
        {/* {loginStatus === 'loggedIn' ? (
          !stage.isLive ? ( */}

        {/* ) : (
            <Room
              backstagePeers={stage.backstagePeers}
              stagePeers={stage.stagePeers}
              roomId={stage.roomId}
            />
          )
        ) : loginStatus === 'loading' ? null : (
          <ConfEntry onRegister={() => mutate()} />
        )} */}
      </div>
      {/* {stage.isLive ? (
        isConnected ? ( */}
      {/* <Sidebar allStages={allStages} /> */}
      <Sidebar />
      {/* ) : null
      ) : (
        <ScheduleSidebar allStages={updatedStages} />
      )} */}
    </div>
  );
}
