import React from "react";
import { MdDelete } from "react-icons/md";
import { UserAuth, postcode } from "../context";

const Post = ({ image, post, id }) => {
  const { user } = UserAuth();
  const currentUser = user;
  let currenUser = currentUser == user;

  const { state, dispatch } = postcode();
  const handelDelete = () => {
    dispatch({ type: "DELETE_POST", payload: { postId: id } });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="m-2 space-y-2 flex flex-col">
        <p className="font-bold text-xl  pt-10">{post}</p>
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Post Content"
            className="object-cover mt-4 w-40 h-40"
          />
        )}
        {user && (
          <p
            className={`${
              currenUser ? "text-green-400" : "text-gray-500"
            } text-xl font-bold`}
          >
            {user} !
          </p>
        )}
        {currenUser && (
          <button
            onClick={handelDelete}
            type="submit"
            className="bg-red-500 h-4 flex justify-center items-center text-white p-6  rounded-lg"
          >
            <MdDelete className="w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
