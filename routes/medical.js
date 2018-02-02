const express = require('express')
const app = express()

const Models = require('../models')
var router = express.Router();


router.get('/', function(req, res) {
    // res.send('im the home page!');
    let id = req.params.id     
    // Models.Order.findById(id).then(function(dataOrd){    
        Models.Medical.findAll().then(function(dataMed){
            res.render('medical',{datamed:dataMed})
        }).catch(function(err){
            console.log(err)
        })
    // }).catch(function(err){
    //     console.log(err)
    // })
});

router.post('/add',function(req,res){
    // Models.Medical.
    let objMed = {
        cholesterol: req.body.cholesterol,
        blood_sugar: req.body.blood_sugar,
        blood_pressure: req.body.blood_pressure
    }
    Models.Medical.create(objMed).then(function(dataInput){
        // console.log(objMed)
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

  
