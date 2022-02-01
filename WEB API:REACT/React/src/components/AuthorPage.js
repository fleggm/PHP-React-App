import React from "react";
import Authors from "./Authors.js";
import SearchBox from "./SearchBox.js";

/**
 * 
 * This Page is the main controller for the Authors Page of the application.
 * The constructor takes 2 parameters - Search and Page. These are the filters for the results returned in the Authors class.
 * The main purpose of this page is to format the data from the /papers endpoint in the API in a concise and well designed manner.
 * 
 * handleSearch was created in order to provide the user with the ability to search for an Author by name.
 * 
 * 
 * @author Matthew Flegg - w19001527
 */

class AuthorPage extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           search: "",
           page: 1
       }
       this.handleSearch = this.handleSearch.bind(this);
       this.handleNextClick = this.handleNextClick.bind(this);
       this.handlePreviousClick = this.handlePreviousClick.bind(this);
   }

   handleSearch = (e) => {
       this.setState({search:e.target.value})
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
               <Authors search={this.state.search}
                        page={this.state.page}
                        handleNextClick={this.handleNextClick} 
                        handlePreviousClick={this.handlePreviousClick}/> 
           </div>
       )
   }
}

export default AuthorPage;