import React from "react";
import { postcode } from "../context";
import Post from "./Post";

const PostList = () => {
  const { state } = postcode();
  return (
    <div>
      {state.posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default PostList;
