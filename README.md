# Based heavily on the feathers CLI 2.0.
Contribute to that project as it is good stuff.


## Dependencies

Clone the feathers-chat repo and use that as the server. This is a companion app that allows very basic (create, list) of messages through a CLI. 

Use the web application to create your accounts. Then login. 

It requires a feathers server on localhost:3030 with a /messages endpoint. I hardcoded all of that to make life more difficult. 


## Getting started. 

* clone the repo or install as a global from npm.
* Debug any errors and report them. 
* ``` $messages create ```
* ``` $messages list ```
* ``` $messages login ```
* ``` $messages logout ```

## Bad Demo
![](https://dl.dropboxusercontent.com/u/5288895/feathers-messages-cli.gif)


## Mac only, probably.
I write a file called ```.jwt``` to the HOME directory. Not very original and I use process.env.$HOME to do it. Not sure if that works on Windows. 

## Tests
The only test in here is from the Feathers CLI. I have not done any testing. There is really no reason to test this as it is only used as a quick demo of how YOU could do something. 