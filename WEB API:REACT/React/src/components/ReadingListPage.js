import React from "react";
import Login from "./Login.js";
import Logout from './Logout.js';
import ReadingList from "./ReadingList.js";
import SearchBox from './SearchBox.js';

/**
 * This file serves as the controller for the Reading List Page for the application.
 * This file checks that there is a valid token being given in order to allow access to the users readinglistpage. 
 * If the user has logged in, the page will display information about the logged in users ReadingList.
 * 
 * 
 * @author Matthew Flegg - w19001527
 */


class ReadingListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            authenticated: false, 
            email: "", 
            password: "",
            token: null,
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handlePassword = (e) => {
        this.setState({password:e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email:e.target.value})
    }

    handleSearch = (e) => {
        this.setState({search:e.target.value, page:1})
    }
    
    handleLoginClick = () => {
        let url = "http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/api/authenticate" 

        // Send the email and password as 'Form Data'.
        let formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
    
        // A fetch request with 'POST' method specified
        fetch(url, { method: 'POST',
                     headers : new Headers(),
                     body:formData
                   })
        .then( (response) => {
            // Successful authentication will return
            // a 200 status code.
            if (response.status === 200) {
                return response.json() 
            } else {
                throw Error(response.statusText)
            }
        })
        .then( (data) => {
            console.log(data)
    
            // If results include a token, change state
            // to authenticated
            if ("token" in data.results) {
                this.setState(
                    {
                    authenticated: true,
                    token:data.results.token
                    }
                )

                //Uses the local storage to save the token
                localStorage.setItem('myReadingListToken', data.results.token);
            }
        })
        .catch ((err) => {
            console.log("something went wrong ", err)
            }
        );
    }

    handleLogoutClick = () => {
        this.setState(
            { 
            authenticated: false,
            token:null
            }
        )
        console.log("Logged out!")
        localStorage.removeItem('myReadingListToken'); 
        
    }

    componentDidMount() {
        if(localStorage.getItem('myReadingListToken')) {
            this.setState(
                {
                authenticated:true,
                token:localStorage.getItem('myReadingListToken')
                }
            );
        }
    }
	
    render() {

        let page = (
            <Login 
                handleEmail={this.handleEmail} 
                handlePassword={this.handlePassword}
                handleLoginClick={this.handleLoginClick}
            />
        )
        if (this.state.authenticated) {
            page = (
                <div>
                    <Logout handleLogoutClick={this.handleLogoutClick} />
                    <ReadingList token={this.state.token}/>
                    
                </div>
            )
        }

        return (
            <div>{page}</div>
        )
    }
}

export default ReadingListPage;
