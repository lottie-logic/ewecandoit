/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { SSRProvider, OverlayProvider } from 'react-aria';
import '@styles/global.css';
import '@styles/nprogress.css';
import '@styles/chrome-bug.css';
import type { AppProps } from 'next/app';
import NProgress from '@components/nprogress';
import ResizeHandler from '@components/resize-handler';
import { createContext, useEffect } from 'react';
import { HMSRoomProvider } from '@100mslive/react-sdk';

export const Context = createContext([]);

export default function App({ Component, pageProps }: AppProps) {
  const topicState = [
    {
      title: 'Javascript',
      slug: 'javascript',
      image: 'https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png?f=avif&w=512'
    },
    {
      title: 'React',
      slug: 'react',
      image: 'https://cdn.iconscout.com/icon/free/png-512/react-3-1175109.png?f=avif&w=512'
    },
    {
      title: 'NextJS',
      slug: 'next-js',
      image: 'https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png'
    },
    {
      title: 'Typescript',
      slug: 'typescript',
      image: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png?f=avif&w=512'
    },
    {
      title: 'APIs',
      slug: 'api',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/api-development-3-805959.png?f=avif&w=512'
    },
    {
      title: 'GraphQL',
      slug: 'graphql',
      image: 'https://cdn.iconscout.com/icon/free/png-512/graphql-3521468-2944912.png?f=avif&w=512'
    },
    {
      title: 'BASH',
      slug: 'bash',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/bash-command-2269523-1900928.png?f=avif&w=512'
    },
    {
      title: 'Node.JS',
      slug: 'node-js',
      image: 'https://cdn.iconscout.com/icon/free/png-512/nodejs-2-226035.png?f=avif&w=512'
    },
    {
      title: 'Git',
      slug: 'git',
      image: 'https://cdn.iconscout.com/icon/free/png-512/git-17-1175218.png?f=avif&w=512'
    },
    {
      title: 'Programming Principles',
      slug: 'programming-principles',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/coding-1495751-1265247.png?f=avif&w=512'
    },
    {
      title: 'VsCode',
      slug: 'programming-tools',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/coding-1495751-1265247.png?f=avif&w=512'
    },
    {
      title: 'Dev Ops',
      slug: 'dev-ops',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/devops-1596557-1355335.png?f=avif&w=512'
    },
    {
      title: 'Architecture',
      slug: 'software-architect',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/information-architecture-5-1084051.png?f=avif&w=512'
    },
    {
      title: 'UI / UX',
      slug: 'ui-ux',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/ui-ux-design-4589453-3796629.png?f=avif&w=512'
    },
    {
      title: 'SQL',
      slug: 'sql',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/sql-4874225-4053022.png?f=avif&w=512'
    },
    {
      title: 'noSQL',
      slug: 'nosql',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/nosql-4874290-4053002.png?f=avif&w=512'
    },

    {
      title: 'Cloud Serverless',
      slug: 'cloud',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/cloud-server-7342363-6068818.png?f=avif&w=512'
    },
    {
      title: 'AWS',
      slug: 'aws',
      image: 'https://cdn.iconscout.com/icon/free/png-512/aws-1869025-1583149.png?f=avif&w=512'
    },

    {
      title: 'Computer Science',
      slug: 'computer-science',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/computer-science-1807150-1534188.png?f=avif&w=512'
    },

    {
      title: 'HTML5',
      slug: 'html5',
      image: 'https://cdn.iconscout.com/icon/free/png-512/html-2752158-2284975.png?f=avif&w=512'
    },
    {
      title: 'CSS / SCSS',
      slug: 'css-scss',
      image: 'https://static-00.iconduck.com/assets.00/file-type-css-icon-451x512-eftbqujz.png'
    },
    {
      title: 'Cyber Security',
      slug: 'cybersecurity',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/cyber-security-35-910966.png?f=avif&w=512'
    }
  ];

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);
  return (
    <Context.Provider value={topicState}>
      <SSRProvider>
        <OverlayProvider>
          <HMSRoomProvider>
            <Component {...pageProps} />

            <ResizeHandler />
            <NProgress />
          </HMSRoomProvider>
        </OverlayProvider>
      </SSRProvider>
    </Context.Provider>
  );
}
