const mongoose = require('mongoose');

const URI = 'mongodb+srv://dbUser:yMJkd7BwwHHGM0CZ@cluster0.e4tzb.mongodb.net/proyecto_?retryWrites=true&w=majority';

mongoose.connect(URI) 
.then(db => console.log('db connected'))
.catch(err => console.log(err))
