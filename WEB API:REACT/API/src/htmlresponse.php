<?php 

/**
 * This class is a child of the Response. 
 * This sets the header if an HTML Response is required.
 * 
 * @author Matthew Flegg w19001527 
 */

class HTMLResponse extends Response{
    protected function headers() {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: text/html; charset=UTF-8");
    }
}