import React from "react";
import './MainSection.css';
import MiddleMainSection from "./Middle-Main-Section";
import TopMainSection from "./Top-Main-Section";


class MainSection extends React.Component {
    render() {
        return(
            <div className="main-section">
                <TopMainSection />
                <MiddleMainSection />
            </div>
        )
    }
}

export default MainSection;