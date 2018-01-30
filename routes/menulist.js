var express = require('express')
var router = express.Router()
const models = require('../models')
 

router.get('/', function (req, res) {
  models.Menu.findAll().then(function(data){
      res.render('listmenu',{menu:data})
  }).catch(function(err){
      console.log(err)
  })
});

router.post('/',function(req,res){
    let obj ={
        name:req.body.name,
        fat:req.body.fat,
        protein:req.body.protein,
        carbohidrate:req.body.carbohidrate,
        calories:req.body.calories,
        fiber:req.body.fiber
    }
    models.Menu.create(obj).then(function(data){
        res.redirect('/listmenu')
    }).catch(function(err){
        console.log(err)
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
        fat:req.body.fat,
        protein:req.body.protein,
        carbohidrate:req.body.carbohidrate,
        calories:req.body.calories,
        fiber:req.body.fiber
    }
    let id = req.params.id
    models.Menu.update(obj,{where:{id}}).then(function(data){
        res.redirect('/listmenu')
    }).catch(function(err){
        console.log(err)
    })
})

router.get('/delete/:id',function(req,res){
    let id = req.params.id
    models.Menu.destroy({where:{id}}).then(function(data){
        res.redirect('/listmenu')
    }).catch(function(err){
        console.log(err)
    })
})

 
module.exports = router