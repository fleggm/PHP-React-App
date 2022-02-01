<?php

/** 
* This class serves as a controller for the ApiBase.
* This sets the gateway with the APIBaseGateway class and creates a function for loading the data onto the webpage. 
* 
*  @author Matthew Flegg w19001527
*/
class ApiBaseController extends Controller{

    protected function setGateway(){
        $this->gateway = new ApiBaseGateway();
    }

    protected function processRequest(){
        $this->getGateway()->outputInfo();

        return $this->getGateway()->getResult();
    }
}