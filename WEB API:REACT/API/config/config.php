<?php 
/**
 * Configuration Page!
 * Sets variables and pathways for the URL, Databases, errorhandlers, autoloader, and exceptionhandler.
 * 
 * @author Matthew Flegg W19001527
 */

define('URLBASEPATH', 'http://unn-w19001527.newnumyspace.co.uk');
define('BASEPATH', '/kf6012/coursework/part1');
define('DATABASE', 'db/dis.sqlite');
define('USER_DATABASE', 'db/user.sqlite');
define('DEVELOPMENT_MODE', true);
define('SECRET_KEY', 'LSen5C3HQm');

ini_set('display_errors', DEVELOPMENT_MODE);
ini_set('display_startup_errors', DEVELOPMENT_MODE);


include 'config/autoloader.php';
spl_autoload_register("autoloader");

include 'config/htmlexceptionhandler.php';
include 'config/jsonexceptionhandler.php';
set_exception_handler('JSONExceptionHandler');

include 'config/errorhandler.php';
set_error_handler('errorHandler');







