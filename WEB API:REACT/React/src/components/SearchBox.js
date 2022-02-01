import React from "react";

/**
 * Creates a searchbox for the user to search for papers and authors
 * 
 * @author Matthew Flegg - w19001527
 */

class SearchBox extends React.Component {

    render() {
        return (
            <label className="SearchBox">
                Search:
                <input type='text' placeholder='search' value={this.props.search} onChange={this.props.handleSearch} />
            </label>
        )
    }
}

export default SearchBox;