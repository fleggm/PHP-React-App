import React from "react";
import Papers from "./Papers.js";

/**
 * Formats the response of the Authors endpoint when called in the other classes.
 * Returns the data in the form of a table.
 * 
 * 
 * 
 * @author Matthew Flegg - w19001527
 */

class Author extends React.Component {
    constructor(props) {
        super(props)
        this.state = { display: false }
    }

    handleClick = () => {
        this.setState({display:!this.state.display})
    }


    render() {
        let details = ""

        if (this.state.display) {
            details = 
                <div>
                  <Papers authorid={this.props.author.AuthorID} />
                </div>
        }

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th><b>Author:</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td onClick={this.handleClick}>{this.props.author.FirstName} {this.props.author.LastName}</td>
                        </tr>
                    </tbody>
                </table>
                {details}
            </div>
        )
    }
}

export default Author;