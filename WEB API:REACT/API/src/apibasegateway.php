<?php

 /** 
 * This class serves as a child gateway for ApiBase.
 * This sets the data ready to be displayed on the /api base page.
 * The data being set includes information about the documentation, student information, and further API info.
 * 
 *  @author Matthew Flegg w19001527
 */

class ApiBaseGateway extends Gateway {

    public function outputInfo(){
        $myInfo['Name'] = "Matthew Flegg";
        $myInfo['Student id'] = "w19001527";
        $myInfo['Documentation Page'] = "Access the API documentation at: http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/documentation";
        $myInfo['API Information'] = "This API displays data throughout various specific endpoints about papers and their authors from the DIS conference. The API also links to a user database that allows users to login and add papers to their personal readinglist. This project has been completed for module KF6012 at Northumbria University and is not endorsed or associated with the DIS conference.";
       $this->setResult($myInfo);
    }
         

}