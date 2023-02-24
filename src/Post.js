import { format } from "date-fns";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function Post({ _id, title, summary, cover, content, author, createdAt,}) {
  const { setUserInfo, userInfo } = useContext(UserContext);

  // Obtener la imagen del perfil del autor o "user.png" si no se proporciona una imagen de perfil
  const profilePicture = userInfo?.profilePicture || "user.png";

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img className="" src={`http://localhost:4000/${cover}`} alt="" />
        </Link>
      </div>
      <div className="texts">
        <hr></hr>
        <img className="profile-picture" src={`http://localhost:4000/${cover}`} alt="" />
        <p className="author">
          {author.username}
          <time className="time-post-page">{format(new Date(createdAt), "PPpp")}</time>
        </p><br></br>
        <h2>{title}</h2>
        <p className="summary">{summary}</p>
        <Link to={`/post/${_id}`}>
          <button >Ver completo</button>
        </Link>
        <hr></hr>
        <h3 className="sentidos">Sentidos</h3>
      </div>
      
    </div>
    
  );
}
