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

//~% Creating auto Scalling using Templates
//% Launch on EC2 Instance -> Create template
//% -> Auto Scalling Group -> Create auto Scalling group -> Auto scalling group name 
//% -> select launch template -> Next -> 
//% -> select the instance type -> Availability Zone -> Next 
//% -> No Load balancer -> Next -> desired capacity (2) -> Minimum Capacity -> maximum Capacity
//% -> Target tracking scaling policy -> average CPU UTILIZATION -> target value -> 
//% -> Click on add notification -> SNS topic -> select the SNS topic -> Next 
//% -> Create auto scalling group.

//~# Create auto Scalling using Launch Configuration (AMI)
//# Launch on EC2 Instance -> Create AMI of existing instances. 
//# Auto Scalling Group ->  Launch configuration name ->give a name -> select AMI -> Select Instance AMI -> t2.micro -> choose
//# Security groups -> select existing one or create a new security group -> Select an existing key pair. 
//# create launch configuration.
//# view launch Configuration. 
//# Go to Auto scaling group -> Create Auto scaling group ->Auto scaling group name -> Switch to launch configuration -> 
//# select the launch configuration -> select template -> Availability Zone -> Next
//# -> No Load balancer -> Next -> desired capacity (2) -> Minimum Capacity -> maximum Capacity
//# -> Target tracking scaling policy -> average CPU UTILIZATION -> target value -> 
//# -> Click on add notification -> SNS topic -> select the SNS topic -> Next 
//# -> Create auto scalling group.

