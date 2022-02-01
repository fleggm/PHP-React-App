<?php
 /** 
 * This class serves as a controller for ApiPapers.
 * This sets the gateway with the PapersGateway class and creates  
 * functions for loading the DB info onto the webpage. 
 * 
 * The paramaters defined are to convert what the user has inputted into the URL into a variable
 *  in order to execute the SQL Functions in the Gateway Class
 * 
 * 
 * The class also checks that the API is receiving a GET request method, and if it doesn't, sets the necessary Status code
 * 
 *  @author Matthew Flegg w19001527
 */
class ApiPapersController extends Controller {

    protected function setGateway(){
        $this->gateway = new PapersGateway();
    }

    protected function processRequest(){

        $id = $this->getRequest()->getParameter('id');
        $authorID = $this->getRequest()->getParameter('authorid');
        $award = $this->getRequest()->getParameter('award');

        if ($this->getRequest()->getRequestMethod() === "GET") 
    {
        if (!is_null($id)){
            $this->getGateway()->findOnePapers($id);
        } elseif(!is_null($authorID)){
            $this->getGateway()->findPapers($authorID);
        } elseif(!is_null($award) && ($award == 'all')){
            $this->getGateway()->findAllAwardWinners($award);
        } elseif(!is_null($award)){
            $this->getGateway()->findSpecificAwardPapers($award);
        }  else {
            $this->getGateway()->findAllPapers();
        }
    } else {
        $this->getResponse()->setMessage('Method Not Allowed');
        $this->getResponse()->setStatusCode(405);
    }
    
    //If the parameter returns 0, display message.
    if(count($this->getGateway()->getResult()) == 0){
        $this->getResponse()->setMessage('No data with those paramaters!');
        }
        return $this->getGateway()->getResult();
    }
}

        
        
        
     

