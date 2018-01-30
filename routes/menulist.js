var express = require('express')
var router = express.Router()
const models = require('../models')
 

router.get('/', function (req, res) {
    let id = req.params.id
  models.Menu.findAll().then(function(data){
      res.render('listmenu',{menu:data})
  }).catch(function(err){
      res.send(err)
  })
});

router.post('/',function(req,res){
    let obj ={
        name:req.body.name,
        cholesterol:req.body.cholesterol,
        blood_sugar:req.body.blood_sugar,
        blood_pressure:req.body.blood_pressure
    }
    models.Menu.create(obj).then(function(data){
        res.redirect('/listmenu')
    }).catch(function(err){
        res.send(err)
    })
})


router.get('/edit/:id',function(req,res){
    let id = req.params.id
    models.Menu.findById(id).then(function(data){
        res.render('editmenu',{menu:data})
    })
})

router.post('/edit/:id',function(req,res){
    let obj ={
        name:req.body.name,
        cholesterol:req.body.cholesterol,
        blood_sugar:req.body.blood_sugar,
        blood_pressure:req.body.blood_pressure
    }
    let id = req.params.id
    models.Menu.update(obj,{where:{id}}).then(function(data){
        res.redirect('/listmenu')
    }).catch(function(err){
        res.send(err)
    })
})

router.get('/delete/:id',function(req,res){
    let id = req.params.id
    models.Menu.destroy({where:{id}}).then(function(data){
        res.redirect('/listmenu')
    }).catch(function(err){
        res.send(err)
    })
})

 
module.exports = router