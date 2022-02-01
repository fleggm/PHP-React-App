import React from "react";
import Paper from "./Paper.js";

/**
 *  Connects to the Web API's papers endpoint
 *  A fetch statement is then used to return the JSON data from the database and returns a list of the Papers.
 *  Functions are also created such as filtersearch, filterbyaward, and an alphabetical sort to sort what the array returns.
 * 
 * @author Matthew Flegg - w19001527
 */

class Papers extends React.Component {

 constructor(props){
     super(props)
     this.state = {
         results : []
     }
 }

 componentDidMount() {
     let url = "http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/api/papers" 

     if (this.props.authorid !== undefined) {
         url += "?authorid=" + this.props.authorid
     }

     fetch(url)
     .then( (response) => {
         if (response.status === 200) {
             return response.json() 
         } else {
             throw Error(response.statusText);
         }
     })
     .then( (data) => {
         if (this.props.randomPaper) {
             const randomPaperId = Math.floor(Math.random() * data.results.length)
             this.setState({results:[data.results[randomPaperId]]})
         } else {
             this.setState({results:data.results})
         } 
     })
     .catch ((err) => { 
         console.log("something went wrong ", err) 
     });
 }


 filterByAward = (paper) => {
     return ((paper.Award === this.props.Award) || (this.props.Award===""))
 }
 

 filterSearch = (s) => {
     return s.Title.toLowerCase().includes(this.props.search.toLowerCase()),
     s.Abstract.toLowerCase().includes(this.props.search.toLowerCase())
 }

 render() {
     let noData = "" 
     if (this.state.results.length === 0) {
             noData = <p>No data</p>
     }

        let filteredResults = this.state.results

    if (this.props.Award !== undefined) {
            filteredResults = filteredResults.filter(this.filterByAward)
        }
        

     if ((filteredResults.length > 0) && (this.props.search !== undefined)) {
         filteredResults = filteredResults.filter(this.filterSearch) 
     }
     
     //Alphabetically sorts the results
     filteredResults = filteredResults.sort(function(a, b){
        if(a.Title < b.Title) { return -1; }
        if(a.Title > b.Title) { return 1; }
        return 0;
    })

     let buttons = ""
     let pageCounter = ""
     let helpernote = ""

     if (this.props.page !== undefined) {
        const pageSize = 10
        let pageMax = this.props.page * pageSize
        let pageMin = pageMax - pageSize
        buttons = (
            <div>
                <button onClick={this.props.handlePreviousClick} disabled={this.props.page <= 1}>Previous</button>
                <button onClick={this.props.handleNextClick} disabled = {this.props.page >= Math.ceil(filteredResults.length / pageSize)}>Next</button>
            </div>
        )
        let maxPage = Math.ceil(filteredResults.length / pageSize)
        filteredResults = filteredResults.slice(pageMin,pageMax)

        let currentPage = this.props.page

        

        pageCounter = (
            <div className="pageCounter">
                <p>{currentPage} of {maxPage}</p>
            </div>
        )

        helpernote = (
            <div className="helpernote">
                <p>Click on a Paper Title to see it's contents!</p>
            </div>
        )
    }

     return (
         <div>
             {noData}
             {filteredResults.map( (paper, i) => (<Paper key={paper.Title} paper={paper}/>) )}
             {buttons}
             {pageCounter}
             {helpernote}
         </div>
     )
 }
}

export default Papers;