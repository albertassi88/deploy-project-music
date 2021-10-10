import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TodoContext from '../context/TodoContext';
import '../style/Header.css';

function Header() {
    const { setLoading } = useContext(TodoContext);
    function alterLoading() {
        setLoading(true)
    }

    return (
        <header className="Header">
            <nav>
                <Link to="/" onClick={alterLoading}>Home</Link>
                <Link to="/albuns" onClick={alterLoading}>Álbuns</Link>
                <Link to="/videos" onClick={alterLoading}>Vídeos</Link>
            </nav>
        </header>
    ); 
}

export default Header;