const express = require('express')
const router = express.Router()
const categories = require('../models/categoriesModel')

router.post('/',(req,res)=>{
    categories.findOne({Name : req.body.category}).then((category)=>{

        if(category){
            res.send({message : 'Category already exists',
                        staus : 'fail'})
        }

        else{
            var newCategory = {
                Name : req.body.category
            }

            var newCategory = new categories(newCategory)
            newCategory.save()

            res.send({message : "Category added successfully",
                        status : 'success'})
        }
    })
})

router.get('/',(req,res)=>{
    categories.find().then((categories)=>{
        res.send(categories)
    })
})

router.delete('/:id',(req,res)=>{
    id = req.params.id
    categories.findByIdAndDelete({_id : id}).then(()=>{
        res.send()
    })
})

module.exports = router