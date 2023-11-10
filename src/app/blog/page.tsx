"use client";

import Grid from "@mui/material/Grid";
import BlogCard from "./BlogCard";

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

const BlogApp = () => {
  return (
    <Grid container spacing={4}>
      {arr.map(() => (
        <Grid item lg={4}>
          <BlogCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogApp;
