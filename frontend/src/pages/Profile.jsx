import React, { useState } from "react";
import Toast from "../Components/Toast.jsx";

// Define team color mapping
const teamColors = {
  RCB: "alert-error", // You can change this class based on desired color classes in DaisyUI.
  MI: "alert-info",
  LSG: "alert-primary",
  KKR: "alert-secondary",
  DC: "alert-accent",
  RR: "alert-Secondary",
  PBKS: "alert-success",
  SRH: "alert-error",
  CSK: "alert-warning",
  GT: "alert-success",
};

const ProfilePage = () => {
  // Initial user data (can be fetched from an API or context)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    team: "RCB", // Default team
  });

  const [showToast, setShowToast] = useState(false);

  // Handle team change
  const handleChange = (event) => {
    const newTeam = event.target.value;
    setUser({ ...user, team: newTeam });
  };

  // Handle form submission (e.g., save updated user data)
  const handleSaveChanges = () => {
    // Show the Toast for 3 seconds after saving
    setShowToast(true);

    // Hide toast after duration (3 seconds in this case)
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Your Profile</h2>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            className="input input-bordered w-full mt-2"
            value={user.name}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            className="input input-bordered w-full mt-2"
            value={user.email}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Your IPL Team
          </label>
          <select
            name="team"
            value={user.team} // Use `user.team` here
            onChange={handleChange} // This will call the handleChange function
            className="select select-bordered w-full mt-2"
            required
          >
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

        <button
          className="btn btn-primary w-full mt-4"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>

      {/* Show Toast if showToast state is true */}
      {showToast && (
        <Toast
          message="Update successful"
          title={`Team Updated to ${user.team}`}
          teamColor={teamColors[user.team]}
          duration={3000}
        />
      )}
    </div>
  );
};

export default ProfilePage;
