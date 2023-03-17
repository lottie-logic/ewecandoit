import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

import styles from './sidebar.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Props = {
  data: {
    title: string;
    slug: string;
    image: string;
    description: string;
    questions: {
      json: any;
    };
    books: {
      json: any;
    };
    mainContent: {
      json: any;
    };

    courses: {
      json: any;
    };
    resources: {
      json: any;
    };
  };
};

const Sidebar = ({ data }: Props) => {
  return (
    <Tabs.Root asChild defaultValue="1">
      <div className="sidebar-container">
        <Tabs.List className="w-full px-4 tabs">
          <Tabs.Trigger asChild value="1">
            <button className="w-1/3 text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-l-md">
              Courses
            </button>
          </Tabs.Trigger>
          <Tabs.Trigger asChild value="2">
            <button className="w-1/3  text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 ">
              Books
            </button>
          </Tabs.Trigger>
          <Tabs.Trigger asChild value="3">
            <button className="w-1/3  text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-r-md">
              Resources
            </button>
          </Tabs.Trigger>
          <Tabs.Trigger asChild value="4">
            <button className="w-full  text-gray-300 h-[35px] mt-2 text-[14px] border-solid border border-gray-700 rounded-md">
              Questions
            </button>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content asChild value="1">
          <div className={styles.questions}>{documentToReactComponents(data?.courses?.json)}</div>
        </Tabs.Content>
        <Tabs.Content asChild value="2">
          <div className={styles.questions}>{documentToReactComponents(data?.books?.json)}</div>
        </Tabs.Content>
        <Tabs.Content asChild value="3">
          <div className={styles.questions}>{documentToReactComponents(data?.resources?.json)}</div>
        </Tabs.Content>
        <Tabs.Content asChild value="4">
          <div className={styles.questions}>{documentToReactComponents(data?.questions?.json)}</div>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default Sidebar;
