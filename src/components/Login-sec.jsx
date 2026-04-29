"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginSec = () => {
  const handleClickGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };
  const handleClickGitHub = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };
  return (
    <div>
      <h1 className="font-medium text-center mb-5">Login With</h1>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleClickGoogle}
          className="btn border text-blue-500 p-2"
        >
          <FaGoogle></FaGoogle> Login with Goggle
        </button>
        <button onClick={handleClickGitHub} className="btn p-2 border text-gray-500">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginSec;
