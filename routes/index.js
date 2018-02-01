const express = require('express')
const app = express()
const router = express.Router()
const Models = require('../models')

//home

router.get('/home', function (req, res) {
    res.render('index');
  });
//signup
router.get('/signup',function(req,res){
  res.render('signup')
});

router.post('/signup',function(req,res){
  let objData = {
    email:req.body.email,
    password:req.body.password
  }
  Models.Login.create(objData).then(function(dataInput){
    res.redirect('/')
  }).catch(function(err){
    res.send(err)
  }) 
})

//login
router.get('/',function(req,res){
  res.render('login')
});

router.post('/',function(req,res){
  let objData = {
    email:req.body.email,
    password:req.body.password
  }
  Models.Login.findOne({where:{email:objData.email}}).then(function(datauser){
    // console.log(datauser,"ini=======================")
    if(objData.email == datauser.email && objData.password == datauser.password){
      res.redirect('/home')
    }else{
      res.redirect('/')
    }
  }).catch(function(err){
    res.send(err)
  })
})



  module.exports = router
