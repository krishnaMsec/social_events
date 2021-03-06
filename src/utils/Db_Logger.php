<?php

 	namespace App\utils;

 	use Monolog\Logger;
 	use DateTimeZone;
 	use Monolog\Processor\IntrospectionProcessor;
 	use Monolog\Handler\StreamHandler;

 	class DB_Logger {
 		public $logger;

 		function __construct( $file="" ) {
 			$this->logger = new Logger('Event_Management_db');

      if( !strcmp($file, "db") )
 			$this->logger->pushHandler(new StreamHandler(__DIR__.'/../../logs/db.log', \Monolog\Logger::DEBUG));
      else
      $this->logger->pushHandler(new StreamHandler(__DIR__.'/../../logs/api.log', \Monolog\Logger::DEBUG));

 			$timeZone = new DateTimeZone("Asia/Kolkata");
    		$this->logger->setTimeZone($timeZone);
 		}

 		public function log($statusCode, $errorMessage) {
 			$status = substr($statusCode,0,2);
 			if(strcmp($status,"01")==0 || strcmp($status,"HY")==0) {
 				$this->logger->warning($errorMessage);
 			}
 			else if(strcmp($status,"02")==0 || strcmp($status,"42")==0) {
 				$this->logger->critical($errorMessage);
 			}
      else if( strcmp($statusCode,"info")==0 ){
        $this->logger->info($errorMessage);
      }
 			else {
 				$this->logger->error($errorMessage);
 			}

 		}
 	}
?>
