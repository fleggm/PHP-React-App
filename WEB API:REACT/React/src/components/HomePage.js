import React from "react";
import Papers from './Papers.js'
import earthImage from '../earthImage.jpg';

/**
 * This page serves as the homepage for the application.
 * It takes the Papers class and returns a randomPaper to be displayed on the HomePage.
 * JSX is also used to display an image and give credit to the artist.
 * 
 * 
 * @author Matthew Flegg - w19001527
 */

class HomePage extends React.Component {

    render(){
        let helpernote = ""
        helpernote = (
            <div className="helpernote">
                <p>Click on a Paper Title to see it's contents!</p>
            </div>
        )
        return(
            <div>
                <Papers randomPaper={true} />
                <img src={earthImage} className="earth" alt="earth" />
                <p className="HomeText">
                 Image by <a className = "a-Text" href="https://pixabay.com/users/qimono-1962238/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1756274">Arek Socha</a> from <a className = "a-Text" href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1756274">Pixabay</a>
                </p>
                {helpernote}
            </div>
        )
    }
}

export default HomePage;