import React, { useEffect, useState, useContext } from 'react';
import { ArtistName } from '../services/MusicApi';
import TodoContext from '../context/TodoContext';
import Header from '../components/Header';
import ImagemCapa from '../components/ImagemCapa';
import Loading from '../components/Loading';
import { useHistory } from "react-router-dom";
import '../style/Artistas.css';

function Artistas() {
    const history = useHistory();
    const [ artista, setArtista ] = useState([]);
    const { nameArtista, setIdArtista, setImagemArtista, setLoading, loading } = useContext(TodoContext);

    useEffect(() => {
        ArtistName(nameArtista).then(data => {
            setArtista(data.artists);
            setIdArtista(data.artists[0].idArtist);
            setImagemArtista(data.artists[0].strArtistBanner);
            setLoading(false);            
        }).catch(() => {
            alert("Artista não encontrado!");            
        })
    }, [])    
    
    return (
        <div>
            <Header />           
            <div className="container_artistas">
                {loading && <Loading />}
                {artista ? artista.map((data, index) => (
                    <div className="box_artistas" key={index}>
                        <ImagemCapa />
                        <h2>{data.strArtist}</h2>
                        <div className="text_box">
                            <p>{data.strBiographyPT}</p>                        
                            <img className="img_box" src={data.strArtistFanart} alt="foto"/>
                        </div>
                    </div>
                )): history.push("/")}
            </div>
        </div>
    )
}

export default Artistas