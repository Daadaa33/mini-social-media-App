import React, { useState } from "react";
import { UserAuth, postcode } from "../context";

function Login() {
  const [username, setUsername] = useState("");

  const { user, name, setUser } = UserAuth();
  const data = postcode();

  const handelSubmit = (event) => {
    event.preventDefault();
    setUser(username);
  };

  return (
    <div className="">
      <form
        onClick={handelSubmit}
        className="flex mt-40 justify-center items-center flex-col space-y-4"
      >
        <input
          className="px-2 border  py-2 border-black/50 text-lg font-semibold border-2 rounded-md outline-none "
          type="text"
          placeholder="Enter your UserName"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          type="submit"
          className="px-[3rem] py-2 rounded bg-blue-400 text-black font-medium "
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
