import React from "react";
import Authors from "./Authors.js";

/**
 * Formats the response of the Papers endpoint when called in the other classes.
 * Returns the data in the form of a table.
 * 
 * 
 * 
 * @author Matthew Flegg - w19001527
 */

class Paper extends React.Component {
 constructor(props) {
     super(props)
     this.state = { display: false}
 }

 handleClick = () => {
     this.setState({display:!this.state.display})
 }

 

 render() {
     let details = ""

     let authorData = <Authors paperid={this.props.paper.PaperID} />

     if (this.state.display) {
         details = 
             <div>
                 <table>
                    <thead>
                        <tr>
                            <th><b>Abstract:</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.paper.Abstract}</td>
                        </tr>
                    </tbody>
                </table>
                <Authors paperid={this.props.paper.PaperID} />
             </div>

     }

     return(
         <div className = "PapersTable">
             <table>
                <thead>
                    <tr>
                        <th>Paper Title:</th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td onClick={this.handleClick}>{this.props.paper.Title}</td>
                    </tr>
                </tbody>
             </table>
                {details}
         </div>
     )
 }
}

export default Paper;