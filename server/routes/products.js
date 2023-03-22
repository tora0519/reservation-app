const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req, res) {
    Product.find().then(function(foundProducts) { // ここは講義とは異なる書き方
        return res.json(foundProducts)
    })
    
})

router.get('/:productId', function(req, res) {
    const productId = req.params.productId
    Product.findById(productId).then(function(foundProduct) { // ここは講義とは異なる書き方

        if (err) {
            return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
        }
        return res.json(foundProduct)
    })
    
})

module.exports = router