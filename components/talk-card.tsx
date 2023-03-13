import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { parseISO, format, isBefore, isAfter } from 'date-fns';
import { Data } from '@lib/types';
import styles from './talk-card.module.css';
import { Tabs } from '@radix-ui/react-tabs';

type Props = {
  title: string;
  slug: string;
  image: string;
  description: string;
  // showTime: boolean;
};

// type Props = {
//   data: Data[];
// };

// const formatDate = (date: string) => {
//   // https://github.com/date-fns/date-fns/issues/946
//   return format(parseISO(date), "h:mmaaaaa'm'");
// };

// export default function TalkCard({ talk: { title, speaker, start, end }, showTime }: Props) {
export default function TalkCard({ title, slug, image, description }: Props) {
  // console.log('das,nlkdm;ata', data);
  // useEffect(() => {
  //   const now = Date.now();
  //   setIsTalkLive(isAfter(now, parseISO(start)) && isBefore(now, parseISO(end)));
  //   setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
  // }, [end, start]);

  // const firstSpeakerLink = `/speakers/${speaker[0].slug}`;

  return (
    <div className={styles['card-body']}>
      <div className={styles['avatar-wrapper']}>
        {/* <Image
          loading="lazy"
          alt="img"
          className={styles.avatar}
          src={image || 'https://placekitten.com/200/300'}
          // title={s.name}
          width={44}
          height={44}
        /> */}
      </div>
      <h2 title={title} className={styles.title}>
        {title}
      </h2>

      {/* <div className={styles.speaker}>
        <p className={styles.name}>
          {description}
        </p>
      </div> */}
    </div>
  );
}
