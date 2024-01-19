import { useState } from "react";
import { registerUser } from "../auth";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

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
      // Call the registerUser function from auth.js
      const user = await registerUser(formData);

      console.log("User registered:", user);
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <div className="max-w-md  mt-8 p-6 bg-white mx-3 rounded-md shadow-md">
      <h2 className="text-xl  mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-dark text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray outline-none "
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-dark text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray outline-none "
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-dark text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray outline-none "
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-font focus:outline-none focus:shadow-outline-blue"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default SignIn;
