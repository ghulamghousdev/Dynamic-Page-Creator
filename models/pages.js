import mongoose from "mongoose";
var Schema = mongoose.Schema;

var page = new Schema({
  pagename: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var PageName = mongoose.model("PageName", page);

export default PageName;
