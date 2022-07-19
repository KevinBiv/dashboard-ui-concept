import React from "react";
import './styles.css';
import php from '../../../resources/php-image.png';
import darell from '../../../resources/91.jpg';
import USA from '../../../resources/USA.jpg';


class Card extends React.Component {
    render() {
        return(
            <div className="card-container">
                <div className="card">
                    <div className="top-section">
                        <img src={this.props.cardPicture} alt="" />
                        <div className="top-section-text">
                            <p>{this.props.level}</p>
                            <h4>{this.props.technology}</h4>
                        </div>
                    </div>
                    <div className="middle-section">
                        <p>by</p>
                        
                        <div className="profile">
                            <img className="profile-img" src={this.props.picture} alt="" />
                            <p>{this.props.name}</p>
                        </div>
                    </div>
                    <hr className="line" />

                    <div className="bottom-section">
                        <p>{this.props.percentage}</p>
                        <p>{this.props.ratio}</p>
                        <img className="flag" src={this.props.flag} alt="" />
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Card;