import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    team: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4 ">
            <label className="block text-left text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter your name"
              required
            />
          </div>

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

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label className="block text-left text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-sm font-medium text-gray-700">
              Select Your IPL Team
            </label>
            <select
              name="team"
              value={formData.team}
              onChange={handleChange}
              className="select select-bordered w-full mt-2"
              required
            >
              <option value="">Select a Team</option>
              <option value="RCB">Royal Challengers Bangalore</option>
              <option value="MI">Mumbai Indians</option>
              <option value="CSK">Chennai Super Kings</option>
              <option value="KKR">Kolkata Knight Riders</option>
              <option value="DC">Delhi Capitals</option>
              <option value="RR">Rajasthan Royals</option>
              <option value="PBKS">Punjab Kings</option>
              <option value="SRH">Sunrisers Hyderabad</option>
              <option value="LSG">Lucknow Super Giants</option>
              <option value="GT">Gujarat Titans</option>
            </select>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary w-full py-2 px-4 rounded-lg text-white font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
