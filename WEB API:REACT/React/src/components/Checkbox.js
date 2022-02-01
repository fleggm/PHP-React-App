import React from "react";

/**
 * This file serves as a helper for the Reading List page. 
 * 
 * The functions created on this page give functionality to the user to add, edit, and remove 
 * papers from their reading list using the web app.
 * 
 * The checkbox is returned at the bottom for each of the papers which can be checked on and off the list.
 * 
 * 
 * @author Matthew Flegg -w19001527
 */

class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked:false}
    }
   
    componentDidMount() {
        let filteredList = this.props.readinglist.filter((item) => (this.isOnList(item)))
        if (filteredList.length > 0) {
            this.setState({checked:true})
        } 
    }
    
    isOnList = (item) => {
        return (item.paper_id === this.props.paper_id)
    }

    handleOnChange = () => {
        if (this.state.checked) {
            this.removeFromReadingList()
        } else {
            this.addToReadingList()
        }
    }

    addToReadingList = () => {   
        let url = "http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"
    
        let formData = new FormData();
        formData.append('token', localStorage.getItem('myReadingListToken'));
        formData.append('add', this.props.paper_id);
    
        fetch(url, {   method: 'POST',
            headers : new Headers(),
            body:formData})
            .then( (response) => { 
                if ((response.status === 200) || (response.status === 204)) {
                    this.setState({checked:!this.state.checked})
                } else {
                    throw Error(response.statusText);
                }
            })
            .catch ((err) => { 
                console.log("something went wrong ", err) 
            });
        }
    
    removeFromReadingList = () => {
        let url = "http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"
         
        let formData = new FormData();
        formData.append('token', localStorage.getItem('myReadingListToken'));
        formData.append('remove', this.props.paper_id);
    
        fetch(url, {  method: 'POST',
                      headers : new Headers(),
                      body:formData})
        .then( (response) => {
            if ((response.status === 200) || (response.status === 204)) {
                this.setState({checked:!this.state.checked})
            } else {
                throw Error(response.statusText);
            }
        })
        .catch ((err) => { 
            console.log("something went wrong ", err) 
        });
    }

    render() {
        return (
            <input 
              type="checkbox" 
              id="readlist" 
              name="readlist" 
              value="paper" 
              checked={this.state.checked}
              onChange={this.handleOnChange}
            />
        )
    }
}
    
export default CheckBox;
    