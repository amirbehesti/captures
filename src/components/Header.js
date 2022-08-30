import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextMain } from '../context/ContextMain';
import { FaSearch } from 'react-icons/fa';
import logo from '../logo.png';
import { topics } from '../App';

const Header = () => {

    const [inputData, setInputData] = useState("");
    const [buttonState, setButtonState] = useState(true);
    const { btnBack } = useContext(contextMain);


    const handleInput = (e) => {
        setInputData(e.target.value);
        if (e.target.value !== '') {
            setButtonState(false);
        } else {
            setButtonState(true);
        }
    }



    return (
        <div className='header'>
            <div className='logo'><Link to='/random'><img className='logoMain' src={logo} /></Link></div>

            <div class="search">
                <input type='text' className="searchTerm" value={inputData} placeholder="What are you looking for?" onChange={handleInput} />
                <Link to={`/${inputData}`}><button className="searchButton" disabled={buttonState}><FaSearch /></button></Link>
            </div>

            <div className='linkBox'>
                {
                    topics && topics.map((topic, index) => {
                        return (
                            <Link to={`/${topic.toLowerCase()}`} key={index}>
                                <button className="linkButton" style={btnBack === topic.split(" ")[0].toLowerCase() ? { background: "#2c974b" } : {}}>{topic.split(" ")[0].toLowerCase()[0].toUpperCase() + topic.split(" ")[0].toLowerCase().substring(1)}</button>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )

}


export default Header