var express = require('express')
var router = express.Router()
const models = require('../models')
 

router.get('/:id/menuUser', function (req, res) {
//     let id = req.params.id
//     // console.log('id nya adalah:',id)
//     let objMed = {
//         cholesterol : req.body.cholesterol,
//         blood_sugar : req.body.blood_sugar,
//         blood_pressure : req.body.blood_pressure,
//     }
//   models.Menu.findAll({
//       where:{
//         //   objMed = models.Menu
//       }
//   }).then(function(data){
//       res.render('menuUser',{menu:data})
//   }).catch(function(err){
//       res.send(err)
//   })
    let idMedical = req.params.id
    models.Medical.findById(idMedical).then(function(dataOrder){
        models.Menu.findAll().then(function(dataMenu){
            let arrayMenu =[]
            for(let i =0;i<dataMenu.length;i++){
                if(dataMenu[i].cholesterol == dataOrder.cholesterol
                    && dataMenu[i].blood_sugar == dataOrder.blood_sugar
                    && dataMenu[i].blood_pressure == dataOrder.blood_pressure ){
                    // res.send(dataMenu[i].name)
                   arrayMenu.push(dataMenu[i])
                }  
            }
            // res.send(dataOrder)
            res.render('menuUser',{menu : arrayMenu, idMedical: idMedical})
        }).catch(function(errMenu){
            res.send(errMenu)
        })
    }).catch(function(errOrder){
        res.send(errOrder)
    })

});

 
module.exports = router