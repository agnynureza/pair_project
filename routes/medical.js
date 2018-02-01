const express = require('express')
const app = express()

const Models = require('../models')
var router = express.Router();


router.get('/:id', function(req, res) {
    // res.send('im the home page!');
    Models.Medical.findById(req.params.id).then(function(dataMed){
        res.render('medical',{dataMed})
    }).catch(function(err){
        console.log(err)
    })
});

router.post('/add',function(req,res){
    // Models.Medical.
    let objMed = {
        cholesterol: req.body.cholesterol,
        blood_sugar: req.body.blood_sugar,
        blood_pressure: req.body.blood_pressure
    }
    Models.Medical.create(objMed).then(function(dataInput){
        res.redirect('/medicals')

    }).catch(function(err){
        console.log(err)
    })

});
//edit
router.get('/edit/:id',function(req,res){
    let id = req.params.id;
    Models.Medical.findById(id).then(function(dataEdit){
        res.render('editmed',{edit:dataEdit})
    }).catch(function(err){
        console.log(err)
    })
});

router.post('/edit/:id',function(req,res){
    let id =req.params.id
    let objMed = {
        cholesterol: req.body.cholesterol,
        blood_sugar: req.body.blood_sugar,
        blood_pressure: req.body.blood_pressure,
    }
    Models.Medical.update(objMed,{where :{id:id},order:[['id', 'ASC']]}).then(function(editMed){
        res.redirect('/medicals')
    }).catch(function(err){
        res.send(err)
    })
    
});
//delete
router.get('/delete/:id',function(req,res){
    let id =req.params.id;
    Models.Medical.destroy({where:{id:id}}).then(function(delData){
        res.redirect('/medicals')
    }).catch(function(err){
        res.send(err)
    })
})

module.exports = router

  
