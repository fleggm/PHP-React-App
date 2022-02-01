<?php

/**
 * This class is the gateway for the authenticate endpoint.
 * It establishes a connection to the user database and contains a function that verifies the users password with their email (username) 
 * 
 * @author Matthew Flegg 
 */

class UserGateway extends Gateway  {

    public function __construct() {
        $this->setDatabase(USER_DATABASE);
    }

    public function findPassword($email)
{
    $sql = " select id, password from user where email = :email";
    $params = [":email" => $email];
    $result = $this->getDatabase()->executeSQL($sql, $params);
    $this->setResult($result);
}

}