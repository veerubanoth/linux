# Launch instance in Public 1A
aws ec2 run-instances --image-id ami-0a5ac53f63249fba0 --instance-type t2.micro --security-group-ids sg-02665a16825ae7b06 --subnet-id subnet-04bb552320b59c133 --key-name WebServerKeyPair --user-data <value>


# Launch instance in Public 1B


# Launch instance in Private 1B 


# Terminate instances

aws ec2 terminate-instances --instance-ids <value> <value>
