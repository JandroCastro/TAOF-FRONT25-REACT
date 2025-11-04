import { Tuit } from "./Tuit.jsx";

export const TuitList = () => {
  const tuits = [
    { avatar: "https://i.pravatar.cc/40?img=1", nombre: "Alice", usuario: "alice123", mensaje: "Hola mundo en React!", likes: 5 },
    { avatar: "https://i.pravatar.cc/40?img=2", nombre: "Bob", usuario: "bob321", mensaje: "Aprendiendo props", likes: 2 },
    { avatar: "https://i.pravatar.cc/40?img=3", nombre: "Charlie", usuario: "charlieX", mensaje: "Estilos y componentes!", likes: 7 },
    { avatar: "https://i.pravatar.cc/40?img=4", nombre: "Diana", usuario: "dianaY", mensaje: "React es genial!", likes: 3 }
  ];

  return (
    <div>
      {tuits.map((tuit, index) => (
        <Tuit key={index} {...tuit} />
      ))}
    </div>
  );
};
