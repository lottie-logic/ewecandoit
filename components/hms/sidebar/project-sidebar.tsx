import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import styles from './sidebar.module.css';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { Data } from '@lib/types';

import { useContext } from 'react';
import { Context } from 'pages/_app';
import TopicGrid from '@components/topic-grid';
// import ProjectGrid from '@components/project-grid';
import Link from 'next/link';
import Image from 'next/image';
import IconLinkedin from '@components/icons/icon-linkedin';
import IconGithub from '@components/icons/icon-github';
import IconTwitter from '@components/icons/icon-twitter';
import IconEmail from '@components/icons/icon-email';

// type Props = {
//   data: Data;
// };

const Sidebar = ({ data }: any) => {
  const topics = useContext(Context);

  return (
    <Tabs.Root asChild defaultValue="1">
      <div className="sidebar-container">
        <Tabs.List className="w-full px-4 tabs">
          <Tabs.Trigger asChild value="1">
            <button className="w-1/3 text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-l-md">
              About
            </button>
          </Tabs.Trigger>
          <Tabs.Trigger asChild value="2">
            <button className="w-1/3  text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700  ">
              Projects
            </button>
          </Tabs.Trigger>
          <Tabs.Trigger asChild value="3">
            <button className="w-1/3  text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-r-md ">
              Topics
            </button>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content asChild value="2">
          <div className={styles.questions}>
            <div className={styles.grid}>
              {data.map((p: any) => (
                <Link key={p.node.name} href={`/projects/${p.node.name}`}>
                  <a role="button" tabIndex={0} className={styles.card}>
                    <div className={styles.imageWrapper}>
                      {/* <Image
                alt={speaker.name}
                src={speaker.image.url}
                className={styles.image}
                loading="lazy"
                quality="50"
                title={speaker.name}
                placeholder={speaker.image.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={speaker.image.blurDataURL}
                width={300}
                height={300}
              /> */}
                    </div>
                    <div className={styles.cardBody}>
                      <div>
                        <h2 className={styles.name}>{p.node.name}</h2>
                        <p className={styles.title}>
                          {/* {`${p.name} @ `} */}
                          {/* <span className={styles.company}>{p.company}</span> */}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content asChild value="3">
          <div className={styles.questions}>
            <TopicGrid projects={topics} />
          </div>
        </Tabs.Content>
        <Tabs.Content asChild value="1">
          <div className={styles.questions}>
            <div className={styles.aboutMe}>
              <Image
                className={styles.avatar}
                width={200}
                height={200}
                src="https://avatars.githubusercontent.com/u/89790287?v=4"
                alt="me"
              />
              <p>
                Hey I am Lottie! I am a 25 year old self taught developer from Wales. Super
                passionate about learning whatever is necessary to build the cool things I want to
                create. I hope to inspire others to do the same, no matter who you are or your
                background, you can defo learn to code.
              </p>

              <div className={styles.socials}>
                <IconGithub color={'white'} size={50} />
                <IconTwitter width={45} />
                <IconLinkedin width={45} />
                <IconEmail width={55} />
              </div>
            </div>
          </div>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default Sidebar;
