<?php

/** 
 * This class serves as a child gateway for ApiAuthors.
 * This sets the database and creates functions for the 
 * necessary SQL executions. 
 * 
 * The findAll function returns a list of all of the authors from the authors table.
 * The FindOne function returns the author with the specified ID.
 * The findAuthors function returns a list of the authors that wrote or contributed to the specified paper.
 * 
 * 
 *  @author Matthew Flegg w19001527
 */

class AuthorsGateway extends Gateway{

    private $sql = "SELECT author.author_id as AuthorID, author.first_name as FirstName, author.middle_name as MiddleName, author.last_name as LastName FROM author";

    public function __construct(){
        $this->setDatabase(DATABASE);
    }

    //Selects all of the actors from the actors table. 
    public function findAll(){
        $this->sql .= " ";
        $result = $this->getDatabase()->executeSQL($this->sql);
        $this->setResult($result);
    }

    //Selects the specified actor based on the ID given by user. 
    public function findOne($id){
        $this->sql .= " WHERE author_id = :id";
        $params = ["id" => $id];
        $result = $this->getDatabase()->executeSQL($this->sql, $params);
        $this->setResult($result);
    }

    public function findAuthors($paperid){
        $this->sql = "SELECT author.first_name as FirstName, author.middle_name as MiddleName, author.last_name as LastName 
        FROM author INNER JOIN paper_author on (author.author_id = paper_author.author_id) 
        INNER JOIN paper on (paper_author.paper_id = paper.paper_id) WHERE paper.paper_id = :paper_id";
        $params = ["paper_id" => $paperid];
        $result = $this->getDatabase()->executeSQL($this->sql, $params);
        $this->setResult($result);
    }
    


}