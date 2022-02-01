import React from "react";
import Author from "./Author.js";

/**
 *  Connects to the Web API's authors endpoint
 *  A fetch statement is then used to return the JSON data from the database and returns a list of the Authors.
 *  Functions are also created such as filtersearch and an alphabetical sort to sort what the array returns.
 * 
 * @author Matthew Flegg - w19001527
 */

class Authors extends React.Component {
    
    constructor(props){
        super(props)
        this.state = { results:[] }
    }

    componentDidMount() {
        let url = "http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/api/authors" 


        if (this.props.paperid !== undefined) {
            url += "?paperid=" + this.props.paperid
        }

        fetch(url)
        .then( (response) => { 
            if (response.status === 200) {
                return response.json() 
            } else {
                throw Error(response.statusText)
            }
        })
        .then( (data) => {
            this.setState({results:data.results})
        })
        .catch ((err) => { 
            console.log("something went wrong ", err) 
        });

    }

    


    filterSearch = (s) => {
        let fullName = s.FirstName.toLowerCase() + " " + s.LastName.toLowerCase()
        return ( fullName.includes(this.props.search.toLowerCase()) )
    }
    
    render() {

        let filteredResults = this.state.results
   
        if ((filteredResults.length > 0) && (this.props.search !== undefined)) {
           filteredResults = filteredResults.filter(this.filterSearch) 
        }

        //Alphabetically sorts the results
        filteredResults = filteredResults.sort(function(a, b){
            if(a.LastName < b.LastName) { return -1; }
            if(a.LastName > b.LastName) { return 1; }
            return 0;
        })

        let buttons = ""
        let pageCounter = ""

     if (this.props.page !== undefined) {
        const pageSize = 10
        let pageMax = this.props.page * pageSize
        let pageMin = pageMax - pageSize
        let maxPage = Math.ceil(filteredResults.length / pageSize)
        filteredResults = filteredResults.slice(pageMin,pageMax)
        buttons = (
            <div>
                <button onClick={this.props.handlePreviousClick} disabled={this.props.page <= 1}>Previous</button>
                <button onClick={this.props.handleNextClick}>Next</button>
            </div>
        )
        

        let currentPage = this.props.page

        pageCounter = (
            <div className="pageCounter">
                <p>Page: {currentPage} of {maxPage}</p>
            </div>
        )
    }

        
   
        return (
            <div>
               {filteredResults.map( (author, i) => (<Author key={author.FirstName+author.LastName} author={author}/>) )}
               {buttons}
               {pageCounter}
            </div>
        )
    }
   }
   
export default Authors;