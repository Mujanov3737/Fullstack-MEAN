## Architecture
### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Initially, the webpages presented to the user were static HTML format, stylized with a CSS stylesheet, and delivered through the help of the Express.js framework. These files were stored in the public directory, so a user could enter the protocol, domain, and file name to access these HTML files from the server and have them displayed in the browser. Further in the development, the MVC or model-view-controller pattern was implemented in order to better organize the serving of these webpages (separation of concerns). The view portion contained the refactored handlebar templates containing the HTML code to be presented to the user. Routes are used to map HTTP requests to the controller, which then handles how and what to retrieve from the view to present to the user. 
The single-page application was built using Angular.js, which is a frontend framework suited well for SPAs. This admin page was used to view, add, or edit trip data from a user friendly interface on a single, dynamic webpage. Angular provides building blocks known as components as a way to define behavior, what is rendered, and how it is styled. The REST API can then be used to access the data from that database and passed to these components.
### Why did the backend use a NoSQL MongoDB database?
Rather than utilizing MongoDB, a relational database management system like MySQL could have just as easily fulfilled the needs of the application. However, a significant benefit to using MongoDB is that it fits well with the rest of the stack used in the application. MongoDB stores data in JSON-like documents which is an easy format to work with as the rest of the stack utilizes JavaScipt. An ODM library like Mongoose can be used to further simplify the relationship between the server environment and the database so that much of the complexity of working with data to and from the database is lessened.
## Functionality
### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON(JavaScript object notation) is a format for structuring data as an object and exchanging the formatted data between applications. This exchange of data can also occur between the front-end client side portion of a fullstack web application, and the backend server side portion. The client can interact with the interface presented to them in their browser by the server, which can result in the user sending further requests to the server. This request may be to retrieve some sort of data which the server can deliver in a JSON format so that it can then be analyzed and displayed by the user’s browser. JavaScript itself is a programming language that has a variety of uses, but is most well known for being used to modify HTML and CSS for client-side webpage rendering. Where the two overlap is in terms of syntax. The structure of objects in JavaScript is similar to how data is structured in the JSON format. This often leads to JSON being considered a “subset” of JavaScript but can be used independently of the JavaScript language. 
### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
One example of refactoring code to improve efficiency was in the use of the templating engine, Handlebars.js, to reuse HTML code for each webpage that contained common elements. The header and footer portions of the webpages were identical and navigated to the same places regardless of what webpage the client was on. Rather than including the same code in each HTML file for each webpage, a single header and footer template could be created and reused in each file for better modularity and readability.
## Testing
### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Endpoints in a web server are URLs that can be used by a client to access certain services and resources within said server. HTTP requests are made to the server’s API through these endpoints which then carry out a specific action based on how the API is configured for each endpoint. Entering an endpoint like /trips/:tripID and supplying the proper identification number for a trip will call a GET HTTP method that was defined in the API to then return and display the fields and values in JSON format of the trip with the corresponding ID. In terms of security, some of the endpoints that allowed for the adding and editing of trips first required authentication before the user could be authorized to carry out these methods. The register endpoint is configured in such a way as to require certain information from a user, such as email, name, and password, which is then validated, processed, and stored inside of the database. Following registration, a user can use the login endpoint to input the required login credentials, which then is validated against what was stored in the database from the registration endpoint. Once a user is authenticated, a token in generated to authorize the user to use these protected endpoints to add or edit trips data.
## Reflection
### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
Much of the time, courses are strictly concerned with teaching one particular topic and utilizing one particular technology. Topics covered involving learning a specific language like JavaScript, understanding how databases work with MongoDB or MySQL, or getting to know how design patterns can help solve common software development issues are all important concepts to know for a developer. However, finally having the opportunity to tie a multitude of topics, technologies, and constructs together to create a fully working full stack application has been invaluable in understanding the core concepts of a website and webserver. Having practical knowledge of how to tie these technologies together has given me more confidence in my abilities to approach any part of a full stack application and working with it to achieve technical requirements or functionality.
