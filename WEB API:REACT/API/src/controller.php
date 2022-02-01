<?php   
/** 
* This class serves as a base controller class for the webpage.
* This sets the gateway with the specified gateway class and creates  
*  functions for loading the data onto the webpage. As well as creating functions to set data. 
* 
*  @author Matthew Flegg w19001527
*/

abstract class Controller {

    private $request; 
    private $response;
    protected $gateway;
/** 
 * Takes the $request and $response as parameters and connects it to a gateway.
*/
    public function __construct($request, $response){
        $this->setGateway();
        $this->setRequest($request);
        $this->setResponse($response);

        $data = $this->processRequest();
        $this->getResponse()->setData($data);
    }

    private function setRequest($request){
        $this->request = $request;
    }

    protected function getRequest(){
        return $this->request;
    }

    private function setResponse($response){
        $this->response = $response;
    }

    protected function getResponse(){
        return $this->response; 
    }

    protected function setGateway(){

    }

    protected function getGateway(){
        return $this->gateway;
    }

}
