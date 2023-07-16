import React from "react";
import { UserAuth } from "../context";

const Header = () => {
  const { user, setUser } = UserAuth();
  const handelLogOut = () => {
    setUser("");
  };
  return (
    <div className="flex max-w-4xl mx-auto justify-center items-center mt-[10px]">
      <div className="flex flex-col gap-2">
        <p className="text-2xl">
          Welcome! <span className="font-bold">{user}</span>
        </p>
        <button
          className="bg-blue-400  p-2 rounded-md font-medium text-lg text-white"
          type="submit"
          onClick={handelLogOut}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Header;
