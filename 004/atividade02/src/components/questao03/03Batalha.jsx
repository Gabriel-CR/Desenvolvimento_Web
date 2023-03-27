import { Children } from "react";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    max-width: 40vw;
    max-height: 100px;
  }
`;

const Hero = ({ name, img, alt }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={alt} />
    </div>
  );
};

const Enemy = ({ name, img, alt }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={alt} />
    </div>
  );
};

const Arena = ({ nome, children }) => {
  return (
    <div>
      <h1>{nome}</h1>
      <Center>
        {Children.map(children, (child) => {
          return child;
        })}
      </Center>
    </div>
  );
};

const World = ({ children }) => {
  return <div>{children}</div>;
};

export { World, Arena, Hero, Enemy };
