//~* Identity and access management
//* IAM is the administration service of AWS cloud
//* 1. Multifactor authentication
//* 2. IAM users, 
//* 3. groups, 
//* 4. roles
//* 5. IAM policies 
//* 6. Setting up password
 
//~% Root user  
//% Root user is the administrator who is having full permission -
//%  - to manage all the resources in the AWS account.
//% Root user will created automatically whenever create aws account. 
//% It is highly recommended to create a separate user for everyday use.
//% It is a good practice to not use root user for every

//~# IAM user
//# 1. IAM users are created by the root user to access one or more -
//# - than one services of AWS cloud, based on the police(permission) attached to them.
//# 2. IAM users are the users who are having limited permission
//# 3. IAM users can be created by the root user or IAM users


//~? MFA (Multi Factor Authentication)
//? MFA is 2nd layer of security for the root user and IAM users
//? By using Mfa we can link our mobile with AWS Account by scanning QR code from AWS account.

//~> Role
//> Permissions given to one service to access other service is called Role. 
//> Example: EC2 to S3. 

//~^ Policy
//^ Permission given to user and roots  to access aws services is called policy


//~>MFA 
//? DOWNLOAD google authentication software from playstore in your mobile and install it 
//? Open google authenticator Click on Scan QR code. 
//? Open IAM service 
//? Click on Add MFA for root user -> Device Name -> MFA -> Authenticator app -> Next
//? Show QR code -> code 1 and code 2. -> Add MFA 
//? Sign out from your account -> Sign again -> Enter MFA code. -> Submit
//~!Remove MFA
//? Account Name -> Security credentials -> Select Linked device -> Remove -> Remove.

//~% Create IAM User
//% Open IAM Service -> Users -> Click on Create user -> user name -> select provide user access -> select i want to create an IAM user. 
//% -> Select custom password -> Enter password -> Next -> attach policies directory -> ec2full -> Next -> create user -> 
//% Download .csv file -> return to user list. 


//~* Sign in as IAM user
//* Open .csv file -> open url -> login with given credentials -> reset new password. 

//~> create user groups are group
//> user Groups -> Create Group -> User Group Name -> Click on Create Group
//> Users -> create User -> user Name -> i want to create an IAM USER -> custom password -> Enter custom password -> Next
//> add user to group -> select the group -> Next -> Create User -> Download .csv file -> return to user list


//~# Role
//# Create role -> AWS Service -> Select EC2 -> Next. 
//# permissions plicies -> amazons3fullAccess -> Next.
//# Role Name -> Create Role. 

//~^ Verification 
//^ Open S3 Service -> create bucket -> give a Bucket name (case sensitive - only smalls) -> Aws Region -> ACLs Enabled -> Bucket Versioning
//^ un check Block all public access -> tick i acknowledge -> Create Bucket. 
//^ open created bucket  -> Upaload -> Add files -> select files -> Permissions -> Grant public-read Access. 
//^ Select I understand -> upload -> Close.
//# EC2 service -> Launch Instances -> give a name -> AMI -> t2.micro -> key pair name -> create Key-pair. 
//# Network Settings -> Edit -> Availability Zone -> Advanced Details -> Select created role from IMA instance profile 
//# Launch instace. 
//? Open Ec2 instance -> Linux terminal -> 
//! Open Amazon S3 -> Select bucket -> empty -> Delete -> Exit
//! Select the bucket -> Delete -> Enter the bucket name -> Delete Bucket
//! Remove roles -> S3fromEC2 -> Delete. 


//* There are 2 types of access methods in AWS
//* 1. AWS management console access. userid, password. 
//* 2. Programatic access controll. Accesse key id, secret Access key.

//~% Programatic access credentials
//% -> IAM Service -> Manage Access keys -> Create access key -> confrimation -> Create access -> .CSV -> done

//~* Policies
//* IAM service -> Account setting -> Edit password policy -> cutomize password policy. 