//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://sudo:sudopassword@cluster0-xfjby.mongodb.net/test2?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '288e937498c8405ca0a8eb383f4402d8' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};
