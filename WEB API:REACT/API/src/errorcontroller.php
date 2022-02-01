<?php
/**
 * This class takes the $request from the webpage.
 * It then determines whether the /api endpoint is used, 
 * then determines which error page to return between JSON and HTML.
 * 
 * @author Matthew Flegg w19001527
 */
class ErrorController extends Controller{

    protected function processRequest(){
        
        if(substr($this->getRequest()->getPath(),0,3) === "api"){
            $myArray['ERROR'] = "This is not a valid page.";
            $myArray['message'] = "Path ".$this->getRequest()->getPath()." not found";
            $myArray['HomePage'] = "http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1";
            $myArray['DocumentationPage'] = "http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/documentation";
            return $myArray;
    }   else {
        $htmlErrorPage = new HomePage("HomePage", BASEPATH . "/assets/style.css", "Hello User", "This page does not exist!");
        echo $htmlErrorPage->addParagraph("Page: <em>".$this->getRequest()->getPath()."</em> was not found");
        echo $htmlErrorPage->addParagraph("<a href =http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1>Home Page</a>");
        echo $htmlErrorPage->addParagraph("<a href =http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/documentation>Documentation Page</a>");
        echo $htmlErrorPage->generateWebPage();
    }
    }
}