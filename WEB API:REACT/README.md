This project was a project created for my Web Application Integration Module. 

It entails creating a Web API using Object Oriented PHP for "Part 1", and creating a Client Application using React.JS based off the API for Part 2. 

NOTE: This source code will not work due to the names of certain files and directories being changed in order to prevent academic misconduct. 

However, a working prototype of this code is displayed in the URL's provided below. 

[**Part 1:** WEB API](http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1)

[**Part 2:** Client Application](http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part2)


Documentation for API Endpoints:

- /api endpoint: This endpoint contains information about the API and directs you to either the homepage or the documentationpage.

- /api/papers : This endpoint returns a list of papers in the database. 
- /api/papers?id= : Returns the papers with that specific id.
- /api/papers?authorid= : Returns the papers that the author with that id wrote.
- /api/papers?award=all : Returns all papers that have won an award
- /api/papers?award=(int) : Returns all papers that have won that specific award.

- /api/authors : Returns a list of authors in the database.
- /api/authors?id= : Returns authors with specified id
- /api/authors?paperid= : Returns authors that wrote the specified paper

- /api/authenticate : This endpoint supports POST requests and 2 parameters: A username and a password. In this case an email is used as the username. When parameters are correctly inputted, the endpoint returns a JSON web token including an expiry date and a unique server key.

- /api/readinglist : This endpoint supports POST requests with a valid JSON web token. This endpoint also allows the users to add or remove a paper from their personal reading list. 


## **Part 2: Client Application**

- Home: The main landing page for the application can be accessed at: http:unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part2/
This page links to other pages and contains a footer which stores information. 

- Papers: This page is the hub for the papers endpoint. It has a menu and footer consistent with the Home page. 

- Authors: This page is the hub for the authors endpoint. It has a menu and footer consistent with the Home page. 



- Home: Displays a random paper and details from the papers endpoint.

- Papers: Displays a filtered list of papers from the papers endpoint, and contains a variety of features such as a search feature and sort by award won feature. To access further information you can click on the paper title and the abstract and authors of the paper will be displayed.

- Authors: Displays a filtered list of authors from the authors endpoint. Contains a search feature which allows the user to search for specific authors. When clicking on the author it displays the titles of books that they have written. If you click on the title of the paper it also shows the abstract of the paper.



- Functionalities: Keeping the user logged in even when navigating elsewhere, uses localstorage to store the web token and removes the web token when logged out. Once logged in, they can add, remove, and view which papers they would like on their reading list. 

    Example username and password: username - john@example.com  password- johnpassword