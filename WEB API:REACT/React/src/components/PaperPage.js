import React from "react";
import Papers from "./Papers.js";
import SelectAward from "./SelectAward.js";
import SearchBox from "./SearchBox.js";

/**
 * This Page is the main controller for the Paper Page of the application.
 * The constructor takes 3 parameters - Award, Search, and Page, these are the filters for the results returned in the Papers class.
 * The main purpose of this page is to format the data from the /papers endpoint in the API in a concise and well designed manner.
 * 
 * handleSearch, handleAwardSelect, and other functions were created in order to provide the user with specific filters to help with searching for data.
 * 
 * 
 * @author Matthew Flegg - w19001527
 */

class PaperPage extends React.Component {
 constructor(props) {
     super(props)
     this.state = {
         Award: "",
         search: "",
         page: 1
     }
     this.handleAwardSelect = this.handleAwardSelect.bind(this);
     this.handleSearch = this.handleSearch.bind(this);
     this.handleNextClick = this.handleNextClick.bind(this);
     this.handlePreviousClick = this.handlePreviousClick.bind(this);
 }

 handleSearch = (e) => {
    this.setState({search:e.target.value, page:1})
}

handleAwardSelect = (e) => {
    this.setState({Award:e.target.value, page:1})
}

 handleNextClick = () => {
     this.setState({page:this.state.page+1})
 }

 handlePreviousClick = () => {
     this.setState({page:this.state.page-1})
 }

 render() {
     return (
        <div>
        <SearchBox search={this.state.search} handleSearch={this.handleSearch} />
        <SelectAward Award={this.state.Award} handleAwardSelect={this.handleAwardSelect} />
        <Papers 
          Award={this.state.Award} 
          search={this.state.search} 
          page={this.state.page} 
          handleNextClick={this.handleNextClick} 
          handlePreviousClick={this.handlePreviousClick} 
       />
    </div>
     )
 }
}

export default PaperPage;