//~# Common Directories
//>==> ./      --> "Root", the top of the file system hierarchy.
//>==> /bin    --> Binaries & Other executable programs
//>==> /etc    --> System configuration files.
//>==> /home   --> Home directories
//>==> /opt    --> Optional or third party Software
//>==> /tem    --> Temporary space, typically cleared on reboot 
//>==> /user   --> User related programs
//>==> /var    --> Variable data, most notably log files.
//>==> /dev    --> Device files, typically controlled by the operating sys

//~^ Comprehensive Directory Listing
//^ /boot      --> files needed to boot the operating system
//^ /cdrom     --> Mount point foor CD-ROMs.
//^ /cgroup    --> Control Groups hierarchy. 
//^ /export    --> Shared file systems
//^ /lib       --> System Libraires.
//^ /lib64     --> System Libraries, 64bit
//^ /lost+found--> Used by the file system to store recovered files after a file system check hasbeen performed
//^ /media Used to mount removable media like CD-ROMs.
//^ /mnt       --> Used to mount external file systems. 
//^ /proc      --> Provides infor about running processes.
//^ /root      --> The home directory for the root account.
//^ /sbin      --> System adminstration binaries.
//^ /selinux   --> Used to display information about SELinux.
//^ /srv       --> Contains data which is served by the system
//^ /srv/www   --> Web



//* touch                       --> is used to create an empty file and file name.
//* touch f2 f3 f4 & so on...   --> to create multiple file at a time.
//* touch file{5...8}           --> .........Do.........
//* rm                          --> remove regular empty file.
//* rm -rf file*                --> (recursively forcely)

//^ --> mkdir -p dir{2..4}      --> To create multiple directories at time 
//^ --> cat py1-> 
//^

//> hostname                        --> to get host name.
//> uname -n                        --> to get host name.
//> hostname name                   --> to change host name (temporary).
//> uname -m                        --> System architechture.
//> uname -r                        --> Release (In general version of architecture).
//> hostnamect1 set-hostname rahul  --> To set the host name permanently.

//% mkdr -p dir1/dir1  --> It used to create directory and sub directories at a time 
//% ls -R              --> 
//% ls -a              --> show Hidden as well as nomal files and directories
//% ls  dir1           --> It is used to list all the files and directories inside of the perticular directory.

//# cp f3 dir5         --> Copy file from one directory to another.(without changing old file)
//# cp file20 file30   --> Save as new file with file name of file30 (Duplication)
//# mv f4 dir4         --> File will be removed permenently from previous directory and moved to new directory.
//# mv file10 file20   --> used to rename file10 with file20
//# rm -rf d*          --> used to delete all the files starting with d letter of it's file name 



//^ ifconfig                           -->   it used to check the network information 
//^ yum install net-tools -y           -->   it used to run if config command
//^ yum install tree -y                -->   to run tree command need to install this package.
//^ tree                               -->   to check the tree structure of directories and files
//^ tar cvfz file1.tar file1           -->   It is used to compress the file (zipp). 
//^ tar xvfz file1.tar file1           -->   It is used to extract the file. 
//^ ping(packed internet gropher)      -->   used to check the connectivity.        

//^ cal                                      
//^ cal 2023

//~% Sowftware prerequisite
//>==>Putty, Putty gen, winSCP and aws account.

//# PUTTY     --> It's used to open remote server in Secure Mode.
//%  PuTTYgen --> It's used to convert .pem file to .ppk file.
//* Winscp --> to copy the files from local machine to virtual server(Instance).


//>  HVM - Hardware Virtual Machine
//>  AMI - Amazon Machine Image
//> pem -> privacy enhanced mail 
//> ppk -> PuTTY private key


//~> HOW TO OPEN A VIRTUAL SERVER BY USING puTTY
//*   Open puttygen --> Click on Load --> select download --> select .pem file --> Click on Open
//* --> OK --> Click on save private key --> Yes --> save file in desired location. 

