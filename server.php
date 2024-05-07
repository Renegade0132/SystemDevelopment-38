<?php
require 'vendor/autoload.php';
include "DB_Connection.php";
require_once 'Class_User.php';
require_once 'Class_Course.php';

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class MyChat implements MessageComponentInterface {
    protected $clients;

    public function __construct() {
        $this->clients = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn) {
        // Store the new connection
        $this->clients->attach($conn);

        //Send Positive Acknowledgement
        $conn->send("Connection established! Your client ID is: " . $conn->resourceId);
    }

    public function onMessage(ConnectionInterface $from, $msg) {
        // Handle incoming messages
        // You'll need to parse the message to determine what the client is asking for,
        // then use your User, Course, and Database classes to fulfill the request
    }

    public function onClose(ConnectionInterface $conn) {
        // Remove the connection when it closes
        $this->clients->detach($conn);
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        // Handle errors
        $conn->close();
    }
}

// Run the server
$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new MyChat()
        )
    ),
    8080
);

$server->run();