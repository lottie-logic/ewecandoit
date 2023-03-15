// import BlogsGrid from '@components/jobs-grid';
import React from 'react';
import { Blog } from '@lib/types';

type Props = {
  blogs: Blog[];
};

const BlogSidebar = ({ blogs }: Props) => {
  console.log('blogsidebar', blogs);
  return <div className="sidebar-container">{/* <BlogsGrid data={data} /> */}</div>;
};

export default BlogSidebar;
