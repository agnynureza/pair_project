var express = require('express')
var router = express.Router()
const models = require('../models')
 

router.get('/', function (req, res) {
  models.Order.findAll().then(function(data){
      res.render('order.ejs',{order:data})
  }).catch(function(err){
      console.log(err)
  })
});

router.post('/',function(req,res){
    let obj ={
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        phone:req.body.phone,
        email:req.body.email,
        addres:req.body.addres,
    }
    models.Order.create(obj).then(function(data){
        res.redirect('/order')
    }).catch(function(err){
        console.log(err)
    })
})


router.get('/edit/:id',function(req,res){
    let id = req.params.id
    models.Order.findById(id).then(function(data){
        res.render('editorder.ejs',{order:data})
    })
})

router.post('/edit/:id',function(req,res){
    let obj ={
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        phonoe:req.body.phonoe,
        email:req.body.email,
        addres:req.body.addres,
        medcheckresult:req.body.medcheckresult
    }
    let id = {
        id:req.params.id
    }
    models.Order.update(obj,{where:id}).then(function(data){
        res.redirect('/order')
    }).catch(function(err){
        console.log(err)
    })
})

router.get('/delete/:id',function(req,res){
    let id = req.params.id
    models.Order.destroy({where:{id}}).then(function(data){
        res.redirect('/order')
    }).catch(function(err){
        console.log(err)
    })
})

 
module.exports = router