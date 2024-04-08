import React, { useState } from "react";

export const Search = ({ addCategory, borrar }) => {
  const [inputValue, setInputValue] = useState("");

  //   se encarga de enviar el valor del formulario
  //  recibe el evento y previene el comportamiento por defecto para evitar el refresh
  function onSubmit(e) {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // funcion prop que recibe el argumento para realizar la logica en el componente padre
    addCategory(inputValue);
    setInputValue("");
  }

  //   esta atenta a los cambios del estado del input y pasa el valor al estado
  function onInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="center">
        <input
          onChange={onInputChange}
          type="text"
          value={inputValue}
          placeholder="Buscar gif..."
        />
        <div className="button">
          <button onClick={borrar}>Borrar</button>
        </div>
      </form>
    </>
  );
};
