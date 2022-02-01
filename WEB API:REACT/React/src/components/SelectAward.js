import React from "react";

/**
* A dropdown list for selecting papers by awards that they have won
*
* The languages are hard coded here and match those in the database. There is
* currently no 'languages' API endpoint that could be used for fetching an
* up to date list of languages.
*
* @author Matthew Flegg - W19001527
*/

class SelectAward extends React.Component {

    render() {
        return (
            <label className="DropDown">
                Award:
                <select value={this.props.Award} onChange={this.props.handleAwardSelect}>
                    <option value="">Any</option>
                    <option value="Best paper">Best paper</option>
                    <option value="Best paper honourable mention">Best paper honourable mention</option>
                    <option value="Best pictorial">Best pictorial</option>
                    <option value="Best pictorial honourable mention">Best pictorial honourable mention</option>
                    <option value="Special recognition for diversity and inclusion">Special recognition for diversity and inclusion</option>
                </select>
            </label>
                
        )
    }
}

export default SelectAward;