const mongoose =   require("mongoose");

// const app = express();
// const port = process.env.PORT || 9030;


// app.listen(port,function(){
//     console.log("Server running on ")
// });
const userSchema1 = new mongoose.Schema({
    title : {type : String},
    isCompleted : {type : Boolean},
    isDeleted : {type : Boolean},
    createdAt : {type : Date}
});

model.exports = mongoose.model("user",userSchema1);