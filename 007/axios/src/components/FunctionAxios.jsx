import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container } from "./style";

const FunctionAxios = () => {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => {
        setName(resp.data.name);
        setImage(resp.data.sprites.front_default);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <Card>
        <h2>ID: {id}</h2>
        <h2>Nome: {name}</h2>
        <img src={image} alt="pokemon" />
        <div>
          <Button onClick={() => setId(id + 1)}>Aumentar ID</Button>
          <Button onClick={() => setId(id - 1)} disabled={id < 2}>
            Diminuir ID
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default FunctionAxios;
