import React, { useEffect, useState } from "react";
import Login from "./component/Login";
import Header from "./component/Header";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import { UserAuth, postcode } from "./context";

const App = () => {
  const { user, seUser } = UserAuth();

  const { state } = postcode();

  useEffect(() => {
    document.title = user ? `${user} 's Feed` : "Please Login";
  });

  if (!user) return <Login />;
  return (
    <div>
      <Header />
      <CreatePost />
      <PostList />
    </div>
  );
};

export default App;
