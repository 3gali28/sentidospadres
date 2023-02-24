import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const { setUserInfoImg, userInfoImg } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  useEffect(() => {
    if (userInfo) {
      fetch(`http://localhost:4000/uploads/${userInfo._id}`, {
        credentials: 'include',
      })
        .then(response => response.json())
        .then(userData => {
          const { profilePicture } = userData;
          setUserInfoImg(profilePicture);
        })
        .catch(error => console.log(error));
    }
  }, [userInfo, setUserInfoImg]);


  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    window.location.reload();
    setUserInfo(null);
  }

  const username = userInfo?.username;
  const profilePicture = userInfoImg?.profilePicture || "FONDO.PNG";
  const profilePictureUrl = userInfoImg ? `http://localhost:4000/uploads/${userInfoImg.profilePicture}` : "sentidos.png";

  console.log(profilePicture + ' quiero la imagen de perfil')

  return (
    <header>
      <Link to="/" className="logo">Sentidos</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>
              Logout ({username})
            </a>
            <img src={profilePictureUrl} alt="Profile" className="profile-picture-avatar" />
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
