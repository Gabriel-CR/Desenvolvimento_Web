import { Children, cloneElement } from "react";

const Supermercado = ({ nome, children }) => {
  return (
    <div>
      <h1>Supermercado {nome}</h1>
      {/* VERSAO 1
        {Children.map(children, (child) => {
            return <div style={{ backgroundColor: "gray" }}>{child}</div>;
        })} 
      */}
      {/* COLOCANDO PROPS */}
      {Children.map(children, (child) => {
        return cloneElement(child, { supermercado: nome });
      })}
      {/* {children} */}
    </div>
  );
};

const Legume = ({ nome, supermercado }) => {
  return (
    <div>
      Legume {nome} do Supermercado {supermercado}
    </div>
  );
};

const Bebida = ({ nome }) => {
  return <div>Bebida {nome}</div>;
};

export { Supermercado, Legume, Bebida };
