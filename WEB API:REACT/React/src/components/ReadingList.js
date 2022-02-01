import React from "react";
import Paper from "./Paper";
import CheckBox from "./Checkbox";

/**
 * This file returns a list of papers and the readinglist of the user that is logged in and verified on readinglistPage.
 * 
 * It also takes the Checkbox as a parameter and displays it next to the list of papers for the users to click.
 * 
 * 
 * @author Matthew Flegg - w19001527
 */

class ReadingList extends React.Component {
 
    constructor(props){
        super(props)
        this.state = {
          readinglist : [],
          results : []
        }
    }
   
    componentDidMount() {
        let url = "http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/api/papers" 

        fetch(url)
        .then( (response) => {
            if (response.status === 200) {
                return response.json() 
            } else {
                throw Error(response.statusText);
            }
        })
        .then( (data) => {
            this.setState({results:data.results})
        })
        .catch ((err) => { 
            console.log("something went wrong ", err) 
        });

        url = "http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

        let formData = new FormData();
        formData.append('token', this.props.token);
        console.log(this.props.token)
    
        fetch(url, {    method: 'POST',
                        headers : new Headers(),
                        body:formData})
        .then( (response) => {
            if (response.status === 200) {
                return response.json() 
            } else {
                throw Error(response.statusText);
            }
         })
         .then( (data) => {
            this.setState({readinglist:data.results})
               })
         .catch ((err) => { 
                   console.log("something went wrong ", err) 
         });
    }

    render() {

        let filteredResults = this.state.results;

        if ((filteredResults.length > 0) && (this.props.search !== undefined)) {
            filteredResults = filteredResults.filter(this.filterSearch) 
        }

            //Alphabetically sorts the results
            filteredResults = filteredResults.sort(function(a, b){
            if(a.Title < b.Title) { return -1; }
            if(a.Title > b.Title) { return 1; }
            return 0;
            })
            

        return (
            <div>
                {this.state.results.map( (paper) => ( 
                    <div key={paper.PaperID}>
                        <CheckBox readinglist={this.state.readinglist} paper_id={paper.PaperID} />
                        <Paper  search={this.state.search} page={this.state.page} paper={paper}/> 
                    </div>
                    )
                )}
            </div>
        )
    }
}
   
export default ReadingList;