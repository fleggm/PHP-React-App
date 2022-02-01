<?php

/** 
* This class serves as a controller for HomePage.
* This serves as the construction for creating a HomePage
* by passing all of the necessary parameters to the constructor method.
*  @author Matthew Flegg w19001527
*/

class HomeController extends Controller {

    protected function processRequest(){
        $homePage = new HomePage("HomePage", BASEPATH . "/assets/style.css","KF6012 Coursework Part 1 - Home Page","Matthew Flegg, W19001527");
        set_exception_handler("HTMLExceptionHandler");
        echo $homePage->addParagraph("This work has been created for the module KF6012 Web Application Integration at Northumbria University. This work is not associated with or endorsed by the DIS conference.");
        echo $homePage->addNavBar();
        echo $homePage->generateWebPage();
    }
}