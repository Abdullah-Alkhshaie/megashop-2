import { useState } from "react";
import { registerUser, isEmailAlreadyRegistered } from "../auth";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const emailAlreadyRegistered = await isEmailAlreadyRegistered(
        formData.email
      );

      if (emailAlreadyRegistered) {
        setErrorMessage("Email is already registered");
      } else {
        const user = await registerUser(formData);

        console.log("User registered:", user);
        navigate("/");
      }
    } catch (error) {
      console.error("Error registering user:", error.message);

      // Check if the error message indicates that the email is already in use
      if (error.message.includes("auth/email-already-in-use")) {
        setErrorMessage("Email is already registered");
      } else {
        // If it's a different error, you can set a generic error message
        setErrorMessage("Email is already registered");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg m-auto lg:m-0">
      <div className=" p-6 bg-white mx-3">
        <h2 className="text-xl mb-4 text-font ">Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-dark text-sm " htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full mt-3 border px-2 py-2 outline-none border-gray"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark text-sm " htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-3 border px-2 py-2 outline-none border-gray"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark text-sm " htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-3 border px-2 py-2 outline-none border-gray"
              required
            />
          </div>

          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}
          <button
            type="submit"
            className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-font focus:outline-none focus:shadow-outline-blue ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
