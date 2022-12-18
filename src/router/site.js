var express = require('express')
var route = express.Router()

const SiteController = require('../app/controllers/SiteController')

// router usually '/' before '/search'
route.use('/search', SiteController.search)

route.use('/', SiteController.index)


module.exports = route