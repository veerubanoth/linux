//% docker ps  Only shows running container
//% docker ps -a shows all the container 
//% docker run -i -t ubuntu /bin/bash 

//# cat /etc/
//# docker rename containerId give a new name 

//* docker start container name or contaner id 
//* docker stop container name or contaner id 

//^ docker attach container name 
//^ go to inside the container 

//? exit or Ctrl + d logout from container 
//? docker ps -a  to check the status of container 

//> docker rm container name 
//> check the status with docker ps -a 
//? docker images 
//? Delete docker images (....)

//* docker run -it --name containerName ImageName /bin/bash 

//^ apt update -y 
//^ apt install git -y 
//^ which git 
//^ git --version 
//^ mkdir gitName
//^ cd gitName
//^ git inint
//^ git add .
//^ touch file-1 
//^ git commit -m "commit name"
//^ git 

//> docker build -it GitName containerName 
//> docker commit containerName ImageName
//> docker run -it GitName containerName 
