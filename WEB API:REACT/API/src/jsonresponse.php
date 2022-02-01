<?php


/**
 * This class is a child of the Response. 
 * This sets the header if an JSON Response is required.
 * 
 * @author Matthew Flegg w19001527 
 */
class JSONResponse extends Response{

    private $message;
    private $statusCode;

    protected function headers(){
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
    }

    public function setMessage($message){
        $this->message = $message;
    }

    public function setStatusCode($statusCode){
        $this->statusCode = $statusCode;
    }

    public function getData(){
    if(is_null($this->message)){
        if(count($this->data) > 0){
            $this->message = "Ok";
            $this->statusCode = 200;
        } else {
            $this->message = "No Content";
            $this->statusCode = 204;
        }
    }
        
        //sets the status code
        http_response_code($this->statusCode);

        $response['message'] = $this->message;
        $response['count'] = count($this->data);
        $response['results'] = $this->data;
        return json_encode($response);
    }

    
}