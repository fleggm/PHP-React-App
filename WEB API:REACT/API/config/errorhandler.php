<?php    
/**
 * Error Handler for the assignment, throws an error exception and returns where the error occurred.
 * 
 * @author Matthew Flegg w19001517
 */

function errorHandler($errno, $errstr, $errfile, $errline) {
    if (($errno != 2 && $errno != 8) || DEVELOPMENT_MODE) {
        throw new Exception("Error Detected: [$errno] $errstr file: $errfile line: $errline", 1);
    }
}




