import React, { useState, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { contextMain } from '../context/ContextMain';
import { FaSearch } from 'react-icons/fa';
import logo from '../logo.png';
import { topics } from '../App';

const Header = () => {

    const [inputData, setInputData] = useState("");
    const [buttonState, setButtonState] = useState(true);
    const [interval,setInterval] = useState();
    const { btnBack } = useContext(contextMain);
    const navigate = useNavigate();

    const handleInput = (e) => {
        setInputData(e.target.value);
        if (e.target.value !== '') {
            setButtonState(false);
        } else {
            setButtonState(true);
        }
    }

    const debounce = (e)=>{
        handleInput(e);
        if(interval) clearInterval(interval);
        if(!e.target.value)return;
        const newInterval = setTimeout(()=>{
            navigate(`search/${e.target.value}`);
        },700);
        setInterval(newInterval);
    }


    return (
        <div className='header'>
            <div className='logo'><Link to='/'><img className='logoMain' src={logo} alt='logo'/></Link></div>

            <div className="search">
                <input type='text' className="searchTerm" value={inputData} placeholder="What are you looking for?" onChange={debounce} />
                <Link to={`search/${inputData}`}><button className="searchButton" disabled={buttonState}><FaSearch /></button></Link>
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