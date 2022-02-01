<?php

/** 
* This class serves as a controller for ContactPage.
* This serves as the construction for creating a ContactPage
* by passing all of the necessary parameters to the constructor method.
*  @author Matthew Flegg w19001527
*/

class ContactController extends Controller{

    protected function processRequest(){
        $contactPage = new ContactPage("Contact Page", "assets/style.css", "Welcome to the Contact Page");
        set_exception_handler("HTMLExceptionHandler");
        echo $contactPage->generateWebPage();
    }
}