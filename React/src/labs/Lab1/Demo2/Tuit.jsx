export const Tuit = ({ avatar, nombre, usuario, mensaje, likes }) => {

  console.log("🚀 ~ Tuit ~ avatar, nombre, usuario, mensaje, likes:", avatar, nombre, usuario, mensaje, likes)
  return (
    <div className="tuit">
      <img src={avatar} alt={nombre} className="avatar" />
      <div className="contenido">
        <strong>{nombre}</strong> @{usuario}
        <p>{mensaje}</p>
        <span>❤️ {likes}</span>
      </div>
    </div>
  );
};
