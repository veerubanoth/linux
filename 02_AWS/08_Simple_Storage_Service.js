//~! Amazon S3 (Simple Storage Service)
//! Create and upload files into s3 bucket
//* An object storage service that offers industry-leading scalability, data availability, security.
//* Bucket name -> Aws Region -> ACLs (accesse controll list) eanabled -> Bycket owner preferred -> Block all public access -> 
//* -> Check i Acknowledge that the current setting ... -> Bucket versioning -> Create Bucket.

//~% How to set object level permissions
//% -> Open the bucket -> Open uploaded one file -> Permissions -> Click on edit in ACL 
//% -> Canonical ID: will be provided for object owner

//~# Set permission on bucket level 
//# Whenever we will set permissions to the bucket & all those permission are applicable to all the files in the bucket. 
//# Opent bucket -> Permissions -> Block all public access -> save Changes -> and confirm 


//~* Versioning
//* when we upload files into s3 bucket versions will be created for each file 
//* Version is nothing but backup of uploaded file 
//* we can recover the deleted files of s3 bucket by using versions
//* 


//~^ Recover deleted file using Version 
//^ open bucket -> Select file -> Delete it -> Confirm. 
//^ select delete marker -> permanently delete. -> Delete Objects -> Close. 
//^ When we will do empty action on any bucket -> both the files and versions will be deleted Automatically.
//^ Select the bucket -> Empty -> confirm 

//~% 
//% 1. Manual replication  
//% 2. Automatic Replication 

//% 3. LifeCycle Property
//~# Creating Rule
//* management -> create life cycle -> give name -> choose ruole scope (Apply to all) -> 
//* Lifecycle rule actions -> select one -> trasition current version of objects between storage
//* Stadard-IA -> Days after object createion 30
//* Add another transition -> select Days -> 60 Days
//* Add another transition -> One Zone-IA -> 120 Days 
//* Add -> Glacier Flexible -> 210 Days 
//* Add -> Glacier Deep Archie -> 365 Days
