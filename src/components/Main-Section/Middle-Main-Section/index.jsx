import React from "react";
import './styles.css';
import { BsBookmark } from 'react-icons/bs';
import { TbMessageCircle2 } from 'react-icons/tb';
import Card from "../Card";
import php from '../../../resources/php-image.png';
import darrel from '../../../resources/91.jpg';
import USA from '../../../resources/USA.jpg';


class MiddleMainSection extends React.Component {
    render() {
        return(
            <div className="middle-container">

                <div className="top-middle-container">
                    <div>
                        <div className="top-middle-title">
                            <h3>Your Courses</h3>
                            <button className="premium-btn">PREMIUM</button>
                        </div>
                        <div>
                            <p>26 courses</p>
                        </div>
                    </div>
                    <div className="bookmark-search">
                        <BsBookmark className="bookmark" />
                        <TbMessageCircle2 />
                    </div>
                </div>

                <div className="middle-middle-container">
                    <Card cardPicture={php} level="BEGINNERS" technology="Fun with PHP" picture={darrel} name="Darrel Steward" percentage="68%" ratio="19/26" flag={USA} />
                    {/* <Card cardPicture={php} level="BEGINNERS" technology="Fun with PHP" picture={darrel} name="Darrel Steward" percentage="68%" ratio="19/26" flag={USA} />
                    <Card cardPicture={php} level="BEGINNERS" technology="Fun with PHP" picture={darrel} name="Darrel Steward" percentage="68%" ratio="19/26" flag={USA} /> */}
                </div>

            </div>
        )
    }
}

export default MiddleMainSection;