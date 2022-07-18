import React from "react";
import './styles.css';
import { TbMessageCircle2 } from 'react-icons/tb';


class BottomSidebar extends React.Component {
    render() {
        return(
            <div className="bottom-sidebar">
                <div className="bottom-sidebar-container">
                    <div className="title">
                        <h2>My Tutors</h2>

                    </div>
                    <section className="tutors">
                        <div className="tutor">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" data-int="68" data-gender="women" class="tutor-img" />
                            <div className="name-role">
                                <p className="name">Kathryn Murphy</p>
                                <p className="role">PHP Developer</p>
                            </div>
                            <TbMessageCircle2 />
                        </div>
                        <div className="tutor">
                            <img src="https://randomuser.me/api/portraits/men/80.jpg" data-int="80" data-gender="men" class="tutor-img" />
                            <div className="name-role">
                                <p className="name">Annette Black</p>
                                <p className="role">Python Developer</p>
                            </div>
                            <TbMessageCircle2 />
                        </div>
                        <div className="tutor">
                            <img src="https://randomuser.me/api/portraits/men/74.jpg" data-int="74" data-gender="men" class="tutor-img" />
                            <div className="name-role">
                                <p className="name">Eleanor Pena</p>
                                <p className="role">UI Designer</p>
                            </div>
                            <TbMessageCircle2 />
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default BottomSidebar;