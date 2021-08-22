import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import '../style/Home.css'
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Home() {
    const { hundleInputName, setLoading } = useContext(TodoContext);
    
    const renderInput = () => (
        <div className="input_home">
            <input 
              type="text" 
              placeholder="O que você quer ouvir?" 
              onChange={({ target }) => hundleInputName(target.value.replace(" ", ""), setLoading(true))}
            />
            <Link to="/artistas">
                <BsIcons.BsSearch />   
            </Link>
        </div>   
    )

    return(
        <div className="container_home">
            {renderInput()} 
        </div >
    )
}

export default Home