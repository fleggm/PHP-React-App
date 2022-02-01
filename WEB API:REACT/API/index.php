<?php 
include 'config/config.php';

/**
 * This file serves as the main hub for the Web API.
 * It uses a switch case to determine which controller will be used for certain endpoints.
 * 
 * The if statement at the top of the file determines whether the endpoint is for an API endpoint or not, 
 * and subsequently changes the output of the page to be formatted in either JSON or HTML 
 * 
 * 
 * 
 * @author - Matthew Flegg - W19001527
 */

$request = new Request();

    if (substr($request->getPath(),0,3) === "api") {
        $response = new JSONResponse();
    } else {
        $response = new HTMLResponse();
        set_exception_handler("HTMLexceptionHandler");
    } 

switch($request->getPath()){
    case '':
        $controller = new HomeController($request, $response);
        break;
           
    case 'contact':
        $controller = new ContactController($request, $response);
        break;

    case 'documentation':
        $controller = new DocumentationController($request, $response);
        break;

    case 'api':
        $controller = new ApiBaseController($request, $response);
        break; 

    case 'api/papers':
        $controller = new ApiPapersController($request, $response);
        break;

    case 'api/authors':
        $controller = new ApiAuthorsController($request, $response);
         break;

    case 'api/authenticate':
        $controller = new ApiAuthenticateController($request, $response);
         break;

    case 'api/readinglist':
        $controller = new ApiReadingListController($request, $response);
         break;

    default:
        $controller = new ErrorController($request, $response);
        break;
}

echo $response->getData();


