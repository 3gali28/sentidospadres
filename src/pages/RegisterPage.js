import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  async function register(ev) {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("profilePicture", profilePicture);
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: formData,
    });
    if (response.status === 200) {
      alert("registration successful");
    } else {
      alert("registration failed");
    }
  }

  function handleProfilePictureChange(event) {
    setProfilePicture(event.target.files[0]);
  }

  function handleChooseFile() {
    document.getElementById("fileInput").click();
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button type="button" onClick={handleChooseFile}>
        Choose Profile Picture
      </button>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleProfilePictureChange}
      />
      <img
        src={profilePicture ? URL.createObjectURL(profilePicture) : "/user.png"}
        alt="Profile"
        width="100"
        height="100"
      />
      <button>Register</button>
    </form>
  );
}
