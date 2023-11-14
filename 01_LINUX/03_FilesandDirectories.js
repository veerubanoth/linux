//~> File system Basics
//> Collection of information thar represent tex, photos, documents, source code, databases, etc. 
//> They are the basic unit of data storage any grphical or command line environment. 
//> In LInux, the files are segregated as text files & Binary files.
//> We can create, delete, modify or compress files from the command line.

//~% File and Directories
//% ls                     -> list
//% ls l                   -> list
//% cd                     -> Change directory ( Go inside the directory using command cd)
//% cd ..                  -> Return to parent directory 
//% pwd                    -> present working directory 
//% gedit (file.txt)       -> It opens  .txt file in graphical user interface

//~* Viewing files 
//* Displaying contents of a file on the terminal.
//* cat                    --> prints the content of the file to the standard display. 
//* less                   --> It display the file and allows us to Scroll up and down with arrow keys. 
//* q                      --> exit from the file. 
//* head                   --> This show us first 10 lines of text file by default. 
//* head -5 file.text      --> It display first 5 lines of text file. 
//* tail file.text         --> It display last 10 lines of text file. 

//* nl file.text           --> prints the content of the file to the standard display, with line numbers.

//~^ Copy, Move and Rename Files
//^ cp file.txt copy.txt   --> Copy file 
//^ cat copy.text          --> To check the file content here
//^ cp file1 file2         --> Copy file from one directory to another.(without changing old file)
//^ mv                     --> File will be removed permenently from previous directory and moved to new directory.  
//^ mv file.txt copy.txt   --> Move file one directory to another with rename. 

//~# Delete file in Directory 
//# rm fileName.txt        --> Remove file from the directory 
//# rm -i name.txt         --> i Stands for interactive mean i'll take a confirmation from you. 
//# rmdir smaple           --> remove empty directory Only.
//# rm -i file             --> Interactive 
//# rm -i -r directory     --> To delete a folder or directory that in use (content inside).


