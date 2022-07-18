import React from 'react';
import ReactDOM from 'react-dom/client';
import BottomSidebar from './Bottom-Sidebar';
import MiddleSidebar from './Middle-Sidebar';
import './Sidebar.css';
import TopSidebar from './Top-Sidebar';

class Sidebar extends React.Component {
    render() {
        return(
            <div className='sidebar'>
                <TopSidebar />
                <MiddleSidebar />
                <BottomSidebar />
            </div>
        )
    }
}

export default Sidebar;