<?php
/**
 * Generate a webpage
 * 
 * Child class of WebPage.
 * This class will create a valid HTML5 webpage 
 * with a head and a foot. 
 * 
 * @author Matthew Flegg w19001527
 * @todo add menu functionality
 */
class DocumentationPage extends WebPage{

    public function __construct($title,$stylesheet,$heading,$heading2){
        return $this->setHead($title,$stylesheet) . $this->addHeading1($heading) . $this->addHeading2($heading2) . $this->setFoot();
    }
    
    private function addHeading2($heading2){
        return $this->setBody("<h2>$heading2</h2>");
    }

}