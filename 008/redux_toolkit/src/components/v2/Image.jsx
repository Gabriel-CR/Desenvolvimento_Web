import { useSelector } from "react-redux";

const Image = () => {
  const id = useSelector((state) => state.id.value);

  return (
    <>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="image"
        style={{ width: "400px" }}
      />
    </>
  );
};

export default Image;
