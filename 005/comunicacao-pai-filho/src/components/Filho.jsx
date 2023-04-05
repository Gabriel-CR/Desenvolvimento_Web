import { useState } from "react";

const Filho = ({ falarComPai }) => {
  const [msg, setMsg] = useState("");

  return (
    <div>
      <h1>Filho</h1>
      <input
        placeholder="Digite uma mensagem para seu pai"
        type="text"
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
      />
      <button onClick={() => falarComPai(msg)}>
        Enviar mensagem para o Pai
      </button>
    </div>
  );
};

export default Filho;
