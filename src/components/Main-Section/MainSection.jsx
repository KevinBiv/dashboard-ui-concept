import React from "react";
import BottomMainSection from "./Bottom-Main-Section";
import './MainSection.css';
import MiddleMainSection from "./Middle-Main-Section";
import TopMainSection from "./Top-Main-Section";


class MainSection extends React.Component {
    render() {
        return(
            <div className="main-section">
                <TopMainSection />
                <MiddleMainSection />
                <BottomMainSection />
            </div>
        )
    }
}

export default MainSection;