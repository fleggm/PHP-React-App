<?php 
 /**
 * JSON exception handler. Returns the error message, displays the file and line where the exception was thrown.
 * Also sets the appropriate JSON headers.
 * 
 * @author Matthew Flegg w19001527
 */

function JSONExceptionHandler($e){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods:GET");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");

    $output['error'] = "Internal Server Error! (Status 500)";

    if(DEVELOPMENT_MODE){
    $output['Message' ] = $e->getMessage();
    $output['File'] = $e->getFile();
    $output['Line'] = $e->getLine();
    }
    

    $newJSON = new JSONResponse($output);
    echo $newJSON->getData();
    

}