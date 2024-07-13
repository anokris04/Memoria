import { Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="h-full mt-20 flex justify-center">
  <div className="w-[60%] bg-fuchsia-200 rounded-2xl overflow-hidden">
    <div className="flex flex-col items-center p-10">
      <Link to="/" className="text-slate-950 text-4xl dark:text-white">
        <span className="px-5 py-1 rounded-lg bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 text-white">
          Memoria
        </span>
      </Link>
      <p className="text-lg font-semibold mt-5">
        A perfect platform to post about your experience and share it with the world.
      </p>
    </div>
    <div className="flex flex-col gap-4 px-10 pb-10">
      <form>
        <div>
          <Label value="Your Username" />
          <TextInput type="text" placeholder="Username" id="username" className="rounded-lg border border-slate-300 p-2 w-full" />
        </div>
        <div>
          <Label value="Your Email" />
          <TextInput type="email" placeholder="Email" id="email" className="rounded-lg border border-slate-300 p-2 w-full" />
        </div>
        <div>
          <Label value="Your Password" />
          <TextInput type="password" placeholder="Password" id="password" className="rounded-lg border border-slate-300 p-2 w-full" />
        </div>
        <button className="border text-base font-bold text-white rounded-lg border-gray-500 my-2 py-2 w-full bg-gradient-to-r from-violet-600 to-pink-200">Sign Up</button>
      </form>
      <div className="flex gap-2 mt-3">
        <span>Already have an account ?</span>
        <Link to='/sign-in' className="text-blue-500"> Sign In</Link>
      </div>
    </div>
  </div>
</div>
  );
};

export default SignUp;
