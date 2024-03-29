

export type Image = {
  url: string;
  blurDataURL?: string;
};

export type Speaker = {
  name: string;
  bio: string;
  title: string;
  slug: string;
  twitter: string;
  github: string;
  company: string;
  talk: Talk;
  image: Image;
  imageSquare: Image;
};


export type Blog = {
  heading: string;
  slug: string;
  preview: {
    json: any
  }
  main: {
    json: any
  };


};


export type Data = {
  title: string;
  slug: string;
  image: string;
  description: string;
  questions: {
    json: any
  };
  books: {
    json: any
  }
  courses: {
    json: any
  }
  resources: {
    json: any
  }
  mainContent: {
    json: any
  };
};

export type Stage = {
  name: string;
  slug: string;
  stream: string;
  discord: string;
  schedule: Talk[];
  isLive: boolean;
  roomId: string;
  stagePeers: string[];
  backstagePeers: string[];
};

export type Talk = {
  title: string;
  description: string;
  start: string;
  end: string;
  speaker: Speaker[];
};

export type Link = {
  url: string;
};

export type Sponsor = {
  name: string;
  description: string;
  slug: string;
  website: string;
  callToAction: string;
  callToActionLink: string;
  links: SponsorLink[];
  discord: string;
  tier: string;
  cardImage: Image;
  logo: Image;
  youtubeSlug: string;
};

export type SponsorLink = {
  text: string;
  url: string;
};

export type Job = {
  id: string;
  companyName: string;
  title: string;
  description: string;
  discord: string;
  link: string;
  rank: number;
};

export type ConfUser = {
  id?: string;
  email?: string;
  ticketNumber?: number | null;
  name?: string | null;
  username?: string | null;
  createdAt?: number | null;
};

export type GitHubOAuthData =
  | {
    type: 'token';
    token: string;
  }
  | {
    type: 'user';
    name: string;
    login: string;
  };
