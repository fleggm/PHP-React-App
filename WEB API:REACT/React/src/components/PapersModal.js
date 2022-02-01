import React from 'react';
import Authors from './Authors.js';
import Paper from './Paper.js';

/**
 * This file is intended to be used as a modal for the papers and authors pages. It returns a table with information from each endpoint that can be used in the other tables.
 * 
 * 
 * @author Matthew Flegg - w19001527
 */

class PapersModal extends React.Component {
    render() {
      return (
        <div className="modal-body">
                 <table>
                     <thead>
                         <tr>
                             <th>Abstract</th>
                             <th>Paper ID:</th>
                             <th>Authors:</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td>{this.props.paper.Abstract}</td>
                             <td>{this.props.paper.PaperID}</td>
                             <td><Authors paperid={this.props.paper.PaperID}/></td>
                         </tr>
                     </tbody>
                 </table>
             </div>
      );
    }
  }

export default PapersModal;