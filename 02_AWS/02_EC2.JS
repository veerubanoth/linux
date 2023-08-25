//~* EC2 ELASTIC COMPUTE CLOUD (EC2)
//* EC2 allows us to deploy virtual servers within our AWS environment. 
//* Most people will require an EC2 instance within their environment as a part of at least one of their solutions. 
//~% EC2 service can be broken down into the following components:
//% Amazon Machine Images(AMIs)
//% Instance types
//% Instance Purchasing Options
//% Tenancy 
//% User Data
//% Storage Options
//% Security group

//~* AMI - AMAZON MACHINE IMAGE or HVM - Hardware virtual Machine
//* AMIs are essentially templates of pre-configured EC2 instances which allow us to quicky lanch a new EC2 instance 
//* based on the configuration within the AMI. 
//* An AMI is an image baseline with an operating system & applications along with any custom configuration. 
//% The AWS marketplace is essentially an online store that allows you to puchase AMIs from trusted vendors.(Like SAP, Microsoft e.t.c)
//% Community AMIs are also available a repository of AMIs that have been created and share by other AWS members. 
//~% Coss Notes
//* AMI is a template that contains software configuration (OS & Application software), Lanuch permision & the block device mapping that specifies 
//* EBS volumes to attach it to the EC2 instances when they were launched. 
//* ELASTIC BLOCK STORE VOLUME

//~> Instance Type
//> Instance type is nothing but how many virtual CPU & GB of RAM you need for your instace. 

//~! Instance purchasing options 
//! On-Demand Instances
      //* Can be launched at any time
      //* Can be used for as long as needed
      //* Flat rate determined on the instance type
      //* Typically used for short-term uses
      //* Best fit for testing and development environments
//! Reserved Instances
      //* Puchases for a set period of time for reduced cost
      //* All Upfront: Complete payment for 1 or 3 yrs time frame
      //* Partial Upfront: Smaller upfront payment for smaller discount
      //* No Upfront: the smallest discount is applied
      //* Best aaplied for long term, predictable workloads
//! Scheduled instances
      //* You pay for the reservations on a recurring schedule, either daily, weekly or monthly.
      //* we could set up a scheduled instance to run during that set time frame once a week
      //* Note that even if you diidn't use the instance, you would still be charged.
//! Spot Instances
      //* Bid for a unused EC2 compute resources
      //* No guarantees for a fixed period of time
      //* Fluctuation of prices based on supply and demand
      //* Purchase large EC2 instances at a very low price
      //* Useful for processing data that can be suddenly interrupted
//! On-Demand capacity reservations
      //* Reserve capacity based on diferent attributes such as instance type, platform and tenancy
      //*  - within a particular availability zone for any period of time.
      //*  It could be used in conjunction with your reserved instances discount.


//~% Tenancy 
//~* Shared Tenancy 
//% This relates to what underlying host our EC2 instance will reside on, 
//% -so essentially the physical server within an AWS data center.
//% EC2 instance is launched on any available host with the required resources
//% The same host may be used by multiple customers
//% AWS Security mechanisms prevent one EC2 instance accessing another.
//~* Dedicated Instances 
//% Hosted on hardware that no other customer can access
//% May be required to meet complianc
//% Dedicated instances incur additional charges
//~* Dedicated Hosts
//% Additional visibility and constrol on the physical host
//% Allows to use the same host for a number of instances
//% May be required to meet compliance.


//~> USER DATA
//> User Data allows you to enter commands that will run during the first boot cycle of that instance
//> Perform functions upon boot such as to pull down any additional software you want
//> Download latest OS Updates (yum update -y)
//> Software will be updated automatically at the time of boot. 


//~? STORAGE OPTIONS
//? Selecting storage for your EC2 instance will depend on the instance selected,
//? what you intend to use the instance for & how critical the data is. 
//? Instance STORE VOLUME are the temporary store volumes and they will store the data upto the instance is on.
//?  - Once will stoped the instance data will be erased. 
//~> META DATA 
//? Complete technical information about any resource is called metadata and we can assign tagname to that. 
//? Tags are used for identification and grouping of resources.
//~! Coss 
//~? EBS (ELASTIC BLOCK STORE)
//? It's the storage attached to EC2 instance 
//? EBS volumes are the persistent(Permenant) storage volumes which will store the data 
//? - either in stop or restart of an instance 
//~% Persistent Storage: Available by attaching EBS volume
//% EBS VOLUMES are separated from the EC2 instance 
//% These volumes are logically attached via AWS network
//% You can diconnect the volume from the EC2 instance maintaining data (data will remain intact)
//% You can implement encryption & take backup snapshots of all data to your s3.
//~% Ephemeral storage: Created by EC2 instances using Local Storage
//% Storage that physically attached to the underlying host.
//% when the instance is stopped or terminated, all saved data on disk is lost.
//% If you reboot your data will remain intact. but not if we stop it.
//% you'r unable to detach instance store volumes from the instance. 


//~^ Security group
//^ During the creation of EC2 instance you will be asked to select a security group for your instance. 
//^ it acts as firewall, to control the incoming traffic & outgoing traffic of EC2 instances. 
//^ Security group will controll the traffic based on protocol, Port Number & Source IP.
//* At the end of EC2 instance creation, you'll need to select an existing key pair or create and download a new one.
//* KEY PAIR: key pairs are the secure login information required to connect EC2 Instances from remote. 
//% The Function of key pairs is to encrypt the login information for linux & Windows EC2 instances, and then -
//% - decrypt the same information allowing you to authenticate ontoo the instance. 
//* KEY PAIR CONTAIN: PUBLIC KEY and Private Key 
      //~# PUBLIC KEY :
      //#  It contains the secure login information in encrypted form
      //#  The file extension name of public key is .pem (privacy enhanced mail)
      //~# PRIVATE KEY :
      //#  It contains the secure login information in decrypted form
      //#  File extensio .ppk (puTTY private key)


//~# Creating instance in EC2 Service with network security (Elastic compute cloud)
//# AMIs (AMAZON Machine Images) -> preconfigured templates
//% Select EC2 (Virtual Server in the cloud)
//% Selet instances -> Click on lanuch instances -> Enter the name of the server -> select amazon linux -> Amaxon linux 2023 AMI (Free tier eligible) 
//% -> Instance type -> t2.micro -> key pair (login) -> create new key pair -> enter key pair name -> create new key pair
//% Enter network Settings and click on edit -> select availability zone -> enter security group name -> ssh (secure socket shell) 
//% (tcp -> transmission protocol)
//% Click on add security group rules -> select HTTP -> select anywhere in source type (prot no. 80). 
//% configure storage --> Numver of Instance ( 1 ) -> Click on Launch -> Click on instance id. 

//~# How to launch Windows Instance from AWS cloud
//* Open EC2 -> Click on Instances -> Click on Launch Instances -> Enter the name of Server -> Select Windows -> 
//* -> select Microsoft windows Server 2016 Base OS -> Select t2.micro -> Click on Create new key pair -> Enter the key-pair name ->
//* -> Click on Create key pair -> Click on edit in network setting -> Select the subnet -> rdp (remote desktop protocol) (3389) -> 
//* -> Enter the security group name -> select Number of instances -> Click on Launch Instance -> Select the instance -> Click on connect
//* -> Select RDP Client -> Download remote desktop file -> Click on get password -> Upload private key file -> click on download ->
//* -> select .pem file -> open -> Click on Decrypt password -> Copy the password ->  Goto Downloads -> Open downloaded RDP file ->
//* -> Clik on connect -> paste the password ->Click on ok -> Click on yes

//~# How to launch multiple instance with common softwares 
//> Instances -> Launch instances -> Enter the name -> Select Amazon linux -> select only free tier aligible -> t2.micro -> 
//> -> select an existin key pari or Create new pair -> Click on edit in network setting -> select the subnet -> select exising security group (or)
//> -> create security group -> add http and https protocol -> Advanced details 
//>  -> go to user data...
//% -> #!/bin/bash (selected bash)
//% -> switch to the root user                    -> sudo su
//% -> yum update -y                              ->(updating OS)
//% -> yum install httpd -y                       -> install webserver package
//% -> cd /var/www/html                           -> (create website document)
//% -> echo "This is COSS Web Server"> index.html ->
//% -> service httpd start                        -> (To start the service Temporarly)
//% -> chkconfig httpd on                         -> (To start the service permenently on)
//> -> Number of instances 2 -> Click on launch -> View all Instances. 
//~> Verify the service is started or not through CLI
//> -> Select webserver1 -> open instance -> 
//> -> sudo su -> which httpd -> systemct1 status httpd.service 