import React from 'react';

/**
 * This page is returned when a page cannot be found.
 * 
 * @author Matthew Flegg -w19001527
 */


class NotFound extends React.Component {

    render(){
        return(
            <div>
                <p>
                    This page does not exist! Please navigate back to Home, Film, or Actors screen.
                </p>
            </div>
        )
    }
}

export default NotFound;