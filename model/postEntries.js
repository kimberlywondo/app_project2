var mongoose = require('mongoose');  

var PostEntrySchema = new mongoose.Schema({  
  name: String,
  badge: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});
mongoose.model('PostEntry', PostEntrySchema);