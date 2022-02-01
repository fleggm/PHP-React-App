<?php 

/**
 * HTML exception handler. Returns the error message, displays the file and line where the exception was thrown.
 * 
 * @author Matthew Flegg w19001527
 */

function HTMLExceptionHandler($e){
    echo "<p>Internal Server Error! (Status 500)</p>";
    if(DEVELOPMENT_MODE){
        echo "<p>";
        echo "Message: " . $e->getMessage() . "<br>";
        echo "File: " . $e->getFile() . "<br>";
        echo "Line: " . $e->getLine() . "<br>";
        echo "</p>";
    }
    
    
}