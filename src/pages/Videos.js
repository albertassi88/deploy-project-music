import React, { useEffect, useState, useContext } from 'react';
import { VideosArtist } from '../services/MusicApi';
import TodoContext from '../context/TodoContext';
import Header from '../components/Header';
import ImagemCapa from '../components/ImagemCapa';
import Loading from '../components/Loading';
import '../style/Videos.css';

function Videos() {
    const [ videos, setVideos ] = useState([]);
    const { idArtista, setLoading, loading } = useContext(TodoContext);

    useEffect(() => {
        VideosArtist(idArtista).then(data => {
            setVideos(data.mvids);
            setLoading(false);
        })
    }, [])

    return (
        <div className="video_center">
            <Header />
            <ImagemCapa />
            <div className="container_video">
                {loading && <Loading />}
                {videos ? videos.map((data, index) => (
                    <div key={index} class="box_video">
                    <h2>{data.strTrack}</h2>
                    <iframe 
                        src={data.strMusicVid.replace('watch?v=', 'embed/')} 
                        width="420"                     
                        title='video'                   
                    />
                </div>
                )): <h1>Vídeos não encontrado!</h1>}
            </div>
        </div>
    )
}

export default Videos