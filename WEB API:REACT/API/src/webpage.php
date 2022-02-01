<?php 
/**
 * Generate a webpage
 * 
 * This class will create a valid HTML5 webpage 
 * with a head and a foot. The setBody method
 * can be used to add to the page
 * 
 * @author Matthew Flegg w19001527
 * @todo add menu functionality
 */
class WebPage {
    private $head = null; //Initializes the head, body, and foot values to null. This allows the setters to do their jobs.
    private $body = null;
    private $foot = null;

/**
     * constructor
     * 
     * Create the head body and foot of the page.
     * This will be a valid HTML5 page with just
     * a heading.
     * 
     * @param string $title   The page title
     * @param string $stylesheet The stylesheet used for page
     * @param string $heading The h1 for the site
     */
    public function __construct($title, $stylesheet, $heading){
        return $this->setHead($title,$stylesheet) . $this->addHeading1($heading) . $this->setFoot();
    }

    /**
     * setHead
     * 
     * Create the head and save to $this->head
     * 
     * @param  string $title   The page title
     * @param string $stylesheet The stylesheet used for the page
     */
    protected function setHead($title,$stylesheet){  
        $this->head = <<<EOT
<!DOCTYPE html>
<html lang='en-gb'>
            <head>
        <link rel='stylesheet' href='$stylesheet'>
       <title>$title</title>
       <meta charset='utf-8'>
            </head>
            <body> 
EOT;
    }


    //When called, the values are added to what already exists in the body and doesn't replace it
    protected function setBody($text){
        $this->body .= $text; 
    }

    /**
     * setFoot
     * 
     * Create the foot and save to $this->foot
     */
    protected function setFoot(){
        $this->foot =
<<<EOT
</body>
</html>
EOT;
    }

    private function getHead(){
        return $this->head;
    }

    private function getBody(){
        return $this->body;
    }

    private function getFoot(){
        return $this->foot;
    }

    protected function addHeading1($heading){
        return $this->setBody("<h1>$heading</h1>");
    }

    public function addList($endpointName, $endpointLink, $methodSupport, $parameterSupport, $overview, $statusCode, $example, $exampleRequest, $exampleJSONResponse){
        return $this->setBody(
            "<ul>" . 
                "<li>" . $endpointName . "</li>" . 
                    "<ul>" . 
                        "<li>" . $endpointLink . "</li> " . 
                        "<li>" . $methodSupport . "</li>" .
                        "<li>" . $parameterSupport . "</li>" .
                        "<li>" . $overview . "</li>" .
                        "<li>" . $statusCode . "</li>" .
                        "<li>" . $example . "</li>" .
                            "<ul>" .
                                "<li>" . $exampleRequest . "</li>" .
                                "<li>" . $exampleJSONResponse . "</li>" .
                            "</ul>" .
                    "</ul>" .
            "</ul>");
    }

    public function addNavBar(){
        return $this->setBody("<ul class='HomeMenu'>" . 
        "<li class ='HomeDisplay'>" . "<a href='http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/'>Home</a>" . "</li>" .
        "<li class ='DocDisplay'>" . "<a href='http://unn-w19001527.newnumyspace.co.uk/kf6012/coursework/part1/documentation'>Documentation Page</a>" . "</li>" . "</ul>");
    }

    public function addParagraph($text){
        return $this->setBody("<p>$text</p>"); //Adds a paragraph to the body, takes contents of the para as parameters.
    }

    /**
     * generateWebpage
     * 
     * Generate a full HTML5 webpage
     *
     * @return string 
     */
    public function generateWebPage(){
        return ($this->getHead() . $this->getBody() . $this->getFoot()); //Gets all of the values from the setters and creates the webpage
    }

    public function addPicture($picture){
        return $this->setBody("<p>" . "<img src = '$picture'>" . "</p>"); //Adds picture to the body component 
    }

 }