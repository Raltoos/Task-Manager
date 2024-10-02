import { useState, useEffect } from "react";

const UserProfileManager = () => {
  // State to store the user profile
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    email: "",
  });

  // State to store the updated profile for display purposes
  const [updatedProfile, setUpdatedProfile] = useState(null);

  // Simulate fetching initial profile data on component mount
  useEffect(() => {
    const initialProfile = {
      name: "Anuj Parwal",
      age: "19",
      email: "anuj.parwal@somaiya.edu",
    };
    setProfile(initialProfile);
  }, []);

  // Handler for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdatedProfile(profile);
    console.log("Profile updated:", profile);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10 p-6">
      <h1 className="text-3xl font-bold">User Profile Manager</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 text-black"
      >
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Age:</label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Update Profile
        </button>
      </form>

      <div className="h-[30v]">
        {updatedProfile && (
          <div className="w-full max-w-lg bg-white text-black p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4">
              Updated Profile Information
            </h2>
            <p className="text-lg mb-2">
              <strong>Name:</strong> {updatedProfile.name}
            </p>
            <p className="text-lg mb-2">
              <strong>Age:</strong> {updatedProfile.age}
            </p>
            <p className="text-lg mb-2">
              <strong>Email:</strong> {updatedProfile.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileManager;
