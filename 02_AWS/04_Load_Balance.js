//~% Load Banlancer.
//* Load balancer will distribute the incoming application traffic equally on to the target groups like EC2 instances, containers etc..

//~* Types of Load Balancer
//* 1. Classic load balancer 
//* 2. Application load balancer
//* 3. Network Load Balancer
//* 4. Gateway Load Balancer 

//~* 1. Classic load balancer 
//# Click on Instances -> Launch Instances -> Enter the name of the server -> Select AMI -> t2.micro -> create key pair -> allow all protcols in ->
//# -> NETWORKS SETTINGS -> SECURITY GROUP NAME ->  Go to advance details -> go to user data -> 
//# select the shell (#!/bin/bash) -> sudo su -> yum updat-y -> yum install httpd -y -> cd/var/www/html -> echo "This is server1"> health.html -> echo "i am healthy"> health.html
//# -> service httpd start -> chkconfig httpd on. -> Numver of instances 2 -> Click on launch instance. 
//# Click on view all instances. -> Change the names of instances. 
//> --> select server2 and Connect -> open file to edit in vi editor. 

//^ Click on load balancer -> Create Load balancer -> Create one classic Loadbalancer -> Enter the name of load balancer ->
//^ -> Click on assign security Group -> Select default security Group & Security group of connected instances.
//^ -> Click on configure health check -> ping Path -> /health.html -> Response time out 2Second -> Interval 5 seconds -> 
//^ -> Unhealthy thresold 2 -> Healthy threshold 2 -> Click on add EC2 INSTANCES -> Select two instances -> Add Tags -> give a key and value names 
//^ -> click on review and create -> Click on create -> Click on the load balancer. -> Click on instances in below tabs -> select load balancer
//^ -> Click on instances -> Check weather they are in inservice of not -> Click on Description -> Copy the DNS name of Load balancer -> Open new Tab in browser
//^ -> Paste it in address bar.  