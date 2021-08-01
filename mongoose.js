// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/testcomplaint', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // we're connected!
//     console.log("we are connected bro");
// });

// const TestComplaintSchema = new mongoose.Schema({
//     name: String
// });

// TestComplaintSchema.methods.speak = function () {
//     const greeting ="My name is " + this.name
//     console.log(greeting);
//   }

// const TestComplaint = mongoose.model('TestComplaint', TestComplaintSchema);

// const complaint = new TestComplaint({ name: 'aryan' });
// // console.log(complaint.name);

// // complaint.speak();

// complaint.save(function (err, complaint) {
//     if (err) return console.error(err);
//     complaint.speak();
//   });
