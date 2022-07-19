import React from "react";
import './styles.css';
import { FiSearch } from 'react-icons/fi';
import { GoSettings } from 'react-icons/go';
import { BiMessageDetail } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';


class TopMainSection extends React.Component {
    render() {
        return(
            <div className="top-container">
                <div className="top-container-text">
                    <h1 className="name-title">Courses Dashboard</h1>
                    <p className="description">Hello AR Shakir, welcome back!</p>
                </div>
                <div className="input-container">
                    <button><FiSearch /></button>
                    <input type="text" placeholder="Search Dashboard" />
                    <button><GoSettings /></button>
                </div>
                <div className="profile-messages">
                    <button><BiMessageDetail size="25px" /></button>
                    <button><IoNotificationsOutline size="25px" /></button>
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" data-int="45" data-gender="men" class="profile-pic"></img>
                </div>
            </div>
        )
    }
}

export default TopMainSection;