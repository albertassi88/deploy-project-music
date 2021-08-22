import React, { useEffect, useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';
import { AlbunsArtist } from '../services/MusicApi';
import Header from '../components/Header';
import ImagemCapa from '../components/ImagemCapa';
import Loading from '../components/Loading';
import '../style/Albuns.css';

function Albuns() {
    const [albuns, setAlbuns] = useState([]);
    const { nameArtista, setLoading, loading } = useContext(TodoContext);

    useEffect(() => {
        AlbunsArtist(nameArtista).then(data => {
            setAlbuns(data.album);
            setLoading(false);
        })
    }, [])

    return (
        <div className="album_center">
            <Header />
            <ImagemCapa />
            <h2 className="text_album">Álbuns</h2>
            <div className="container_album">
                {loading && <Loading />}
                {albuns ? albuns.map((data, index) => (
                    <div className="box_album" key={index}>
                        <h3>{`Nome: ${data.strAlbum}`}</h3>
                        <h3>{`Ano: ${data.intYearReleased}`}</h3>
                    </div>
                )): <h1>Albúns não encontrado!</h1>}
            </div>
        </div>
    )
}

export default Albuns