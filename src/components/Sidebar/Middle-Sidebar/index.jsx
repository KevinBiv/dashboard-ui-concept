import React from "react";
import { ReactDOM } from "react";
import './styles.css';
import { BsLayers } from 'react-icons/bs';
import { BsFolder2Open } from 'react-icons/bs';
import { BsLightningCharge } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { BsTrophy } from 'react-icons/bs';


class MiddleSidebar extends React.Component {
    render() {
        return(
            <div className="middle-sidebar">
                <div className="middle-sidebar-container">

                <ul>
                    <li>
                        <button>
                            <BsLayers />
                            <div>
                                <p>My Courses</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <BsFolder2Open />
                            <div>
                                <p>Bookmarks</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <BsLightningCharge />
                            <div>
                                <p>Trending Courses</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <BiHelpCircle />
                            <div>
                                <p>Help Articles</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <BsTrophy />
                            <div>
                                <p>Completed Courses</p>
                            </div>
                        </button>
                    </li>
                </ul>

                </div>
            </div>
        )
    }
}

export default MiddleSidebar;