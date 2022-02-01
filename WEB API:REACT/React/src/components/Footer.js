import React from 'react';

/**
 * This file creates a footer for the bottom of all of the webpages.
 * 
 * 
 * @author Matthew Flegg - w19001527
 */


class Footer extends React.Component {

    render(){
        return(
            <div className = 'footer'>
                <footer>
                    <div>
                        <p className='footerP'>Matthew Flegg - Student ID: W19001527</p>
                        <p className='footerP'>This work has been created for the module KF6012 Web Application Integration at Northumbria University. This work is not associated with or endorsed by the DIS conference.</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;