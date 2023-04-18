import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container } from "./style";

const PokemonAxios = () => {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => {
        setName(resp.data.name);
        setImage1(resp.data.sprites.front_default);
        setImage2(resp.data.sprites.back_default);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <Card>
        <h2>ID: {id}</h2>
        <h2>Nome: {name}</h2>
        <img src={image1} alt="pokemon" />
        <img src={image2} alt="pokemon" />
        <div>
          <Button onClick={() => setId((prev) => prev + 1)}>Aumentar ID</Button>
          <Button onClick={() => setId((prev) => prev - 1)} disabled={id < 2}>
            Diminuir ID
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default PokemonAxios;
