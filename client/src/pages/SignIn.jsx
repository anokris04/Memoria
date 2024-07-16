import { Alert, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";


const SignIn = () => {
  //hooks
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //to avoid refresh on submit
    if (!formData.email || !formData.password){
      return setErrorMessage('Please fill out all fields');
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const response = await fetch("api/auth/signin", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if(data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(response.ok){
        return navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="h-full my-32 flex justify-center">
      <div className="w-[60%] bg-amber-50 rounded-2xl overflow-hidden border-2 border-gray-300">
        <div className="flex flex-col items-center p-10">
          <Link to="/" className="text-slate-950 text-5xl dark:text-white">
            <span className="px-5 py-1 font-bold rounded-lg bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 text-transparent bg-clip-text onChange=">
              Memoria
            </span>
          </Link>
          <p className="text-lg font-semibold mt-5">
            A perfect platform to post about your experience and share it with
            the world. You can sign in with your email and password or with Google.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-10 pb-10">
          <form onSubmit={handleSubmit}>
            <div>
              <Label
                className="font-bold"
                value="Your Email"
              />
              <TextInput
                type="email"
                placeholder="xyz@company.com"
                id="email" onChange={handleChange}
                className="rounded-lg border border-slate-300 p-2 w-full"
              />
            </div>
            <div>
              <Label
                className="font-bold"
                value="Your Password"
              />
              <TextInput
                type="password"
                placeholder="********"
                id="password" onChange={handleChange}
                className="rounded-lg border border-slate-300 p-2 w-full"
              />
            </div>
            <button  disabled={loading} className="border text-base font-bold text-white rounded-lg border-gray-500 my-2 py-2 w-full bg-purple-500">
            {
                loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className="pl-3">Loading...</span>
                  </>
                ):'Sign In'
              }
            </button>
          </form>
          <div className="flex gap-2 mt-3">
            <span className="font-semibold">Don't have an account?</span>
            <Link to="/sign-up" className="text-sky-500 font-semibold">
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5 text-base" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SignIn;
