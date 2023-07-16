import React, { useRef, useState } from "react";
import { UserAuth, postcode } from "../context";

const CreatePost = () => {
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);

  const { user } = UserAuth();
  const { dispatch } = postcode();

  const ImageRef = useRef();
  const postRef = useRef();

  const handelSubmit = (event) => {
    event.preventDefault();
    const NewPost = { post, image, user, id: Date.now() };

    dispatch({ type: "ADD_NEW_POST", payload: { posts: NewPost } });
    setImage(null);
    setPost("");
    ImageRef.current.value = null;
    postRef.current.focus();
  };
  return (
    <div className=" mt-4 max-w-4xl mx-auto ">
      <div className="mx-2">
        <form
          onSubmit={handelSubmit}
          className="flex justify-center items-center   flex-col gap-2"
        >
          <input
            type="text"
            value={post}
            ref={postRef}
            className="border-2 p-2 rounded-md text-lg w-full font-medium border-gray-400"
            placeholder="Post Content"
            onChange={(event) => setPost(event.target.value)}
          />
          <input
            ref={ImageRef}
            onChange={(event) => setImage(event.target.files[0])}
            type="file"
            className="bg-blue-200 rounded-sm w-full p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 w-40  text-white px-2 py-4 rounded-md text-xl"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
