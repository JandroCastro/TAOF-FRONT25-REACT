import { useState } from "react";

export const TuitInteractive = ({ avatar, nombre, usuario, mensaje }) => {
  // Estado para los likes
  const [likes, setLikes] = useState(10);


  // Función para incrementar likes
  const handleLike = () => setLikes(prev => prev + 1);

  return (
    <div className="tuit">
      <img src={avatar} alt={nombre} className="avatar" />
      <div className="contenido">
        <strong>{nombre}</strong> @{usuario}
        <p>{mensaje}</p>
        <span>❤️ {likes}</span>
        <button onClick={handleLike} className="btn-like">Dar like</button>
      </div>
    </div>
  );
};
