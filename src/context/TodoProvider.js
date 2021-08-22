import React, { useState } from 'react';
import TodoContext from './TodoContext';

function TodoProvider({ children }) {
  const [nameArtista, setNameArtista] = useState('');
  const [idArtista, setIdArtista] = useState('');
  const [imagemArtista, setImagemArtista] = useState('');
  const [loading, setLoading] = useState(true);

  function hundleInputName(name) {
    setNameArtista(name)    
  } 

  const context = {
    nameArtista,
    hundleInputName,
    idArtista,
    setIdArtista,
    setImagemArtista,
    imagemArtista,
    setLoading,
    loading
  };

  return (
    <div>
      <TodoContext.Provider value={ context }>
        {children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;