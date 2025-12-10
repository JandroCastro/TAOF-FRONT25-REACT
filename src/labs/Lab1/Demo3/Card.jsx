export const Card = ({ titulo, subtitulo, contenido, autor, fecha }) => {

  return (
    <div className="card" style={{marginBottom:'100px'}}>
      <div className="card-header">
        <h2 className="card-title">{titulo}</h2>
        <p className="card-subtitle">{subtitulo}</p>
      </div>
      <div className="card-body">{contenido}</div>
      <div className="card-footer">
        <span>{autor}</span> | <span>{fecha}</span>
      </div>
    </div>
  );
};
