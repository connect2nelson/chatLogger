
ChatConnector :
- Creates a bot  that listens to localhost:3978/api/messages
- routes the messages typed to another nodejs webservice running on localhost:8080.


ChatLgger :
- Exposes endpoints to accept messages and writes it into a file.


Steps to run :

a) go to folder where chatConnector code resides and do the following :
	npm i --save restify -g
	npm i --save botbuilder -g
	
b) node app.js


c) go to folder where chatlogger code resides and do the following :
	node app.js
	
	