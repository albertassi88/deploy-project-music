import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import '../style/ImagemCapa.css';

function ImagemCapa() {
    const { imagemArtista } = useContext(TodoContext);

    return (
        <img className="img_capa" src={imagemArtista} alt="foto"/>
    );  
}

export default ImagemCapa;