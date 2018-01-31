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
    let id = req.params.id
    models.Medical.findById(id).then(function(dataOrder){
        // console.log(datanya)
        
        models.Menu.findAll().then(function(dataMenu){
            // res.send(dataMenu)
            // res.send(dataMenu[0].name)
            let arrayMenu =[]
            // console.log(dataMenu.length)
            for(let i =0;i<dataMenu.length;i++){
                if(dataMenu[i].cholesterol == dataOrder.cholesterol
                    && dataMenu[i].blood_sugar == dataOrder.blood_sugar
                    && dataMenu[i].blood_pressure == dataOrder.blood_pressure ){
                    // res.send(dataMenu[i].name)
                   arrayMenu.push(dataMenu[i])
                }  
            }
            // res.send(array)
            res.render('menuUser',{menu : arrayMenu})
        }).catch(function(err1){
            console.log(err1)
        })
    }).catch(function(err2){
        console.log(err2)
    })

});

 
module.exports = router