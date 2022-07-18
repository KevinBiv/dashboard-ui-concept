import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { BsLayers } from 'react-icons/bs';
 
class TopSidebar extends React.Component {
    render() {
        return(
            <div className="top-sidebar">
                <div className="container">
                    <BsLayers size="4.5em" className='logo' />
                    <h1 className='company-name'>Orizon academy</h1>
                    <p className='company-slogan'>Learning with fun</p>
                </div>
            </div>
        )
    }
}

export default TopSidebar;