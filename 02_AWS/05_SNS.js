//~% Simple Notification Service
//% Open SNS -> Enter the topic -> Select Standard -> Click on Create topic -> Create subscription
//% ->  Copy the ARN and paste it here. ->  Protocol email -> Enter email id in end point -> 
//% ->  Click on Create subscription.
//% -> to confirm a subscription open email and confirm it. 
//% -> Click on Create subscription ->select ARN -> SELECT TOPIC ARN -> Selet protocol SMS. 
//%  -> Enter phone number in end point -> Click on Create subscription.
//% -> to confirm a subscription open SMS and confirm it. 
//% -> Click on Create subscription ->select ARN -> SELECT TOPIC ARN -> Selet protocol HTTP. 
//%  -> Enter URL

//~* Auto Scalling
//* Auto Scalling service is used  to scale up and scale down the number of instances based on the load or incomming traffic.
//* Auto Scalling will monitor the incoming traffic if it is too high (if the CPU utilization is more than 90), it will launch 
//* - Some more servers automatically
//* If the traffic is reduced after some time it will start terminating the recently launched execess servers.
//* If any one of the server will go down in desired capacity it will launch one more exact server in place of faulty server. 

//~* We can create auto scalling group by using 2 Methods 
//% 1. Templates, 2. Launch Configuration (AMI)

//% Creating auto Scalling using Templates
//% Launch on EC2 Instance -> Create template
