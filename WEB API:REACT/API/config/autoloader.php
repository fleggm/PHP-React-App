<?php 
/**
 * Autoloader
 * 
 * This function will autoload files from the directory when needed.
 * 
 * @author Matthew Flegg - W19001527
 *
 */
function autoloader($className){
    $filename = "src\\" . strtolower($className) . ".php";
    $filename = str_replace('\\', DIRECTORY_SEPARATOR, $filename);
        if (is_readable($filename)){
            include_once $filename;
        } else {
            throw new Exception ("File not found: " . $className . " (" . $filename . ")");
        }
}