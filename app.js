var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    multer = require('multer'),
    flash       = require("connect-flash"),
    methodOverride = require("method-override");
    
mongoose.connect("mongodb://localhost:27017/pictor",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());

app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(function(req, res, next){
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.get("/",function(req,res){
    res.render("E4");
});

//*****file upload START*****//
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Images");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var upload = multer({ storage: Storage }).array("imgUploader", 3);
//*****file upload END*****//

app.post("/api/Upload", function(req, res) {
     upload(req, res, function(err) {
         if (err) {
             req.flash("error", "Something went wrong");
             res.redirect("/");
             return false;
         }
         else{
             req.flash("success", "File uploaded successfully");
             res.redirect("/");
         return true;
         }
     });
 });


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started ");
});
    