import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      let response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}auth/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );
      console.log(response);
      const token = response.data.token;
      if (token) {
        // Store token in localStorage
        localStorage.setItem("authToken", token);
        // Navigate to dashboard or home after login
        navigate("/"); // You can adjust the route as needed
      }
    } catch (error) {
      setError("Some error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Display error message if there is any */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-left text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-left text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary w-full py-2 px-4 rounded-lg text-white font-semibold"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          {/* SignUp Button */}
          <div className="m-4 flex justify-center">
            <div>
              <p className="font-semibold">Don't have an account?</p>
              <button
                type="button" // Change type to button to prevent form submission
                onClick={() => navigate("/register")} // Navigate to sign-up page
                className="btn btn-primary w-full py-2 px-4 rounded-lg text-white font-semibold"
              >
                SignUp
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
