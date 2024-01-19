import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 mx-5">
      <div className="flex-1 bg-white p-5">
        <h1 className="text-xl ">New Customer</h1>
        <p className="text-dark my-3">Register Account</p>
        <p className="text-dark">
          By creating an account, you will be able to shop faster, be up to date
          on an order's status, and keep track of the orders you have previously
          made.
        </p>
        <Link to="/SignIn">
          <button className="bg-primary mt-10 lg:mt-16 flex items-center text-white lg:px-6 hover:bg-font px-1 md:px-3 py-2 lg:py-3 text-base md:text-lg rounded-md">
            Continue
          </button>
        </Link>
      </div>
      <div className="flex-1 flex flex-col bg-white p-5 text-dark">
        <h1 className="text-xl text-font ">Returning Customer</h1>
        <p className="text-dark my-3">I am a returning customer</p>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-3 border px-2 py-2 outline-none border-gray"
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-2 py-2 outline-none border-gray mt-3"
          placeholder="Password"
        />

        <button
          onClick={handleLogin}
          className="bg-primary mt-5 flex w-fit text-center items-center text-white lg:px-6 hover:bg-font px-1 md:px-3 py-2 lg:py-3 text-base md:text-lg rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
