import express from "express";
import User from "../schema/User"
import Users_model1 from "../models/Users_model"
let Users_model = new Users_model1;
import mongoose from "mongoose";


const router = express.Router();
const fileRoute= "/var/www/html/node/Redux/redux-app/wesite/node-curd-app/uploads/"

router.get("/", (req, res, next) => {
    res.status(200).json({
        message:"Serving Users on the Endpoint."
    });   
});

router.get("/list", (req, res, next) => {
    User.find({})
        .exec()
        .then(docs => {
            res.status(200).json({
                docs
            });
        })
        .catch(err => {
            console.log(err)
        });
});

// Add new user
router.post("/add", (req, res, next) => {
    const body= req.body;

    Users_model.checkIsAval({email: body.email},(result,err) => {

        if(err) throw (err);
        if(result === false){

            Users_model.save(body, (result,err) => {
                res.json(result);
            });

        }else{
            res.json({status:404,message:"Useremail is already available."});
        }
    })

});

router.post("/delete", (req, res, next) => {
    const rid = req.body.id;

    User.findById(rid)
        .exec()
        .then(docs => {
            docs.remove();
            res.status(200).json({
                deleted:true
            });
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;