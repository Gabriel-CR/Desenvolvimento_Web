import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
  width: 20rem;
  box-shadow: 5px 5px 10px black;

  &:hover {
    transition: 0.1s;
    box-shadow: 10px 10px 20px black;
  }

  h2:nth-child(2) {
    text-transform: capitalize;
  }

  & > img {
    width: 15rem;
  }
`;

export const Button = styled.button`
  border: 1px solid blue;
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 1rem;
  margin: 0.5rem;
  font-weight: bold;

  &:hover {
    background-color: #72d3fa;
  }
`;
